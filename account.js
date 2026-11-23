/* 诗词拾光账户模块：Supabase Auth + 用户私有云端数据 */
(() => {
  const $ = (id) => document.getElementById(id);
  const configReady = window.SUPABASE_URL && window.SUPABASE_ANON_KEY &&
    !window.SUPABASE_URL.startsWith("YOUR_") && !window.SUPABASE_ANON_KEY.startsWith("YOUR_");
  let client = null, user = null, mode = "login", notes = [], libraryRows = [];
  const setMessage = (message, error = false) => {
    const el = $("authMessage"); if (!el) return;
    el.textContent = message; el.classList.toggle("error", error);
  };
  const openAuth = (nextMode = "login") => {
    mode = nextMode; $("authOverlay").hidden = false;
    $("authTitle").textContent = mode === "signup" ? "创建一个账户" : "欢迎回来";
    $("authSubtitle").textContent = mode === "signup" ? "让喜欢的诗句，跟着你的账户一起保存。" : "登录后同步你的私人诗词收藏。";
    $("authNameWrap").hidden = mode !== "signup";
    $("authSubmit").textContent = mode === "signup" ? "注册账户" : "登录";
    $("authSwitchText").innerHTML = mode === "signup" ? '已经有账户？ <button id="authSwitchBtn" type="button">返回登录</button>' : '还没有账户？ <button id="authSwitchBtn" type="button">创建账户</button>';
    $("authSwitchBtn").onclick = () => openAuth(mode === "signup" ? "login" : "signup");
    setMessage("");
  };
  const closeAuth = () => { $("authOverlay").hidden = true; };
  const requireClient = () => {
    if (!configReady || !window.supabase?.createClient) {
      setMessage("账户服务尚未配置。请先按 README 完成 Supabase 设置。", true); return false;
    }
    if (!client) client = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
    return true;
  };
  const userName = () => user?.user_metadata?.display_name || user?.email?.split("@")[0] || "读者";
  const showSignedState = () => {
    $("accountStatus").textContent = user ? `你好，${userName()}` : "尚未登录";
    $("accountOpenBtn").textContent = user ? "账户设置" : "登录 / 注册";
    $("profileSignedOut").hidden = !!user;
    $("profileSignedIn").hidden = !user;
    if (user) {
      $("profileName").textContent = userName();
      $("profileEmail").textContent = user.email || "";
      $("profileAvatar").textContent = userName().slice(0, 1);
      $("profileNameInput").value = userName();
    }
  };
  const syncLibrary = async () => {
    if (!user) return;
    const localFav = window.poetryAppBridge.getFavorites();
    const localHistory = window.poetryAppBridge.getHistory();
    const { data: existing, error } = await client.from("poetry_user_library").select("poem_id,is_favorite,last_read_at").eq("user_id", user.id);
    if (error) throw error;
    const cloudMap = new Map((existing || []).map(row => [Number(row.poem_id), row]));
    const now = new Date().toISOString();
    // 首次登录时将当前浏览器已有收藏与阅读记录迁移到云端，不覆盖已有云端数据。
    for (const id of [...new Set([...localFav, ...localHistory])]) {
      const previous = cloudMap.get(Number(id));
      const patch = { user_id: user.id, poem_id: Number(id), is_favorite: !!(previous?.is_favorite || localFav.includes(Number(id))), last_read_at: previous?.last_read_at || (localHistory.includes(Number(id)) ? now : null) };
      if (!previous || (localFav.includes(Number(id)) && !previous.is_favorite) || (localHistory.includes(Number(id)) && !previous.last_read_at)) {
        const { error: upsertError } = await client.from("poetry_user_library").upsert(patch, { onConflict: "user_id,poem_id" });
        if (upsertError) throw upsertError;
      }
    }
    const { data, error: fetchError } = await client.from("poetry_user_library").select("poem_id,is_favorite,last_read_at").eq("user_id", user.id).order("last_read_at", { ascending: false, nullsFirst: false });
    if (fetchError) throw fetchError;
    libraryRows = data || [];
    const fav = libraryRows.filter(row => row.is_favorite).map(row => Number(row.poem_id));
    const read = libraryRows.filter(row => row.last_read_at).map(row => Number(row.poem_id)).slice(0, 50);
    window.poetryAppBridge.setCloudLibrary(fav, read);
  };
  const loadNotes = async () => {
    if (!user) return;
    const { data, error } = await client.from("poetry_user_notes").select("id,title,content,poem_id,created_at").eq("user_id", user.id).order("created_at", { ascending: false });
    if (error) throw error;
    notes = data || []; renderNotes();
  };
  const renderNotes = () => {
    const list = $("notesList");
    $("statFavorites").textContent = libraryRows.filter(r => r.is_favorite).length;
    $("statRead").textContent = libraryRows.filter(r => r.last_read_at).length;
    $("statNotes").textContent = notes.length;
    const poems = window.poetryAppBridge.getPoems();
    $("notePoem").innerHTML = '<option value="">不关联作品</option>' + poems.map(p => `<option value="${p.id}">${escapeHTML(p.title)} · ${escapeHTML(p.author)}</option>`).join("");
    list.innerHTML = notes.length ? notes.map(note => {
      const linked = note.poem_id ? window.poetryAppBridge.getPoem(note.poem_id) : null;
      return `<article class="note-entry"><div class="note-entry-top"><div><h3>${escapeHTML(note.title || "未命名摘抄")}</h3><time>${new Date(note.created_at).toLocaleDateString("zh-CN")}</time></div><button class="note-delete" data-note-id="${note.id}" type="button">删除</button></div><p>${escapeHTML(note.content)}</p>${linked ? `<small>关联作品：${escapeHTML(linked.title)} · ${escapeHTML(linked.author)}</small>` : ""}</article>`;
    }).join("") : '<p class="empty-list">还没有摘抄。留下一段喜欢的文字吧。</p>';
    list.querySelectorAll("[data-note-id]").forEach(btn => btn.addEventListener("click", () => deleteNote(btn.dataset.noteId)));
  };
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const renderProfile = () => { if (user) renderNotes(); };
  const refreshUser = async (nextUser) => {
    user = nextUser;
    showSignedState();
    if (!user) { notes = []; libraryRows = []; return; }
    try { await syncLibrary(); await loadNotes(); showSignedState(); }
    catch (error) { console.error(error); window.alert("云端数据同步失败：" + (error.message || "请检查 Supabase 数据库设置")); }
  };
  const deleteNote = async id => {
    if (!confirm("确定删除这条摘抄吗？")) return;
    const { error } = await client.from("poetry_user_notes").delete().eq("id", id).eq("user_id", user.id);
    if (error) return alert("删除失败：" + error.message);
    notes = notes.filter(note => note.id !== id); renderNotes();
  };
  const saveProfile = async event => {
    event.preventDefault(); const name = $("profileNameInput").value.trim();
    if (!name) return alert("昵称不能为空");
    const { data, error } = await client.auth.updateUser({ data: { display_name: name } });
    if (error) return alert("保存失败：" + error.message);
    user = data.user; showSignedState();
  };
  const onAuthSubmit = async event => {
    event.preventDefault(); if (!requireClient()) return;
    const email = $("authEmail").value.trim(), password = $("authPassword").value;
    $("authSubmit").disabled = true; setMessage(mode === "signup" ? "正在创建账户……" : "正在登录……");
    try {
      if (mode === "signup") {
        const display_name = $("authName").value.trim() || email.split("@")[0];
        const { data, error } = await client.auth.signUp({
  email,
  password,
  options: {
    data: { display_name },
    emailRedirectTo: "https://peanuteatdragonfly.github.io/little-poetry/"
  }
});
        if (error) throw error;
        if (data.session) { await refreshUser(data.user); closeAuth(); }
        else setMessage("注册请求已提交。请检查邮箱并点击验证链接，再回来登录。");
      } else {
        const { data, error } = await client.auth.signInWithPassword({ email, password });
        if (error) throw error;
        await refreshUser(data.user); closeAuth();
      }
    } catch (error) { setMessage(error.message || "操作失败，请稍后重试。", true); }
    finally { $("authSubmit").disabled = false; }
  };
  const saveNote = async event => {
    event.preventDefault(); if (!user) return openAuth("login");
    const content = $("noteContent").value.trim(); if (!content) return;
    const payload = { user_id: user.id, title: $("noteTitle").value.trim() || "未命名摘抄", content, poem_id: $("notePoem").value ? Number($("notePoem").value) : null };
    const { data, error } = await client.from("poetry_user_notes").insert(payload).select("id,title,content,poem_id,created_at").single();
    if (error) return alert("保存失败：" + error.message);
    notes.unshift(data); $("noteForm").reset(); renderNotes();
  };
  const updateLibraryRow = async (id, values) => {
    if (!user) return;
    const { data: previous } = await client.from("poetry_user_library").select("is_favorite,last_read_at").eq("user_id", user.id).eq("poem_id", Number(id)).maybeSingle();
    const payload = { user_id: user.id, poem_id: Number(id), is_favorite: previous?.is_favorite ?? false, last_read_at: previous?.last_read_at ?? null, ...values };
    const { error } = await client.from("poetry_user_library").upsert(payload, { onConflict: "user_id,poem_id" });
    if (error) console.error("Library sync failed", error);
    const { data } = await client.from("poetry_user_library").select("poem_id,is_favorite,last_read_at").eq("user_id", user.id);
    libraryRows = data || []; renderNotes();
  };
  document.addEventListener("DOMContentLoaded", async () => {
    $("accountOpenBtn").addEventListener("click", () => user ? (document.querySelector('[data-page="profile"]').click()) : openAuth("login"));
    $("profileLoginBtn").addEventListener("click", () => openAuth("login"));
    $("authCloseBtn").addEventListener("click", closeAuth);
    $("authOverlay").addEventListener("click", e => { if (e.target === $("authOverlay")) closeAuth(); });
    $("authForm").addEventListener("submit", onAuthSubmit);
    $("profileForm").addEventListener("submit", saveProfile);
    $("noteForm").addEventListener("submit", saveNote);
    $("profileLogoutBtn").addEventListener("click", async () => { if (client) await client.auth.signOut(); user = null; showSignedState(); document.querySelector('[data-page="home"]').click(); });
    $("profileView").addEventListener("click", e => { if (e.target.closest(".section-heading")) renderProfile(); });
    if (configReady && window.supabase?.createClient) {
      client = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
      const { data: { session } } = await client.auth.getSession(); if (session?.user) await refreshUser(session.user);
      client.auth.onAuthStateChange((_event, sessionNow) => { if (!sessionNow) { user = null; showSignedState(); } });
    }
    showSignedState();
    window.poetryAccount = { renderProfile };
  });
  window.addEventListener("poetry:favorite", event => { if (user) updateLibraryRow(event.detail.id, { is_favorite: event.detail.isFavorite }); });
  window.addEventListener("poetry:history", event => { if (user) updateLibraryRow(event.detail.id, { last_read_at: new Date().toISOString() }); });
})();

诗词拾光 · 用户账户完整版

项目文件
- index.html：网页结构
- style.css：原有视觉样式及新增账户界面样式
- script.js：原有诗词馆藏与阅读功能（保留原有本地存储键）
- account.js：注册、登录、个人空间、摘抄本与云端同步
- supabase-config.js：Supabase 项目连接配置（需要你填写）
- supabase_schema.sql：数据库表与私密访问策略
- README_账户版配置说明.txt：从零配置和发布步骤

快速开始
1. 阅读 README_账户版配置说明.txt。
2. 创建 Supabase 项目，将 Project URL 和 anon/public key 填入 supabase-config.js。
3. 在 Supabase SQL Editor 执行 supabase_schema.sql。
4. 配置 Authentication 的 Site URL 与 Redirect URLs。
5. 将本文件夹全部文件上传到 GitHub Pages。

说明
- 未配置 Supabase 前，原有本地阅读功能仍可使用；账户功能不会工作。
- 注册和云同步需要网络连接。
- 用户收藏、阅读记录和摘抄默认私密，并由数据库 Row Level Security 限制为本人访问。
- 不要将 service_role key 放进网页，也不要将数据库密码写进任何前端文件。

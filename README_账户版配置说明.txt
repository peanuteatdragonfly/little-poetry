诗词拾光 · 用户账户版

本版本在原有 101 篇馆藏和原有阅读功能上，新增：
- 邮箱注册、邮箱密码登录、退出登录
- 个人主页与昵称设置
- 收藏和阅读足迹云端同步
- 个人摘抄本（新增、查看、删除）
- 阅读统计（收藏数、阅读作品数、摘抄数）
- 默认私密：每个账户只能读取和修改自己的收藏记录与摘抄

一、先创建 Supabase 项目
1. 打开 https://supabase.com/ 并注册/登录。
2. 创建一个新项目，记下数据库密码（不要发给别人）。
3. 进入 Project Settings -> API，复制 Project URL 和 anon/public key。
4. 打开本项目 supabase-config.js，将 YOUR_SUPABASE_PROJECT_URL 和 YOUR_SUPABASE_ANON_KEY 替换为刚复制的值。
   注意：只能使用 anon/public key，绝对不要把 service_role key 放进前端代码。

二、创建数据库表和隐私规则
1. 打开 Supabase 项目的 SQL Editor。
2. 新建查询，把 supabase_schema.sql 全部内容复制进去并执行。
3. 该脚本会建立个人收藏/阅读表、摘抄表，并启用 Row Level Security（RLS）。
4. RLS 策略限制用户只能访问 user_id 等于自己账户 ID 的数据。

三、配置邮箱验证
1. Supabase Dashboard -> Authentication -> URL Configuration。
2. Site URL 填你的网站地址，例如 https://你的用户名.github.io/你的仓库名/。
3. Redirect URLs 添加同一个网址（如使用自定义域名，也要添加自定义域名）。
4. Authentication -> Providers -> Email 可设置是否要求邮箱验证。建议正式公开时开启邮箱验证。
5. 若开启邮箱验证，注册后需要先点击邮件里的验证链接，再登录。

四、发布到 GitHub Pages
1. 将 index.html、style.css、script.js、account.js、supabase-config.js、supabase_schema.sql 等文件放在同一目录。
2. 提交并推送到 GitHub 仓库。
3. 等待 GitHub Pages 更新，再打开网站测试注册和登录。

五、重要说明
- 本项目继续使用 GitHub Pages 托管静态网页；Supabase 负责账户认证与云端数据。
- 用户注册、登录、云端同步需要联网。
- 首次登录时，会把当前浏览器已有的收藏和阅读记录合并迁移到该账户。后续以云端数据为准。
- 原有 localStorage 键名未更改；未登录时仍可使用原有本地阅读功能。
- 已登录时收藏和阅读记录会同步到当前账户。请不要把自己的账户密码交给他人。
- 本版的“个人主页”只对当前登录用户显示其私有数据，没有公开个人主页功能。
- 若要更改 Supabase 项目，请同时更新 supabase-config.js 和 Supabase URL 配置。

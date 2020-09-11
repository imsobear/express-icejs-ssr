## express+icejs+ssr

## 使用

```bash
# 安装依赖
$ npm install

# 启动服务
$ npm start  # visit http://localhost:3000
```

## 目录

```md
├── build/                         # 前端构建产物（后端 static 服务）
├── bin/                        
│   └── wwww                       # 后端应用启动脚本
├── public/
├── client/                        # 前端代码
│   └── app.[j,t]s[x]              # 前端应用入口
├── server/                        # 后端代码
│   └── app.[j,t]s[x]              # 后端应用入口
├── README.md
├── package.json
├── build.json                     # 前端工程配置
└── tsconfig.json
```

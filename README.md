## express+icejs+ssr

## 使用

```bash
# 安装依赖
$ npm install --registry https://registry.npm.taobao.org

# 启动前端服务
$ npm run start

# 启动后端服务
$ npm run start:server  # visit http://localhost:3000
```

![](https://img.alicdn.com/tfs/TB1zQ4uUrY1gK0jSZTEXXXDQVXa-997-266.png)


## 部署

```bash
# 构建前端资源
$ npm run build

# 启动后端服务
$ npm run start:server
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

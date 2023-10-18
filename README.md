[玲宮Nipo](https://space.bilibili.com/3494349161629839/) [bilibili直播](https://live.bilibili.com/30868374)弹幕查询前端

## 技术栈
next.js + antd + tailwind.css + prisma.js + mysql

## 本地开发

1. 首先在项目根目录创建一个 .env 环境变量文件
- .env文件
```env

# 数据库连接地址
DATABASE_URL="mysql://username:password@localhost:3306/nipo_live_chat"
```

2. 通过prisma创建数据库

```bash
npx prisma generate && npx prisma db push
```

3. 启动项目
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## bilibili直播间弹幕监听服务
https://github.com/boiboif/bili-live-chat-server

## 数据库
https://planetscale.com/ 可以免费白嫖一个5g的云数据库，需要科学上网

## 部署前端项目到vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!



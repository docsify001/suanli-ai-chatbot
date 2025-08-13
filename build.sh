#!/bin/bash

rm -rf .next
# 定义内存限制大小，单位为MB
NODE_MEMORY_LIMIT=4096

BUILD_ENV=production
# 执行带有内存限制的pnpm构建命令
NODE_OPTIONS="--max-old-space-size=$NODE_MEMORY_LIMIT" pnpm build


# 将构建好的应用复制到pm2目录
cp -rf .next/standalone/* /root/apps/suanli-ai-chatbot/
cp -rf .next/standalone/.next /root/apps/suanli-ai-chatbot/
# 将启动命令配置文件复制到当前目录
cp ./bin/* /root/apps/suanli-ai-chatbot/
# 复制 static 目录到正确位置（standalone 模式需要）
cp -rf .next/static /root/apps/suanli-ai-chatbot/.next/
# 如果有 public 目录，也复制它
if [ -d "public" ]; then
  cp -rf public /root/apps/suanli-ai-chatbot/
fi
# 检查上一条命令的退出状态
if [ $? -eq 0 ]; then
  echo "构建成功完成。"
else
  echo "构建失败。"
fi
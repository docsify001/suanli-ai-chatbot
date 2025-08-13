
## 现在开始

### 部署ollama，获取访问接口

访问[这里](https://console.suanli.cn/serverless/create)，部署Qwen3 30B-A3B模型
获取访问的回传链接地址，参考[三步上手文档](https://www.gongjiyun.com/docs/y/introduction/l3a6wgrppity1qkorxdcx6aqnvf/)

### clone仓库

```
git clone https://github.com/docsify001/suanli-ai-chatbot.git

cd suanli-ai-chatbot

cp .env.example .env

```

### 修改环境变量

```bash

vim .env

```
根据实际情况修改以下变量

``` ini

## Ollama地址 这里设置在 https://console.suanli.cn/serverless/create 部署后的回传链接
OLLAMA_API_URL=https://d08061808-ollama-webui-qwen3te-285-dpj5pbsb-11434.550c.cloud/api
## 可以替换为你喜欢的模型的名称，可以通过https://d08061808-ollama-webui-qwen3te-285-dpj5pbsb-11434.550c.cloud/api/tags 获取
DEFAULT_MODEL=qwen3:30b-a3b

```

### 启动应用

```bash
# or
pnpm dev
```

浏览器中访问 [http://localhost:3000](http://localhost:3000)


### 打包发布


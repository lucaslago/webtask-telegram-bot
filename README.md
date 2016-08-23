# webtask-telegram-bot

## How to use it

1. Follow this tutorial to create your Webtask account: https://webtask.io/
1. Create your Telegram Bot by talking to the [BotFather](https://core.telegram.org/bots#6-botfather)
1. Create this app's Webtask by executing the following code: `wt create ./src/app.js --secret token={your-bot-secret-here}`
1. Register your newly created webtask url as webhook to your bot using curl: 

  ```curl
  curl -X POST -H "Content-Type: multipart/form-data" -F "url={your-newly-created-webtask-url-here}
  
  'https://api.telegram.org/bot{your-bot-id-here}/setWebhook'
  ```

1. Talk to your bot! Try: hi, bom dia, tchau

const request = require('request');
const sendMessage = (token, chatId, message) => {
  const baseUrl = `https://api.telegram.org/bot${token}`;
  request.post(`${baseUrl}/sendMessage`, {
    form: {
      chat_id: chatId,
      text: message
    }
  })
};

module.exports = (context, cb) => {
  const token = context.data.token;
  const userText = context.data.message.text;
  const chat = context.data.message.chat.id;

  if(userText && (/(^|\s)passado(\s|$)/.test(userText))) {
    sendMessage(token, chat, '"Temos que parar de escrever tanto, está difícil de ver o passado." - Autor Desconhecido');
  } else if(userText && (/(^|\s)(oi|ola|olá|hello|bom dia|Bom dia)(\s|$)/.test(userText))) {
    sendMessage(token, chat, 'Olá Jovem!');
  } else if(userText && (/(^|\s)(estilo|css|ensina css)(\s|$)/.test(userText))) {
    sendMessage(token, chat, 'Eu tenho estilos!');
  } else if(userText && (/(^|\s)(adeus|tchau|boa noite|flw)(\s|$)/.test(userText))) {
    sendMessage(token, chat, 'Há braços!');
  }
  cb(null, {status: 'ok'});
}


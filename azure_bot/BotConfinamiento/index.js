const Telegraf = require('telegraf')
const request = require('request');
const { TELEGRAM_BOT_TOKEN, WEBHOOK_ADDRESS } = process.env  
 
const bot = new Telegraf(TELEGRAM_BOT_TOKEN, {telegram: { webhookReply: true }})  
 
bot.start((ctx) => {

    ctx.reply(ctx.message);
    //ctx.reply("Bienvenido al Bot de confinamiento de las comunidades Autonomas de España son: /n /Andalucia /n /Murcia");
})

bot.command("Andalucia", (ctx) => {

    let resultado = await requestUrl('https://confinamientopandemium.azurewebsites.net/api/Confinamiento?ccaa=Andalucia');

    res.json(resultado);

})

bot.command("Murcia", (ctx) => {

    let resultado = await requestUrl('https://confinamientopandemium.azurewebsites.net/api/Confinamiento?ccaa=Murcia');

    res.json(resultado);

})

module.exports = async function (context, req) {  
    return bot.handleUpdate(req.body, context.res) 
}
const Telegraf = require('telegraf')  
const { TELEGRAM_BOT_TOKEN, WEBHOOK_ADDRESS } = process.env  
 
const bot = new Telegraf(TELEGRAM_BOT_TOKEN, {telegram: { webhookReply: true }})  
 
bot.start((ctx) => {

    var fin_cuarentena = new Date("December 10, 2020 23:59:00");
    var hoy = new Date();
    var tiempo = "NO está confinada";

    if( hoy < fin_cuarentena ) tiempo = Math.round((fin_cuarentena - hoy)/ (1000*60*60));
        
    ctx.reply('Andalucía saldrá del confinamiento en '+tiempo +"horas");
});

module.exports = async function (context, req) {  
    return bot.handleUpdate(req.body, context.res) 
}
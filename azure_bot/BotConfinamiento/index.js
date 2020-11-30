const Telegraf = require('telegraf')
const { TELEGRAM_BOT_TOKEN, WEBHOOK_ADDRESS } = process.env  
const bot = new Telegraf(TELEGRAM_BOT_TOKEN, {telegram: { webhookReply: true }})

const datos = require("./confinamiento.json")

bot.start((ctx) => {

    ctx.reply("Bienvenido a Bot de Confinamiento de la comunidades Autonomas de España \n Introduce /ccaa donde <ccaa> es el nombre una comunidada( ejemplo: /Andalucia)");
});

bot.command("help",(ctx) => {

    ctx.reply("Introduce /ccaa donde <ccaa> es el nombre una comunidada( ejemplo: /Andalucia)");
});

bot.command("Andalucia",(ctx) => {

    ctx.reply("confinada");
});

bot.command("Murcia",(ctx) => {

    ctx.reply("confinada");
});


bot.command("Sevilla",(ctx) => {

    ctx.reply("confinada");
});


bot.command("Canarias",(ctx) => {

    ctx.reply("no confinada");
});


module.exports = async function (context, req) {

    return bot.handleUpdate(req.body, context.res) 
    
}
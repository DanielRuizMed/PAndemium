const Telegraf = require('telegraf')
const { TELEGRAM_BOT_TOKEN, WEBHOOK_ADDRESS } = process.env  
const bot = new Telegraf(TELEGRAM_BOT_TOKEN, {telegram: { webhookReply: true }})

const datos = require("./confinamiento.json")

bot.on('message', (msg)=>{

    let mesanje = msg.text
    let result;
    let estado = 200

    if( mesanje != undefined ){

        switch(mesanje){
            case "/start": 
                result = "Bienvenido a Bot de Confinamiento de la comunidades Autonomas de España \n Introduce /ccaa donde <ccaa> es el nombre una comunidada( ejemplo: /Andalucia)"
                break;
            case "/help":
                result = "Introduce /ccaa donde <ccaa> es el nombre una comunidada( ejemplo: /Andalucia)"
                break;
            default:

                result = datos[mesanje]
                estado = 200

                if ( result == undefined ){
                    result = { "ccaa" : "Esa comunidad autonoma no existe"};
                    estado = 404
                }

                break;
        }

    }

    msg.reply(result);

    return  {
        headers:{
            'Content-Type' : 'application/json'
        },
        statusCode: estado,
        body: result
    }

})

module.exports = async function (context, req) {

    return bot.handleUpdate(req.body, context.res) 
    
}
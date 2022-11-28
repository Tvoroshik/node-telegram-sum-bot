import { Telegraf } from "telegraf";


const bot = new Telegraf("5866458066:AAHNoA7YxBIOC54ka58hr8eiGMV93DCPeuo");
bot.start((ctx) => ctx.reply('Welcome Roman'));
bot.help((ctx) => ctx.reply('Send me a sticker Pls'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Koko321 ther2e11'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
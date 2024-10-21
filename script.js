const TelegramBot = require('node-telegram-bot-api');

const token = '8097177572:AAH69byp-1qTnbgf9187rMuEnKFnrKqzuwg';
const chatId = '-1002308243799';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(chatId, 'PakCoin Bot started!');
});

bot.onText(/\/balance/, (msg) => {
  bot.sendMessage(chatId, 'Your balance is: 1000 PAK');
});

bot.onText(/\/mine/, (msg) => {
  bot.sendMessage(chatId, 'Mining started!');
  // Mining logic here
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(chatId, 'Available commands: /start, /balance, /mine');
});


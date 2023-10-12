const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `
const binarySearch = function search(arr, x) {
    let lo = 0, hi = arr.length - 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return undefined;
}
`;

bot.start((ctx) => ctx.reply("Welcome to Ayush\'s Algo bot")); // /start

bot.command("binarysearch", (ctx) => ctx.reply(binarySearchString)); // /binarysearch

bot.command("toplinuxcommands", (ctx) => ctx.reply("ls cd pwd grep rm"));

bot.on("sticker", (ctx) => ctx.reply("❤️"));

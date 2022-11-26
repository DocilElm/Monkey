/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
import PogObject from "PogData";
import request from '../request/index';
const PREFIX = "&3[Monkey] ";
let data = new PogObject("Monkey", {
    "first_time": true
}, ".monkey_data.json");

if (data.first_time) {
    data.first_time = false
    data.save()
    ChatLib.chat("")
    new TextComponent(ChatLib.getCenteredText(`${PREFIX}&aDoing /fact Will Make You Say Monkey Facts In Chat`)).chat()
    new TextComponent(ChatLib.getCenteredText(`${PREFIX}&aJoin Our Discord!  &b&nDiscord&r &7(Click)`)).setClickAction("open_url").setClickValue("https://discord.gg/SK9UDzquEN").chat()
    ChatLib.chat("")
}

let facts

register("command", () => {
    let random = Math.floor(Math.random() * facts.length)
    ChatLib.say(facts[random] ?? "")
}).setName("fact", true).setAliases(["facts"])

register("worldLoad", () => {
    request({url : `https://eatpiastic.github.io/`,headers: { 'User-Agent': ' Mozilla/5.0' }, json: true}).then(response => {
        facts = response
    }).catch(error => print(error))
})
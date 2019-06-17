"use strict";
const Trello = require("trello");
const startServer = require("./server.js");
const trello = new Trello(process.env.APP_KEY, process.env.APP_TOKEN)


startServer();

trello.addWebhook("Testing trello", 'https://47ad3667.ngrok.io', '5d047cd9d49d615f30ca4763', (error, res) => {
    console.log(res)
})
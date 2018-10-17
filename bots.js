const Discord = require('discord.js');
const hero = new Discord.Client();
hero.login(process.env.BOT_TOKEN);
hero.on("ready",async () => {
  console.log("Loop is ready (:)");
  let spamTimes = 9;
  let spammer = 0;
  let spamLoop = () => {
    for(let i = 0; i < 9; i++) {
      spammer++;
      let message = `**سبام نار يلاا , \`${spammer}\`**`;
      hero.guilds.get("497083850959224834").channels.get("497085245305126924").send(message);
    }
  }
  setInterval(() => {
    spamLoop();
  }, 1);
});

const o1hero = new Discord.Client();
o1hero.login(process.env.BOT_TOKEN2);
o1hero.on("ready",async () => {
  console.log("Loop is ready (:)");
  let spamTimes = 9;
  let spammer = 0;
  let spamLoop = () => {
    for(let i = 0; i < 9; i++) {
      spammer++;
      let message = `**سبام نار يلاا , \`${spammer}\`**`;
      o1hero.guilds.get("497083850959224834").channels.get("497085245305126924").send(message);
    }
  }
  setInterval(() => {
    spamLoop();
  }, 1);
});

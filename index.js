const Discord = require("discord.js");
const bot = new Discord.Client();

const PREFIX = "Y!";
const prefix = "Y!";

bot.login(process.env.TOKEN);

bot.on("ready", function() {
    console.log("Je suis prêt !");
});

bot.on("ready", () => {
    bot.user.setActivity("Y!help | YoYo-BOT", {type: "WATCHING"});
});

bot.on('message', message => {
    if(message.content.startsWith(  "Y!purge")) {
        let myrole = message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"); //Récupère les droits nécessaires
        let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"); //Récupère les droits nécessaires
    
        if (!myrole) {
            return message.author.send(":no_entry:**Je n'ai pas les permissions nécessaires pour effacer un/des message(s)**");
        }
    
        if (!yourole) {
            return message.author.send(":no_entry:**Vous n'avez pas les permissions nécessaires**");
        }
    
        var suppression = message.content.substr(8);
        if (suppression < 2 || suppression > 101) {
            return message.reply(":warning:**La valeur que vous avez entré est invalide, merci de choisir une valeur comprise entre 2 et 100**");
        }
        message.channel.bulkDelete(suppression, true).then(ok => {
            message.channel.send("**Suppression de " + "" + suppression + "" + " messages**")
            .then(message => setTimeout(function(){message.delete()}, 1000))
            .catch(err => console.log(err));
        })
      }})

bot.on('message', message => {
	if (message.content === ("test")){
        message.reply('test !');
    }});

bot.on('message', message => {
    if (message.content === ("re")){
        message.reply('re !');
    }});
    
bot.on('message', message => {
    if (message.content === ("bonjour")){
        message.reply('bonjour à toi !');
    }
});

bot.on('message', message => {
    if (message.content === ("salut")){
        message.reply('Salut à toi !');
    }
});

bot.on('message', message => {
    if (message.content === ("coucou")){
        message.reply('Coucou !');
    }
});

bot.on('message', message => {
    if (message.content === ("yo")){
        message.reply('Yo !');
    }
});

bot.on('message', message => {
    if (message.content === ("hey")){
        message.reply('Hey !');
    }
});

bot.on('message', message => {
    if (message.content === 'koi') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'Koi') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'koi ?') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'Koi ?') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'quoi') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'quoi ?') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'Quoi ?') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    if(cmd === `${PREFIX}kick`){
  
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("Membre introuvable !");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas la permissions !");
      if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas la permissions !");
  
      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Membre kick", `${kUser} avec l'ID ${kUser.id}`)
      .addField("Kick par", `<@${message.author.id}> avec l'ID ${message.author.id}`)
      .addField("Kick dans", message.channel)
      .addField("Kick le", message.createdAt)
      .addField("Raison", kReason);
  
      let kickChannel = message.guild.channels.find(`name`, "logs");
      if(!kickChannel) return message.channel.send("Je ne trouve pas le salon logs.");
  
      message.guild.member(kUser).kick(kReason);
      kickChannel.send(kickEmbed);
  
      return;
    }
  
    if(cmd === `${PREFIX}ban`){
  
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!bUser) return message.channel.send("Membre introuvable !");
      let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Je n'ai pas la permissions !");
      if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas la permissions !");
  
      let banEmbed = new Discord.RichEmbed()
      .setDescription("~Ban~")
      .setColor("#bc0000")
      .addField("Membre banni", `${bUser} avec l'ID ${bUser.id}`)
      .addField("Banni par", `<@${message.author.id}> avec l'ID ${message.author.id}`)
      .addField("Banni dans", message.channel)
      .addField("Banni le", message.createdAt)
      .addField("Raison", bReason);
  
      let incidentchannel = message.guild.channels.find(`name`, "logs");
      if(!incidentchannel) return message.channel.send("Je ne trouve pas le salon logs.");
  
      message.guild.member(bUser).ban(bReason);
      incidentchannel.send(banEmbed);
  
  
      return;
    }
  
  
    if(cmd === `${PREFIX}report`){
  
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Membre introuvable !");
      let rreason = args.join(" ").slice(22);
  
      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Report")
      .setColor("#15f153")
      .addField("Membre report", `${rUser} avec l'ID: ${rUser.id}`)
      .addField("Report par", `${message.author} avec l'ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Report le", message.createdAt)
      .addField("Raison", rreason);
  
      let reportschannel = message.guild.channels.find(`name`, "logs");
      if(!reportschannel) return message.channel.send("Je ne trouve pas le salon logs.");
  
  
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);
  
      return;
    }

    if(cmd === `${PREFIX}infoserv`){
  
      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Informations du serveur")
      .setColor("#15f153")
      .setThumbnail(sicon)
      .addField("Nom du serveur", message.guild.name)
      .addField("Créer le", message.guild.createdAt)
      .addField("Tu as rejoins le", message.member.joinedAt)
      .addField("Membres total", message.guild.memberCount);
  
      return message.channel.send(serverembed);
    }

    if(cmd === `${PREFIX}infobot`){
  
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("Informations du BOT")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Nom du BOT", bot.user.username)
      .addField("Créer le", bot.user.createdAt);
  
      return message.channel.send(botembed);
    }

    if(cmd === `${PREFIX}help`){

        let serverembed = new Discord.RichEmbed()
        .setDescription(":hammer_pick: Liste des commandes demander :")
        .setColor("04B404")
        .addField(":question: Utilitaires","Y!utile")
        .addField(":baby_chick: Résaux sociaux","Y!contact")
        .addField(":crossed_swords: Modération","Y!mod")
        .addField(":joy: Fun","Y!fun")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}invite`){

        let serverembed = new Discord.RichEmbed()
            .addField(":beginner: Invitation","[MON INVITATION](https://discordapp.com/oauth2/authorize?client_id=424592059316437002&scope=bot&permissions=2146958591)")
            .setColor("0174DF")
            .setFooter("By YoYo", message.author.avatarURL)
            .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}createur`){

        let serverembed = new Discord.RichEmbed()
        .addField(":trophy: Créateur","YoYoGames [LA CHAINE YT DU CREATEUR](https://www.youtube.com/channel/UCHBnjPXWM5b3vJz4Onh_xMQ/featured)")
        .setColor("0174DF")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}youtube`){

        let serverembed = new Discord.RichEmbed()
        .addField(":microphone2: YouTube","[MA CHAINE YOUTUBE](https://www.youtube.com/channel/UCOt28-LKGOfBcl_rvXW8K1Q/featured)")
        .setColor("FF0000")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}twitter`){

        let serverembed = new Discord.RichEmbed()
        .addField(":bird: Twitter","[MON COMPTE TWITTER](https://twitter.com/YoYoGamesCraft)")
        .setColor("2E9AFE")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}chifoumi`){
  
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .addField(":raised_hand: :v: :fist: Chifoumi","Cette commande est en développement")
        .setColor("f6ff00")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}fun`){

        let serverembed = new Discord.RichEmbed()
        .setColor("ffe400")
        .addField(":joy: Fun","Y!chifoumi")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}mod`){

        let serverembed = new Discord.RichEmbed()
        .setColor("ff0000")
        .addField(":crossed_swords:Modération","Y!report \nY!kick \nY!ban \nY!mute \nY!unmute")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}contact`){

        let serverembed = new Discord.RichEmbed()
        .setColor("00c0ff")
        .addField(":baby_chick: Résaux sociaux","Y!twitter \nY!youtube \nY!don")
        .setTimestamp()
        .setFooter("By YoYo", message.author.avatarURL)
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}utile`){

        let serverembed = new Discord.RichEmbed()
        .setColor("00c0ff")
        .addField(":question: Utilitaires","Y!help \nY!invite \nY!createur \nY!serverinfo \nY!botinfo \nY!ping")
        .setTimestamp()
        .setFooter("By YoYo", message.author.avatarURL)
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}don`){

        let serverembed = new Discord.RichEmbed()
        .setColor("fffc00")
        .addField(":moneybag: Paypal","[MON PAYPAL](https://www.paypal.me/YoYoGames)")
        .setTimestamp()
        .setFooter("By YoYo", message.author.avatarURL)
    
        return message.channel.send(serverembed);
      }
      if (message.content.startsWith(PREFIX + "ping")) {
        var now = require('performance-now');
        var endTime = now();
        var startTime = now();
        var embed = new Discord.RichEmbed()
        .setColor("#E80B3E")
        .setTitle("Voici le ping du bot")
        .addField(":ping_pong: " + Math.round(endTime - startTime) + " ms.",(""))
        .setTimestamp()
        .setFooter("By YoYo", message.author.avatarURL)
            message.channel.send(embed)
    }
  });

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '>';
const mx = require('ms')
var verison = '0.0.1';
bot.on('ready', () =>{
    bot.user.setActivity('Love', {type: 'STREAMING', url: 'https://www.twitch.tv/TEST-Broadcast' }).catch(console.error);
    console.log('This bot is online!')
})
bot.on('message', msg=>{
   if(msg.content === "hi"){
        msg.reply('Hello!');
    }
})
bot.on('message', message=>{
    var args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
        //-----------------------------
        case 'ping':
            message.reply('pong!')
        break;
        //-----------------------------
        case 'info':
            if (args[1] === 'botversion'){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setDescription('Version:' +' '+ verison)
                message.channel.send({embed});
            }
            else if(args[1] === 'server'){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .addField('Owner          Region           Server name', message.guild.owner.displayName + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + message.guild.region + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + message.guild.name)
                .addField('Total Members', message.guild.memberCount)
                message.channel.send({embed});

            }
            else if(args[1]){
                if(args[1] === message.mentions.users.first()){
                    message.reply("hi");
                }
            }
            else{
                message.reply("Specify the Object u need info about dummy! ``` botversion --- server --- [@Member]. ```")
            }
        break;
        //-----------------------------
         case 'clear':
         if(!args[1]) return message.reply('Dont be stupid, Define how many messages you wanna clear!')
         message.channel.bulkDelete(args[1]);
         break;
        //-----------------------------
        case 'help':
            const embed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription("Prefix: `iru` \n Main Command: `Express` : Used to Tell your feelings towards someone \n ------------------------------------------------------------------------------------ \n Other Commands:\n `Ping` : Used to Ping the bot. \n `Sayembed` : Used to send embeded messages (Only accessed by server Admins). \n `say` : Say a message. Invite : Gives you an instant invite to the server. \n `Avatar` : Sends the user's avatar. \n `Perms` : Display all perms the user has. \n `Addbot` : Invite the bot to your server. \n ------------------------------------------------------------------------------------ \n Admin Comands: \n `Kick` : Kicks user from the server. \n `Ban` : Bans user from the server. \n `Unban` : Unbans user from the server. \n `VcMute` : Mutes member in a voice chat. \n `VcUnmute` : Unmutes member in a voice chat \n `Deafen` : Deafens a member in a voice chat. \n `UnDeafen` : UnDeafens member in a voice chat. \n `NickName` : Changes someone's Nickname")
            message.channel.send({embed});
        break;
        //-----------------------------
        case 'sayembed':
            if (args[1]) {
                const embed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setDescription(args.slice(1).join(" "))
                message.channel.send({embed});
            }
            else{
                message.reply("What do you want me to say??")
            }
        break;
        //-----------------------------
        case 'saylink':
            if (args[2]) {
                var texturl = args[1]
                var emburl = args[2];
                const embed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(texturl)
                .setURL(emburl)
                message.channel.send({embed});
            }
            else{
                message.reply("You're missing either the Text or the Url, Please use this format ```>saylink `Text` `URL` ```")
            }
        break;
        //-----------------------------
        case 'say':
            if (args[1]){
                message.channel.send(args.slice(1).join(" "))
            }

        break;
        //-----------------------------
    }
})
bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

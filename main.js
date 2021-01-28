const Discord= require('Discord.js');
const client = new Discord.Client();


const prefix = '!';
client.once('ready', () => {
    console.log("I'm online")
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    
    if(message.author.id === '239121223198441473'){
        message.channel.send('Tiens BG');
    }
    if(message.author.id === '190544115492978688'){
        message.reply('TG sale bouffon');
    }
    
    if(command === 'ping'){
        const user = '<@'+message.author.id+'>';
        
        message.channel.send('pong!'+ user);
    }
    
    
});








client.login('NjIyMTEyNDk2NzY0ODQ2MDgw.XXvJaQ.-6BEUito6Mg6r4zQdnylTUh_Y_g');


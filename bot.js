const { Client, Intents } = require('discord.js');
const ytdl = require('ytdl-core');

require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const PREFIX = '=p '; // Định dạng lệnh

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    // Kiểm tra xem tin nhắn có bắt đầu bằng PREFIX hay không
    if (message.content.startsWith(PREFIX)) {
        const url = message.content.slice(PREFIX.length).trim();

        // Kiểm tra xem URL có hợp lệ không
        if (ytdl.validateURL(url)) {
            const voiceChannel = message.member.voice.channel;

            if (voiceChannel) {
                const connection = await voiceChannel.join();

                const stream = ytdl(url, { filter: 'audioonly' });
                const dispatcher = connection.play(stream);

                dispatcher.on('finish', () => {
                    voiceChannel.leave();
                });

                dispatcher.on('error', error => {
                    console.error(error);
                });

                message.channel.send(`Đang phát: ${url}`);
            } else {
                message.channel.send('Bạn cần tham gia một kênh thoại để phát nhạc.');
            }
        } else {
            message.channel.send('Vui lòng nhập một link YouTube hợp lệ.');
        }
    }
});

const token = process.env.DISCORD_TOKEN;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.login(token);

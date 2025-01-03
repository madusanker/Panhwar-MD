const { cmd, commands } = require('../command');
const config = require('../config');
// repo info
cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "👨‍💻",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*Hello there PANHWAR-MD User! 👋🏻* 

> Simple , Straight Forward But Loaded With Features 🎊, Meet PANHWAR-MD WhatsApp Bot.

*Thanks for using PANHWAR-MD 💚* 

> Don't forget to frok the repo ⤵️

https://github.com/Panhwar110/Panhwar-MD`;

        await conn.sendMessage(from, { image: { url: `https://i.imgur.com/UfzyhWN.jpeg` }, caption: dec, contextInfo: { mentionedJid: [m.sender], forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363321103874131@newsletter', newsletterName: 'ᴀɴsᴀʀ-ᴘᴀɴʜᴡᴀʀ', serverMessageId: 143 } } }, { quoted: mek });

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Panhwar110/KHAN-DATA/raw/refs/heads/main/autovoice/repo.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

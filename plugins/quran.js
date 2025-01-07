const { cmd } = require("../command");
const axios = require('axios');

cmd({
  pattern: "surah",
  react: "❤️",
  desc: "Get Quranic recitation by Surah number.",
  category: "religious",
  use: ".quran <surah number>",
  filename: __filename
}, async (conn, mek, msg, { from, args }) => {
  try {
    const surahNumber = args[0];
    if (!surahNumber || isNaN(surahNumber)) {
      return reply("Please provide a valid Surah number.💖💝");
    }

    const apiUrl = `https://api.davidcyriltech.my.id/quran?surah=${surahNumber}`;
    const response = await axios.get(apiUrl);

    if (!response.data.success) {
      return reply("Unable to fetch the recitation. Please try again.");
    }

    const audioUrl = response.data.surah.recitation;

    await conn.sendMessage(from, {
      audio: { url: audioUrl },
      mimetype: "audio/mp3"
    }, { quoted: mek });
  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});

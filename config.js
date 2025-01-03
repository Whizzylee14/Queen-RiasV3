require('dotenv').config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || 'null', // Command prefix
    ownerName: process.env.OWNER_NAME || '𝕿𝖊𝖒𝖕𝖊𝖘𝖙 𝕭𝖑𝖆𝖉𝖊', // Owner name
    ownerNumber: process.env.OWNER_NUMBER || '2348058364424', // Your WhatsApp number
    mode: process.env.MODE || 'private', // Bot mode: 'public' or 'private'
    region: process.env.REGION || 'Nigeria', // Region
    botName: process.env.BOT_NAME || 'Blade V3', // Bot name
    exifPack: process.env.EXIF_PACK || 'by', // Sticker pack name
    exifAuthor: process.env.EXIF_AUTHOR || '𝕿𝖊𝖒𝖕𝖊𝖘𝖙 𝕭𝖑𝖆𝖉𝖊', // Author of the sticker pack
    timeZone: process.env.TIME_ZONE || 'Africa/Lagos', // Time zone
    presenceStatus: process.env.PRESENCE_STATUS || 'online', // Bot presence status
    autoRead: process.env.AUTO_READ === 'false', // Auto-read messages (true or false)
    autoViewStatus: process.env.AUTO_VIEW_STATUS === 'true', // Auto-view statuses (true or false)
    autoReact: process.env.AUTO_REACT === 'true', // Auto-react (true or false)
    sessionId: process.env.SESSION_ID || ''// Add Your Session ID here
};

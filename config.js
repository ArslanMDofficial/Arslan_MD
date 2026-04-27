const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CYPHER-X:~UEsDBBQAAAgIABWWm1wgW4mjjgQAAPgHAAAKAAAAY3JlZHMuanNvbpVU2a6qSBT9l3rVXGVQ0OQkXQJOiKI4d*qhhAIKmawqULzx3zt4xqTvvTn9VuPea6299v4J0owwbOIK9H+CnJIScVwveZVj0AeDwvcxBU3gIY5AH+ygi4juzLvS3D1NUuNg2qdZuB+hgxa1lTAT9en4IjbI6bx5AY8myItTTNw*BDwxN7KW8Wyad0w3kZZBQ1BCbIXKebxsQUe+Wwp3pp3DYmO8gEcdERFK0sDIQ5xgimITVzYi9HvwjUWKVSid1*QIz2ZgmZv9ciUXQe6opyHiXK3mXmwZs1NifQ9+67ZVzm53mSnyLcTLyFNvnel4vR+sWDHAslJcF63zPVb3u80rfEaCFHsTD6ec8OrbuuPxkRyPqxaKeDaZzgzvMB0pUCi0pY3mmXcvTlLQuAj3ecq+B9z3b9ew8LZqFInt9Y1xgVte9zrkq+iwnV0WlOekVfDZWoNfgdv03Svn*6P7xRIt2ywXsXjJ9lfXO03IUBIS2UkOzNsa6nCk6JMioOFQ*h78vGE6kCu+7ewapsJmUTjohovVoszGqS3TsTJuLd29Y4fh9RM+4gX9E0ra7lbrHM*hdHKkwgqZO3mzSBemuFnuE1Yu09FB3h7Pand0ObHcHW+HlnIbrD1BrwyzKMKgVbHcK0I5MY24Nd8Mp*tzdH15MjrjauKBvvBoAooDwjhFnGTp86zTawLklQ52KeZPecGh0Tvos2s5N3zfEWYDE67LcynuoorIQaOKW73Vfb2LtzOv*QKaIKeZixnD3pgwntHKwoyhADPQ**tZqZo0xUnG8ZR4oA9ESe4JkqDKiiSJf7Ef1xBxhvL8R4o5aAKfZomFQd9HMcNN8PwiQUPRhlBTu3JXH3Sh0e0YdWZEOXFJjlIO+gDURDyKGSNpYGVerXKe1vyTV0RrkmDGUZKDvqAoitRWO6L0+KcJUnzjr+aqJVEFqQl8QhnfpEUeZ8h7t97HLXLdrEi5U6WuVi8wBf325zHmnKQBq4kXKaJuSEqs1SzfWH3UAVPsgT6nBf6YLdor8MH22BX1vQpq9HWg*0rXV36hXvx8J*TUXqcr9dqqIoivL+uLxwfEOqKHOSIxA32gWZLWKZa6MW8kJVNHI2gFUAsg+KT07uBXh9xGOBue56a2ujm74U2*iqVizSx1XKVuZ9cg2byI7O5Iu2yCl18EqfkdM3Ffoq20HMBNdNCOZsfaBa1ArEI8qlzSm1zzdCVLyWLIQtwaKlHV602GoW43diMbnkxdYYegLI8XTV0pw4mtWxcCX+psHi6Ji78mU8bJjW*lkb6P7crTyNjdwJbZtrYI2lBykoE98yXlSO7X*JDNwyozdFnQtQ2D7uHea0wh9her++S2KKLSdTcszqNeAF9769nb8dtMJW+uJ8+tT*BzRKWoLuHvivIOuDZX+9H88vdt2P1mYAzcVXoZHHUnOLubOHSX6pw27trdHqi5tNiW2UU*ZfdGGFziCXjUNs9jxP2MJqAPSB5mKQZNQLOi9uok9bM*5NLgeaLBYFYTjhHj8NP*v2gqQW2CpIJ57nDE3*sGQOMAoaZE4PEvUEsBAhQDFAAACAgAFZabXCBbiaOOBAAA+AcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAtgQAAAAA",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yj7zp0.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yj7zp0.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

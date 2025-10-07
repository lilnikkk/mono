

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "",
  spotifyClientId : "47afff587fc44d83b62ec5df8b5b2a71",
  spotifyClientSecret : "01401bca9f744dcd946debdfc23f95cc",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Main",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v3.ajieblogs.eu.org",
      port:  80,
      secure: false
    }
  ]
}

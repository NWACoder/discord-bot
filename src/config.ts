const config = {
  clientId: process.env.DISCORD_CLIENT_ID || "",
  serverId: process.env.DISCORD_SERVER_ID || "",
  token: process.env.DISCORD_BOT_TOKEN || "",
};

export const clientId = config.clientId;
export const serverId = config.serverId;
export const token = config.token;

export default config;

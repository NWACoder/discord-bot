import { Client, Intents } from "discord.js";
import { token } from "./config";

export const startServer = () => {
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

  client.once("ready", () => {
    console.log("Ready!");
  });

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === "ping") {
      await interaction.reply("Pong!");
    } else if (commandName === "server") {
      await interaction.reply("Server info.");
    } else if (commandName === "user") {
      await interaction.reply("User info.");
    }
  });

  client.login(token);
};

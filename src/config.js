import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";

const CONFIG_PATH = path.join(process.cwd(), "config.json");

export async function configureSetup() {
  const responses = await inquirer.prompt([
    { type: "input", name: "apiKey", message: "Enter your API Key:" },
    {
      type: "list",
      name: "model",
      message: "Select AI Model:",
      choices: ["gemini", "chatgpt", "claude"],
    },
  ]);

  fs.writeJsonSync(CONFIG_PATH, responses);
  console.log(chalk.green("✅ Configuration saved successfully!"));
}

export function getApiKey() {
  return fs.existsSync(CONFIG_PATH) ? fs.readJsonSync(CONFIG_PATH).apiKey : null;
}

export function getSelectedModel() {
  return fs.existsSync(CONFIG_PATH) ? fs.readJsonSync(CONFIG_PATH).model : null;
}

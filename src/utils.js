import inquirer from "inquirer";

export function selectOption(message, options) {
  return inquirer.prompt([{ type: "list", name: "choice", message, choices: options }])
    .then(answer => answer.choice);
}

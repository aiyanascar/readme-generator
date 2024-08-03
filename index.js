const inquirer = require('inquirer');

console.log("Starting the inquirer prompts...");

inquirer.prompt([
    { type: 'input', name: 'title', message: 'What is the title of your project?' }
]).then((answers) => {
    console.log("Prompting completed. Received answers:");
    console.log(answers);
}).catch(error => {
    console.error("An error occurred during the prompts:", error);
});

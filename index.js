const inquirer = require('inquirer');
const fs = require('fs');

// Questions to be asked
const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Provide a description of your project:' },
    { type: 'input', name: 'installation', message: 'What are the steps required to install your project?' },
    { type: 'input', name: 'usage', message: 'Provide instructions and examples for use:' },
    { type: 'input', name: 'contribution', message: 'Provide contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Provide test instructions:' },
    { type: 'list', name: 'license', message: 'Choose a license for your project:', choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause'] },
    { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }
];

console.log("Questions array:");
console.log(questions);

inquirer.prompt(questions).then((answers) => {
    console.log("Prompting completed. Received answers:");
    console.log(answers);

    // Generate README content
    const readmeContent = generateReadme(answers);

    // Write README to file
    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md has been generated!');
}).catch(error => {
    console.error("An error occurred during the prompts:", error);
});

console.log("This message should appear after setting up the prompt.");

function generateReadme(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
For any questions, please contact me at [${answers.email}](mailto:${answers.email}). You can also find more of my work at [${answers.github}](https://github.com/${answers.github}).
    `;
}

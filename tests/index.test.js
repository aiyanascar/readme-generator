const fs = require('fs');
const { generateReadme } = require('../index');

describe('generateReadme', () => {
  it('should generate a README file with the given inputs', () => {
    const answers = {
      title: 'My Project',
      description: 'This project is a simple tool to demonstrate how to generate a README file.',
      installation: 'npm install',
      usage: 'Run `node index.js` to start the tool.',
      contribution: 'Open an issue or submit a pull request.',
      tests: 'Run `npm test` to execute tests.',
      license: 'MIT',
      github: 'mygithubusername',
      email: 'myemail@example.com'
    };

    const expectedReadme = `
# My Project

## Description
This project is a simple tool to demonstrate how to generate a README file.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
npm install

## Usage
Run \`node index.js\` to start the tool.

## License
This project is licensed under the MIT license.

## Contributing
Open an issue or submit a pull request.

## Tests
Run \`npm test\` to execute tests.

## Questions
For any questions, please contact me at [myemail@example.com](mailto:myemail@example.com). You can also find more of my work at [mygithubusername](https://github.com/mygithubusername).
    `;

    const result = generateReadme(answers);
    expect(result).toBe(expectedReadme);
  });
});

// generateReadme function populating the README.md
function generateReadme(answers) {
  return `
<h1 align="center">${answers.projectTitle}</h1>

## Description
${answers.description}
## Table of Contents
- [Description](#description)
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

## Contributing
${answers.contributing}
## Tests
${answers.tests}
<br />
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
Email me with any questions: ${answers.email}<br /><br />
This README was generated with ❤️ by [README-generator](https://github.com/joehenrickson/read-me-generator)
  `;
}

module.exports = generateReadme;

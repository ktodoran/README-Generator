// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'Boost') {
    return '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)'
  } else if (license === 'BSD') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  } else if (license === 'Eclipse') {
    return '!License](https://img.shields.io/badge/License-EPL%201.0-red.svg)'
  } else if (license === 'IBM') {
    return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)'
  } else if (license === 'ISC') {
    return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
  } else if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Mozilla') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
  } else if (license === 'SIL') {
    return '![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)'
  } else if (license === 'Unlicense') {
    return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
  } else if (license === 'Zlib') {
    return '![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)'
  } else {
    return ''
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return `[${license}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'Boost') {
    return `[${license}](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === 'BSD') {
    return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'Eclipse') {
    return `[${license}](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === 'IBM') {
    return `[${license}](https://opensource.org/licenses/IPL-1.0)`
  } else if (license === 'ISC') {
    return `[${license}](https://opensource.org/licenses/ISC)`
  } else if (license === 'MIT') {
    return `[${license}](https://opensource.org/licenses/MIT)`
  } else if (license === 'Mozilla') {
    return `[${license}](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'SIL') {
    return `[${license}](https://opensource.org/licenses/OFL-1.1)`
  } else if (license === 'Unlicense') {
    return `[${license}](http://unlicense.org/)`
  } else if (license === 'Zlib') {
    return `[${license}](https://opensource.org/licenses/Zlib)`
  } else {
    return ''
  } 
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License`;
}

function renderTableofContents(contents) {
  if (contents === true) {
    return `## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    `
  }
  return '';
}

function renderContributing(contributing, contributorCovenant) {
  if (contributing === true) {
    return `## Contributing
  ${contributorCovenant}
    `
  } else return `## Contributing
  This project is not open for contributions at this time.`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log('data', data)
  return `# ${data.title}

  ## Description
  ${data.description}

  ${renderTableofContents(data.contents)}

  ## Installation
  ${data.dependencies}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  

  ${renderContributing(data.contributing, data.contributorCovenant)}


  ## Tests
  ${data.tests}

  ## Questions
  GitHub: ${data.github}
  Email: ${data.email}
`;

}

module.exports = generateMarkdown;

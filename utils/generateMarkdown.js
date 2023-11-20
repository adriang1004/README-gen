// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GPL 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'BSD 3': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'None': ''
  };
    return badges[license] ? `![License](${badges[license]})` : '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3': 'https://opensource.org/licenses/BSD-3-Clause',
    'None': ''
  };
return links[license] ? `(${links[license]})` : '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== 'None' ? `This project is licensed under the ${license} license.` : '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);  
  return `
       # ${data.title}
        ${licenseBadge ? `[${licenseBadge}]${licenseLink}` : ''}

        ## Description
        ${data.description}

        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [License](#license)
        - [Questions](#questions)

        ## Installation
        ${data.installation}

        ## Usage
        ${data.usage}

        ## Contributing
        ${data.contributing}

        ## Tests
        ${data.tests}

        ## Questions
        For any questions, please contact me at [${data.email}](mailto:${data.email}) or visit my GitHub profile: [${data.github}](https://github.com/${data.github}/)
       
        ## License
        ${licenseSection}        
`;
}

module.exports = generateMarkdown;

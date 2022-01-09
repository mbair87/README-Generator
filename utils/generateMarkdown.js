// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseLink) {
 return `![license](${licenseLink})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/license-${license}-brightgreen`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license==='None'){
  return "";
  } 
  else {
    return renderLicenseBadge(renderLicenseLink(license))
  }
}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   console.log(data);
//   return `# ${data.title}
// ${renderLicenseSection(data.license)}
// `;
// }

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
## Description 
${data.description}
## Table of Contents
* [Installation]
* [Usage]
* [License]
* [Languages]
* [Tests]
* [Questions]
## Installation
${data.installation}
## Usage 
${data.usage}
## License
The license is ${data.license}. 
## Languages
Laguages used: ${data.languages}.
## Tests
${data.tests}
## Questions
Please contact ${data.email} with any questions.
`;
}


module.exports = generateMarkdown;

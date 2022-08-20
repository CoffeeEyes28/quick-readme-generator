// TODO: Create a function that returns a license badge based on which license is passed in





// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'none'){
      license = '';
      return license
    }else if (license === 'MIT'){
      license = 'https://img.shields.io/badge/License%20-MIT-blue'
      return license
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license)
  return `# ${data.title}
  ![License](${renderLicenseBadge(data.license)})
  # Made by ${data.username}

`;

}

module.exports = generateMarkdown;



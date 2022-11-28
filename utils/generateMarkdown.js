// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none'){
    return ` `;
  }
  if (license === 'Apache License 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === 'Boost Software License 1.0'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  if (license === 'BSD 2-Clause License'){
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  }
  if (license === 'BSD 3-Clause License'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  if (license === 'GNU General Public License v.3.0.'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

//return license section in table of contents
function renderLicenseTableOfContents(license){
  if (license==='none'){
      return ``;
    }
  else{
    return '6. [License](#license)';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // let licenseString=''

  if (license === 'none'){
    return ` `;
  }
  if (license === 'Apache License 2.0'){
    return `## License

The project in covered under the [${license}](https://opensource.org/licenses/Apache-2.0) license`;
  }
  if (license === 'Boost Software License 1.0'){
    return `## License
    
The project in covered under the [${license}](https://www.boost.org/LICENSE_1_0.txt) license`;
  }
  if (license === 'BSD 2-Clause License'){
    return `## License
    
The project in covered under the [${license}](https://opensource.org/licenses/BSD-2-Clause) license`;
  }
  if (license === 'BSD 3-Clause License'){
    return `## License
    
The project in covered under the [${license}](https://opensource.org/licenses/BSD-3-Clause) license`;
  }
  if (license === 'GNU General Public License v.3.0.'){
    return `## License
    
The project in covered under the [${license}](https://www.gnu.org/licenses/gpl-3.0) license`;
  }
  if (license === 'MIT'){
    return `## License
    
The project in covered under the [${license}](https://opensource.org/licenses/MIT) license`;
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ##  Description:
  
  ${data.description}

  ##  Table of Contents 
  1. [Installation](#installation)
  2. [Usage](#usage) 
  3. [Contributing](#contributing) 
  4. [Test](#test) 
  5. [Questions](#questions)
  ${renderLicenseTableOfContents(data.license)}

  ## Installation 

  ${data.installation}

  ## Usage 

    ${data.usage}

  ## Contributing 

  ${data.contributing}

  ## Test 

  ${data.test}

  ## Questions? 

  Please contact me through any of the following:
  
  1. My [Github]('https://github.com/'+${data.username}).
  2. Email: <a href="mailto:${data.email}">${data.email}</a>

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;

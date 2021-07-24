//require node fetch
const fetch = require('node-fetch');

//get current year
const thisYear = new Date().getFullYear();

//license information array
const licenseArr = [

  {name: "Apache 2.0", badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
  content:`Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)\n
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`},
  {name: "MIT", badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
  content: `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`},
  {name: "GPL 3.0", badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", 
  content: `This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.\n
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.\n
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).`},
  {name: "BSD 3.0", badge: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", 
  content: `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n
  2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n
  3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n
  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`},
  {name: "Creative Commons 1.0", badge: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)", 
  content: `The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.\n
  You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. See **Other Information** below.\n
  ### **Other Information**\n
  * In no way are the patent or trademark rights of any person affected by CC0, nor are the rights that other persons may have in the work or in how the work is used, such as publicity or privacy rights.
  * Unless expressly stated otherwise, the person who associated a work with this deed makes no warranties about the work, and disclaims liability for all uses of the work, to the fullest extent permitted by applicable law.
  * When using or citing the work, you should not imply endorsement by the author or the affirmer.`},
  {name: "None", badge: "", content: ""}
];

//language information array
const languageArr = [
  {name: "HTML", badge: `<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>`},
  {name: "CSS", badge: `<img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>`},
  {name: "JavaScript", badge:`<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>`},
  {name: "TypeScript", badge:`<img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>`},
  {name: "Python", badge:`<img alt="Python" src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white"/>`},
  {name: "C#", badge:`<img alt="C#" src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"/>`},
  {name: "C", badge:`<img alt="C" src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"/>`},
  {name: "C++", badge:`<img alt="C++" src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"/>`},
  {name: "Ruby", badge:`<img alt="Ruby" src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white"/>`},
  {name: "Java", badge:`<img alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"/>`},
  {name: "Shell", badge:`<img alt="Shell Script" src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"/>`}
];

//function to generate the markdown for the README file
const generateMarkdown = projectData => {
    //create variables from projectData
    const { license, title, language, description, installation, usage, contributing, tests, github, email, questions } = projectData;
    return `# ${title}
${renderLicenseBadge(license)}
## Description\n
${description}
## Built With
${renderLanguageBadges(language)}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
## Installation
${installation}
## Usage
${usage}
## Contributing
${contributing}
## Tests
${tests}
## Questions
${questions}
\nEmail: ${email}
\nGitHub: [${github}](https://github.com/${github})
${renderLicenseInfo(license, github)}
  `;
};

//render license badge with clickable link
function renderLicenseBadge(license) {
  for (var i=0; i < licenseArr.length; i++){
    if(license == licenseArr[i].name){
      return `
        \n${licenseArr[i].badge}
      `;
    }
  }
};

//Render license text content
function renderLicenseInfo(license, github) {
  for (var i=0; i < licenseArr.length; i++){
    if(license == licenseArr[i].name && license !== "None"){
      return `
        \n## License
        \n### ${license}
        \n### Copyright ${thisYear} ${github}
        \n${licenseArr[i].content}
      `;
    }
    else if(license == "None") {
      return `
      \nCopyright ${thisYear} ${github}
      `;
    }
  }
};

//get language badges
function renderLanguageBadges(languages){
  //filter the selected languages against the language badge array
  let matches = languageArr.filter(element => languages.includes(element.name))
  .map(( { name, badge }) =>{
    //generate badge links for markdown
    return `
    \n${badge}
    `;
  }).join('');
  //return the matches to be added to the markdown file
  return matches;
};  

module.exports = generateMarkdown;
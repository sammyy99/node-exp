import inquirer from "inquirer";
import qr from "qr-image";
import * as fs from 'node:fs';

inquirer
  .prompt([{'message':'Enter your URL','name':'url'}])
  .then((answers) => {
    const ans = answers.url
    var qr_svg = qr.image(ans, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');

const runDir = process.cwd();

const config = require(`${runDir}/package.json`);

process.chdir('lib');

const packageName = `${config.name.substring(1).replace(/[^0-9a-z]/gi, '-')}-${config.version}`;


exec('npm pack', (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    if(!fs.existsSync('../dist')) {
      fs.mkdirSync('../dist');
    }
    const distFileName = `${packageName}.tgz`;
    fs.copyFileSync(`./${distFileName}` , `../dist/${distFileName}`);
    fs.unlinkSync(`./${distFileName}`);

    process.chdir('..');
  }
});

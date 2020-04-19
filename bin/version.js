#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');
const config = require('../../smart_pluralization/package');

if(!process.argv[2]){
  console.error('Provide version');
} else {
  exec(`git tag ${process.argv[2]}`, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);

      exec('npm version from-git', (err, stdout, stderr) => {
        if (err) {
          //some err occurred
          console.error(err)
        } else {
          // the *entire* stdout and stderr (buffered)
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        }
      });
    }
  });
}

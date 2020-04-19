#!/usr/bin/env node

const fs = require('fs');

fs.copyFileSync('./package.json', 'lib/package.json');
fs.copyFileSync('./LICENSE', 'lib/LICENSE');
fs.copyFileSync('./README.md', 'lib/README.md');

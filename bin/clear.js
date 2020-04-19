#!/usr/bin/env node

rmdir = require('rimraf');
rmdir('lib', function(error){});
rmdir('dist', function(error){});

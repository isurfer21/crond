#!/usr/bin/env node

const cron = require('node-cron');
const childProcess = require('node:child_process');
const util = require('node:util');
const exec = util.promisify(childProcess.exec);
const minimist = require('minimist');
const packageJson = require('./package.json');

async function spawn(command) {
    const { stdout, stderr } = await exec(command);
    !!stdout && console.log(stdout);
    !!stderr && console.log(stderr);
}

const args = process.argv.slice(2);
const argv = minimist(args);

if (argv.h || argv.help) {
    console.log(`
 Cron daemon (crond)

 Syntax:
  crond [option]
  crond [expression] [command]

 Options:
  -h  --help        Show help menu
  -v  --version     Show version info

 Usage:
  crond -h
  crond -v
  crond "* * * * * *" "ls -l"
  crond "* * * * * *" ls -l
  crond "* * * * * *" ./sample.bat
  `);
} else if (argv.v || argv.version) {
    let appVer = packageJson.version;
    console.log(`Version ${appVer}`);
} else if (args.length >= 2) {
    let argList = [...args];
    let expression = argList.shift();
    let command = argList.join(' ');
    cron.schedule(expression, async () => await spawn(command));
} else {
    console.log('Error: Missing parameters');
}
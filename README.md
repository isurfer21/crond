# crond
A cron daemon CLI leveraging node-cron module to schedule the task. 

## Prerequisite

Make sure you have [node.js](https://nodejs.org/) installed at your system.

## Install

You can install the app via npm

```
$ npm install node-cron-cli
```

After installation, check the app accessibility

```
$ crond --version
```

## Usage

To understand the usage, see below

```
$ crond --help 
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
```

As shown above, you can pass cron expression along with script or command that need to be scheduled for recurrence.
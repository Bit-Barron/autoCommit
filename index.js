const { exec } = require('child_process');

const message = 'Hello World';

const gitUrl = 'https://github.com/Bit-Barron/autoCommit';

const time = '12:00';

const currTime = new Date();
const time = new Date();

time.setHours(parseInt(time.split(':')[0]));
time.setMinutes(parseInt(time.split(':')[1]));

if (currTime > time) {
  time.setData(time.getDate() + 1);
}

const timeToWait = time.getTime() - currTime.getTime();

setTimeout(() => {
  exec(
    `git add . && git commit -m "${commitMessage}" && git push ${gitUrl}`,
    (error) => {
      if (error) {
        console.error(`Error: ${error}`);
        return;
      }
      console.log('succes.');
    }
  );
}, timeUntilCommit);

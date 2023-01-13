const exec = require('child_process').exec;

const commitMessage = 'Automatic commit';
const gitUrl = 'https://github.com/Bit-Barron/autoCommit';
const time = '00:28';

const currentTime = new Date();
const scheduledTime = new Date();
scheduledTime.setHours(parseInt(time.split(':')[0]));
scheduledTime.setMinutes(parseInt(time.split(':')[1]));

if (currentTime > scheduledTime) {
  scheduledTime.setDate(scheduledTime.getDate() + 1);
}

const timeUntilCommit = scheduledTime.getTime() - currentTime.getTime();

setTimeout(() => {
  exec(
    `git add . && git commit -m "${commitMessage}" && git push ${gitUrl}`,
    (error) => {
      if (error) {
        console.error(`Error: ${error}`);
        return;
      }
      console.log('Commit and push successful.');
    }
  );
}, timeUntilCommit);

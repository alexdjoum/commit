const cron = require('node-cron');
const { exec } = require('child_process');

/*cron.schedule('56 12 * * *', commitAndPush
);*/
function commitAndPush() {
    const date = new Date().toLocaleDateString('fr-FR');
    const commitMessage = `Commit automatique du ${date}`;

    exec(`git add . && git commit -m "${commitMessage}" && git push`, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}

commitAndPush();
/*setInterval(commitAndPush, 90000);*/



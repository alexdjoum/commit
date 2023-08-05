const cron = require('node-cron');
const { exec } = require('child_process');
const http = require('http');

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



const hostname = 'localhost';
const port = 3000;
commitAndPush();
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
/*setInterval(commitAndPush, 90000);*/



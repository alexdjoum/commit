const { exec } = require('child_process');


const http = require('http');

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



const server = http.createServer((req, res) => {


  res.statusCode = 200;
  console.log('mon test est passé')
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
  setInterval(commitAndPush, 90000);



});

server.listen(3000, 'localhost', () => {
  console.log('Le serveur est en cours d\'écoute sur le port 3000');
});


 // exécute la fonction toutes les 24 heures (en millisecondes)

const { exec } = require('child_process');

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

setInterval(commitAndPush, 86400000); // exécute la fonction toutes les 24 heures (en millisecondes)

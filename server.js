const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Déterminer le chemin du fichier
    let filePath = '.' + req.url;
    if (filePath === './') filePath = './index.html';

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    // Gérer les types MIME pour CSS et JS
    switch (extname) {
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
        case '.json': contentType = 'application/json'; break;
        case '.jpg': contentType = 'image/jpeg'; break;
    }

    // Lire le fichier
    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404);
            res.end("ERREUR 404: MODULE NEUROLIS NON TROUVÉ");
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`[NEUROLIS_OS] Noyau actif sur le port ${PORT}`);
});

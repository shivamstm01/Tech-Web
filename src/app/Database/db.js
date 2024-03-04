const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Read the contents of the db.json file
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            return;
        }

        // Set the response headers
        res.writeHead(200, {'Content-Type': 'application/json'});

        // Send the JSON data from the file as the response
        res.end(data);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

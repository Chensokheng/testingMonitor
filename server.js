const http = require("http");
const PORT = process.env.PORT || 3000
function serverRunning() {
    http.createServer((req, res) => {
        if (req.method === "HEAD") {
            console.log(req)
        }
    }).listen(PORT, () => {
        console.log(`The server is running on port ${PORT}`);
    });
}
module.exports = serverRunning
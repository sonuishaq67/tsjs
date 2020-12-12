var XMLHttpReq = require("xmlhttprequest").XMLHttpRequest;
function get(url: string) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpReq();
        req.open("GET", url);
        console.log(req.status);
        req.onload = function () {
            if (req.status != 404) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };
    });
}
get("https://google.com");
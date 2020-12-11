function get(url: string) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open("GET", url);

        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };
    });
}

function processFile(inputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);

    rl.on('line', function (line) {
        console.log(line);
    });

    rl.on('close', function (line) {
        console.log(line);
        console.log('done reading file.');
    });
}
processFile('/Users/zhaoxinrui/Desktop/Cracking the Coding  Interview /code_challenge/111');

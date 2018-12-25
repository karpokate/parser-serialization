// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var exec = require('child_process').exec, child;
var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);

function getData() {

    let file = document.querySelector('#myFile').files[0].name;
    myConsole.log(file);

    exec('python2 omr.py --input images/' + file + ' --output out.jpg --show', function (error, stdOut, stdErr) {
        myConsole.log(stdOut);
    });

}
document.querySelector('#btnEd').addEventListener('click', getData)
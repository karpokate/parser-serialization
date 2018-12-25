// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var exec = require('child_process').exec, child;
var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);

function parse() {
    let url = document.getElementById("urlIn").value;
    console.log(url);
    fetch(url)
    .then((data) => { 
        document.getElementById("result").value = JSON.stringify(data);
     });
}

function serialize() {
    let url = document.getElementById("urlIn").value;
    myConsole.log(url);
    fetch(url)
    .then(data => data.json() )
    .then((data) => { 
        document.getElementById("result").value = data;
     });
}

document.querySelector('#parse').addEventListener('click', parse)
document.querySelector('#serialize').addEventListener('click', serialize)
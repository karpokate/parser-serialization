// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var exec = require('child_process').exec, child;
const rp = require('request-promise');
const cheerio = require('cheerio');

let divs = [];
function parse() {
    
    let url = document.getElementById("urlIn").value;
    console.log(url);
    const options = {
        uri: url,
        transform: function (body) {
          return cheerio.load(body);
        }
      };
      
      rp(options)
      .then(($) => {
        $('div').each(function(i, elem) {
            divs.push($(this).text());
        });
        
        console.log(divs);
        document.getElementById("result").value = divs;
      })
      .catch((err) => {
        console.log(err);
      });
}

function serialize() {
    let val = document.getElementById("urlIn").value;
    console.log(val);
    data = val.split(' ');
    divs = data;
    document.getElementById("result").value = data;
}

function search() {
    let phrase = document.getElementById("popup1").value;
    let resultOfSearch = divs.search(phrase);
    let resultValue = "not found the phrase: " + phrase;
    if(resultOfSearch)
        resultValue = "found the phrase: " + phrase;
    
    document.getElementById("result").value = resultValue;
}

function filter() {
    document.getElementById("result").value = "filtered by divs";
}

function sort() {
    divs = divs.sort();
    console.log(divs);
    document.getElementById("result").value = divs;
}

function toStack()
{ 
    const Url='';
    fetch(Url)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})

}
function toTree ()
{
    const Url='';
    fetch(Url)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
}

document.querySelector('#parse').addEventListener('click', parse)
document.querySelector('#serialize').addEventListener('click', serialize)

document.querySelector('#search1').addEventListener('click', search)
document.querySelector('#filter').addEventListener('click', filter)
document.querySelector('#sort').addEventListener('click', sort)

document.querySelector('#to_stack').addEventListener('click', toStack)
document.querySelector('#to_tree').addEventListener('click', toTree)


// Get the modal
var modal1 = document.getElementById('searchModal');

// Get the button that opens the modal
var btn = document.getElementById("search");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
    modal1.style.display = "none";
    }
}

// // Get the modal
// var modal2 = document.getElementById('filterModal');

// // Get the button that opens the modal
// var btn = document.getElementById("filter");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[1];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//     modal2.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal2.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal2) {
//     modal2.style.display = "none";
//     }
// }

#!/usr/local/bin/node
var fs = require('fs');
fileName = process.argv[2]
//use [2] bc [0]=node, [1]=path of script
console.log(fileName)
if(!fileName){
                throw "Please pass in a  valid filename"
}
fs.readFile(fileName, "utf-8", function(err, data) {
    if (err) throw err;
    // console.log(data);
    try {
        GASJSON = JSON.parse(data)
    } catch (e) {
        throw e
    }
    console.log(GASJSON.files[0].id)
    for (var i in GASJSON.files) {
        fs.writeFile(GASJSON.files[i].name, GASJSON.files[i].source, function(err) {
            if (err) throw err;
            console.log(GASJSON.files[i].name + " is done");
        })
    }
})

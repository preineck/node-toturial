console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command', command);
console.log('Process: ',process.argv);
console.log('Yargs', argv);


if (command === 'add') {
    notes.addNote(argv.title, argv.body);
}   else if (command === 'list') {
    
}   else if (command === 'read') {

}   else if (command === 'remove') {

}   else {
    console.log('unknown command');
}
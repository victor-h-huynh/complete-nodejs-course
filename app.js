const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!');
    }
})

// Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note');
    }
})

// Create a list command 
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function() {
        console.log('Listing out all notes');
    }
})

// Create a read command
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    handler: function() {
        console.log('Reading a note');
    }
})

console.log(yargs.argv)
console.log('starting notes.js')

var addNote = (title, body) => {
   console.log('Adding note', title, body) ;
}

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting note: ',title);
}


module.exports = {
    addNote     //addNote = addNote is...old syntax when object /function are same
    ,getAll
    ,getNote

}

// ES6 syntax

const data = null;

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(formData);

    // Convert the form data to a JSON object
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    let data = formObject;
    console.log(data)
    var fs = require('fs');

    fs.readFile('db.json', 'utf-8', function readJSON(err, data){
        if(err){
            console.log(err);
        }
        else {
            formObject = JSON.stringify(formObject)
            fs.writeFile('db.json', formObject, 'utf8', callback);
        }
    })
})


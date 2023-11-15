// Variables to store the input text

console.log("hi")
let fname = '';
let lname = '';
let subject = '';

// Functions to update the input text
updateFname = () => {
    fname = document
        .getElementById('fname').value;
}

updateLname = () => {
    lname = document
        .getElementById('lname').value;
}

updateSubject = () => {
    subject = document
        .getElementById('subject').value;
}

// Event listener for the 
// 'beforeunload' event
window.addEventListener('beforeunload',
    function (e) {

        // Check if any of the input
        // fields are filled
        if (fname !== '' ||
            lname !== '' ||
            subject !== '') {

            // Cancel the event and
            // show alert that the unsaved
            // changes would be lost
            e.preventDefault();
            e.returnValue = '';
        }
    });

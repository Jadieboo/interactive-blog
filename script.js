//interfering with submit button code - try making a function and adding it text text area
// textarea element
var textarea = document.getElementById('textbox');
// output element for remaining characters
var output = document.getElementById("charRemain");
// max characters allowed in textarea
var max = 500;
// remaining characters allowed in textarea
var char = 500;

// when an input occurs in the textarea, this will count how many characters have been used and will subtract from the max amount to determine the remaining characters allowed. 
textarea.addEventListener('input', function() {

    // subtracting current count of textarea from max amount
    char = max - textarea.value.length;

    //displaying the remaining characters
    output.innerHTML = `Remaining characters: ${char}/${max}`;

    // changes color of text to show when remaining amount is getting low
    // starts black
    // changes to green when amount is between 499 - 51
    //changes to red when amount is 50 or less
    if (char == 500) {
        output.style.color = "black";
    } else if (char > 50){
        output.style.color = "green";
    } else {
        output.style.color = "red";
    }    
})



// hitting the reset button will also reset the output display to black and set the remaining characters back to default.
function charReset(){
    char = 500;
    output.style.color = "black";
    output.innerHTML = `Remaining characters: ${char}/${max}`;
}


// get form data
// does not work when button is inside form
function myFunction() {

    // getting data from html form inputs
    const getTitle = document.getElementById("title").value;
    const getAuthor = document.getElementById("author").value;
    const getPara = document.getElementById("textbox").value;
    

    if (getTitle.length >= 3 && getAuthor.length >= 2 && getPara.length >= 150) {
        // Creating elements from data in the form fields

        // TITLE
        // creating title element
        const createTitle = document.createElement("h1");
        // node element
        const titleNode = document.createTextNode(getTitle);
        // appending node to title
        createTitle.appendChild(titleNode);
        // appending title to page (body)
        document.body.appendChild(createTitle);


        // AUTHOR
        // creating title element
        const createAuthor = document.createElement("h3");
        // node element
        const authorNode = document.createTextNode(getAuthor);
        // appending node to title
        createAuthor.appendChild(authorNode);
        // appending title to page (body)
        document.body.appendChild(createAuthor);


        // PARAGRAPH
        // creating title element
        const createPara = document.createElement("p");
        // node element
        const paraNode = document.createTextNode(getPara);
        // appending node to title
        createPara.appendChild(paraNode);
        // appending title to page (body)
        document.body.appendChild(createPara);

        // ADD A HR
        // creating hr element
        const createHR = document.createElement("hr");
        document.body.appendChild(createHR);
    } else {
        alert("Minimum characters required in each field: Title: 3 Author: 2 Textbox: 150")
    }
}
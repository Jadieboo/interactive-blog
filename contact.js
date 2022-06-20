function sendMail() {
    const mail = document.getElementById("emailLink");

    // getting data from html form inputs
    const mailSubject = document.getElementById("subject").value;
    const mailBody = document.getElementById("body").value;
    const mailName = document.getElementById("name").value;
    const mailEmail = document.getElementById("email").value;

    if (mailSubject.length >= 3 && mailBody.length >= 3 && mailName.length >= 3 && mailEmail.length >= 7) {
        mail.setAttribute('href', `mailto:jadesale1991@googlemail.com?subject=${mailSubject}&body=${mailBody}`);
        alert(`Thank you ${mailName} for your email. I will get back to you shortly!`);
    } else {
        alert("Please ensure all fields have been entered.")
    }
}
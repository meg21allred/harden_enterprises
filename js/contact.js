let customerName = document.getElementById('name').value;
let email = document.getElementById('email').value;
let phone = document.getElementById('phone').value;
let newMessage = document.getElementById('message').value;

function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "meg21allred@gmail.com",
        Password : "Gmail1521!",
        To : 'meg21allred@gmail.com',
        From : 'meg21allred@gmail.com',
        Subject : "New contact form enquiry",
        Body : newMessage
    }).then(
      message => alert(message)
    );
}
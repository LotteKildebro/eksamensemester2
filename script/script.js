/*
  Slidemenu
*/
(function () {
    var $body = document.body
        , $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

    if (typeof $menu_trigger !== 'undefined') {
        $menu_trigger.addEventListener('click', function () {
            $body.className = ($body.className == 'menu-active') ? '' : 'menu-active';
        });
    }

}).call(this);

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const btn = document.getElementById('elem');

btn.addEventListener('click', () => window.scrollTo({
    top: 800,
    behavior: 'smooth',
}));

// form validatation 
function validateForm() {

    event.preventDefault();

    if (document.myForm.email.value == "") {
        msg1.innerHTML = 'angiv email';
        document.myForm.email.focus();
        return false;
    }
    if (document.myForm.name.value == "") {
        msg2.innerHTML = 'angiv navn';
        document.myForm.name.focus();
        return false;
    }

    if (document.myForm.kort.value == "") {
        msg3.innerHTML = 'angiv kortnummer';
        document.myForm.email.focus();
        return false;
    }
    if (document.myForm.message.value == "") {
        msg4.innerHTML = 'skriv i feltet';
        document.myForm.message.focus();
        return false;
    }

    confirm("Tak for din besked! ");
    window.location.reload();
    return (true);



}
function maxLength() {
    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
    type = "number"
    maxlength = "3"
};



function validateEmail() {
    var emailID = document.myForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.myForm.email.focus();
        return false;
    }
    return (true);
}

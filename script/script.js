/*
  Slidemenu
*/
(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);


// form validatation 
function validateForm() {

    event.preventDefault();
    if (document.myForm.penge.value == "") {
        msg0.innerHTML = 'angiv et beløb, tak :-)';
        document.myForm.penge.focus();
        return false;
    }
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
    if (document.myForm.cvr.value == "") {
        msg4.innerHTML = 'angiv cvr';
        document.myForm.cvr.focus();
        return false;
    }
    if (document.myForm.dato.value == "") {
        msg5.innerHTML = 'angiv en valid dato';
        document.myForm.dato.focus();
        return false;
    }
    confirm("Tak for donationen! ");
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
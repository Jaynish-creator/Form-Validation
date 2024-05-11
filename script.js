function resetForm() {
    let registrationForm = document.getElementById('registration');
    registrationForm.reset();
    
    document.querySelector('#firstname').style.border = "thin solid #000000";
    document.querySelector('#lastname').style.border = "thin solid #000000";
    document.querySelector('#displayname').style.border = "thin solid #000000";
    document.querySelector('#dob').style.border = "thin solid #000000";
    document.querySelector('#email').style.border = "thin solid #000000";
    document.querySelector('#phonenumber').style.border = "thin solid #000000";
    document.querySelector('#summary').style.border = "thin solid #000000";
    document.querySelector('.error-email').style.display = "none";
    document.querySelector('.error-phone').style.display = "none";

    /*
    let fields = document.querySelectorAll('fieldClassName')

    fields.map((field, index) => {
        field.value = ''
    })
    */

    /*
    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('displayname').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phonenumber').value = "";
    document.getElementById('summary').value = "";
    */
}
function displayName() {
    let displayName = document.getElementById('displayname');

    if (displayName.value == '') {
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        displayName.value = `${firstname} ${lastname}`;
    }
}

function submitForm() {
    let firstName = document.getElementById('firstname').value;
    if (firstName == '') {
        document.querySelector('#firstname').style.border = "thin solid #FF0000";
    } else {
        document.querySelector('.popup-first').innerHTML = firstName;
    }

    let lastName = document.getElementById('lastname').value;
    if (lastName == '') {
        document.querySelector('#lastname').style.border = "thin solid #FF0000";
    } else {
        document.querySelector('.popup-last').innerHTML = lastName;
    }

    let displayName = document.getElementById('displayname').value;
    if (displayName == '') {
        document.querySelector('#displayname').style.border = "thin solid #FF0000";
    } else {
        document.querySelector('.popup-display').innerHTML = displayName;
    }

    let dob = document.getElementById('dob').value;
    if (dob == '') {
        document.querySelector('#dob').style.border = "thin solid #FF0000";
    } else {
        document.querySelector('.popup-dob').innerHTML = dob;
    }

    let eMail = document.getElementById('email').value;
    if (eMail == '') {
        document.querySelector('#email').style.border = "thin solid #FF0000";
    } else {
        document.querySelector('.popup-mail').innerHTML = eMail;
    }

    let phoneNumber = document.getElementById('phonenumber').value;
    if (phoneNumber == '') {
        document.querySelector('#phonenumber').style.border = "thin solid #FF0000";
    } else {
        document.querySelector('.popup-phone').innerHTML = phoneNumber;
    }

    let yourSummary = document.getElementById('summary').value;
    if (yourSummary == '') {
        document.querySelector('#summary').style.border = "thin solid #FF0000";
    } else {
        document.querySelector('.popup-summary').innerHTML = yourSummary;
    }
    if (firstName == '') {
        document.getElementById('popup').style.display = "none";
    } else {
        document.getElementById('popup').style.display = "block";
    }
    if (lastName == '') {
        document.getElementById('popup').style.display = "none";
    } else {
        document.getElementById('popup').style.display = "block";
    }
    if (displayName == '') {
        document.getElementById('popup').style.display = "none";
    } else {
        document.getElementById('popup').style.display = "block";
    }
    if (dob == '') {
        document.getElementById('popup').style.display = "none";
    } else {
        document.getElementById('popup').style.display = "block";
    }
    if (eMail == '') {
        document.getElementById('popup').style.display = "none";
    } else {
        document.getElementById('popup').style.display = "block";
    }
    if (phoneNumber == '') {
        document.getElementById('popup').style.display = "none";
    } else {
        document.getElementById('popup').style.display = "block";
    }
    if (yourSummary == '') {
        document.getElementById('popup').style.display = "none";
    } else {
        document.getElementById('popup').style.display = "block";
    }
}

function validEmail() {
    let emailid = document.querySelector('#email').value
    // console.log(emailid)
    let mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailid.match(mailformat)) {
        document.querySelector('.error-email').style.display = "none";
    } else {
        document.querySelector('.error-email').style.display = "block";
    }
}

function validPhone() {
    let phoneNumber = document.querySelector('#phonenumber').value
    if (isNaN(phoneNumber)) {
        document.querySelector('.error-phone').style.display = "block";
    } else {
        document.querySelector('.error-phone').style.display = "none";
    }
}
function cancleRegistration() {
    document.getElementById('popup').style.display = "none";
}
function confirmRegistration() {
    document.getElementById('popup').style.display = "none";
    let registrationForm = document.getElementById('registration');
    registrationForm.reset();
}

function popupClose(event) {
    console.log(event.target)
    let popupElement = document.querySelector('.popup-content')
    if (event.target == popupElement) {
        document.getElementById('popup').style.display = "none";
    }
    let popup = document.querySelector('#popup')
    if (event.target == popup) {
        document.getElementById('popup').style.display = "none";
    }
}


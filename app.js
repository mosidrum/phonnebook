// object to store contact details
let contactDetails = {}


// gets details from the user
function getDetails() {

    let firstName = prompt("Enter the first name of the contact")

    // ends program if the user decides to cancel
    if (firstName == null) {
        return
    }

    // validates the first name
    function validateFirstName(firstName) {
        if (firstName.length > 2 && firstName.length < 64) {
            return true
        } else {
            return false
        }
    }
    // to make sure the right name is entereed
    while (validateFirstName(firstName) == false) {
        firstName = prompt("Enter a valid first name")
    }
    contactDetails['firstName'] = firstName

    let lastName = prompt("Enter the last name of the contact")

    // ends program if the user decides to cancel
    if (lastName == null) {
        return
    }
    // validates the last name
    function validateLastName(lastName) {
        if (lastName.length > 2 && lastName.length < 64) {
            return true
        } else {
            return false
        }
    }
    // to make sure the right name is entered
    while (validateLastName(lastName) == false) {
        lastName = prompt("Enter a valid last name")
    }
    contactDetails['lastName'] = lastName

    let phoneNumber = prompt("Enter the phone number")

    // ends program if the user decides to cancel
    if (phoneNumber == null) {
        return
    }
    // validates the phone number
    function validatePhoneNumber(phoneNumber) {
        if (phoneNumber.length == 11) {
            return true
        } else {
            return false
        }
    }
    // to make sure the correct number is entered
    while (validatePhoneNumber(phoneNumber) == false) {
        phoneNumber = prompt("Enter a valid 11 digit number")
    }
    contactDetails['phoneNumber'] = phoneNumber

    console.log(contactDetails)
}

// function for dislaying the contact detals
function displayContactDetails() {
    alert(`The contact is\n\nFirstname: ${contactDetails.firstName}
Lastname: ${contactDetails.lastName}
Phone number: ${contactDetails.phoneNumber}`)
}
let contactName = prompt("Enter the name of the contact")

function validateContactName(contactName) {
    if (contactName.length > 2 && contactName.length < 64) {
        return true
    } else {
        return false
    }
}
    console.log(validateContactName(contactName))

    let phoneNumber = prompt("Enter the phone number")

    function validatePhoneNumber(phoneNumber) {
        if (phoneNumber.length == 11) {
            return true
        }else {
            return false
        }
    }
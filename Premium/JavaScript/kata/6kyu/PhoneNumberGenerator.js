const createPhoneNumber = number => {
    // create variable numStr to hold complete phone number string
    let numberStr = number.join('');
    // get area code of phone number using the substring method to get 
    // first three integers substring(0,3)
    // this gets the elements at indicies 0-2
    const firstPart = numberStr.substring(0,3);
    // get the next three digits using substring(3,6)
    // this gets the elements at indicies 3-5
    const secondPart = numberStr.substring(3,6);
    // get the final four digits using substring(6-10)
    // this gets the elements at indicies 6-9
    const thirdPart = numberStr.substring(6,10);

    // create string of a correctly defined phonenumber
    return `(${firstPart}) ${secondPart}-${thirdPart}`
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9]))
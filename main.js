// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = arr => {
    //Here are the variables I will need for this function
    const holdingArray = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let reducedArray = [];
    let count = 0  
    const incrementCount = () => {
        count++;
     }
    //Here is where I start to iterate through to create my modified array 
     for (let i = arr.length-1; i >= 0; i--) 
        if (count % 2 === 0) {
            holdingArray.push(arr[i])
            incrementCount()
        } else {
            if (arr[i] * 2 < 9) {
                holdingArray.push(arr[i] * 2)
            } else {
                holdingArray.push(arr[i] * 2 - 9)    
            }
            incrementCount()
        };
    //Here is where I sum the modified array of CC digits
        reducedArray = holdingArray.reduce(reducer);
    if (reducedArray % 10 === 0) {
        return true
    } else {
        return false
    };
};

//this function returns the credit card numbers which are invalid.
const findInvalidCards = arr => {
    const validCards = [];
    const invalidCards = [];
    for (let i = 0; i < arr.length; i++)
        if (validateCred(arr[i]) === true) {
            validCards.push(arr[i])
        } else {
            invalidCards.push(arr[i])
        }
    return invalidCards
};
//console.log(findInvalidCards(batch));

//this function returns the list of companies which issued invalid cards
const idInvalidCardCompanies = arr => {
    const companyNames = [];
    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
      }
    for (let i = 0; i < arr.length; i++)
        if (arr[i][0] === 3) {
            companyNames.push('Amex (American Express')
        } else if (arr[i][0] === 4) {
            companyNames.push('Visa')
        } else if (arr[i][0] === 5) {
            companyNames.push('Mastercard')
        } else if (arr[i][0] === 6) {
            companyNames.push('Discover')
        } else {
            companyNames.push('Company not found.')
        }
    const uniqueCompanyNames = companyNames.filter(onlyUnique)
    return uniqueCompanyNames
};

console.log(idInvalidCardCompanies(findInvalidCards(batch)));

//These lines confirm that my validateCred function is working. 
//console.log(validateCred(valid1));
//console.log(validateCred(valid2));
//console.log(validateCred(valid3));
//console.log(validateCred(valid4));
//console.log(validateCred(valid5));

//console.log(validateCred(invalid1));
//console.log(validateCred(invalid2));
//console.log(validateCred(invalid3));
//console.log(validateCred(invalid4));
//console.log(validateCred(invalid5));

//console.log(validateCred(mystery1));
//console.log(validateCred(mystery2));
//console.log(validateCred(mystery3));
//console.log(validateCred(mystery4));
//console.log(validateCred(mystery5));
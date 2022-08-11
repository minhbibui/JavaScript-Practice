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
function validateCred(credit){
    let validate = new Array(credit.length);
    let count = 0;
    for(let i = credit.length-1; i >= 0; i--){
        if(count % 2 === 0){
            validate[i] = credit[i];
            // increase the count number
            count++;
        }
        else{
            let calculated = credit[i] * 2;
            if(calculated > 9){
                calculated = calculated - 9;
            }
            validate[i] = calculated;
            // increase the count number
            count++;
        }
    }
    // calculate the sum of the new validate array
    let totalValidate = 0;
    for(let i = 0; i < validate.length; i++){
        totalValidate = totalValidate + validate[i];
    }
    // if totalValidate mod 10 equal 0 return true else return false
    if(totalValidate % 10 === 0){
        return true;
    }
    else{
        return false;
    }
}

function findInvalidCards(cards)
{
    let invalidCards = new Array();
    let iteration = 0;
    for(let i = 0; i < cards.length; i++){
        if(validateCred(cards[i]) === false){
            invalidCards[iteration] = cards[i];
            iteration++;
        }
    }
    return invalidCards;
}

// function to check if the company exist 
function companyExistence(companies, c){
    for(let i = 0; i < companies.length; i++){
        if(companies[i] === c){
            return true;
        }
    }
    return false;
}


function idInvalidCardCompanies(invalidCards){
    let companies =  new Array();
    let iteration = 0;
    for(let i = 0; i < invalidCards.length; i++){
        if(invalidCards[i][0] === 3){
            if(companyExistence(companies,'Amex') === false){
                companies[iteration] = 'Amex';
                iteration++;
            }
        }
        else if(invalidCards[i][0] === 4){
            if(companyExistence(companies,'Visa') === false){
                companies[iteration] = 'Visa';
                iteration++;
            }
        }
        else if(invalidCards[i][0] === 5){
            if(companyExistence(companies,'Mastercard') === false){
                companies[iteration] = 'Mastercard';
                iteration++;
            }
        }
        else if(invalidCards[i][0] === 6){
            if(companyExistence(companies,'Discover') === false){
                companies[iteration] = 'Discover';
                iteration++;
            }
        }
        else{
            console.log("Company not found!");
        }
    }
    return companies;
}



// Testing

// declare a variable to test 
let testVariable = [];

testVariable.push(valid1);
testVariable.push(invalid1);
testVariable.push(valid2);
testVariable.push(valid3);
testVariable.push(invalid2);
testVariable.push(mystery1);
testVariable.push(mystery2);


let invalidTest = [];
invalidTest = findInvalidCards(testVariable);
console.log("List of Invalid card: ");
console.log(invalidTest);

let invalidCompanyTest = idInvalidCardCompanies(invalidTest);
console.log("List company invalid: ");
console.log(invalidCompanyTest);
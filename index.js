// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'bob the builder';

(function (){
    return customerName;
}());

function upperCaseCustomerName(){
    customerName = 'BOB';
    console.log(customerName);
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}
//don't want to declare a variable within a function.

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'new name';
    return leastFavoriteCustomer;
}

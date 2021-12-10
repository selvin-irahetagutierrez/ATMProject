let {balance,pin}= require("./account")
let {pocketBalance}=require("/.wallet")

const prompt = require ("prompt-sync")();

function getBalance(){
    console.log("Your Balance is:" + parseFloat(balance))
}


function withdraw (){
    let amount= prompt ("How much would you like to withdraw?")

    balance=parseFloat(balance) - parseFloat (amount);
    pocketBalance=parseFloat(pocketBalance) - parseFloat(amount);
    console.log("Your Balance:"+ pocketBalance);
}

function deposit (){
    let amount=prompt ("Enter deposited amount:");

    balance = parseFloat(balance) + parseFloat (amount);
    pocketBalance = parseFloat(pocketBalance) - parseFloat (amount);
    console.log("Your Balance:"+ pocketBalance)
}

function validatePin (){
    let userPin= prompt('Please enter your pin');
if (parseInt(userPin)=== pin){
    return true;}
    else {console.log("Incorrect Pin");
    return false;}
}

module.exports={
    getBalance: getBalance,
    withdraw: withdraw,
    deposit: deposit,
    validatePin: validatePin
}
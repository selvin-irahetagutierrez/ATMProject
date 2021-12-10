let {balance,pin}= require("./account")
let {pocketbalance}=require("/.wallet")

const prompt = require ("prompt-sync")();

function getBalance(){
    console.log("Your Balance is:" + parseFloat(balance))
}


function withdraw (){
    let amount= prompt ("How much would you like to withdraw?")
}

function deposit ()

function validatePin ()



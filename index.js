const prompt= require ("prompt-sync")();
let {pocketBalance}= require("./wallet");
const {getBalance,validatePin,withdraw, deposit}= require ("./atm")

console.log ("Welcome to ATM");
console.log("wallet Balance is:"+ pocketBalance)

if (validatePin()){
usermenu();}
else console.log("Try Again Next Time");


function usermenu (){
    let proceed;
    while (proceed!=="Quit") 
    {
        let userInput= prompt("What would the next step be? 1- View My Balance, 2-Withdraw, 3-Deposit, or 4- Quit")
        switch (userInput){
            case "1":
            getBalance();
            break;
            case "2":
            withdraw();
            break;
            case "3":
            deposit();
            break;
            case "4":
                proceed="quit"
            break;
            default:
                console.log('Not sure what that is. Lets retry')
        }
    }
}
console.log('Thanks for using my ATM')
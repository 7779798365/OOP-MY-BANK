import { BankAccount } from "./bankAccount.js";
import chalk from "chalk";
export class Customer{
    FirstName:string;
    LastName:string;
    username:string;
    UserAge:number;
    UserContact_Number:number;
    UserEmail:string;
    confirmemail:string;
    Create_User_ID:number;
    confirm_user_id:number;
    createuserpin:number;
    confirmuserpin:number;
    Bank_Account:BankAccount;
    constructor(FirstName:string, LastName:string, username:string, UserAge:number,  UserContact_Number:number, UserEmail:string, confirmemail:string,  Create_User_ID:number, confirm_user_id:number, createuserpin:number, confirmuserpin:number) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.username = username;
    this.UserAge = UserAge;
    this.UserContact_Number = UserContact_Number;
    this.UserEmail = UserEmail;
    this.confirmemail = confirmemail;
    this.Create_User_ID = Create_User_ID;
    this.confirm_user_id = confirm_user_id;
    this.createuserpin = createuserpin;
    this.confirmuserpin = confirmuserpin;
    this.Bank_Account = new BankAccount()
    }

    }

    export function CUSTOMERS_INFO(customer:Customer){
        console.log(`-------------------------------------------------------------`);
        console.log(chalk.bold.hex('#ff0000')(`First Name:                 [${chalk.bold.greenBright(customer.FirstName)}]`));
        console.log(chalk.bold.hex('#ff0000')(`Last Name:                  [${chalk.bold.greenBright(customer.LastName)}]`));
        console.log(chalk.bold.hex('#ff0000')(`Username:                   [${chalk.bold.blackBright(customer.username)}]`));
        console.log(chalk.bold.hex('#ff0000')(`Age:                        [${chalk.bold.yellowBright(customer.UserAge)}]`));
        console.log(chalk.bold.hex('#ff0000')(`Contact Number:             [${chalk.bold.yellowBright(customer.UserContact_Number)}]`));
        console.log(chalk.bold.hex('#ff0000')(`Email:                      [${chalk.bold.hex('#ff8243')(customer.UserEmail)}]`));
        console.log(chalk.bold.hex('#ff0000')(`User ID:                    [${chalk.bold.redBright(customer.Create_User_ID)}]`));
        console.log(chalk.bold.hex('#ff0000')(`User PIN:                   [${chalk.bold.redBright(customer.createuserpin)}]`));
        console.log(chalk.bold.hex('#ff0000')(`Account Balance:            [${chalk.bold.greenBright(customer.Bank_Account.Bank_Balance)}]`));
        console.log(chalk.bold.hex('#ff0000')(`Customer Account Number:    [${chalk.bold.yellowBright(customer.Bank_Account.Bank_Account_Number)}]`));
        console.log(`-------------------------------------------------------------`);
    }

    export function ACCOUNT_BALANCE(customer:Customer){
        console.log(`-------------------------------------------------------------`);
        console.log(chalk.bold.magentaBright(`Account Balance:  [RS:${chalk.bold.greenBright(customer.Bank_Account.Bank_Balance)}]`));
        console.log(`-------------------------------------------------------------`);
    }
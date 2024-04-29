import inquirer from "inquirer";
import Table from "cli-table";
import chalk from "chalk";
import ora from "ora";
import { createSpinner } from "nanospinner";
const sleep = () => new Promise((SetAnimation) => setTimeout(SetAnimation, 5000));
export class BankAccount {
    Bank_Account_Number;
    Bank_Balance;
    Transaction_History = [];
    constructor() {
        this.Bank_Account_Number = Math.floor(Math.random() * (9 * (Math.pow(10, 10)))) + (Math.pow(10, 10));
        this.Bank_Balance = Math.floor(Math.random() * 500000);
        this.Transaction_History = [];
    }
    ;
    CASH_WITHDRAW(Amount) {
        let Serial_Number = String(new Date()).lastIndexOf(":") + 3;
        let Dates = String(new Date()).slice(0, Serial_Number);
        const fee = Math.floor(Math.random() * 600) + 5;
        if (this.Bank_Balance >= Amount + fee) {
            this.Bank_Balance -= Amount + fee;
            this.Transaction_History.push({ Type: "Cash Withdraw", Amount: Amount, Date: Dates, Fee: fee });
        }
    }
    CASH_DEPOSIT(Amount) {
        let Serial_Number = String(new Date()).lastIndexOf(":") + 3;
        let Dates = String(new Date()).slice(0, Serial_Number);
        const fee = Math.floor(Math.random() * 800) + 10;
        this.Bank_Balance += Amount - fee;
        this.Transaction_History.push({ Type: 'Deposit Cash', Amount: Amount, Date: Dates, Fee: fee });
    }
}
export async function CASH_WITHDRAW(customer) {
    let spinner = createSpinner();
    let ifAmountwrong = false;
    while (!ifAmountwrong) {
        const { Amount } = await inquirer.prompt([
            {
                message: chalk.bold.greenBright("Enter Your Amount You want to Withdraw: "),
                name: "Amount",
                type: "number"
            }
        ]);
        if (Amount > 0) {
            if (Amount <= customer.Bank_Account.Bank_Balance) {
                ifAmountwrong = true;
                customer.Bank_Account.CASH_WITHDRAW(Amount);
                console.log(`---------------------------------------------------------------------------------------`);
                console.log(chalk.bold.greenBright(`Your withdraw Amount: [RS: ${Amount}]`));
                console.log(chalk.bold.greenBright(`Your Balance is Updated: [RS: ${customer.Bank_Account.Bank_Balance}]`));
                let ora1 = ora(chalk.bold.greenBright('Checking Your Transaction limit:'.toUpperCase())).start();
                ora1.color = "yellow";
                await sleep();
                ora1.clear();
                ora1.stop();
                let ora2 = ora(chalk.bold.greenBright('Processing Your Transaction Please Wait:'.toUpperCase())).start();
                ora2.color = "yellow";
                await sleep();
                ora2.clear();
                ora2.stop();
                console.log(`---------------------------------------------------------------------------------------`);
                ora2.succeed(chalk.bold.bgGreenBright(`Your Transaction Successfull`));
                console.log(`---------------------------------------------------------------------------------------`);
                console.log(`---------------------------------------------------------------------------------------`);
                console.log(chalk.bold.redBright(`Transaction Fee: [RS: -${customer.Bank_Account.Transaction_History.slice(-1)[0].Fee}]`));
                console.log(`---------------------------------------------------------------------------------------`);
                return;
            }
            else {
                let ora1 = ora(chalk.bold.greenBright('Chicking Your Transection limit:'.toUpperCase())).start();
                ora1.color = "yellow";
                await sleep();
                ora1.clear();
                ora1.stop();
                spinner.error({ text: chalk.bold.bgRedBright(`You do not have Enough Balance to withdraw Enough Amount Please Try Again.`) });
                return;
            }
        }
        else {
            console.log(chalk.bold.redBright(`Please Enter The Correct Amount  : [RS: ${customer.Bank_Account.Bank_Balance}]`));
            return;
        }
    }
}
export async function DEPOSIT_CASH(customer) {
    let ifdepositAmountiswrong = false;
    while (!ifdepositAmountiswrong) {
        const { DepositAmount } = await inquirer.prompt([
            {
                message: chalk.bold.greenBright("Enter Your Deposit Amount:"),
                name: "DepositAmount",
                type: "number"
            }
        ]);
        if (DepositAmount > 0) {
            let ora2 = ora(chalk.bold.greenBright('Processing Your Transection Please Wait:'.toUpperCase())).start();
            ora2.color = "yellow";
            await sleep();
            ora2.clear();
            ora2.stop();
            console.log(`---------------------------------------------------------------------------------------`);
            console.log(chalk.bold.greenBright(`Your Deposit Amount: [RS: ${DepositAmount}]`));
            console.log(chalk.bold.greenBright(`Your Balance is Updated: [RS: ${customer.Bank_Account.Bank_Balance}]`));
            console.log(`---------------------------------------------------------------------------------------`);
            ifdepositAmountiswrong = true;
            customer.Bank_Account.CASH_DEPOSIT(DepositAmount);
            console.log(`---------------------------------------------------------------------------------------`);
            ora2.succeed(chalk.bold.bgGreenBright(`Your Transaction Successfull`));
            console.log(`---------------------------------------------------------------------------------------`);
            console.log(`---------------------------------------------------------------------------------------`);
            console.log(chalk.bold.redBright(`Transaction Fee: [RS: -${customer.Bank_Account.Transaction_History.slice(-1)[0].Fee}]`));
            console.log(`---------------------------------------------------------------------------------------`);
        }
        else {
            console.log(chalk.bold.redBright(`Please Enter The Correct Deposit Amount`));
            return;
        }
    }
}
export function TRANSACTION_HISTORY(customer) {
    if (customer.Bank_Account.Transaction_History.length) {
        console.log(`----------------------------------------------------------------`);
        console.log(chalk.bold.greenBright(`Your Transaction History:`));
        console.log(`----------------------------------------------------------------`);
        let table = new Table({
            head: ['S.No:', 'Type:', 'Amount:', 'Date:', 'Transaction Fee:']
        });
        customer.Bank_Account.Transaction_History.forEach((transaction, SNo) => {
            table.push([chalk.bold.greenBright((SNo + 1).toString()), chalk.bold.yellowBright(transaction.Type), chalk.bold.greenBright(`RS: ${transaction.Amount}`), chalk.bold.magentaBright(`Date: ${transaction.Date}`), chalk.bold.redBright(`RS: -${transaction.Fee}`)]);
        });
        console.log(table.toString());
    }
    else {
        console.log(chalk.bold.redBright(`No Transaction Available`));
    }
}

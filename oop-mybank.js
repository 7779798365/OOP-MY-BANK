#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import Animation from "chalk-animation";
import figlet from "figlet";
import ora from "ora";
import { createSpinner } from "nanospinner";
import { Customer } from "./Customer.js";
import { CASH_WITHDRAW, DEPOSIT_CASH, TRANSACTION_HISTORY } from "./bankAccount.js";
import { CUSTOMERS_INFO, ACCOUNT_BALANCE } from "./Customer.js";
async function OOP_MYBANK() {
    let Animation0 = () => {
        return new Promise((Animation1) => {
            setTimeout(Animation1, 5000);
        });
    };
    let Animationtitle1 = Animation.rainbow("Welcome To Object Oriented Programming My Bank app!");
    await Animation0();
    Animationtitle1.stop();
    let Text2 = figlet.textSync("OOP My Bank app!", {
        font: "Big",
    });
    console.log(chalk.bold(chalk.hex('#9e1b32')(Text2)));
    let Animation1 = () => {
        return new Promise((Animation1) => {
            setTimeout(Animation1, 5000);
        });
    };
    let Animationtitle2 = Animation.rainbow("Start Your OOP My Bank app:");
    await Animation1();
    Animationtitle2.stop();
    const sleep = () => new Promise((Spinner_Animation) => setTimeout(Spinner_Animation, 5000));
    const sleep1 = () => new Promise((Spinner_Animation) => setTimeout(Spinner_Animation, 8000));
    const sleep2 = () => new Promise((r) => setTimeout(r, 6000));
    const sleep3 = () => new Promise((r) => setTimeout(r, 3000));
    const sleep4 = () => new Promise((r) => setTimeout(r, 0));
    const Anim1 = async () => {
        let spinner = ora(chalk.bold.greenBright("LOADING YOUR DETAILS:")).start();
        spinner.color = "yellow";
        await sleep();
        spinner.clear();
        spinner.stop();
    };
    let nanospinner = createSpinner();
    const Anim = async () => {
        let spinner = ora(chalk.bold.yellowBright("LOADING YOUR DATA...")).start();
        spinner.color = "yellow";
        await sleep();
        spinner.stop();
        spinner.clear();
    };
    let customers = [];
    async function ACCOUNTS() {
        await Anim();
        const { Accounts } = await inquirer.prompt([
            {
                message: chalk.bold.magentaBright("Select What Your Want To Do ?"),
                name: "Accounts",
                type: "list",
                choices: [
                    { name: chalk.bold.greenBright("Create an Account"), value: "Create an Account" },
                    { name: chalk.bold.magentaBright("Sign In"), value: "Sign In" },
                    { name: chalk.bold.redBright("Exit"), value: "Exit" },
                ],
            },
        ]);
        return Accounts;
    }
    ;
    const account = await ACCOUNTS();
    const CREATE_ACCOUNT = async () => {
        await Anim();
        ;
        const Userinputs = async (UserCreation, type) => {
            while (true) {
                const { CreateAccount } = await inquirer.prompt([
                    {
                        message: chalk.bold.hex('#4e9117')(`${UserCreation}`),
                        name: "CreateAccount",
                        type: type,
                    },
                ]);
                let FnameRegex = /^[a-zA-Z]+$/;
                let LnameRegex = /^[a-zA-Z]+$/;
                let UnameRegex = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()]{7,17}$/;
                let Pknumber = /^(\+92|0|92)[0-9]{10}$/;
                let ERegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.com|\.pk|\.uk)$/;
                if (UserCreation === "Enter Your First Name:" /* SignUp.FirstName */) {
                    if (FnameRegex.test(CreateAccount)) {
                        console.log(chalk.greenBright(`First Name: [${CreateAccount}]: Entered Successfully: `));
                    }
                    else {
                        console.log((chalk.redBright(`Invalid Input Please Enter First Name: You Enterd This => [${CreateAccount}]:`)));
                        continue;
                    }
                }
                ;
                if (UserCreation === "Enter Your Last Name: " /* SignUp.LastName */) {
                    if (LnameRegex.test(CreateAccount)) {
                        console.log(chalk.greenBright(`Last Name: [${CreateAccount}]: Entered Successfully: `));
                    }
                    else {
                        console.log(chalk.redBright(`Invalid Input Please Enter Last Name: You Enterd This => [${CreateAccount}]:`));
                        continue;
                    }
                }
                ;
                if (UserCreation === "Enter Your Username: " /* SignUp.username */) {
                    if (UnameRegex.test(CreateAccount)) {
                        console.log(chalk.greenBright(`Username: [${CreateAccount}]: Entered Successfully: `));
                    }
                    else {
                        console.log(chalk.redBright(`Invalid Input Please Enter Username: OR (Username Contains 8 Characters OR 18 Characters) You Enterd This => [${CreateAccount}]: `));
                        continue;
                    }
                }
                ;
                if (UserCreation === "Enter Your Age: " /* SignUp.UserAge */) {
                    if (CreateAccount >= 18 && CreateAccount <= 60) {
                        console.log(chalk.greenBright(`Age: [${CreateAccount}]: Enterd Successfully: `));
                    }
                    else {
                        console.log(chalk.redBright(`Invalid Age: Please Enter Your Age Here: You Enterd This => [${CreateAccount}]:`));
                        continue;
                    }
                }
                ;
                if (UserCreation === "Create Your Contact Number: [(Contact Number: Must be Pakistani Number Example: +92123456789 OR 03123456789)]: " /* SignUp.UserContact_Number */) {
                    if (Pknumber.test(CreateAccount)) {
                        console.log(chalk.greenBright(`Contact Number: [${CreateAccount}]: Enterd Successfully: `));
                    }
                    else {
                        console.log(chalk.redBright(`Invalid Contact Number: Please Enter only Pakistani Number Here: You Enterd This => [${CreateAccount}]:`));
                        continue;
                    }
                }
                ;
                if (UserCreation === "Create Your Email: example@Example.com/.pk./uk: " /* SignUp.UserEmail */) {
                    if (ERegex.test(CreateAccount)) {
                        console.log(chalk.greenBright(`Email: [${CreateAccount}]: Created: [(Please Now Confirm Your Email)]: `));
                    }
                    else {
                        console.log(chalk.redBright(`Invalid Email: Please Enter Your Email Here: You Entered This => [${CreateAccount}]:`));
                        continue;
                    }
                }
                ;
                if (UserCreation === "Confirm Your Email: " /* SignUp.ConfirmEmail */) {
                    if (CreateAccount === UserEmail) {
                        console.log(chalk.greenBright(`Confirmed Email: [${CreateAccount}]: Email Confirmed Successfully: Your Email Created Successfully: `));
                    }
                    else {
                        console.log(chalk.redBright(`Invalid Email Confirmation:OR Please Recreate Your Email and Confirm Your Email Here: You Enterd This => [${CreateAccount}]:`));
                        UserEmail = await Userinputs("Create Your Email: example@Example.com/.pk./uk: " /* SignUp.UserEmail */, 'string');
                        continue;
                    }
                }
                ;
                if (UserCreation === "Create Your User ID: [(ID Must be in Number Your User ID Must Be in 5 Digits)]: " /* SignUp.Create_User_ID */) {
                    if (CreateAccount.length === 5 && Number(CreateAccount)) {
                        console.log(chalk.greenBright(`User ID: [${CreateAccount}]: Created: [(Please Now Confirm Your User ID)]: `));
                    }
                    else {
                        console.log(chalk.redBright(`Invalid User ID Creation: Please Enter Number Here: You Enterd This => [${CreateAccount}]:  `));
                        continue;
                    }
                }
                ;
                if (UserCreation === "Confirm Your User ID: " /* SignUp.ConfirmUserID */) {
                    if (CreateAccount && CreateAccount === Create_User_ID) {
                        console.log(chalk.greenBright(`User ID: [${CreateAccount}]: Created Successfully: Your User ID Successfully Confirmed: `));
                    }
                    else {
                        console.log(chalk.redBright(`Invalid User ID Creation: Please Recreate Your User ID And Confirmed it again: You Enterd This => [${CreateAccount}]: `));
                        Create_User_ID = await Userinputs("Create Your User ID: [(ID Must be in Number Your User ID Must Be in 5 Digits)]: " /* SignUp.Create_User_ID */, 'string');
                        continue;
                    }
                }
                ;
                if (UserCreation === "Create Your User PIN: [(User PIN Must be in Number Your User PIN Must Be in 6 Digits)]: " /* SignUp.createuserpin */) {
                    if (CreateAccount.length === 6 && Number(CreateAccount)) {
                        console.log(chalk.greenBright(`User PIN: [${CreateAccount}]: Created [(Please Now Confirm Your User PIN)]: `));
                    }
                    else {
                        console.log(chalk.redBright(`Invalid User PIN Creation: Please Enter Number: You Entered This => [${CreateAccount}]`));
                        continue;
                    }
                }
                ;
                if (UserCreation === "Confirm Your User PIN: " /* SignUp.ConfirmUserPIN */) {
                    if (CreateAccount === createuserpin) {
                        console.log(chalk.greenBright(`User PIN: [${CreateAccount}]: Created Successfully: `));
                    }
                    else {
                        console.log(chalk.redBright(`Invalid User PIN Please Recreate Your User PIN: You Entered This => [${CreateAccount}]:`));
                        createuserpin = await Userinputs("Create Your User PIN: [(User PIN Must be in Number Your User PIN Must Be in 6 Digits)]: " /* SignUp.createuserpin */, 'string');
                        continue;
                    }
                }
                ;
                return CreateAccount;
            }
        };
        let FirstName = await Userinputs("Enter Your First Name:" /* SignUp.FirstName */, 'string');
        let LastName = await Userinputs("Enter Your Last Name: " /* SignUp.LastName */, 'string');
        let username = await Userinputs("Enter Your Username: " /* SignUp.username */, 'string');
        let UserAge = await Userinputs("Enter Your Age: " /* SignUp.UserAge */, 'number');
        let UserContact_Number = await Userinputs("Create Your Contact Number: [(Contact Number: Must be Pakistani Number Example: +92123456789 OR 03123456789)]: " /* SignUp.UserContact_Number */, 'string');
        let UserEmail = await Userinputs("Create Your Email: example@Example.com/.pk./uk: " /* SignUp.UserEmail */, 'string');
        let confirmemail = await Userinputs("Confirm Your Email: " /* SignUp.ConfirmEmail */, 'string');
        let Create_User_ID = await Userinputs("Create Your User ID: [(ID Must be in Number Your User ID Must Be in 5 Digits)]: " /* SignUp.Create_User_ID */, 'string');
        let confirm_user_id = await Userinputs("Confirm Your User ID: " /* SignUp.ConfirmUserID */, 'string');
        let createuserpin = await Userinputs("Create Your User PIN: [(User PIN Must be in Number Your User PIN Must Be in 6 Digits)]: " /* SignUp.createuserpin */, 'string');
        let confirmuserpin = await Userinputs("Confirm Your User PIN: " /* SignUp.ConfirmUserPIN */, 'string');
        let customer = new Customer(FirstName, LastName, username, UserAge, UserContact_Number, UserEmail, confirmemail, Create_User_ID, confirm_user_id, createuserpin, confirmuserpin);
        customers.push(customer);
        let spinner = ora('CREATING YOUR ACCOUNT...').start();
        spinner.color = "yellow";
        await sleep3();
        spinner.stop();
        spinner.clear();
        let sp1 = ora('Please wait while we are processing your request...'.toUpperCase()).start();
        sp1.color = "yellow";
        await sleep2();
        sp1.stop();
        sp1.clear();
        console.log(`-----------------------------------------------------------------`);
        nanospinner.success({ text: chalk.bold.bgGreenBright(`Account Created Successfully`) });
        console.log(`-----------------------------------------------------------------`);
    };
    if (account === "Create an Account") {
        await CREATE_ACCOUNT();
    }
    async function SIGN_IN() {
        await Anim();
        let Login;
        (function (Login) {
            Login["username"] = "Enter Your Valid Username: ";
            Login["PIN"] = "Enter Your Valid 6 Digits PIN: ";
        })(Login || (Login = {}));
        const Sign_In = async (user, type) => {
            while (true) {
                const { SignIn } = await inquirer.prompt([
                    {
                        message: chalk.bold.greenBright(`${user}`),
                        name: "SignIn",
                        type: type,
                    }
                ]);
                if (!SignIn) {
                    console.log(chalk.bold.redBright(`Please Enter Valid Username and PIN:`));
                    continue;
                }
                return SignIn;
            }
        };
        let Username = await Sign_In(Login.username, 'string');
        let PIN = await Sign_In(Login.PIN, 'string');
        let User1 = customers.some((user) => user.username === Username);
        let User2 = customers.some((user) => user.createuserpin === PIN);
        let customer = customers.find((customer) => customer.username === Username && customer.createuserpin === PIN);
        console.log();
        if (User1 && User2) {
            if (customer) {
                let animation1 = ora('CHECKING: Username and PIN!').start();
                animation1.color = "yellow";
                await sleep2();
                animation1.clear();
                animation1.stop();
                console.log(`-----------------------------------------------------------------`);
                nanospinner.success({ text: chalk.bold.bgGreenBright(`Username: [${Username}] Matched!`) });
                console.log(`-----------------------------------------------------------------`);
                console.log(`-----------------------------------------------------------------`);
                nanospinner.success({ text: chalk.bold.bgGreenBright(`User PIN: [${PIN}] Matched!`) });
                console.log(`-----------------------------------------------------------------`);
                console.log();
                let animation = ora('LOGING IN...').start();
                animation.color = "yellow";
                await sleep1();
                animation.clear();
                animation.stop();
                console.log(`-----------------------------------------------------------------`);
                nanospinner.success({ text: chalk.bold.bgGreenBright(`Sign in Successfully!`.toUpperCase()) });
                console.log(`-----------------------------------------------------------------`);
                console.log(`-----------------------------------------------------------------`);
                nanospinner.success({ text: chalk.bold.bgGreenBright(`Welcome! [${customer.FirstName.charAt(0).toUpperCase() + customer.FirstName.slice(1)} ${customer.LastName.charAt(0).toUpperCase() + customer.LastName.slice(1)}]:`) });
                console.log(`----------------------------------------------------------------------`);
                await Anim();
                while (true) {
                    const { Selection } = await inquirer.prompt([
                        {
                            message: "Select What You Want To Do",
                            name: "Selection",
                            type: "rawlist",
                            choices: [
                                { name: chalk.bold.hex('#ff8243')("Customer Profile"), value: "Customer Profile" },
                                { name: chalk.bold.hex('#ff8243')("Account Balance"), value: "Account Balance" },
                                { name: chalk.bold.hex('#ff8243')("Withdraw Cash"), value: "Withdraw Cash" },
                                { name: chalk.bold.hex('#ff8243')("Deposit Cash"), value: "Deposit Cash" },
                                { name: chalk.bold.hex('#ff8243')("Show TranSaction History"), value: "Show TranSaction History" },
                                { name: chalk.bold.hex('#ff8243')("Sign out"), value: "Sign out" },
                            ]
                        },
                    ]);
                    if (Selection === "Customer Profile") {
                        await Anim1();
                        CUSTOMERS_INFO(customer);
                    }
                    else if (Selection === "Account Balance") {
                        let spinner = ora('LOADING YOUR ACCOUNT BALANCE:').start();
                        spinner.color = "yellow";
                        await sleep();
                        spinner.clear();
                        spinner.stop();
                        ACCOUNT_BALANCE(customer);
                    }
                    else if (Selection === "Withdraw Cash") {
                        await CASH_WITHDRAW(customer);
                    }
                    else if (Selection === "Deposit Cash") {
                        await DEPOSIT_CASH(customer);
                    }
                    else if (Selection === "Show TranSaction History") {
                        TRANSACTION_HISTORY(customer);
                    }
                    else if (Selection === "Sign out") {
                        break;
                    }
                    else {
                        continue;
                    }
                    await sleep4();
                    const { User_Choice } = await inquirer.prompt([
                        {
                            message: chalk.bold.greenBright("Select Which Task You Want To Perform"),
                            name: "User_Choice",
                            type: "list",
                            choices: [
                                { name: chalk.bold.greenBright("Perform Another Task"), value: "Perform Another Task" },
                                { name: chalk.bold.redBright("Sign out"), value: "Sign out" },
                            ]
                        },
                    ]);
                    if (User_Choice === "Sign out") {
                        break;
                    }
                    else {
                        continue;
                    }
                }
            }
        }
        else {
            if (User1 || User2) {
                let animation2 = ora('CHECKING: Username and PIN!').start();
                animation2.color = "yellow";
                await sleep2();
                animation2.clear();
                animation2.stop();
                if (!User1) {
                    console.log(`-----------------------------------------------------------------`);
                    nanospinner.error({ text: chalk.bold.bgRedBright(`Username: [${Username}] Not Matched`) });
                    console.log(`-----------------------------------------------------------------`);
                    console.log(`-----------------------------------------------------------------`);
                    nanospinner.success({ text: chalk.bold.bgGreenBright(`PIN: [${PIN}] Matched`) });
                    console.log(`-----------------------------------------------------------------`);
                    console.log(`-----------------------------------------------------------------`);
                    nanospinner.error({ text: `Please Enter a Valid Username:`.toUpperCase() });
                    console.log(`-----------------------------------------------------------------`);
                }
                if (!User2) {
                    console.log(`-----------------------------------------------------------------`);
                    nanospinner.success({ text: chalk.bold.bgGreenBright(`Username: [${Username}] Matched`) });
                    console.log(`-----------------------------------------------------------------`);
                    console.log(`-----------------------------------------------------------------`);
                    nanospinner.error({ text: chalk.bold.bgRedBright(`PIN: [${PIN}] Not Matched`) });
                    console.log(`-----------------------------------------------------------------`);
                    console.log(`-----------------------------------------------------------------`);
                    nanospinner.error({ text: chalk.bold.bgRedBright(`Please Enter a Valid PIN:`.toUpperCase()) });
                    console.log(`-----------------------------------------------------------------`);
                }
            }
            else {
                let animation2 = ora('CHECKING: Username and PIN!').start();
                animation2.color = "yellow";
                await sleep2();
                animation2.clear();
                animation2.stop();
                console.log(`-----------------------------------------------------------------`);
                nanospinner.error({ text: chalk.bold.bgRedBright(`Username: [${Username}] Not Matched!`) });
                console.log(`-----------------------------------------------------------------`);
                console.log(`-----------------------------------------------------------------`);
                nanospinner.error({ text: chalk.bold.bgRedBright(`User PIN: [${PIN}] Not Matched!`) });
                console.log(`-----------------------------------------------------------------`);
                console.log(`-----------------------------------------------------------------`);
                nanospinner.error({ text: chalk.bold.bgRedBright(`No User With this Username and PIN`) });
                console.log(`-----------------------------------------------------------------`);
            }
        }
    }
    if (account === "Sign In") {
        await SIGN_IN();
    }
    if (account === "Exit") {
        async function Exit() {
            while (true) {
                const { Exit_app } = await inquirer.prompt([
                    {
                        message: "Do You Want to Exit Your app ?",
                        name: "Exit_app",
                        type: "list",
                        choices: [
                            { name: "Yes", value: "Yes" },
                            { name: "No", value: "No" }
                        ],
                    },
                ]);
                if (Exit_app === "Yes") {
                    process.exit();
                }
                else {
                    await OOP_MYBANK();
                }
                return Exit_app;
            }
        }
        await Exit();
    }
    async function Restart() {
        let restart1 = true;
        while (restart1) {
            const { restart } = await inquirer.prompt([
                {
                    message: chalk.bold.magentaBright("Do You Want To Continue ?"),
                    name: "restart",
                    type: "list",
                    choices: [
                        { name: chalk.bold.greenBright("Yes"), value: "Yes" },
                        { name: chalk.bold.redBright("No"), value: "No" },
                    ]
                }
            ]);
            if (restart === "Yes") {
                const account = await ACCOUNTS();
                if (account === "Create an Account") {
                    await CREATE_ACCOUNT();
                }
                else if (account === "Sign In") {
                    await SIGN_IN();
                }
                else if (account === "Exit") {
                    if (account === "Exit") {
                        async function Exit() {
                            while (true) {
                                const { Exit_app } = await inquirer.prompt([
                                    {
                                        message: "Do You Want to Exit Your app ?",
                                        name: "Exit_app",
                                        type: "list",
                                        choices: [
                                            { name: "Yes", value: "Yes" },
                                            { name: "No", value: "No" }
                                        ],
                                    },
                                ]);
                                if (Exit_app === "Yes") {
                                    process.exit();
                                }
                                else {
                                    await OOP_MYBANK();
                                }
                            }
                        }
                        await Exit();
                    }
                    process.exit();
                }
                restart1 = true;
            }
            else {
                restart1 = false;
            }
        }
    }
    await Restart();
}
await OOP_MYBANK();

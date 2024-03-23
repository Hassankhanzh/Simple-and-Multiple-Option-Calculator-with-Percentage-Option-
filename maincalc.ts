import inquirer from "inquirer"

// Simple Single Step Calculator 1 (without Percentage)

// let answers = await inquirer.prompt([
// {message: "Enter First Number", type: "number", name: "first_Number"},
// {message: "Enter Second Number", type: "number", name: "second_Number"},
// {message: "Enter Third Number", type: "number", name: "third_Number"},
// {message: "Select one operator to perform operations", 
// type: "list",
// name: "operator",
// choices: ["Addition", "Subtraction", "Multiplication", "Division"],
// }
// ])

// //if(answers.operator === "Addition"){console.log(answers.first_Number + answers.second_Number)}
// if(answers.operator === "Addition"){console.log(answers.first_Number + answers.second_Number + answers.third_Number)}
// else if(answers.operator === "Subtraction"){console.log(answers.first_Number - answers.second_Number- answers.third_Number)}
// else if(answers.operator === "Multiplication"){console.log(answers.first_Number * answers.second_Number * answers.third_Number)}
// else if(answers.operator === "Division"){console.log(answers.first_Number / answers.second_Number)}
// else {console.log("Invalid Input")}


// // Simple Multiple Step Calculator 2 (with % Percentage option)

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "first_Number"},
    {message: "Select one operator to perform operations", 
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    {message: "Enter Second Number", type: "number", name: "second_Number"},
    ])
    
    //if(answers.operator === "Addition"){console.log(answers.first_Number + answers.second_Number)}
    if(answers.operator === "Addition"){console.log(`${answers.first_Number + answers.second_Number}`)}
    else if(answers.operator === "Subtraction"){console.log(answers.first_Number - answers.second_Number)}
    else if(answers.operator === "Multiplication"){console.log(answers.first_Number * answers.second_Number)}
    else if(answers.operator === "Division"){console.log(answers.first_Number / answers.second_Number)}
    else {console.log("Invalid Input")}

    let answers1 = await inquirer.prompt([
        {message: "If Continue, Enter Your Number or press 0 and then select None Operator", type: "number", name: "first_Number1"},
        {message: "Select one operator to perform operations", 
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Percentage", "None"],
        },
        {message: "Enter Ssecond Number", type: "number", name: "second_Number2"},
        ])

        if(answers1.operator === "Addition"){console.log(`Your Answer is ${answers1.first_Number1 + answers1.second_Number2}`)}
    else if(answers1.operator === "Subtraction"){console.log(`Your Answer is ${answers1.first_Number1 - answers1.second_Number2}`)}
    else if(answers1.operator === "Multiplication"){console.log(`Your Answer is ${answers1.first_Number1 * answers1.second_Number2}`)}
    else if(answers1.operator === "Division"){console.log(`Your Answer is ${answers1.first_Number1 / answers1.second_Number2}`)}
    else if(answers1.operator === "Percentage"){console.log(`Your Answer is ${answers1.first_Number1 / answers1.second_Number2 * 100}%`)}
    else if(answers1.operator === "None"){console.log("Thanks For Your Time")}
    else {console.log("Invalid Input")}
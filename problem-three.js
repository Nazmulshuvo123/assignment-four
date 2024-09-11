// function checkDigitsInName(name) {
    
//     if(typeof  name !== 'string'){
//         return 'Invalid Input';    
//     }
     
//     const word = name.split("");
//     let result;
//     for(let char of word){
//         if(!isNaN(char) && char !== ' '){
//             result = true;
//         }
//         else{
//             result = false;
//         }
//     }
//     return result;
// }


// console.log(checkDigitsInName('Raj123'));
// console.log(checkDigitsInName('n9ayeem'));
// console.log(checkDigitsInName('e1mu3'));
// console.log(checkDigitsInName('Suman'));
// console.log(checkDigitsInName('Name2024'));
// console.log(checkDigitsInName('!@#'));
// console.log(checkDigitsInName(["Raj"]));



function checkDigitsInName(name) {
    
    if(typeof  name !== 'string'){
        return 'Invalid Input';    
    }
     
    const word = name.split("");
    let result= false;
    for(let char of word){
        if(!isNaN(char) && char !== ' '){
            result = true;
        }
    }
    return result;
}


console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('n9ayeem'));
console.log(checkDigitsInName('e1mu3'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(["Raj"]));



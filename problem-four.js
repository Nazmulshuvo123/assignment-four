function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = obj;

    obj.isFFamily = 20;

    let totalScore = obj.testScore + obj.schoolGrade + obj.isFFamily;
    if(totalScore < 80){
        return false;
    }
    
    
    if(typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || isFFamily === true){

        return true;
    }
    else{
        return false;
    }
    
}


console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true }));





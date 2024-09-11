function sendNotification(email) {
    const partsOfEmail = email.split('@');
    const symbolCount = partsOfEmail.length-1;
    if (symbolCount !== 1) {
        return "Invalid Email";
    }

    const username = partsOfEmail[0];
    const domainName = partsOfEmail[1];
    if (!username || !domainName) {
        return "Invalid Email";
    }

    const notification = username + " sent you an email from " + domainName;
    
    return notification;
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com")); 
console.log(sendNotification("nadim.naem5@outlook.com")); 
console.log(sendNotification("fahim234.hotmail.com"));  
console.log(sendNotification("sadia8icloud.com"));
marks = prompt("Enter your Marks : ");
    if (marks>80)
        console.log("Marks is "+marks+" and Grade is A");
    else if (marks>50 && marks<=80)
        console.log("Marks is "+marks+" and Grade is B");
    else if (marks>35 && marks<=50)
        console.log("Marks is "+marks+" and Grade is C");
    else if (marks==35)
        console.log("Marks is "+marks+" and Grade is D");
    else{
        console.log("Marks is "+marks+" and Grade is Fail");
    }
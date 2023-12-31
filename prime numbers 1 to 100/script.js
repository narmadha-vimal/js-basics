Lower=parseInt(prompt("Enter lower interval"));
Higher=parseInt(prompt("Enter Higher interval"));
console.log("Prime numbers from 2 to 100");
let i=Lower;
let flag=0;
for(i=Lower;i<=Higher;i++){
    for(j=2;j<i;j++){
        if(i%j==0){
            flag==1;
            break;
        }
        else if(i>1 && flag==0){
            console.log(i);
        }
    }

}



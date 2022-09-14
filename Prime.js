let factor =0;
for(let i =0;i<=num;i++){
    if (num%i==1){
      factor++
    }
}if(factor ==2){
    console.log("Yes")
}else{
    console.log("No")
}
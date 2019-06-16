function GCD (num1, num2){
  var min = 0;
  var GCDs = [];
  var max = 0;
  if(num1>=num2){
    min = num2;
  }else{
    min = num1;
  }
  for(var i = 0; i<=min; i++){
    if(num1%i==0 && num2%i==0){
    GCDs.push(i);
    }
  }
  console.log(GCDs);
  for(var j = 0; j<GCDs.length; j++){
    if(GCDs[j]>max){
      max=GCDs[j];
    }
  }
  return max;
}
console.log(GCD(16,4));

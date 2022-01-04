var a=parseInt(prompt("Enter first number :"));
var b=parseInt(prompt("Enter second number :"));
var c=parseInt(prompt("Enter third number :"));
if (a<b && a<c){
    alert(a+" is minimum number");
}
else if (b<a && b<c){
    alert(b+" is minimum number");
}
else{
    alert(c+" is minimum number");
}
//NORMAL FUNCTION
function fn1()
{
    console.log("JAVASCRIPT FUNCTION");
}
fn1();
//PARAMETERISED FUNCTION
function fn2(x,y)
{
   console.log(x);
   console.log(y);
}
fn2(10,20);
//FUNCTION WITH RETURN STATEMENT
function fn3(x,y)
{
    return x+y;
}
var res=fn3(10,20);
console.log(res);
//CALLBACK ANNONYMOUS HIGHER ORDER FUNCTION
function fn4(f)
{
    console.log(f);
    f();
}
fn4(function(){
    var city='KOLKATA';
    console.log(city);
})
function print()
{
    var city='KOLKATA';
    var state='WB';
    console.log(city);
    console.log(state);
}
function fn5(f)
{
    console.log(f);
    f();
}
fn5(print);
//function expression
var res=function(){
    console.log("FUNCTION EXPRESSION");
}
res();
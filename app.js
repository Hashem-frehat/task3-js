// ----------------------------------------------------------------q1

let x = [5,3,2,4,4,3];
function reversed(){
    let numrev=[];
    for(let a= x.length-1;a>=0;a--){
    numrev +=x[a];
}
return console.log(numrev);
}
reversed();


// -------------------------------------------------------------q2
let odd=[];
let even=[];
for (let x=1 ;x<=15;x++ ){
if(x % 2 === 0){
even +=[x];
}
else{
    odd +=[x];
}
}
console.log("this is the even numbers:"+even );
console.log("this is the odd numbers:"+odd );
// --------------------------------------q3
function sortt(){
    let x = "orange";

return console.log(x.split("").sort().join(""));

}
sortt();


// -------------------------------------------q4
let l= 91247786 ;
let numdash = l.toString();
let result ="";
let k = "0";
function eveen(){
for (let i = 0; i < numdash.length; i++) {
    if(i < numdash.length - 1 && parseInt(numdash[i]) % 2 === 0 && parseInt(numdash[i + 1]) % 2 === 0 )
        {
            k= "-";
        } 
    else{
        k="";
    }
    result += numdash[i] + k
}
return console.log(result);
}

eveen();

// ---------------------------------------------------q5
function age(z){
    let x = z >=18 ? 'The user is Adult': 'The user is Minor';
    return console.log(x);
}
age(24);
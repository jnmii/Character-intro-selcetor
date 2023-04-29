document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
if(day === "Tuesday" || day === "Thursday"){
  return 
}else if (day === "saturday" ||day === "Sunday")
{alert ("BOO")}
else{

  alert('Boooring!!!!')
}}


let admin;

let name;
name = "john";
admin = name
alert(admin);


function min(a,b){
if (a<b){
  return a
} else return b
}
 console.log(min(2,5));
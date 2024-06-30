


//const persons = new Array ["Adele", "Agnes", "Billy","Bob","Calvin","Christina","Cindy"];
let car = ["Fiat", "500","white"];
let op=document.getElementById("demo");
//document.getElementById("demo").innerHTML = 'The car type is' ;
//document.writeln(car.type+car.model);
let vetendas = {ad:'', soyad:'',yas:'', ugurlari:[
    "qramota", "sertificat","ali tehsil"
  ]}

//console.log(car.type);
window.onload = function () {
     let carsler = [
      { 
        ad:'Ferrari ', 
        reng:'sari ',
       il:'1971 ', 
       motor:[
        "Ferrari Tipo ", " FERRARI 825 horsepower (615 kW)","17,300 rpm "
      ]
       },
        { 
       ad:'Bmw ', 
        reng:'qara ',
           il:'2020 ', 
            motor:[
          "B38 ", "BMW Inline-three turbo ","1.2,1.5 L "
          ]
           },
          { 
            ad:'Volvo ', 
          reng:'yasil ',
          il:'1995 ', 
           motor:[
        "B18C ", "B6304F ","Volvo B6324S "
           ]
         },
        { 
          ad:'Mersedec ', 
          reng:'qirmizi ',
         il:'1987 ', 
         motor:[
          "M111 ", "Mersedec turbo-hybrid V6 F1 engine ","1.8,2.3 L "
        ]
         }
       ]

    let items = ["saab", "BMW", "Fiat","Volvo","Bentley"];
    let list = document.getElementById("mylist");
    for (var i = 0; i < carsler.length; i++) {
        const li = document.createElement('li');
        li.innerText = carsler[i].ad;
       // li.appendChild(anchor);
        list.appendChild(li);

    }

    //var ull = document.getElementById('myList');
   //var lis = document.getElementById('myList').getElementsByTagName("li");
   //var lisk = this.getAttribute('lis');
  // lis.addEventListener("click", function() {
    

  const lis = document.getElementById('mylist');

  lis.addEventListener("click", function(event) {
   const target = event.target;
   if (target.tagName === "LI") {
     const index = [...lis.children].indexOf(target);
     document.getElementById('demo3').innerHTML=(carsler[index].ad+carsler[index].reng+carsler[index].il+carsler[index].motor);
   }
 })

//}) ${index+1}



////////////////////////////////////////////////
///////tek ve cut reqem yoxlamaq///////////////
function even(x){
  if( x % 2 == 0){return 'cut reqemdir'} else {return 'cut reqem deyil'}
}

document.querySelector('input').addEventListener('keydown', function(e) {
  if (e.code === 'Enter'){
 let reqq=(document.getElementById('inputtext').value);
 let reqqq=even(reqq);
 document.getElementById("numb").innerHTML=reqqq;
}
})

////////////////////////////////////////////////
///////tersine cevirmek///////////////
function ters_cevir(arr) {
  return(arr.reverse());

 }

 const masinlar = ["Bmw", "Chevrolet", "Hynday", "Kia"]
 document.getElementById("demo").innerHTML+='Ters cevirmek'+'<br>'+masinlar;
 document.getElementById("demo").innerHTML+='<br>'+ters_cevir(masinlar);
console.log(masinlar)
console.log(ters_cevir(masinlar))
 


////////////////////////////////////////////////
///////tekrari tapmaq///////////////
function tekrar_tapmaq(arrays) {
  return Array.from(new Set(arrays));
// return sed;
 }
 const fruits = ["orange", "banana" , "lemon", "banana","apple","banana","watermelon"];
 const unikal = tekrar_tapmaq(fruits);
 document.getElementById("demo").innerHTML+='<br><br>'+'Tekrar tapmaq'+'<br>'+fruits;
 document.getElementById("demo").innerHTML+='<br>'+unikal;

console.log(unikal)



const nodeLisst = document.querySelectorAll("p");
for (let i = 0; i < nodeLisst.length; i++) {
  console.log(i);
}

//setInterval(displayHello, 1000);

function displayHello() {
  document.getElementById("time").innerHTML =1;
}
setTimeout(
  () => {
    console.log('Hello after 4 seconds');
  },
  4 * 1000
);


let numberss =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ;
let text = document.getElementById("time");

for (let i = 0; i < numberss.length; i++) { setTimeout(function() {
if( numberss[i] % 2 == 0){
  text.innerHTML+=(numberss[i] +' cut reqemdir'+"<br>")} 
  else {document.getElementById("time").innerHTML+=(numberss[i] +
    ' cut reqem deyil'+"<br>") }
},1000*i);




let sekoo=[1,2,3,4,5,6,7,8,9,10] ;
//document.write(numbgh(sekoo));
//document.getElementById("time").innerHTML =(numbgh(sekoo));
//console.log(sekoo.forEach(numbgh(sekoo)))

function numbgh(eder){
  for (let i = 0; i < eder.length; i++) { 
    if( eder[i] % 2 == 0){return eder[i]+' cut reqemdir'} else {return eder[i]+' cut reqem deyil'}
  }
}



for (let i = 0; i < 12; i++) {
  setTimeout(function() {
    document.getElementById("demo3").innerHTML =i;
  }, 1000*i);
}



}
}
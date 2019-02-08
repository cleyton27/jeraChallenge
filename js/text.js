let btn = document.getElementById("btn-movie")
let liFilms = document.getElementById("films")
let movieInfo = document.getElementById("movie-info")
let btn1 = document.getElementById("btn1")
let btnCharacter = document.getElementById('cha');

btn.addEventListener("click", function(){
  btn.value = "films"
  //console.log(btn.value);
getJesonData(btn.value)
sayHello();
})

/*
btn1.addEventListener("click", function(){
  console.log("Hello ");
  btn1.value = "films"
  getJesonData(btn1.value);
})
*/


function ApiAtributeConection(atribute){
const Http = new XMLHttpRequest();

let url='https://swapi.co/api/'+atribute +'/?format=json';
Http.open("GET", url);
Http.send();
Http.onload=(e)=>{

let data = JSON.parse(Http.responseText)
//console.log("hello");
for (var i = 0; i < data.results.length; i++) {
  let film = data.results[i].title;

  console.log(film);
  let btn1 =  document.write(`<br><br><button onclick="sayHello()">${film}</button>`);


}
console.log(data.results[0]);

}
}

function sayHello(){
  let h1 = document.createElement('H1');
      h1.textContent = "Sei la";

}

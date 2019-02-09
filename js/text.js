

let movieInfo = document.getElementById("movie-info")

//this button call ApiAtributeConection();
/*
btn.addEventListener("click", function(){
  btn.value = "films";
getJesonData(btn.value)
})
*/





//This function get all films title
function ApiAtributeConection(atribute){
const Http = new XMLHttpRequest();

let url='https://swapi.co/api/'+atribute +'/?format=json';
Http.open("GET", url);
Http.send();
Http.onload=(e)=>{

let data = JSON.parse(Http.responseText)
console.log("hello");
for (var i = 0; i < data.results.length; i++) {
  let film = data.results[i].title;

  console.log(film);
  document.write(`<br><br><button onclick='return false'>${film}</button>`)

}


}
}

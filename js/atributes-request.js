//let movie  = document.getElementById("movie");
let i =0;
const container = document.createElement('div');
container.setAttribute('class', 'container');

function getJesonData(atribute, func){
let Http = new XMLHttpRequest();
let url='https://swapi.co/api/'+atribute+'/?format=json';
Http.open("GET", url);
Http.send();
Http.onload=(e)=>{

let data = JSON.parse(Http.responseText)
console.log(data.results);
//console.log(data.results[2].characters);

let datas = data.results;
getCharacters(datas)

func(datas);


if(data.results[i] == datas.lentgh){
  console.log("This's  just "+i);
}
  i++;



}

}


function getCharacters(datas){
  datas.forEach(x=>{
    let i = 0
    console.log(x.characters);
    console.log(x.characters[i]);

  })
  }





//https://swapi.co/api/planets/?format=json
//https://swapi.co/api/people/1/?format=json

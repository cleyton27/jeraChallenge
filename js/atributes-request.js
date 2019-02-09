let movie  = document.getElementById("movie");

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
let datas = data.results;
func(datas);
}

}



//https://swapi.co/api/planets/?format=json
//https://swapi.co/api/people/1/?format=json

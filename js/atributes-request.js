let movie  = document.getElementById("movie");

const container = document.createElement('div');
container.setAttribute('class', 'container');

function getJesonData(atribute){
let Http = new XMLHttpRequest();
let url='https://swapi.co/api/'+atribute+'/?format=json';
Http.open("GET", url);
Http.send();
Http.onload=(e)=>{

let data = JSON.parse(Http.responseText)
console.log(data.results);
let datas = data.results;

datas.forEach(x=>{
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  let btnCharacter = document.createElement('button');
  btnCharacter.setAttribute('id', 'cha');
  let btnPlanets = document.createElement('button');
  let btnVehicles = document.createElement('button');


      h2.textContent = x.title;
      p.textContent = x.opening_crawl;
      h3.textContent = `Director `+x.director+` and Producer `+x.producer;
      btnCharacter.textContent = `Characters`;
      btnPlanets.textContent = `Planets`;
      btnVehicles.textContent = `Vehicles`



      //console.log(title);

      //console.log(typeof(x));

      //console.log(btnCharacter);
      //movie.appendChild(h2)
      movie.appendChild(h2)
      movie.appendChild(p)
      movie.appendChild(h3)
      movie.appendChild(btnCharacter)
      movie.appendChild(btnPlanets)
      movie.appendChild(btnVehicles)
      btnCharacter.insertAdjacentElement("afterend",h3 );
});
}


}

function hello(){
  console.log("Hello");
}

//https://swapi.co/api/planets/?format=json
//https://swapi.co/api/people/1/?format=json

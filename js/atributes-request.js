



const container = document.createElement('div');
container.setAttribute('class', 'container');

function getJesonData(atribute, funct){
let Http = new XMLHttpRequest();
let url='https://swapi.co/api/'+atribute+'/?format=json';
Http.open("GET", url);
Http.send();
Http.onload=(e)=>{

let data = JSON.parse(Http.responseText)
console.log(data.results);
let datas = data.results;

showDatas(datas);


}


}





//essa função recebe um array de dado como parametro e monta os elementos HTML e monstra as informações na tela
function showDatas(datas){
datas.forEach(x=>{
   h2 = document.createElement('h2');
   h3 = document.createElement('h3');
   p = document.createElement('p');
   btnCharacter = document.createElement('button');
  btnCharacter.setAttribute('id', 'cha');
   btnPlanets = document.createElement('button');
   btnVehicles = document.createElement('button');


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

//https://swapi.co/api/planets/?format=json
//https://swapi.co/api/people/1/?format=json

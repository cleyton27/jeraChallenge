
let btn = document.getElementById("btn-movie")
btn.addEventListener("click", function(){
  btn.value = "films";
getJesonData(btn.value, showDataFilms);

})

//função que obtem os intens da Api e cria elementos html para mostrar informações dos filmes
function showDataFilms(datas){
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

      movie.appendChild(h2)
      movie.appendChild(p)
      movie.appendChild(h3)
      movie.appendChild(btnCharacter)
      movie.appendChild(btnPlanets)
      movie.appendChild(btnVehicles)
      btnCharacter.insertAdjacentElement("afterend",h3 );
});

}




//console.log(film.title);

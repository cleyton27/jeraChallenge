let divCharacter = document.createElement('div')

let btn = document.getElementById("btn-movie")
btn.addEventListener("click", function(){
  btn.value = "films";
getJesonData(btn.value, showDataFilms);

})

//função que obtem os intens da Api e cria elementos html para mostrar informações dos filmes
function showDataFilms(datas){
datas.forEach(x=>{
  let divFilm = document.createElement('div')
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

      divFilm.appendChild(h2)
      divFilm.appendChild(p)
      divFilm.appendChild(h3)
      divFilm.appendChild(btnCharacter)
      divFilm.appendChild(btnPlanets)
      divFilm.appendChild(btnVehicles)
      divFilm.appendChild(divCharacter)
      movie.appendChild(divFilm)

      btnCharacter.addEventListener("click", function(){
        btnCharacter.value = "people";
        getJesonData(btnCharacter.value, showDataCharacters)
      })


});

}




//console.log(film.title);

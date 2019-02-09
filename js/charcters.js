let btnC = document.getElementById("cha")

btnC.addEventListener("click", function(){
  btnC.value ="people"
  getJesonData(btnC.value, showDatasCharacters)
})


function showDatasCharacters(datas){
datas.forEach(x=>{
   h2 = document.createElement('h2');
   h3 = document.createElement('h3');
   p = document.createElement('p');
   //btnCharacter = document.createElement('button');

   btnPlanets = document.createElement('button');
   btnVehicles = document.createElement('button');


      h2.textContent = x.name;
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
});

}

let btnC = document.getElementById('cha');

btnC.addEventListener("click",function(){
  btnC.value = "people";
  getJesonData(btnC.value, showDataCharacters)
})

function showDataCharacters(datas){
datas.forEach(x=>{
  let h2 = document.createElement('h2');
      h2.textContent = x.name;

      movie.appendChild(h2)
});

}

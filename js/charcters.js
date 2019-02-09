let btnC = document.getElementById('cha');

btnC.addEventListener("click",function(){
  btnC.value = "people";
  getJesonData(btnC.value, showDataCharacters)
})




function showDataCharacters(datas){
datas.forEach(x=>{
  let h2Name = document.createElement('h2');
  let div = document.createElement('div')
      h2Name.textContent = x.name;

        div.appendChild(h2Name)

});

}

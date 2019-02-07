let movieInfo = document.getElementById("movie-info")
let btn = document.getElementById("btn");
let ourData;

btn.addEventListener("click", function(){
  var ourRequest = new  XMLHttpRequest();
  ourRequest.open("GET", "https://swapi.co/api/?format=json");
 //.onload when the data loaded what should happen
 ourRequest.onload = function(){
   console.log(ourRequest.status);
if(ourRequest.status == 200){
  ourData = JSON.parse(ourRequest.responseText);
 //renderHTML(ourData);
 console.log("success!!");
 console.log(ourData);


 //console.log(ourData.characters.length);



}else {
 console.log(ourRequest.satus);
 console.log("We conneted to the server, but it returned an error. "+ourRequest.status );
}

 };

 ourRequest.send();

});

let ourData;

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


https://swapi.co/api/planets/?format=json
https://swapi.co/api/people/1/?format=json

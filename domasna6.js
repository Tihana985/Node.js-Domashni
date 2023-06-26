// Domasno da se kreira server so parno: da, karakteri 5, soglaski: 2, samoglaski


const http = require("http"); //kreirame server so ovoj modul



const server = http.createServer ((request,response) => {
    res.end("Hi world"); // zashto ova ne go chita? 
});

server.listen(10000, "127.0.0.1", (err) => {
 if (err) console.log("error");
   console.log("server started on port 10000");
});


// Domasno da se kreira server so parno: da, karakteri 5, soglaski: 2, samoglaski
  const name = "Aleksndar,Maja,Mirka,Petko,Sharko";
//   console.log(name.split(" ")); 
const nameList = name.split (',');

const evenLengthNames = nameList.filter(name => name.length % 2===0);
const namesWithFiveCharacters = nameList.filter(name => name.length ===5);

console.log(evenLengthNames);
console.log(namesWithFiveCharacters);

const twoVowelNames = nameList.filter(name => {
  const vowels = name.toLowerCase().split('').filter(char => 'aeiou'.includes(char));
  return vowels.length === 2;
});

console.log(twoVowelNames);



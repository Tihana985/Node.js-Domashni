/ Domasno da se kreira server so parno: da, karakteri 5, soglaski: 2, samoglaski
//Reshenie od prof:
const http = require("http");

const server = http.createServer((req, res) => {
  const [_, path, name] = req.url.split("/");

  if (path === "ime") {
    console.log(path, name);
    if (!name) {
      res.end("invalid url");
      return;
    }

    const samoglaski = ["a", "e", "i", "o", "u"];
    const brojNabukvi = name.length;
    const eParen = brojNabukvi % 2 === 0 ? "da" : "ne";
    let samoglaskiBroj = 0;

    const bukviArray = name.split("");

    for (let i = 0; i < bukviArray.length; i++) {
      if (samoglaski.includes(bukviArray[i])) {
        samoglaskiBroj++;
      }
    }

    const soglaskiBroj = brojNabukvi - samoglaskiBroj;

    res.end(
      `karakteri na imeto ${brojNabukvi}, paren: ${eParen}, soglaski: ${soglaskiBroj}, samoglaski: ${samoglaskiBroj}`
    );
  } else if (path === "sobiranje") {
    res.end();
  } else if (path === "odzemnaje ") {
  }
});

server.listen(10000, (err) => {
  if (err) console.log(err);
  console.log("server has started");
});


// Domasno da se kreira server so parno: da, karakteri 5, soglaski: 2, samoglaski
//Reshenie jas kako go razbrav domashnoto:

// const http = require("http"); //kreirame server so ovoj modul



// const server = http.createServer ((request,response) => {
//     res.end("Hi world"); 
// });

// server.listen(10000, "127.0.0.1", (err) => {
//  if (err) console.log("error");
//    console.log("server started on port 10000");
// });


// // Domasno da se kreira server so parno: da, karakteri 5, soglaski: 2, samoglaski
//   const name = "Aleksndar,Maja,Mirka,Petko,Sharko";
// //   console.log(name.split(" ")); 
// const nameList = name.split (',');

// const evenLengthNames = nameList.filter(name => name.length % 2===0);
// const namesWithFiveCharacters = nameList.filter(name => name.length ===5);

// console.log(evenLengthNames);
// console.log(namesWithFiveCharacters);

// const twoVowelNames = nameList.filter(name => {
//   const vowels = name.toLowerCase().split('').filter(char => 'aeiou'.includes(char));
//   return vowels.length === 2;
// });

// console.log(twoVowelNames);



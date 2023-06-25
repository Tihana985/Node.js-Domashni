//? Domasna Cas 2.js
//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7, podredeni po ime(rastecki)
const studenti = [
    { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Vesna", prosek: 9.1, grad: "Prilep" },
    { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
    { ime: "Vancho", prosek: 8.8, grad: "Kratovo" },
    { ime: "Ivana", prosek: 6.3, grad: "Kumanovo" },
    { ime: "Simona", prosek: 7, grad: "Ohrid" },
    { ime: "Natasha", prosek: 8.2, grad: "Skopje" },
    { ime: "Stanko", prosek: 6.7, grad: "Kichevo" },
    { ime: "Damjan", prosek: 9.1, grad: "Kumanovo" },
    { ime: "Sandra", prosek: 9.2, grad: "Ohrid" },
  ];

  const skopjeStudenti = studenti.filter((studenti) => { return studenti.grad == "Skopje" && studenti.ime.endsWith("a") 
  && studenti.prosek >7}); skopjeStudenti.sort((a,b) => (a.ime - b.ime));
  
  console.log(skopjeStudenti);



//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki

const neseodSkStudenti = studenti.filter ((studenti) => {return studenti.prosek > 9 && studenti.grad !== "Skopje"}); 
  neseodSkStudenti.sort((a,b)=>b.prosek - a.prosek)
console.log(neseodSkStudenti);

//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek\
const triStudenti = studenti.filter((studenti) => {return studenti.ime.length=== 5}); triStudenti.sort((a,b)=>a.prosek - b.prosek)
 .slice(0,3);
console.log(triStudenti);

//const triStudenti = studenti
  //.filter((student) => student.ime.length === 5)
  //.sort((a, b) => a.prosek - b.prosek)
  //.slice(0, 3);

console.log(triStudenti);

//? 4. Vkupen prosek na studenti koi se od Kumanovo
const studentiKumanovo = studenti.filter ((studenti) => {return studenti.grad === "Kumanovo"});
console.log(studentiKumanovo);

const Prosek = studentiKumanovo.reduce ((acc,s)=> {return acc+s.prosek
},0);
console.log(Prosek);


//? 5. Prosek na prosecite od gradoovite Skopje i Ohrid

const gradovi = studenti.filter((studenti) => {return studenti.grad ==="Skopje" || studenti.grad==="Ohrid" });
console.log(gradovi);

const prosek = gradovi.reduce((acc,s) => {return acc + s.prosek, 0 });

console.log(prosek);

//? 6. Da se dodade ushte eden student so ime Goran, prosek 7.3 i grad Delchevo

studenti.push({ime:"Goran", prosek:"7,6", grad:"Delcevo"})
console.log(studenti);
//? 7.Da se izbrishe prviot student vo studentite

studenti.shift()
console.log(studenti)
//? 8. Da se kreira nova niza kade sto studentite od Ohrid i Kumanovo prosecite im se za 1 pogolemi od segasnite(dinamicki)

const newArray = studenti.map((studenti)=> {
  if( studenti.grad==="Ohrid" && studenti.grad==="Kumanovo"){
    return{...studenti, prosek:studenti.prosek + 1}; 
  }
  return studenti;
});

console.log(newArray);



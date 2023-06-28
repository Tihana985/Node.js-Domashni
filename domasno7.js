const express = require("express"); //go povikuvame modulot express

const app = express();



app.get("/ime/:name", (req, res) => {
  const name = req.params.name;

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

  res.send(
    `karakteri na imeto ${brojNabukvi}, paren: ${eParen}, soglaski: ${soglaskiBroj}, samoglaski: ${samoglaskiBroj}`
  );
});

app.get("/sobiranje", (req, res) => {
  res.send("Sobiranje endpoint");
});

app.get("/odzemnaje", (req, res) => {
  res.send("Odzemnaje endpoint");
});


app.listen(10005, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully on port 10005");
});


// const PORT = 10005;
// app.listen(PORT, (err) => {
//   if (err) console.log(err);
//   console.log("Server has started on port " + PORT);
// });

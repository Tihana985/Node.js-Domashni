//Domasna:
//! DA PROCHITATE OD DOKUMENTACIJA
//? Da istrazite uste nekolku methodi na fs modulot
//? Kako da izbrishite fajl, kako da preimenuvatefajls -
//? i uste eden po zelba
//? isto taka da kreirate fajl -
//? i da prochitate fajl -

const fs = require('fs');

// // Example data to write to the file
const data = 'Ova e sodrzinata na file-ot.';

// Create file
fs.writeFile('novFile.txt', data, (err) => {
    if (err) {
        console.error('Ima nekade greska pri kreiranjeto na file-ot');
    } else {
        console.log('Fajlot e uspesno kreiran');
    }
});

// Read file
fs.readFile('novFile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Nastana greska pri citanjeto na file-ot');
    } else {
        console.log(data);
        console.log('Fajlot e uspesno procitan');
    }
});

// Rename file - za da ne se smeni go komentiram
// fs.rename('novFile.txt', 'aktuelenFile.txt', (err) => {
//     if (err) {
//         console.error('Ne moze da se menuva imeto na ovoj File');
//     } else {
//         console.log('Imeto e uspesno promeneto');
//     }
// });

// Append text
fs.appendFile('novFile.txt', '\nDodavame malku povekje tekst vo fajlot', (err) => {
    if (err) {
        console.error('Greska pri vpisuvanje na nov tekst');
    } else {
        console.log('Sodrzinata e uspesno nadgradena');
    }
});

// // Delete file - za da ne se izbrishe go komentiram
// fs.unlink('novFile.txt', (err) => {
//     if (err) {
//         console.error('Greska pri brisenje na file-ot');
//     } else {
//         console.log('File-ot e uspesno izbrisan');
//     }
// });


// Copy file

fs.copyFileSync('novFile.txt', 'fileCopy.txt');
console.log('novFile.txt was copied to fileCopy.txt');

const fileCopyContent = 'Ova e sodrzinata na tretiot kreiran file';
fs.writeFileSync('./newFile.txt', fileCopyContent);
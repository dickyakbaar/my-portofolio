//soal 3
let bilangan = prompt("Masukkan Angka = ");
if (!isNaN(bilangan) && bilangan >= 0) {
  if (bilangan % 2 === 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil");
  }
}
//soal 6

function totalOngkir() {
}
let jarak = 3
let ongkir1 = 5000
let biaya = ongkir1
biaya = biaya + (3000*jarak);

if (jarak <= 2) {
 console.log(ongkir1)
} else if (jarak > 2){
 console.log(biaya)
} else {
  console.log('error');
}
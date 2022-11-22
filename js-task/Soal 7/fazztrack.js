//soal 7

const displayFazztrack = () => {
    for (let i = 1; i <= 20; i++){
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fazztrack');
      } else if (i % 3 === 0){
        console.log('fazz');
      } else if (i % 5 === 0){
        console.log('track');
      } else {
        console.log(i);
      }
    }
  }
   
  displayFazztrack()
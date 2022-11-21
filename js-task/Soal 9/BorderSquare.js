function kotak(input) {
    let horizontal = '';
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) {
             if(i>0 && i<input-1){
               if(j == 0 || j == input-1){
                 horizontal += '* '
              }else{
                horizontal +='  '
              }
            }else{
            horizontal += '* ';
            }
        }
        horizontal += '\n';
    }
    return horizontal;
}
console.log(kotak(5));
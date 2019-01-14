function swap(array, i){
  let current = array[i];
  let next = array[i+1];
  if(current>next){
    array[i] = next;
    array[i+1] = current
}}

function bubbleSort (array){
  for(let l = array.length -1; l>0; l--){
    for(let i = 0; i<l; i++){
        swap(array,i)
        }
      }
    return array;
  }

let memorize = (fun)=>{
   let storage = {};  
   return (num)=>{
      if((typeof num) != "number"){
        return "Value must be number";
      }
      if(!storage[num]){
        return storage[num] = fun(num);
      }
      return storage[num];
   } 
}


let square = calculateSquare((num)=>{
  let result = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result++;
    }
  }
  return result;
})


console.time("call first time function")
console.log(square(10000));
console.timeEnd("call first time function")

console.time("call second time function")
console.log(square(10000));
console.timeEnd("call second time function")


console.time("call third time function")
console.log(square(10000));
console.timeEnd("call third time function")
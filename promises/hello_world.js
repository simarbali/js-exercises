const job = () =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve("hello world");
      },2000)
    })   
  }
job().then(data=>console.log(data)).catch(error=>console.log(error))
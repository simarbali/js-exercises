var promise = job1();

promise

.then((data1)=>{
    console.log('data1', data1);
    return job2();
})

.then((data2) => {
    console.log('data2', data2);
    return 'Hello world';
})

.then((data3) =>{
    console.log('data3', data3);
})
.catch((error)=>{
    console.log(error)
});

function job1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 2');
        }, 1000);
    });
}




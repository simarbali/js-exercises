/** 
 *   Your function must always return a promise 
     If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
     If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
     If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)
     @param data
     @returns Promise<string>
**/

function job(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject("error");
        } else if (data % 2 === 1) {
            setTimeout(() => {
                resolve("odd");
            }, 1000);
        } else {
            setTimeout(() => {
                reject("even");
            }, 2000);
        }
    });
}

// Example usage:

job("string data").then((result) =>console.log("Resolved:", result))
    .catch((error) => {
        console.error("Rejected:", error);
    });

job(30)
    .then((result) => {
        console.log("Resolved:", result);
    })
    .catch((error) => {
        console.error("Rejected:", error);
    });

job(77)
    .then((result) => {
        console.log("Resolved:", result);
    })
    .catch((error) => {
        console.error("Rejected:", error);
    });
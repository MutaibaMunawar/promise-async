// // Due to synchronous programing, sometimes imp intruction get blocked due to some previous instructions,
// // Which causes a delay in te UI.
// // async code execution allows to execute next instructions  immediately and doesn't block the flow.
// function practice(){
//     console.log("my practice")
// }
// setTimeout(practice, 2000);  //timeOut : 2000 = 2s
// function hello(){
//     console.log("hello")
// }
// console.log("practice 1")
// console.log("practice 2")
// console.log("practice 3")
// setTimeout(() =>{
//     console.log("hello 👋")
// },
//      5000); 
//  console.log("practice 4")
//  console.log("practice 5")
//Promises 
// in javascript, a promises is a good way to handle asynchoronous operation
//it is used to find if the async iperation is successfully completed or not.
// .pending
// .fulFilled
// .Rejected
const giaicResult = new Promise(function (resolve, rejet) {
    const isPassed = true;
    if (isPassed) {
        resolve('yes you are passed, That is good ');
    }
    else {
        rejet('your are fail ');
    }
});
// then()
giaicResult
    .then((data) => {
    console.log("wohoo🎉", data);
})
    //  catch() 
    .catch((data) => {
    console.log("oh no", data);
})
    .finally(() => {
    console.log("I will always  be executed");
});
//
function getWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const water = "";
            resolve(water);
        }, 2000);
    });
}
function getNodlesMasala(water) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const nodlesMasala = water + "";
            resolve(nodlesMasala);
        }, 2000);
    });
}
function getNodles(nodlesMasala) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const nodles = nodlesMasala + "";
            resolve(nodles);
        }, 2000);
    });
}
function makeNodles(nodles) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mkNodles = nodles + "";
            resolve(mkNodles);
        }, 2000);
    });
}
getWater()
    .then((water) => {
    console.log("here's water", water);
    return getNodlesMasala(water);
})
    .then((nodlesMasala) => {
    console.log("here's nodles masala", nodlesMasala);
    return getNodles(nodlesMasala);
})
    .then((nodles) => {
    console.log("here's nodles", nodles);
    return makeNodles(nodles);
})
    .then((mkNodles) => {
    console.log("let's make nodles", mkNodles);
});
export {};

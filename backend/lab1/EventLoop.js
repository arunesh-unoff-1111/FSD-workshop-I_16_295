console.log("start");

process.nextTick(() =>{
    console.log("nextTick");
});

setTimeout(() =>{
    console.log("setTimeout")
},500);
setImmediate(() =>{
    console.log("setImmediate")
})
console.log("end");
function greeting(){
    console.log ("Hello, welcome to the class!");
}
setTimeout(greeting, 3000);

// high order function
function greeting(greeting){
    return function name (name){
        console.log(greeting, name );
    }
}
const greetnamaste = greeting("Namaste");
greetnamaste("Rojash");

// first class function
// example 1
function promisefunc(){
    return new Promise(function (resolve, reject){
        resolve("Promise resolved");
    });
    }
    promisefunc().then(function (data){
        console.log(data)
    })

    // example 2
    function promisefunc(){
    return new Promise(function (resolve, reject){
        reject("Promise resolved");
    });
    }
    promisefunc().catch(function (data){
        console.log(data)
    })

// example 3
function statusfunction(name){
    return new Promise(function (resolve, reject){
        if(name ==="success"){
            resolve("Promise resolved");
        }
        else{
            reject("Promise reject");
        }
});
}

statusfunction("success").then(function (data){
    console.log(data);
}).catch(function (dataerror){
    console.log(dataerror);
});

function statusfunction(name) {
  return new Promise(function (resolve, reject) {
    if (name == "success") {
      resolve("Successfulllllllll");
    } else {
      reject("Failed");
    }
  });
}
statusfunction("success")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (dataerror) {
    console.log(dataerror);
  });

//async/await example
async function enrichmentclass() {
    try{
const data = await statusfunction("unsuccessful");
console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
enrichmentclass();


// Task 
let details = {
    username:"rojashdon",
    password: "rojashdon123",
}

function login(username, password) {
    return new Promise (function(resolve, reject){
        if (username === details.username && password === details.password) {
            resolve("Login successful");
        } else {
            reject("Login failed");
        }
    });
}

async function authentication() {
    try{
        const data = await login("rojashdon", "rojashdon123");
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
authentication();

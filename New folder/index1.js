console.log('start');  

Promise.resolve()
  .then(function() {   
    console.log('promise 1'); 
  })
  .then(function() {   
    console.log('promise 2'); 
  });  

console.log('end');

function first() {
  console.log(1)
}

function second(callback) {
  setTimeout(() => {
    console.log('callback2')
    callback()
  }, 0)
}

function third() {
  console.log(3)
}

first()
second(third)

console.log('//////////////////////////')

function first() {
    console.log(1)
  }
  
  function second(callback) {
    setTimeout(() => {
      console.log('callback2')
      callback()
    }, 0)
  }
  
  function third() {
    console.log(3)
  }
  
  first()   //đồng bộ
  second(third)  //ko đb

  console.log('start');   //đb

  Promise.resolve()
    .then(function() {   
      console.log('promise 1');  //ko đb
    })
    .then(function() {   
      console.log('promise 2');  //ko đb
    });  

  console.log('end');  //đb

  //Chạy hết các tác vụ đồng bộ trước tiên, sau đó mới chạy các tác vụ ko đồng bộ(callback, promise)
  //Ở đây promise chạy trước callback. vì sao?
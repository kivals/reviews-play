function foo(callback) {
  setTimeout(function() {
    callback('A');
  }, Math.random()*100);
}

function bar(callback) {
  setTimeout(function() {
    callback('B');
  }, Math.random()*100);
}

function baz(callback) {
  setTimeout(function() {
    callback('C');
  }, Math.random()*100);
}
new Promise(resolve => {
  foo(resolve)
}).then(res => {
  console.log(res)
}).then(()=>{
  return new Promise(resolve => {
    bar(resolve)
  })
}).then(res => {
  console.log(res)
}).then(()=>{
  return new Promise(resolve => {
    baz(resolve)
  })
}).then(res => {
  console.log(res)
})
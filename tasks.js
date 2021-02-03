setTimeout(function () {
  console.log("First task done!");
  setTimeout(function () {
    console.log("Second task done!");
    setTimeout(function () {
      console.log("Third task done!");
    }, 2000);
  }, 2000);
}, 2000);

// Example web request with the axios library
// axios.get("http://google.com").then(function(response) {
//   console.log(response.data);
// })

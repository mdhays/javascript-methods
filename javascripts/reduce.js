// The basic concept of reduce is it takes an array and turns it into something else.
// This could be an object or another array.
//The main point is reduce takes something and turns it into something else.

// ageSum will hold our value later on.
  var ageSum = 0;

// We'll start by getting the json file from json-generator.com using jquery.
$.getJSON("http://www.json-generator.com/api/json/get/bHhcHdnoeq?indent=2").then(function(json) {
  window.json = json;

// You could use a for loop to get the info you want. Here we'll use a for loop to get and sum the ages
// in the returned json array of objects.
  
  

  // Commented out for loop to show what was done, but it should work if you uncomment it.
  // for (var i = 0; i<json.length; i++) {
  //   // Setting item equal to the json file with a key value of i (or 0).
  //   var item = json[i];
  //   // Setting ageSum equal to the sum of item.age.
  //   ageSum += item.age;
  //   //This will give us a value of 188.
  //   console.log(ageSum);
  // }

  // Using reduce though, you can do more without writing a for loop.
  // Reduce takes three arguments that are here named all, item, and index.
  // You don't have to call them these though, they're written that way here for simplicity's sake.

  // The all parameter is what you want to return.
  // The item parameter is what you're currently looping over.
  // The index is just that; the index. Whatever number you need it to be.
  ageSum = json.reduce(function(all, item, index) {

    all += item.age;
    return all;
    // The 0 below here is actually the initial value. It looks strange, but it works.
    // You can even set it to an object, allowing you a way to convert an array to an object
    // rather easily.
  },0);
  // Logging ageSum, you can see we once again got 188.
  // It's a lot less to write, and it's way more powerful.
  console.log(ageSum);

});

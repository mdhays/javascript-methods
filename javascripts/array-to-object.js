// Here we'll try and use reduce to turn an array into an object.
$.getJSON("http://www.json-generator.com/api/json/get/bHhcHdnoeq?indent=2").then(function(json) {

  console.log(json);

  // Here we declare a new variable called newObject and set it equal to our function.
  var newObject = json.reduce(function(all, item, index) {
    // Here we're setting all (the value we're returning) to have item.email (the emails in the object
    // we're looping over) be a key with a  value of item.name (the names in the object we're looping over).
    // In essence, it's a simple object with key value pairs.
    all[item.email] = item.name;

    return all;
      // Notice the initial value is set to an empty object.
      // This is how we convert from our current array to a new object.
  }, {});
  console.log(newObject);
});
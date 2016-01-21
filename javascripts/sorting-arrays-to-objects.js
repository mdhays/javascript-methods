// Continuing our walk through some of the possibilities of using reduce, here we sort objects into arrays
// based on key values. In this case, it based off of the value of the gender key.

$.getJSON("http://www.json-generator.com/api/json/get/bHhcHdnoeq?indent=2").then(function(json) {

  var newObject = json.reduce(function(all, item, index) {
    // Here we use push to put the items in their respective arrays.

    all[item.gender].push(item);
  
    return all;
    // Here we set up our empty arrays and values associated with each one.
    // This saves using if statements, as well as being more readable.
  }, {male: [], female: []});
  console.log(newObject);
});
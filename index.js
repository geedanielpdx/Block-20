const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
  ];
  
  function main() {
    // Get the root element
    var rootElement = document.getElementById("root");
  
    // Create an h1 element
    var header = document.createElement("h1");
    header.innerText = "FREELANCERS";
  
    // Append the h1 element to the root element
    rootElement.appendChild(header);
  
    // Create a ul element
    var userList = document.createElement("ul");
  
    // Loop through the users array and create li elements
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
  
      // Create li element for each user
      var listItem = document.createElement("li");
      listItem.innerText = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
  
      // Append the li element to the ul element
      userList.appendChild(listItem);
    }
  
    // Append the ul element to the root element
    rootElement.appendChild(userList);
  }
  
  // Call the main function
  main();
  
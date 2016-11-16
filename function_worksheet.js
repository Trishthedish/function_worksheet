
// 1.
 function hello() {
   console.log("hello!");

 }
hello();
// says: "hello"



//5.
// constructor function

var Person = function(name) {
  this.name = "Ada";
  // you could also add functions to the object.
  this.hello = function() {
    console.log("Hello", this.name);
  };

};

var jamie = new Person("Jamie");

// 
// http://stackoverflow.com/questions/22401553/what-are-all-the-difference-between-function-and-constructor-function-in-javascr

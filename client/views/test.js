Template.test.helpers({
  greeting: function() {
    var greeting;
    greeting = "Hello, this is just a test page.";
    return greeting;
  },
  greeting2: function() {
    return "<p>Hello, this is just a test page.</p>";
  }
});

Template.array.helpers({
  arr: function() {
    var arr = [
      {username: "Dev One", timestamp: "Monday, November 6", content: "Hello there", url: "http://www.google.com"},
      {username: "Dev Eight", timestamp: "Thursday, November 8", content: "Hello again"},
      {username: "Dev Two", timestamp: "Friday", content: "Goodbye"},
      {username: "Dev Four", timestamp: "Monday", content: "Have a nice day"},
      {username: "Dev Twelve", timestamp: "Saturday", content: "Hello!!!!"}
    ];
    return arr;
  }
});

Template.test.events({
  'click h1': function(event) {
    console.log("Clicked h1:",event);
  }
});

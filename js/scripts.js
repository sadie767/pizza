// business logic
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.Price = function() {
  alert(priceArrays);
  if (this.size === "5" && this.toppings === "9") {
      priceArrays.push(13);
      return priceArrays;
    } else if(this.size === "5" && this.toppings === "10" || this.toppings === "8") {
      priceArrays.push(14);
      return priceArrays;
    } else if(this.size === "6" && this.toppings === "9") {
      priceArrays.push(15);
      return priceArrays;
    } else if(this.size === "6" && this.toppings === "10" || this.toppings === "8") {
      priceArrays.push(16);
      return priceArrays;
    } else if(this.size === "7" && this.toppings === "9") {
      priceArrays.push(19);
      return priceArrays;
    } else if(this.size === "7" && this.toppings === "10" || this.toppings === "8") {
      priceArrays.push(20);
      return priceArrays;
    }
};

var multiples;
var sendObject;
var priceArrays = [];

parseInt(priceArrays);
function add(a, b) {
  return a + b;
}
priceArrays.reduce(add, 0);

//user-interface logic$
$(document).ready(function() {
  $("#formPizza").submit(function(event) {
    event.preventDefault();
    var chooseSize = $("#size").val();
    var chooseToppings = $("#toppings").val();

    sendObject = new Pizza(chooseSize, chooseToppings);
    multiples = sendObject.Price();

    $("#showOrder").show();
    $("#showOrder").text("$" + multiples + ".00");
  });
});
//   $("#formDelivery").submit(function(event) {
//     event.preventDefault();
//     var enterName = $("#name").val;
//     var enterAddress = $("#address").val;
//
//     $("formAddress").show();
//     $("showName").show(enterName);
//     $("showAdress").show(enterAddress);
// });

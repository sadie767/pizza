// business logic
function Pizza (size, toppings, number) {
  this.size = size;
  this.toppings = toppings;
  this.number = number;
}

Pizza.prototype.Price = function() {
  if (this.size === "5" && this.toppings === "9") {
    return mediumPrice1;
  } else if(this.size === "5" && this.toppings === "10" || this.toppings === "8") {
      return mediumPrice2 = "$14.00";
    } else if(this.size === "6" && this.toppings === "9") {
      return largePrice1 = "$15.00";
    } else if(this.size === "6" && this.toppings === "10" || this.toppings === "8") {
      return largePrice2 = "$16.00";
    } else if(this.size === "7" && this.toppings === "9") {
      return xxlPrice1 = "$19.00";
    } else if(this.size === "7" && this.toppings === "10" || this.toppings === "8") {
      return xxlPrice2 = "$20.00";
    }
};

var mediumPrice1 = 13;
var mediumPrice2 = 14;
var largePrice1 = 15;
var largePrice2 = 16;
var xxlPrice1 = 19;
var xxlPrice2 = 20;
//user-interface logic$
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var chooseSize = $("#size").val();
    var chooseToppings = $("#toppings").val();
    var chooseNumber = $("#number").val();

    var sendObject = new Pizza(chooseSize, chooseToppings, chooseNumber);
    //alert(sendObject.Price());
  $("#showOrder").show();
  $("#showOrder ").text(sendObject.Price());
  });
});

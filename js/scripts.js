// business logic
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.Price = function() {
  if (this.size === "5" && this.toppings === "9") {
      return mediumPrice1 = 13;
    } else if(this.size === "5" && this.toppings === "10" || this.toppings === "8") {
      return mediumPrice2 = 14;
    } else if(this.size === "6" && this.toppings === "9") {
      return largePrice1 = 15;
    } else if(this.size === "6" && this.toppings === "10" || this.toppings === "8") {
      return largePrice2 = 16;
    } else if(this.size === "7" && this.toppings === "9") {
      return xxlPrice1 = 19;
    } else if(this.size === "7" && this.toppings === "10" || this.toppings === "8") {
      return xxlPrice2 = 20;
    }
};

Pizza.prototype.MyPrice = function() {
  if (sendObject>1) {
  return multiples = sendObject + sendObject;
  }
}

var mediumPrice1 = 13;
var mediumPrice2 = 14;
var largePrice1 = 15;
var largePrice2 = 16;
var xxlPrice1 = 19;
var xxlPrice2 = 20;
var multiples;
var finalPrice;
var parse;
var sendObject;

//user-interface logic$
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var chooseSize = $("#size").val();
    var chooseToppings = $("#toppings").val();

    sendObject = new Pizza(chooseSize, chooseToppings);
    multiples = sendObject.Price();
    parse = parseInt(sendObject);
    $("#showOrder").show();
    $("#showOrder").append("<li>" + "$" + multiples + ".00" + "</li>");
    finalPrice = sendObject.MyPrice();
    $("#finalCost").show();
    $("#finalCost").text(sendObject.MyPrice());
  });
});

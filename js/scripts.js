// business logic
function Pizza (size, toppings, number) {
  this.size = size;
  this.toppings = toppings;
  this.number = number;
}

Pizza.prototype.price = function() {
  if (this.size === 5 && this.toppings === 9) {
    return mediumPrice;
    } else if(this.size === 5 && this.toppings === 10 && this.toppings === 8) {
      return mediumPrice2;
    } else if(this.size === 6 && this.toppings === 9) {
      return largePrice1;
    } else if(this.size === 6 && this.toppings === 10 && this.toppings === 8) {
      return largePrice2;
    } else if(this.size === 7 && this.toppings === 9) {
      return xxlPrice1;
    } else if(this.size === 6 && this.toppings === 10 && this.toppings === 8) {
      return xxlPrice2;
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

  $("#showOrder").show();
  $("#form").text(sendObject.price());
  });
});

// business logic
function Pizza (size, toppings, number) {
  this.size = size;
  this.toppings = toppings;
  this.number = number;
}
// function Toppings (pickles, sardines, lettuce) {
//   this.pickles = pickles;
//   this.sardine = sardines;
//   this.lettuce = lettuce;
// }

//user-interface logic$
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var chooseSize = $("#size").val();
    var chooseToppings = $("#toppings").val();
    var chooseNumber = $("#number").val();

    var sendObject = new Pizza(chooseSize, chooseToppings, chooseNumber);

  $("#showOrder").show();
  $("#showSize").text(sendObject.size);
  $("#showToppings").text(sendObject.toppings);
  $("#showNumber").text(sendObject.number);
  });
});

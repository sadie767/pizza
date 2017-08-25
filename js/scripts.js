// business logic
// function Pizza (size, toppings, number) {
//   this.size = size;
//   this.toppings = [];
//   this.number = number;
// // }
// function Toppings (pickles, sardines, lettuce) {
//   this.pickles = pickles;
//   this.sardine = sardines;
//   this.lettuce = lettuce;
// }

//user-interface logic$
$(document).ready(function() {
  $("#size").change(function() {
    var pizzaSize = $("#size").val();
    alert(pizzaSize);
  });
  $("#toppings").change(function() {
    var pizzaToppings = $("#toppings").val();
    alert(pizzaToppings);
  });
});

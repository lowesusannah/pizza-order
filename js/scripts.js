//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
};

function Toppings(pepperoni, mushrooms, extraCheese) {
  this.pepperoni = pepperoni;
  this.mushrooms = mushrooms;
  this.cheese = extraCheese;
  };


Pizza.prototype.findCost = function(size, toppings) {
  var toppingLength = [this.toppings].length;
  return this.size + toppingLength;
};

//user-interface logic
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var size = parseInt($("#pizza-size").val());

    var toppings = $("input:checkbox[name=toppings]:checked").each(function() {
      var pepperoni = $(this).find("input#pepperoni").val();
      var mushrooms = $(this).find("input#mushrooms").val();
      var extraCheese = $(this).find("input#extra-cheese").val();
      var toppings = parseInt(pepperoni + mushrooms + extraCheese);
      });
    var newPizza = new Pizza(size, toppings);
    var finalPrice = newPizza.findCost(size, toppings);
    $("#total-cost").show();
    $("#total-cost").append("$" + finalPrice + "<br>");
    $("form#pizza-form").hide();
  });
});

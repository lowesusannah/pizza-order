//business logic
function Pizza(sizeParameter, toppingsParameter) {
  this.size = sizeParameter;
  this.toppings = toppingsParameter;
};

function Toppings(pepperoni, mushrooms, extraCheese) {
  this.pepperoni = pepperoni;
  this.mushrooms = mushrooms;
  this.cheese = extraCheese;
  };


Pizza.prototype.findCost = function() {
  return this.size + this.toppings.length;
};

//user-interface logic
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var size = parseInt($("#pizza-size").val());
    var toppingArray = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingArray.push($(this).val());
      });
    var newPizza = new Pizza(size, toppingArray);
    var finalPrice = newPizza.findCost();
    $("#total-cost").show();
    $("#total-cost").append("$" + finalPrice + "<br>");
    $("form#pizza-form").hide();
  });
});

//business logic
function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
};

Pizza.prototype.findCost = function(toppings, size) {
  return this.topings + this.size;
  console.log(toppings, size, totalCost);
};


//user-interface logic
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var toppings = parseInt($("#pizza-size").val());
    var size = $("input:checkbox [name=toppings]:checked").each(function(){
      return parseInt($(this).val());
    });
    var newPizza = new Pizza(toppings, size);
    var finalPrice = newPizza.findCost(newPizza);
    $("#total-cost").show();
    $("#total-cost").append("$" + finalPrice + "<br>");
    $("form#pizza-form").hide();
  });
});

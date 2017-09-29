//business logic
function Pizza(toppings, size) {
  this.toppings = [],
  this.size = size
};

Pizza.prototype.findCost = function(toppings, size) {
  return this.topings + this.size;
};


//user-interface logic
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var size = parseInt($("#pizza-size").val());
    var toppingsInput = $("input:checkbox[name=toppings]:checked").val();
    var toppings = parseInt(toppingsInput);

    //var newPizza = new Pizza(toppingsInput, size);
    //var finalPrice = newPizza.findCost();
    $("#total-cost").show();
    //$("#total-cost").append("$" + finalPrice + "<br>");
    $("form#pizza-form").hide();
  });
});

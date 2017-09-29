//business logic


//user-interface logic
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    $("form#pizza-form").hide();
    $("#total-cost").show();
    $("input:checkbox[name=pizza-toppings]: checked").each(function(){
      var pizzaToppingSelection = ParseInt($(this).val());
      var pizzaSize = ParseInt($("#pizza-size").val());
      var totalCost = (pizzaToppingSelection + pizzaSize);
      $("#total-cost").append("$" + totalCost + "<br>");
    });
  });
});

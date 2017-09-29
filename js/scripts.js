//business logic


//user-interface logic
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var pizzaSizeCost = parseInt($("#pizza-size").val());
    var pizzaToppingCost = parseInt($(this).val());
    $("input:checkbox [name=toppings]:checked").each(function(){
    });
    var totalCost = pizzaToppingCost + pizzaSizeCost;
    $("#total-cost").append("$" + totalCost + "<br>");
    $("#total-cost").show();
    $("form#pizza-form").hide();
  });
});

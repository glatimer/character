$(function() {
  $("form#character").submit(function(event) {

    var characters = $("#personality", "#glasses" , "#hair").val();

    if (personality === "i" && "true" && "b") {
      $("#result").text("Harry");

    }
    else {
      $("#result").text("Ron");
    }
    
  $(".button").click(function() {
    $("#result").show();
  });

  event.preventDefault();

  });
});

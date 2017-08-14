$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var items = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var realItems = items.map(function(item) {
      var inputItem = $("input#" + item).val();
      return inputItem.toUpperCase();
    });
    realItems.sort();

    realItems.forEach(function(itemas){
      $("ul").append("<li>" + itemas + "</li>");
    });


    event.preventDefault();
  });
});

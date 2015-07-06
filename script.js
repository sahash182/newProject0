// food constructor
function Food(name, origin, desc, image) {
  this.name = name;
  this.origin = origin;
  this.desc = desc;
  this.image = image;

  this.items = localStorage.getItem("foods");
  this.key = "foods";
}

function SaveRender() {

}
// Food prototype
Food.prototype = new SaveRender();
Food.prototype.constructor = Food;

// Saving to localStorage

SaveRender.prototype.saveToLs = function(obj) {
  if (this.items) {
    items_json = JSON.parse(this.items);
  } else {
    items_json = [];
  }

  items_json.push(obj);

  localStorage.setItem(this.key, JSON.stringify(items_json));
}
// Template render function

SaveRender.prototype.renderTemplate = function(source, target) {
  var items_json = JSON.parse(this.items);

  var templateFood = _.template($(source).html());

  $(target).append(templateFood(this));

}
// delete post
$(document).on('click', '.delete-food', function(){
 $(this).parents(".food-container").remove();
});


 // $(function(){                    
 //     $('#save-food').click(function() {
 //       $('.modal-fade').modal('hide');        
 //     });                          
 // }); 


// saving users input
$("#save-food").on("click", function() {
  var temp = new Food($("#name").val(), $("#origin").val(), $("#desc").val(), $("#image").val());
  console.log(temp);
  temp.renderTemplate("#template-source", "#target");
  temp.saveToLs(temp);
})

// clear out input fields on modal
$('#save-food').on('hidden', function () {
    $('input').val('');
});


// Page load with the template
function pageLoad() {

  var items_json = JSON.parse(localStorage.getItem("foods"));

  var templateFood = _.template($("#template-source").html());


  _.each(items_json, function(ad) {
    $("#target").append(templateFood(ad));
  });
}

// calling pageload

pageLoad();





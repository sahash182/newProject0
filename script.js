
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

Book.prototype = new SaveRender();
Book.prototype.constructor = Food;

SaveRender.prototype.saveToLs = function(obj) {
  if (items) {
    items_json = JSON.parse(items);
  } else {
    items_json = [];
  }

  items_json.push(obj);

  localStorage.setItem("foods", JSON.stringify(items_json));
}

SaveRender.prototype.renderTemplate = function(source, targe) {
  var items = localStorage.getItem(this.items);


  var template = _.template($(template_source).html());

  $(target).append(templateFood(this));

  _.each(items_json, function(ad) {
    $(target).append(templateFood(ad));
  });
}
$("#save-food").on("click", function() {
  var temp = new Food($("#about").val(), $("#origin").val(), $("#desc").val(), $("#image").val());
  console.log(temp);
  temp.renderTemplate("#template-source", "#target");
  temp.saveToLs(temp);
});

function pageLoad() {
  var items_json = JSON.parse(localStorage.getItem("foods"));

  var templateFood = _.template($("#template-source").html());

  //$(target).append(templateBook(this));

  _.each(items_json, function(ad) {
    $("#target").append(templateFood(ad));
  });
}

pageLoad();










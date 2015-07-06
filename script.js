function Book(title, author, releaseDate, image) {
  this.title = title;
  this.author = author;
  this.releaseDate = releaseDate;
  this.image = image;

  this.items = localStorage.getItem("books");
  this.key = "books";
}

function SaveRender() {

}

Book.prototype = new SaveRender();
Book.prototype.constructor = Book;

SaveRender.prototype.saveToLs = function(obj) {
  if (this.items) {
    items_json = JSON.parse(this.items);
  } else {
    items_json = [];
  }

  items_json.push(obj);

  localStorage.setItem(this.key, JSON.stringify(items_json));
}

SaveRender.prototype.renderTemplate = function(source, target) {
  var items_json = JSON.parse(this.items);

  var templateBook = _.template($(source).html());

  $(target).append(templateBook(this));

  // _.each(items_json, function(ad) {
  //  $(target).append(templateBook(ad));
  // })
}


$("#save-book").on("click", function() {
  var temp = new Book($("#title").val(), $("#author").val(), $("#release-date").val(), $("#image").val());
  console.log(temp);
  temp.renderTemplate("#template-source", "#target");
  temp.saveToLs(temp);
})

function pageLoad() {
  var items_json = JSON.parse(localStorage.getItem("books"));

  var templateBook = _.template($("#template-source").html());

  //$(target).append(templateBook(this));

  _.each(items_json, function(ad) {
    $("#target").append(templateBook(ad));
  });
}

pageLoad();

function Book(title, author, release_date, image) {
  this.title = title;
  this.author = author;
  this.release_date = release_date;
  this.image = image;

  this.items = localStorage.getItem("books");
  this.key = "books";
}

function saveRender() {}

SaveRender.prototype.saveToLs = function(book) {
  if (items) {
    items_json = JSON.parse(items);
  } else {
    items_json = [];
  }

  items_json.push(book);

  localStorage.setItem("books", JSON.stringify(items_json));
}

SaveRender.prototype.renderTemplate = function(template_source, where) {
  var items = localStorage.getItem(this.items);


  var template = _.template($(template_source).html());

  _.each(items_json, function(item) {
    $(where).append(template(item));
  });
}

Book.prototype = new SaveRender();
Book.prototype.constructor = Book;

$(document).ready(function(){

var myBook = new Book("Rakesh's Book", "Rakesh Shrestha", "Today", "Image");
myBook.saveToLs(myBook);

myBook.renderTemplate("#book-template", "#book-container");

var $newBookForm = $('#newBookForm');

$newBookForm.on.submit(function(event) {
   event.preventDefault();
   console.log('Hello');
});



//Closing 












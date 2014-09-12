$.Thumbnails = function (el) { 
  this.$el = $(el);
  this.images = $("img");
  console.log(this.images);
  var $gutter = $("<ul></ul>");
  this.images.each(function(el, idx){

    console.log(idx);
    $gutter.append(idx);
  });
  $(".items").append($gutter);
  var $imageNav = $("<div></div>");
  var $left = $("<a>Left</a>");
  var $right = $("<a>Right</a>");
  $imageNav.append($right);
  $imageNav.append($gutter);
   $imageNav.append($left);
  $("body").append($imageNav);
 
 };

$.fn.thumbnails = function () {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};
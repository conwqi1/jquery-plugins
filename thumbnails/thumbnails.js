$.Thumbnails = function (el) { 
  this.$el = $(el);
  this.images = $("img")
  var $imageNav = //make links between images and 'gutter' whatever thatis
 };

$.fn.cats = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};
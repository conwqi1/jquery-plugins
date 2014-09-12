$.Cats = function (el) { 
  this.$el = $(el);
  this.$images = $('img');
  this.$activeImage = $("img.active");
  this.$activeIndex = 0;
  this.handleLink();
  this.transitioning = false;
};

$.Cats.prototype.handleLink = function(event) {
  $("a").on("click", function(event){
    if(this.transitioning){ return }
    this.transitioning = true;
    var $link = $(event.currentTarget);
    var int = $link.data('dir-code');
    if (int === 1) {
      this.slideLeft();
    } else {
      this.slideRight();
    }
  }.bind(this));
}

$.Cats.prototype.getNextImage = function (integer) {
  this.$activeIndex += integer + 3;
  this.$activeIndex %= 3; 
  this.$nextImage = $(this.$images[this.$activeIndex]);
}

$.Cats.prototype.slide = function(slideDir) {
  var dir = slideDir == -1 ? 'left' : 'right';
  var oppDir = slideDir == 1 ? 'left' : 'right';
  
  //update index
  this.$activeIndex = (this.$activeIndex + slideDir + 3) % 3;
  //find active image to remove
  //find image to display
  this.$nextImage = $(this.$images[this.$activeIndex]);
  //image to display gets dir it's sliding in and active
  //image to remove gets opposite direction
  this.$activeImage.addClass(oppDir)
  this.$nextImage.addClass(dir +  ' active')
  setTimeout(function(){
    this.$nextImage.removeClass(dir)
   }.bind(this), 0)
  var that = this;
  this.$activeImage.one("transitionend", function(event){
    that.$activeImage.removeClass('active left right');
    that.$nextImage.removeClass('left right');
    event.preventDefault();
    
    that.$activeImage = that.$nextImage;
    setTimeout(function(){ that.transitioning = false; }, 0);
  });
}

$.Cats.prototype.slideLeft = function(){
  this.slide(1);
}

$.Cats.prototype.slideRight = function(){
  this.slide(-1);
}

$.fn.cats = function () {
  return this.each(function () {
    new $.Cats(this);
  });
};
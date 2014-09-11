$.Tabs = function (el) { 
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data());
  this.$activeTabPane = $(".tab-pane.active"); //
  this.$el.on('click', "a", function(event){
     this.clickTab(event);
  }.bind(this));
};

$.Tabs.prototype.clickTab = function (event) {
  event.preventDefault();
  this.$activeTabPane = $(".tab-pane.active");
  //grab currently active pane and transition it.
  this.$activeTabPane.addClass("transitioning");
  var $activeLink = $("a.active");
  var $transitionToLink = $(event.currentTarget);
  $activeLink.removeClass("active");
  $transitionToLink.addClass("active");
  var that = this;
  //grab tab to display via the data attr of the active tab link
  $transitionToTab = $( $transitionToLink.attr("href") )
  this.$activeTabPane.one('transitionend', function(event){
    that.$activeTabPane.removeClass("active");
    that.$activeTabPane.removeClass("transitioning");
    $transitionToTab.removeClass("transitioning");
    $transitionToTab.addClass("active");
  });  
  // $(".tab-pane").removeClass("active");
  this.$activeTab = $(event.currentTarget);
}

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};



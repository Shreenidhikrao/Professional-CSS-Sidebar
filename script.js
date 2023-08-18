
document.addEventListener('DOMContentLoaded', function() {
  var links = document.getElementsByClassName('panel-link');
  var contentItems = document.getElementsByClassName('content-item');

  for (var i = 1; i < contentItems.length; i++) {
    contentItems[i].style.display = 'none';
  }

  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener('click', function(e) {
      e.preventDefault();
      var contentId = this.getAttribute('data-content');

      for (var k = 0; k < contentItems.length; k++) {
        contentItems[k].style.display = 'none';
      }

      document.getElementById(contentId).style.display = 'block';
    });
  }

  
});

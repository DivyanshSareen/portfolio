  
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });
  document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  var instance = M.Carousel.init({
    indicators: true
  });


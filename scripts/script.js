function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.854378,-111.795138),
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById('navigation-canvas'),
                                mapOptions);
  var myLatLng = new google.maps.LatLng(34.854378,-111.795138);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}
google.maps.event.addDomListener(window, 'load', initialize);  

var link = document.querySelector(".btn-search");
      var popup = document.querySelector(".modal");
      var close = document.querySelector(".close");
      var form = popup.querySelector("form");
      var storage = localStorage.getItem("btn-search");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("show");
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("show")) {
            popup.classList.remove("show");
          }
        }
      }); 
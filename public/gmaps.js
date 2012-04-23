(function initialize() {
  var fail = function() { console.log ('OH NOEZ!!!') };
  var hai = function(doc) { 
    console.dir(doc); 
    doc[0].placemarks[0].polygon.fillColor = "#FFFFFF"
    doc[0].placemarks[1].polygon.fillColor = "#AA00AA"
    doc[0].placemarks[2].polygon.fillColor = "#A0A0A0"
    parser.processStyles(doc); 
  };
  var myOptions = {
    center: new google.maps.LatLng(39.833, -98.583),
    zoom: 7,
    maxZoom: 7,
    minZoom: 7,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    disableDefaultUI: true
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
      myOptions);
  var parser = new geoXML3.parser({map: map, failedParse: fail, afterParse: hai, zoom: false });
  parser.parse(['overlay.kml']);
})();


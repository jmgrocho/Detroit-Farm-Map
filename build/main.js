window.onload = function() {
  var map;
  map = L.map('map', {
    zoomControl: false
  }).setView([42.33, -83.05], 11);
  L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery <a href="http://cloudmade.com">CloudMade</a>'
  }).addTo(map);
  map.addControl(new L.Control.Zoom({
    position: 'topright'
  }));
  $("#topPanelWrapper").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', function() {
    if (!$(".panelWrapper").hasClass("open")) {
      $(".panelWrapper").addClass("hidden");
    }
    return console.log("test");
  });
  $(".closeButton").click(function() {
    $('#topPanelWrapper').height(80);
    return $('#aboutWrapper').removeClass("open");
  });
  $.getJSON('data/about.json', function(data) {
    $('#about').text(data);
    return $("#aboutLink").click(function() {
      $('#aboutWrapper').removeClass("hidden").addClass("open");
      return $('#topPanelWrapper').height(function(index, height) {
        return height + $("#about").height();
      });
    });
  });
  return $.getJSON('data/map.geojson', function(data) {
    var gjLayer;
    gjLayer = L.geoJson(data, {
      onEachFeature: function(feature, layer) {
        var popupTmp;
        popupTmp = window.JST["src/templates/popup"](feature.properties);
        return layer.bindPopup(popupTmp);
      }
    });
    return gjLayer.addTo(map);
  });
};

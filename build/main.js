window.onload = function() {
  var aboutTmp, map, markerArray;
  L.Icon.Default.imagePath = "bower_components/leaflet/dist/images";
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
  aboutTmp = window.JST["src/templates/about"]();
  $("#about").html(aboutTmp);
  $("#topPanelWrapper").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', function() {
    if (!$(".panelWrapper").hasClass("open")) {
      return $(".panelWrapper").addClass("hidden");
    }
  });
  $(".closeButton").click(function() {
    $('#topPanelWrapper').height(80);
    return $('.panelWrapper').removeClass("open");
  });
  $("nav a").click(function(event) {
    var el;
    el = $(event.currentTarget).data('el');
    if (!$('#' + el + 'Wrapper').hasClass("open")) {
      $('.panelWrapper').addClass('hidden').removeClass('open');
      $('#' + el + 'Wrapper').removeClass("hidden").addClass("open");
      return $('#topPanelWrapper').height(function(index, height) {
        var fullHeight;
        fullHeight = $(window).height() - 96;
        if (fullHeight < $("#" + el).height() + 110) {
          $('#' + el + 'Wrapper').height(fullHeight - 66).css("overflow-y", "scroll");
          return fullHeight;
        } else {
          return $("#" + el).height() + 110;
        }
      });
    } else {
      return $('.closeButton').trigger('click');
    }
  });
  markerArray = [];
  return $.getJSON('data/map.geojson', function(data) {
    var gjLayer, listTmp;
    gjLayer = L.geoJson(data, {
      onEachFeature: function(feature, layer) {
        var popupTmp;
        popupTmp = window.JST["src/templates/popup"](feature.properties);
        markerArray.push({
          maker: layer.bindPopup(popupTmp),
          data: feature.properties
        });
        return markerArray.sort(function(a, b) {
          return a.data.Name.localeCompare(b.data.Name);
        });
      }
    });
    listTmp = window.JST["src/templates/list"]({
      "markerArray": markerArray
    });
    $("#list").html(listTmp);
    $(".listLink").click(function(event) {
      var index;
      index = $(event.currentTarget).data('index');
      return markerArray[index].maker.openPopup();
    });
    return gjLayer.addTo(map);
  });
};

window.onload = ()->
  L.Icon.Default.imagePath = "bower_components/leaflet/dist/images"
  map = L.map('map', {zoomControl: false}).setView([42.33, -83.05], 11)
  L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
     maxZoom: 18,
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery <a href="http://cloudmade.com">CloudMade</a>'
  }).addTo(map)

  #add zoom control
  map.addControl new L.Control.Zoom({position:'topright'})
  
  #bind events
  $("#topPanelWrapper").on 'transitionend webkitTransitionEnd oTransitionEnd otransitionend', ()->
    if not $(".panelWrapper").hasClass("open")
      $(".panelWrapper").addClass("hidden")

  $(".closeButton").click ()->
    $('#topPanelWrapper').height 80
    $('#aboutWrapper').removeClass("open")

  #load about varbage
  $.getJSON 'data/about.json', (data)->
    $('#about').html data
    $("#aboutLink").click ()->
      if not $(".panelWrapper").hasClass("open")
        $('#aboutWrapper').removeClass("hidden").addClass("open")
        $('#topPanelWrapper').height (index, height)->
          return height + $("#about").height() + 20
      else
        $('.closeButton').trigger('click')

  #load farm data
  $.getJSON 'data/map.geojson', (data)->
    gjLayer = L.geoJson data,
      onEachFeature: (feature, layer)->
        popupTmp = window.JST["src/templates/popup"](feature.properties)
        layer.bindPopup(popupTmp)

    gjLayer.addTo(map)

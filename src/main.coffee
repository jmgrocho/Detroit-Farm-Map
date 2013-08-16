window.onload = ()->

  #set image path
  L.Icon.Default.imagePath = "bower_components/leaflet/dist/images"
  map = L.map('map', {zoomControl: false}).setView([42.33, -83.05], 11)
  L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
     maxZoom: 18,
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery <a href="http://cloudmade.com">CloudMade</a>'
  }).addTo(map)

  #add zoom control
  map.addControl new L.Control.Zoom({position:'topright'})
  
  
  aboutTmp = window.JST["src/templates/about"]()
  $("#about").html(aboutTmp)

  
  #bind events
  $("#topPanelWrapper").on 'transitionend webkitTransitionEnd oTransitionEnd otransitionend', ()->
    if not $(".panelWrapper").hasClass("open")
      $(".panelWrapper").addClass("hidden")

  $(".closeButton").click ()->
    $('#topPanelWrapper').height 80
    $('.panelWrapper').removeClass("open")

  $("nav a").click (event)->
      el = $(event.currentTarget).data('el')
      
      if not $('#'+el+'Wrapper').hasClass("open")
        $('.panelWrapper').addClass('hidden').removeClass('open')
        $('#'+el+'Wrapper').removeClass("hidden").addClass("open")
        $('#topPanelWrapper').height (index, height)->
          fullHeight = $(window).height() - 96
          if fullHeight < $("#"+el).height() + 110
            $('#'+el+'Wrapper').height(fullHeight - 66).css("overflow-y", "scroll")
            return fullHeight
          else
            return $("#"+el).height() + 110

      else
        $('.closeButton').trigger('click')

  markerArray = []
  #load farm data
  $.getJSON 'data/map.geojson', (data)->
    gjLayer = L.geoJson data,
      onEachFeature: (feature, layer)->
        popupTmp = window.JST["src/templates/popup"](feature.properties)
        markerArray.push({maker: layer.bindPopup(popupTmp), data:feature.properties})
        markerArray.sort (a,b)->
          return a.data.Name.localeCompare(b.data.Name)

    listTmp = window.JST["src/templates/list"]({"markerArray": markerArray})
    $("#list").html(listTmp)
    $(".listLink").click (event)->
      index = $(event.currentTarget).data('index')
      markerArray[index].maker.openPopup()

    gjLayer.addTo(map)

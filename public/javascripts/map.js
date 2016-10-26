/**
 * Created by MHI on 06/10/2016.
 */
function initMap() {
    var myLatlng = new google.maps.LatLng(-24.96572,-53.41048);
    var mapOptions = {
        zoom: 15,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var isDraggable=false;
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        draggable:isDraggable,
        title:"Drag me!"
    });
    var setDraggable=function () {
        isDraggable=true;
        console.log(isDraggable)
    };
    var contentString = '<div id="content"> <button onclick="setDraggable();">VAI FILHÃO</button> </div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

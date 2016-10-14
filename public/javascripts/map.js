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

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        draggable:true,
        title:"Drag me!"
    });
}

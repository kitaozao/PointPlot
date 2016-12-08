/**
 * Created by MHI on 06/10/2016.
 */


var imagens_gravidade=[];
var imagens_tipo=[];
var markers=[];
var map;
var iconbool=0;

var Points = [
    [0,2,-24.971561, -53.454853],
    [1,2,-24.986519, -53.446694],
    [0,2,-24.989768, -53.453266],
    [4,2,-24.964425, -53.466590],
    [2,1,-24.961530, -53.464795],
    [4,0,-24.961058, -53.454130],
    [4,0,-24.951947, -53.448216],
    [3,0,-24.945199, -53.438322],
    [4,2,-24.981137, -53.478901],
    [3,1,-24.989415, -53.481123],
    [4,2,-24.989998, -53.483730],
    [3,4,-24.988578, -53.482615],
    [2,1,-24.987004, -53.475764],
    [4,2,-24.984982, -53.480235],
    [1,0,-24.976482, -53.470794],
    [1,1,-24.973331, -53.470644],
    [4,0,-24.971604, -53.466005],
    [0,4,-24.970452, -53.465899],
    [1,3,-24.970264, -53.470436],
    [1,1,-24.962647, -53.464824],
    [1,1,-24.959320, -53.460693],
    [0,0,-24.956655, -53.458461],
    [2,1,-24.956655, -53.458461],
    [3,0,-24.951619, -53.455233],
    [2,1,-24.948073, -53.453881],
    [4,4,-24.946278, -53.455061],
    [3,2,-24.943921, -53.463529],
    [0,4,-24.943649, -53.467778],
    [0,0,-24.943469, -53.471340],
    [3,1,-24.943304, -53.473775],
    [3,3,-24.942695, -53.482579],
    [2,1,-24.949369, -53.490378],
    [4,1,-24.985699, -53.443639],
    [0,0,-24.982957, -53.443843],
    [4,4,-24.970933, -53.442863],
    [4,3,-24.965564, -53.449987],
    [2,1,-24.945027, -53.433655],
    [1,0,-24.946035, -53.448111],
    [0,4,-24.964574, -53.431578],
    [1,0,-24.954547, -53.432703],
    [4,2,-24.970973, -53.443998],
    [4,3,-24.972460, -53.454863],
    [1,0,-24.963393, -53.454354],
    [4,2,-24.979791, -53.469987],
    [4,2,-24.975431, -53.470735],
    [0,1,-24.965104, -53.469980],
    [0,0,-24.971415, -53.488866],
    [2,2,-24.967748, -53.484577],
    [2,3,-24.965997, -53.506810],
    [0,1,-24.953055, -53.499274],
    [2,4,-24.955024, -53.471808],
    [2,4,-24.955157, -53.453813],
    [0,4,-24.969280, -53.465208],
    [1,1,-24.973284, -53.455041],
    [4,1,-24.986769, -53.449808],
    [0,1,-24.964469, -53.405695],
    [2,4,-24.965939, -53.404125],
    [4,3,-24.948662, -53.417848],
    [1,1,-24.933603, -53.433630],
    [1,0,-24.928224, -53.433669],
    [4,4,-24.924567, -53.437974],
    [0,2,-24.926907, -53.442167],
    [0,1,-24.937246, -53.443750]
];

function addMarkers(points,markers) {

    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        var marker=[];
        marker[0]=point[0];
        marker[1]=point[1];
        marker[2]= new google.maps.Marker({
            position: {lat: point[2], lng: point[3]},
            draggable:false,
            setDraggable: false
        });

        markers[i]=marker;
    }
}

function changeType(markers) {
    var marker=[];
    for(var i=0; i<markers.length;i++ ) {
        marker=markers[i];
        if(iconbool==1) {
            for(var j=0;j<5;j++){
                if(marker[0]==j){
                    marker[2].setIcon(imagens_gravidade[j]);
                }
            }

        }else if (iconbool==0) {
            for(var j=0;j<5;j++){
                if(marker[1]==j){
                    marker[2].setIcon(imagens_tipo[j]);
                }

            }
        }
    }
}


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: -24.9554503, lng: -53.4552361},
        mapTypeControl  : true,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });


    /**var contentString = '<div id="content"> <button onclick="setDraggable();">DRAG</button> </div>';*/

    imagens_gravidade[0]={
        url:'/assets/images/Icons/Obito.png'
    }
    imagens_gravidade[1]={
        url:'/assets/images/Icons/Gravissimo.png'
    }
    imagens_gravidade[2]={
        url:'/assets/images/Icons/Grave.png'
    }
    imagens_gravidade[3]={
        url:'/assets/images/Icons/leve.png'
    }
    imagens_gravidade[4]={
        url:'/assets/images/Icons/SemVitimas.png'
    }

    imagens_tipo[0]={
        url:'/assets/images/Icons/Caminhao.png'
    }
    imagens_tipo[1]={
        url:'/assets/images/Icons/Carro.png'
    }
    imagens_tipo[2]={
        url:'/assets/images/Icons/Moto.png'
    }
    imagens_tipo[3]={
        url:'/assets/images/Icons/Bicicleta.png'
    }
    imagens_tipo[4]={
        url:'/assets/images/Icons/Outros.png'
    }


    addMarkers(Points,markers);


    /**plot de marcadores*/
    for(var i=0; i<markers.length;i++ ){
        var marker=markers[i];
        marker[2].setMap(map);
    }

    /**alteração de icone*/
    changeType(markers);

}

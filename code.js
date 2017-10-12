var locations = [
    [
        "48.465520, -123.308269 Munchies ",
        48.465520, 
        -123.308269
    ],
    [
    		"48.467883, -123.310966 Carsa Gym ",
        48.467883, 
        -123.310966
    ],
    [
    		"48.463423, -123.309931 Biblio Cafe ",
    		48.463423, 
    		-123.309931
    ]
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
       
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        cnt++;
          infowindow.setContent(locations[i][0]+cnt);
          infowindow.open(map, marker);
        }
      })(marker, i));
     
     

}
 var cnt = 0;

function counting() {
cnt++;
alert(cnt);    
    }
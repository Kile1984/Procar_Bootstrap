function initMap() {
		var myLatLng = {lat: 44.753683, lng: 20.487335};
		var map = new google.maps.Map(document.getElementById('map'), {
      		center: myLatLng,
      		zoom: 17,
      		mapTypeId:google.maps.MapTypeId.HYBRID       
 	});
		var marker = new google.maps.Marker({
      		position: myLatLng,
      		map: map,
          animation: google.maps.Animation.BOUNCE,
      		title: "Ilija Žikić"
    });
}
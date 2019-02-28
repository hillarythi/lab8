function initMap() {
	// add your code here
	L.mapquest.key = 'kadsyUavKQrLeAT3wyKYUXAcPV7QWX9a';

	//'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map',{
		center: [32.878852, -117.235932],
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});

	//Add a marker to the map
	L.marker([32.878852, -117.235932]).addTo(map);
}
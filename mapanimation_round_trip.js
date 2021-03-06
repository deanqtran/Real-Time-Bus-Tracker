// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGVhbnRyYW4iLCJhIjoiY2wwcTA5YjUyMjVqcDNpczVzdmtpMm81OSJ9.ionttsD5kyTamqh8dIe_rA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker()
	.setLngLat(busStops[0])
	.addTo(map);
	
// counter here represents the index of the current bus stop
let counter = 0;
let direction = 1;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
    setTimeout(() => {

    if (direction == 1 && counter >= busStops.length) {
		direction = -1;
		counter--;
	}
    else if (direction == -1 && counter < 0) {
		direction = +1;
		counter++;
		//return; // this line is used to stop after 1-round trip; commenting out this line will continiously move forever until close the browser
	}

	marker.setLngLat(busStops[counter]);
	counter = counter + direction*1;
	move();
  }, 1000);
  
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}

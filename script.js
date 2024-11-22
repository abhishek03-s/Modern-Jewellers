// Example JavaScript to initialize map (using Google Maps API)
function initMap() {
    var storeLocation = { lat: 40.748817, lng: -73.985428 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: storeLocation,
    });
    var marker = new google.maps.Marker({
        position: storeLocation,
        map: map,
        title: "Modern Jewellers",
    });
}

// autocomplete.js

// Initialize Google Autocomplete
var autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('location'),
    {
        types: ['geocode']  // Restrict results to addresses
    }
);

// Optional: Restrict autocomplete to a specific country (e.g., United States)
autocomplete.setComponentRestrictions({ 'country': ['us'] });

// Optional: Customize the placeholder text for the autocomplete input
autocomplete.setFields(['address_components', 'geometry', 'name']);

// Optional: Add listener to handle when a place is selected
autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    // Do something with the selected place
    console.log(place.name);
    console.log(place.formatted_address);
    console.log(place.geometry.location.lat());
    console.log(place.geometry.location.lng());
});

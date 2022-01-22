export const calculateManhattanDistance = ([latitude, longitude], [userLatitude, userLongitude]) => {

    // get user coordinates
    // const coordinates = localStorage.getItem("coordinates").split(',');
    const initialLat = toRadians(latitude);
    const initialLon = toRadians(longitude);

    const finalLat = toRadians(userLatitude);
    const finalLon = toRadians(userLongitude);

    // convert to radians
    function toRadians (angle) {
        return angle * (Math.PI / 180);
    }

    // radius of Earth in km
    const R = 6371;

    // haversine formula for delta_lat
    const dLat = initialLat - finalLat;
    const lat_a = Math.sin(dLat / 2) ** 2;
    const lat_c = 2 * Math.atan2(Math.sqrt(lat_a), Math.sqrt(1 - lat_a));
    const lat_d = lat_c * R;

    // haversine formula for delta_lon
    const dLon = initialLon - finalLon;
    const lon_a = Math.sin(dLon / 2) ** 2;
    const lon_c = 2 * Math.atan2(Math.sqrt(lon_a), Math.sqrt(1 - lon_a));
    const lon_d = lon_c * R;

    // calculate distance
    let distance = lat_d + lon_d;
    distance = distance * 1000;
    distance = distance / 1000;
    return distance.toFixed(2);
}


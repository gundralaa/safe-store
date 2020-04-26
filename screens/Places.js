import React from 'react';
import { UrlTile } from 'react-native-maps';

const API_KEY = 'AIzaSyD8o4Tdpkq3sjirUXL1uq0QxcctNVbD6UY';
const RADIUS = 6000;
class Places {
    getPlacesUrl(longLat) {
        var NEARBY_SEARCH = new URL("https://maps.googleapis.com/maps/api/place/nearbysearch/json");
        NEARBY_SEARCH.searchParams.append("location", 
            longLat.latitude.toString() + "," + longLat.longitude.toString());
        NEARBY_SEARCH.searchParams.append("radius", RADIUS.toString());
        NEARBY_SEARCH.searchParams.append("type", "store");
        NEARBY_SEARCH.searchParams.append("key", API_KEY);
        var url = NEARBY_SEARCH.href.slice(0, 60) + NEARBY_SEARCH.href.slice(61, NEARBY_SEARCH.href.length);
        //console.log(url)
        return url;
    }
    getZipCodeUrl(longLat) {
        var ZIP_CODE_URL = new URL("https://maps.googleapis.com/maps/api/geocode/json");
        var length = ZIP_CODE_URL.href.length;
        ZIP_CODE_URL.searchParams.append("latlng", longLat.latitude.toString() + "," + longLat.longitude.toString())
        ZIP_CODE_URL.searchParams.append("key", API_KEY);
        var url = ZIP_CODE_URL.href.slice(0, length - 1) + ZIP_CODE_URL.href.slice(length, ZIP_CODE_URL.href.length);
        console.log(url);
        return url;
    }
    getShopsUrl(longLat) {
        var SHOPS_URL = new URL("https://safestoreapi.herokuapp.com/fetchstore/");
        SHOPS_URL.searchParams.append("lat", longLat.latitude.toString());
        SHOPS_URL.searchParams.append("long", longLat.longitude.toString());
        var url = SHOPS_URL.href;
        console.log(url);
        return url;
    }
    getSignUpUrl(id, imc, time) {
        var SIGN_UP = new URL("https://safestoreapi.herokuapp.com/addperson/");
        SIGN_UP.searchParams.append("id", id.toString());
        SIGN_UP.searchParams.append("slot", time.toString());
        SIGN_UP.searchParams.append("imc", imc ? 't' : 'f');
        var url = SIGN_UP.href;
        console.log(url);
        return url;
    }
}

export default Places;
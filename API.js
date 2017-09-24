ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.75399400, 37.62209300],
            zoom: 16
        });
    }
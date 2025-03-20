// Initialisation de la carte
var map = new ol.Map({
    target: "map",
    layers: [
        // Fond OpenStreetMap
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),

        // Ajout d'une couche WMS (Géologie du Maroc - BRGM)
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/EHTP/wms?', // Corrige l'URL pour pointer vers WMS
                params: { 
                    'LAYERS': 'EHTP:Provinces', 
                    'TILED': true,
                    'FORMAT': 'image/png'
                },
                
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/EHTP/wms?', // Corrige l'URL pour pointer vers WMS
                params: { 
                    'LAYERS': 'EHTP:Villes', 
                    'TILED': true,
                    'FORMAT': 'image/png'
                },
                
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/EHTP/wms?', // Corrige l'URL pour pointer vers WMS
                params: { 
                    'LAYERS': 'EHTP:Region Casa_Settat', 
                    'TILED': true,
                    'FORMAT': 'image/png'
                },
                
            })
        }),

      
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-6.8498, 33.9716]), // Coordonnées de Rabat
        zoom: 6
    })
});


// Ajouter des contrôles OpenLayers
map.addControl(new ol.control.OverviewMap()); // Mini-carte
map.addControl(new ol.control.FullScreen()); // Mode plein écran
map.addControl(new ol.control.ZoomToExtent({ 
    extent: ol.proj.transformExtent([-10, 27, -1, 36], 'EPSG:4326', 'EPSG:3857') 
})); // Zoom sur le Maroc
map.addControl(new ol.control.ScaleLine()); // Barre d'échelle
map.addControl(new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326'
})); // Affichage des coordonnées du curseur
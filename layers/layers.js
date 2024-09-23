var wms_layers = [];


        var lyr_SsateliteGoogle_0 = new ol.layer.Tile({
            'title': 'Ssatelite Google',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_miq_1 = new ol.format.GeoJSON();
var features_miq_1 = format_miq_1.readFeatures(json_miq_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_miq_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_miq_1.addFeatures(features_miq_1);
var lyr_miq_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_miq_1, 
                style: style_miq_1,
                popuplayertitle: "miq",
                interactive: true,
    title: 'miq<br />\
    <img src="styles/legend/miq_1_0.png" /> -<br />\
    <img src="styles/legend/miq_1_1.png" /> Jalan<br />\
    <img src="styles/legend/miq_1_2.png" /> L Shofian<br />\
    <img src="styles/legend/miq_1_3.png" /> <br />'
        });

lyr_SsateliteGoogle_0.setVisible(true);lyr_miq_1.setVisible(true);
var layersList = [lyr_SsateliteGoogle_0,lyr_miq_1];
lyr_miq_1.set('fieldAliases', {'ID': 'ID', 'Nama': 'Nama', 'Ket': 'Ket', 'Luas': 'Luas', });
lyr_miq_1.set('fieldImages', {'ID': 'TextEdit', 'Nama': 'TextEdit', 'Ket': 'TextEdit', 'Luas': 'TextEdit', });
lyr_miq_1.set('fieldLabels', {'ID': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Ket': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_miq_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
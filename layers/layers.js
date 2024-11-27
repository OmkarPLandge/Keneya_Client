var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Keneya_Growth_Status_1 = new ol.format.GeoJSON();
var features_Keneya_Growth_Status_1 = format_Keneya_Growth_Status_1.readFeatures(json_Keneya_Growth_Status_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keneya_Growth_Status_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keneya_Growth_Status_1.addFeatures(features_Keneya_Growth_Status_1);
var lyr_Keneya_Growth_Status_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Keneya_Growth_Status_1, 
                style: style_Keneya_Growth_Status_1,
                popuplayertitle: "Keneya_Growth_Status",
                interactive: true,
    title: 'Keneya_Growth_Status<br />\
    <img src="styles/legend/Keneya_Growth_Status_1_0.png" /> Beans<br />\
    <img src="styles/legend/Keneya_Growth_Status_1_1.png" /> Maize<br />\
    <img src="styles/legend/Keneya_Growth_Status_1_2.png" /> Potato<br />\
    <img src="styles/legend/Keneya_Growth_Status_1_3.png" /> Vegetables<br />\
    <img src="styles/legend/Keneya_Growth_Status_1_4.png" /> Wheat<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Keneya_Growth_Status_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Keneya_Growth_Status_1];
lyr_Keneya_Growth_Status_1.set('fieldAliases', {'accuracy': 'accuracy', 'area_ha': 'area_ha', 'country': 'country', 'crop': 'crop', 'farm_id': 'farm_id', 'soc_gm_kg': 'soc_gm_kg', 'april_stage': 'april_stage', 'may_stage': 'may_stage', 'june_stage': 'june_stage', 'july_stage': 'july_stage', 'aug_stage': 'aug_stage', 'sep_stage': 'sep_stage', });
lyr_Keneya_Growth_Status_1.set('fieldImages', {'accuracy': 'TextEdit', 'area_ha': 'TextEdit', 'country': 'TextEdit', 'crop': 'TextEdit', 'farm_id': 'TextEdit', 'soc_gm_kg': 'TextEdit', 'april_stage': 'TextEdit', 'may_stage': 'TextEdit', 'june_stage': 'TextEdit', 'july_stage': 'TextEdit', 'aug_stage': 'TextEdit', 'sep_stage': 'TextEdit', });
lyr_Keneya_Growth_Status_1.set('fieldLabels', {'accuracy': 'inline label - always visible', 'area_ha': 'inline label - always visible', 'country': 'inline label - always visible', 'crop': 'inline label - always visible', 'farm_id': 'inline label - always visible', 'soc_gm_kg': 'inline label - always visible', 'april_stage': 'inline label - always visible', 'may_stage': 'inline label - always visible', 'june_stage': 'inline label - always visible', 'july_stage': 'inline label - always visible', 'aug_stage': 'inline label - always visible', 'sep_stage': 'inline label - always visible', });
lyr_Keneya_Growth_Status_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
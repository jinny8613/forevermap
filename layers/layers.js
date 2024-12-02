var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "국민의 숲",
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 국민의 숲'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "휴양림",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 휴양림'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "산촌마을",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 산촌마을'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'국민의숲 일련번호': '국민의숲 일련번호', '국민의숲 유형내용': '국민의숲 유형내용', '국민의숲 관리소명': '국민의숲 관리소명', '국민의숲 주소': '국민의숲 주소', 'Latitude': 'Latitude', 'Longitude': 'Longitude', '국민의숲 전화번호': '국민의숲 전화번호', '국민의숲 관리기관명': '국민의숲 관리기관명', '최초작성일시': '최초작성일시', '최종수정일시': '최종수정일시', });
lyr__2.set('fieldAliases', {'휴양림ID': '휴양림ID', '휴양림명': '휴양림명', '시도명': '시도명', '휴양림구분 명': '휴양림구분 명', '최대수용수': '최대수용수', '입장요금안내내용': '입장요금안내내용', '숙박가능여부': '숙박가능여부', '주요시설명': '주요시설명', '도로명주소': '도로명주소', 'Latitude': 'Latitude', 'Longitude': 'Longitude', '관리기관명': '관리기관명', '휴양림전화번호': '휴양림전화번호', '홈페이지URL': '홈페이지URL', '제공기관코드': '제공기관코드', '제공기관명': '제공기관명', '최초작성일시': '최초작성일시', '최종수정일시': '최종수정일시', });
lyr__3.set('fieldAliases', {'VLLG_IFRA_INFO_ID': 'VLLG_IFRA_INFO_ID', '마을명': '마을명', 'VLLG_ZIPCD': 'VLLG_ZIPCD', '주소': '주소', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'VLLG_ENGLS_ADDR': 'VLLG_ENGLS_ADDR', '홈페이지': '홈페이지', });
lyr__1.set('fieldImages', {'국민의숲 일련번호': '', '국민의숲 유형내용': '', '국민의숲 관리소명': '', '국민의숲 주소': '', 'Latitude': '', 'Longitude': '', '국민의숲 전화번호': '', '국민의숲 관리기관명': '', '최초작성일시': '', '최종수정일시': '', });
lyr__2.set('fieldImages', {'휴양림ID': 'TextEdit', '휴양림명': 'TextEdit', '시도명': 'TextEdit', '휴양림구분 명': 'TextEdit', '최대수용수': 'TextEdit', '입장요금안내내용': 'TextEdit', '숙박가능여부': 'TextEdit', '주요시설명': 'TextEdit', '도로명주소': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', '관리기관명': 'TextEdit', '휴양림전화번호': 'TextEdit', '홈페이지URL': 'TextEdit', '제공기관코드': 'TextEdit', '제공기관명': 'TextEdit', '최초작성일시': 'TextEdit', '최종수정일시': 'TextEdit', });
lyr__3.set('fieldImages', {'VLLG_IFRA_INFO_ID': '', '마을명': '', 'VLLG_ZIPCD': '', '주소': '', 'Latitude': '', 'Longitude': '', 'VLLG_ENGLS_ADDR': '', '홈페이지': '', });
lyr__1.set('fieldLabels', {'국민의숲 일련번호': 'hidden field', '국민의숲 유형내용': 'hidden field', '국민의숲 관리소명': 'inline label - visible with data', '국민의숲 주소': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', '국민의숲 전화번호': 'inline label - visible with data', '국민의숲 관리기관명': 'no label', '최초작성일시': 'hidden field', '최종수정일시': 'hidden field', });
lyr__2.set('fieldLabels', {'휴양림ID': 'hidden field', '휴양림명': 'inline label - visible with data', '시도명': 'hidden field', '휴양림구분 명': 'inline label - visible with data', '최대수용수': 'hidden field', '입장요금안내내용': 'hidden field', '숙박가능여부': 'inline label - visible with data', '주요시설명': 'inline label - visible with data', '도로명주소': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', '관리기관명': 'hidden field', '휴양림전화번호': 'inline label - visible with data', '홈페이지URL': 'hidden field', '제공기관코드': 'hidden field', '제공기관명': 'hidden field', '최초작성일시': 'hidden field', '최종수정일시': 'hidden field', });
lyr__3.set('fieldLabels', {'VLLG_IFRA_INFO_ID': 'hidden field', '마을명': 'inline label - visible with data', 'VLLG_ZIPCD': 'hidden field', '주소': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'VLLG_ENGLS_ADDR': 'header label - visible with data', '홈페이지': 'inline label - visible with data', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
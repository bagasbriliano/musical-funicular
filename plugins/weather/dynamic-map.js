var map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://api.maptiler.com/maps/basic/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // style URL
    center: [115, 0], // starting position [lng, lat]
    zoom: 4// starting zoom
});
map.on('load', function() {
	map.addSource("contours", {
    type: "vector",
    url: "https://tiles.circlegeo.com/data/indocg.json",
});
       
// tunggu map nya di muat sempurna
map.addSource('ecmwf-1',{
	type: 'raster',
    scheme: "tms",
    tiles: [
    'https://signature.bmkg.go.id/api21/mpl_req/ecmwf/tp24/1000/2023032500/2023032900/{z}/{x}/{y}.png?ci=1&overlays=contourf'
    ]
})

map.addLayer({
	id: "ecmwf-1",
	type: "raster",
	source: "ecmwf-1",
	minzoom: 0,
	maxzoom: 22,
	layout: {
		'visibility': 'visible'
	},
	paint: {
		"raster-opacity": 1,
	},
})
    

map.addLayer({
	id: "indocg",
	type: "line",
	source: "contours",
	"source-layer": "indocg",
	layout: {
		"line-join": "round",
		"line-cap": "round",
	},
	paint: {
		"line-color": "#000",
		"line-width": 1,
	},
});
})
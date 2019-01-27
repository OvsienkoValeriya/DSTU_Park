var mymap = L.map('mapid',{measureControl:true, drawControl:true}).setView([47.2403, 39.7108], 17);
L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo(mymap);

$(window).on("resize", function () { $("#mapid").height($(window).height()-16); mymap.invalidateSize(); }).trigger("resize");

L.control.mousePosition().addTo(mymap); 


var runnerIcon = L.icon({
	iconUrl:"img/running-person.png",
	iconSize:[24,24]
})

var crossIcon = L.icon({
	iconUrl:"img/cross.png",
	iconSize:[24,24]
})

var monumentIcon = L.icon({
	iconUrl:"img/capitol-building.png",
	iconSize:[24,24]
})

var childIcon = L.icon({
	iconUrl:"img/pacifier.png",
	iconSize:[24,24]
})

var sportIcon = L.icon({
	iconUrl:"img/dumbbell.png",
	iconSize:[24,24]
})


L.marker([47.240938, 39.709492],{icon:runnerIcon})
.addTo(mymap)
.bindPopup('<p>Легкоатлетический манеж ДГТУ</p>');


L.marker([47.23927, 39.711119], {icon:crossIcon})
.addTo(mymap)
.bindPopup('<p>Храм св.Татианы</p>');

L.marker([47.239274, 39.710392], {icon:monumentIcon})
.addTo(mymap)
.bindPopup('<p>Памятник студентам и сотрудникам РИСХМ</p>');

L.marker([47.240273, 39.711268], {icon:childIcon})
.addTo(mymap)
.bindPopup('<p>Детская площадка</p>');

L.marker([47.241032, 39.711511], {icon:sportIcon})
.addTo(mymap)
.bindPopup('<p>Спортивная площадка</p>');



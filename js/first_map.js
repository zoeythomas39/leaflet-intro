var map = L.map('map').setView([29.651007, -82.325184], 14.5);

L.tileLayer('https://api.mapbox.com/styles/v1/zoeywillow/cm3p31vr3005j01slhvhi5hvx/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiem9leXdpbGxvdyIsImEiOiJjbTNwMnhyb2wwMDUzMmlweXNsNWg1MGRmIn0.YJtCTti83uHATKDrWg8kxQ', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var uc = L.marker([29.65236, -82.32440]).addTo(map);
var karmaCream = L.marker([29.652282167040266, -82.33063121886296]).addTo(map);
var howBazar = L.marker([29.65120878337884, -82.32564698222801]).addTo(map);
var depot = L.marker([29.64518091258214, -82.32258433760312]).addTo(map);
var boDiddley = L.marker([29.651756725405505, -82.3224449282561]).addTo(map);
var lynx = L.marker([29.64634, -82.32471]).addTo(map);
var hearAgain = L.marker([29.650176375893036, -82.32375917439167]).addTo(map);
uc.bindPopup("<b>University Club</b><br>Gainesville's only LGBTQ+ nightclub");
karmaCream.bindPopup("<b>Karma Cream</b><br>Vegan café with ice cream, coffee and quick bites");
howBazar.bindPopup("<b>How Bazar</b><br>Secondhand clothing store and community space");
depot.bindPopup("<b>Depot
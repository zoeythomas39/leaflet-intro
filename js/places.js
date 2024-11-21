var map = L.map('map2').setView([28.181041,-82.296698], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/zoeywillow/cm3qjh3zn003701sqdesi8ztw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiem9leXdpbGxvdyIsImEiOiJjbTNwMnhyb2wwMDUzMmlweXNsNWg1MGRmIn0.YJtCTti83uHATKDrWg8kxQ', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

places=[{"Facility":"ALL WOMEN'S HEALTH CENTER OF SARASOTA","StreetAddress":"2700 S TAMIAMI TRL STE 5","City":"SARASOTA","Zip":"34239-4505","Latitude":27.309386,"Longitude":-82.530309,"County":"Sarasota County"},
    {"Facility":"ALL WOMEN'S HEALTH CENTER OF TAMPA","StreetAddress":"3330 W KENNEDY BLVD","City":"TAMPA","Zip":"33609-2933","Latitude":27.944509,"Longitude":-82.499073,"County":"Hillsborough County"},
    {"Facility":"EAST CYPRESS WOMEN'S CENTER","StreetAddress":"962 EAST CYPRESS CREEK","City":"FORT LAUDERDALE","Zip":"33334","Latitude":26.202675,"Longitude":-80.155217,"County":"Broward County"},
    {"Facility":"LAKELAND WOMEN'S HEALTH CENTER","StreetAddress":"4444 S FLORIDA AVE","City":"LAKELAND","Zip":"33813-2159","Latitude":27.983887,"Longitude":-81.956427,"County":"Polk County"},
    {"Facility":"TAMPA WOMAN'S HEALTH CENTER","StreetAddress":"2010 E FLETCHER AVENUE","City":"TAMPA","Zip":"33612","Latitude":28.069335,"Longitude":-82.435673,"County":"Hillsborough County"},
    {"Facility":"WOMEN'S OB-GYN CENTER OF COUNTRYSIDE","StreetAddress":"28960 US HIGHWAY 19 N STE 110","City":"CLEARWATER","Zip":"33761-2403","Latitude":28.0355,"Longitude":-82.739335,"County":"Pinellas County"},
    {"Facility":"ALL WOMEN'S HEALTH CENTER","StreetAddress":"4131 CENTRAL AVE","City":"ST PETERSBURG","Zip":"33713-8229","Latitude":27.771274,"Longitude":-82.689447,"County":"Pinellas County"},
    {"Facility":"ALL WOMEN'S HEALTH CENTER OF GAINESVILLE","StreetAddress":"1135 NW 23RD AVE STE N","City":"GAINESVILLE","Zip":"32609-3450","Latitude":29.673364,"Longitude":-82.336698,"County":"Alachua County"},
    {"Facility":"BREAD AND ROSES WELL WOMAN CARE","StreetAddress":"1233 NW 10TH AVENUE","City":"GAINESVILLE","Zip":"32601","Latitude":29.661006,"Longitude":-82.338285,"County":"Alachua County"},
    {"Facility":"ALL WOMEN'S HEALTH CENTER OF JACKSONVILLE","StreetAddress":"1545 HUFFINGHAM RD","City":"JACKSONVILLE","Zip":"32216-2721","Latitude":30.293846,"Longitude":-81.600204,"County":"Duval County"},
    {"Facility":"ALL WOMEN'S HEALTH CENTER OF NORTH TAMPA","StreetAddress":"14498 UNIVERSITY COVE PL","City":"TAMPA","Zip":"33613-3740","Latitude":28.077315,"Longitude":-82.425616,"County":"Hillsborough County"},
    {"Facility":"BREAD AND ROSES","StreetAddress":"1560 SOUTH HIGHLAND AVENUE","City":"CLEARWATER","Zip":"33756","Latitude":27.939551,"Longitude":-82.775311,"County":"Pinellas County"},
    {"Facility":"ST PETERSBURG WOMAN'S HEALTH CENTER","StreetAddress":"3401 66TH STREET NORTH","City":"SAINT PETERSBURG","Zip":"33710","Latitude":27.803432,"Longitude":-82.728179,"County":"Pinellas County"},
    {"Facility":"A WOMAN'S CARE","StreetAddress":"68-A NE 167TH STREET","City":"MIAMI","Zip":"33162","Latitude":25.927838,"Longitude":-80.199205,"County":"Miami-Dade County"},
    {"Facility":"A WOMAN'S WORLD MEDICAL CENTER","StreetAddress":"503 SOUTH 12TH STREET","City":"FORT PIERCE","Zip":"34950","Latitude":27.443048,"Longitude":-80.335279,"County":"St. Lucie County"},
    {"Facility":"A HIALEAH WOMAN'S CARE CENTER","StreetAddress":"1065 E 4TH AVE","City":"HIALEAH","Zip":"33010-4103","Latitude":25.831671,"Longitude":-80.273463,"County":"Miami-Dade County"},
    {"Facility":"EVE OF KENDALL INC","StreetAddress":"8603 S DIXIE HWY  STE 102","City":"MIAMI","Zip":"33143","Latitude":25.690248,"Longitude":-80.30608,"County":"Miami-Dade County"},
    {"Facility":"ADVANCE WOMAN'S CARE CENTER INC","StreetAddress":"2742 SW 8TH ST STE 20","City":"MIAMI","Zip":"33147","Latitude":25.765037,"Longitude":-80.239618,"County":"Miami-Dade County"},
    {"Facility":"A WOMAN'S CHOICE, LLC","StreetAddress":"18400 NW 75 PL SUITE 118","City":"HIALEAH","Zip":"33015","Latitude":25.940845,"Longitude":-80.323696,"County":"Miami-Dade County"},
    {"Facility":"A WOMAN'S CHOICE OF JACKSONVILLE","StreetAddress":"4131 UNIVERSITY BLVD S BLDG 2","City":"JACKSONVILLE","Zip":"32216-4346","Latitude":30.282165,"Longitude":-81.599985,"County":"Duval County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTHWEST AND CENTRAL FLORIDA","StreetAddress":"736 CENTRAL AVE","City":"SARASOTA","Zip":"34236","Latitude":27.342834,"Longitude":-82.542447,"County":"Sarasota County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTH EAST AND NORTH FLORIDA","StreetAddress":"5978 POWERS AVE","City":"JACKSONVILLE","Zip":"32217-2210","Latitude":30.262357,"Longitude":-81.621833,"County":"Duval County"},
    {"Facility":"BLUE CORAL WOMEN'S CARE","StreetAddress":"7171 SW 24TH ST 215","City":"MIAMI","Zip":"33155","Latitude":25.748486,"Longitude":-80.310445,"County":"Miami-Dade County"},
    {"Facility":"WOMEN'S CENTER OF HYDE PARK LLC","StreetAddress":"4602 N NEBRASKA AVE","City":"TAMPA","Zip":"33606","Latitude":27.987144,"Longitude":-82.451448,"County":"Hillsborough County"},
    {"Facility":"ALL WOMEN'S HEALTH CENTER OF ORLANDO","StreetAddress":"431 MAITLAND AVE","City":"ALTAMONTE SPRINGS","Zip":"32701-5418","Latitude":28.655772,"Longitude":-81.365513,"County":"Seminole County"},
    {"Facility":"MILLENNIUM WOMEN CENTER","StreetAddress":"9370 SW 72ND ST STE A104","City":"MIAMI","Zip":"33173-5470","Latitude":25.700525,"Longitude":-80.345749,"County":"Miami-Dade County"},
    {"Facility":"BSS INTERNATIONAL","StreetAddress":"7777 N UNIVERSITY DR SUITE 102","City":"TAMARAC","Zip":"33321","Latitude":26.218045,"Longitude":-80.254739,"County":"Broward County"},
    {"Facility":"PRESIDENTIAL WOMEN'S CENTER","StreetAddress":"100 NORTHPOINT PKWY","City":"WEST PALM BEACH","Zip":"33407","Latitude":26.760398,"Longitude":-80.099284,"County":"Palm Beach County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTHWEST AND CENTRAL FLORIDA, INC","StreetAddress":"6418 COMMERCE PARK DR","City":"FORT MYERS","Zip":"33966","Latitude":26.548435,"Longitude":-81.848696,"County":"Lee County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTHWEST AND CENTRAL FLORIDA","StreetAddress":"33 6TH ST S STE 110","City":"ST PETERSBURG","Zip":"33701-4153","Latitude":27.770592,"Longitude":-82.641988,"County":"Pinellas County"},
    {"Facility":"A GYN DIAGNOSTIC CENTER","StreetAddress":"4745 NW 183 ST","City":"MIAMI GARDENS","Zip":"33055","Latitude":25.939822,"Longitude":-80.27867,"County":"Miami-Dade County"},
    {"Facility":"A HIALEAH WOMEN CENTER, INC","StreetAddress":"697 E 9TH STREET","City":"HIALEAH","Zip":"33010","Latitude":25.831382,"Longitude":-80.267365,"County":"Miami-Dade County"},
    {"Facility":"MIRAMAR WOMAN CENTER","StreetAddress":"6161 MIRAMAR PKWY SUITE 300","City":"MIRAMAR","Zip":"33023","Latitude":25.984911,"Longitude":-80.210533,"County":"Broward County"},
    {"Facility":"TODAY'S WOMEN MEDICAL CENTER","StreetAddress":"3250 S DIXIE HIGHWAY","City":"MIAMI","Zip":"33133","Latitude":25.736434,"Longitude":-80.247132,"County":"Miami-Dade County"},
    {"Facility":"CENTER OF ORLANDO FOR WOMEN","StreetAddress":"1103 LUCERNE TER","City":"ORLANDO","Zip":"32806-1016","Latitude":28.528866,"Longitude":-81.380579,"County":"Orange County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTHWEST AND CENTRAL FLORIDA","StreetAddress":"8068 N 56TH STREET","City":"TAMPA","Zip":"33617","Latitude":28.021899,"Longitude":-82.394072,"County":"Hillsborough County"},
    {"Facility":"A WOMAN'S CENTER OF HOLLYWOOD","StreetAddress":"3829 HOLLYWOOD BLVD STE C","City":"HOLLYWOOD","Zip":"33021-6790","Latitude":26.011657,"Longitude":-80.18243,"County":"Broward County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTHWEST AND CENTRAL FLORIDA","StreetAddress":"11500 UNIVERSITY BLVD","City":"ORLANDO","Zip":"32817","Latitude":28.597095,"Longitude":-81.220858,"County":"Orange County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTH EAST AND NORTH FLORIDA","StreetAddress":"1696 SE HILLMOOR DR, STE A","City":"PORT SAINT LUCIE","Zip":"34952","Latitude":27.288232,"Longitude":-80.296978,"County":"St. Lucie County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTHWEST AND CENTRAL FLORIDA INC","StreetAddress":"1425 CREECH RD","City":"NAPLES","Zip":"34103","Latitude":26.182482,"Longitude":-81.792218,"County":"Collier County"},
    {"Facility":"GYNECOLOGY AND MORE","StreetAddress":"1933 W 60TH ST","City":"HIALEAH","Zip":"33012","Latitude":25.877155,"Longitude":-80.321863,"County":"Miami-Dade County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTH EAST AND NORTH FLORIDA","StreetAddress":"2300 N FLORIDA MANGO RD","City":"WEST PALM BEACH","Zip":"33409","Latitude":26.694031,"Longitude":-80.078469,"County":"Palm Beach County"},
    {"Facility":"NORTH FLORIDA WOMEN'S SERVICES","StreetAddress":"2412 WEST PLAZA DRIVE","City":"TALLAHASSEE","Zip":"32308","Latitude":30.457674,"Longitude":-84.238926,"County":"Leon County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTHWEST AND CENTRAL FLORIDA","StreetAddress":"610 OAK COMMONS BLVD","City":"KISSIMMEE","Zip":"34741","Latitude":28.30141,"Longitude":-81.410653,"County":"Osceola County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTH, EAST AND NORTH FLORIDA","StreetAddress":"585 NW 161 ST","City":"MIAMI","Zip":"33169","Latitude":25.922838,"Longitude":-80.209735,"County":"Miami-Dade County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTHWEST AND CENTRAL FLORIDA","StreetAddress":"236 E BEARSS AVE","City":"TAMPA","Zip":"33613","Latitude":28.08819,"Longitude":-82.458905,"County":"Hillsborough County"},
    {"Facility":"WOMEN'S CENTER OF FT LAUDERDALE","StreetAddress":"2161 E COMMERCIAL BLVD #400","City":"FORT LAUDERDALE","Zip":"33308","Latitude":26.189675,"Longitude":-80.116321,"County":"Broward County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTH, EAST & NORTH FLORIDA","StreetAddress":"2618 W TENNESSEE ST","City":"TALLAHASSEE","Zip":"32304","Latitude":30.452187,"Longitude":-84.334675,"County":"Leon County"},
    {"Facility":"PLANNED PARENTHOOD OF SOUTH EAST AND NORTH FLORIDA","StreetAddress":"8900 SW 117TH AVE STE 207B","City":"MIAMI","Zip":"33186-2155","Latitude":25.685134,"Longitude":-80.384949,"County":"Miami-Dade County"}];

    for (let i = 0; i < places.length; i++) {
        L.marker([places[i].Latitude, places[i].Longitude])
        .bindPopup('<h3>' + places[i].Facility + '</h3>' + '<p>' + places[i].StreetAddress + ', '+ places[i].City+ ', ' + places[i].Zip + '</p>')
        .addTo(map);
    };
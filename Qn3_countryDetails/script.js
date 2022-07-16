// 1.setup our http Request 
let xhr=new XMLHttpRequest();//created an object xhr 

//2.Open The request

xhr.open('GET',"https://restcountries.com/v3.1/all")

//3.Setup our listener to process the complete request

xhr.onload=function(){
    //get the data 
    if(xhr.status>=200&& xhr.status<300){
        //only if request is ok and received the data 
        let data=JSON.parse(this.response);
        for(let i= 0;i<data.length;i++){
       //get country details
        console.log(`Country name:
                    Official:${data[i].name.official}
                    Common:${data[i].name.common}
                        Region:${data[i].region}
                        Subregion:${data[i].subregion}
                        Population:${data[i].population}
        `);
        }
    } else{
        //Run if the request is not ok
        console.log("Error");
    }
}


//4.Send the request
xhr.send();


/*Output
script.js:17 Country name:
                    Official:Guam
                    Common:Guam
                        Region:Oceania
                        Subregion:Micronesia
                        Population:168783
        
script.js:17 Country name:
                    Official:People's Republic of Bangladesh
                    Common:Bangladesh
                        Region:Asia
                        Subregion:Southern Asia
                        Population:164689383
        
script.js:17 Country name:
                    Official:Cook Islands
                    Common:Cook Islands
                        Region:Oceania
                        Subregion:Polynesia
                        Population:18100
        
script.js:17 Country name:
                    Official:Federal Democratic Republic of Nepal
                    Common:Nepal
                        Region:Asia
                        Subregion:Southern Asia
                        Population:29136808
        
script.js:17 Country name:
                    Official:Principality of Monaco
                    Common:Monaco
                        Region:Europe
                        Subregion:Western Europe
                        Population:39244
        
script.js:17 Country name:
                    Official:Republic of Turkey
                    Common:Turkey
                        Region:Asia
                        Subregion:Western Asia
                        Population:84339067
        
script.js:17 Country name:
                    Official:Collectivity of Saint Barthélemy
                    Common:Saint Barthélemy
                        Region:Americas
                        Subregion:Caribbean
                        Population:4255
        
script.js:17 Country name:
                    Official:Jamaica
                    Common:Jamaica
                        Region:Americas
                        Subregion:Caribbean
                        Population:2961161
        
script.js:17 Country name:
                    Official:Principality of Andorra
                    Common:Andorra
                        Region:Europe
                        Subregion:Southern Europe
                        Population:77265
        
script.js:17 Country name:
                    Official:State of Libya
                    Common:Libya
                        Region:Africa
                        Subregion:Northern Africa
                        Population:6871287
        
script.js:17 Country name:
                    Official:Bailiwick of Jersey
                    Common:Jersey
                        Region:Europe
                        Subregion:Northern Europe
                        Population:100800
        
script.js:17 Country name:
                    Official:Republic of Malta
                    Common:Malta
                        Region:Europe
                        Subregion:Southern Europe
                        Population:525285
        
script.js:17 Country name:
                    Official:Plurinational State of Bolivia
                    Common:Bolivia
                        Region:Americas
                        Subregion:South America
                        Population:11673029
        
script.js:17 Country name:
                    Official:Republic of Mauritius
                    Common:Mauritius
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:1265740
        
script.js:17 Country name:
                    Official:Commonwealth of Puerto Rico
                    Common:Puerto Rico
                        Region:Americas
                        Subregion:Caribbean
                        Population:3194034
        
script.js:17 Country name:
                    Official:French Republic
                    Common:France
                        Region:Europe
                        Subregion:Western Europe
                        Population:67391582
        
​ Country name:
                    Official:Grand Duchy of Luxembourg
                    Common:Luxembourg
                        Region:Europe
                        Subregion:Western Europe
                        Population:632275
        
​ Country name:
                    Official:Republic of Kosovo
                    Common:Kosovo
                        Region:Europe
                        Subregion:Southeast Europe
                        Population:1775378
        
​ Country name:
                    Official:Republic of Madagascar
                    Common:Madagascar
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:27691019
        
​ Country name:
                    Official:Islamic Republic of Pakistan
                    Common:Pakistan
                        Region:Asia
                        Subregion:Southern Asia
                        Population:220892331
        
​ Country name:
                    Official:Republic of Malawi
                    Common:Malawi
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:19129955
        
​ Country name:
                    Official:Republic of Slovenia
                    Common:Slovenia
                        Region:Europe
                        Subregion:Central Europe
                        Population:2100126
        
​ Country name:
                    Official:Kingdom of Eswatini
                    Common:Eswatini
                        Region:Africa
                        Subregion:Southern Africa
                        Population:1160164
        
​ Country name:
                    Official:United States of America
                    Common:United States
                        Region:Americas
                        Subregion:North America
                        Population:329484123
        
​ Country name:
                    Official:Independent and Sovereign Republic of Kiribati
                    Common:Kiribati
                        Region:Oceania
                        Subregion:Micronesia
                        Population:119446
        
​ Country name:
                    Official:Republic of Azerbaijan
                    Common:Azerbaijan
                        Region:Asia
                        Subregion:Western Asia
                        Population:10110116
        
​ Country name:
                    Official:Republic of Zambia
                    Common:Zambia
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:18383956
        
​ Country name:
                    Official:Republic of Kenya
                    Common:Kenya
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:53771300
        
​ Country name:
                    Official:State of Kuwait
                    Common:Kuwait
                        Region:Asia
                        Subregion:Western Asia
                        Population:4270563
        
​ Country name:
                    Official:Republic of Kazakhstan
                    Common:Kazakhstan
                        Region:Asia
                        Subregion:Central Asia
                        Population:18754440
        
​ Country name:
                    Official:Republic of Latvia
                    Common:Latvia
                        Region:Europe
                        Subregion:Northern Europe
                        Population:1901548
        
​ Country name:
                    Official:Republic of Sierra Leone
                    Common:Sierra Leone
                        Region:Africa
                        Subregion:Western Africa
                        Population:7976985
        
​ Country name:
                    Official:Federation of Saint Christopher and Nevis
                    Common:Saint Kitts and Nevis
                        Region:Americas
                        Subregion:Caribbean
                        Population:53192
        
​ Country name:
                    Official:Belize
                    Common:Belize
                        Region:Americas
                        Subregion:Central America
                        Population:397621
        
​ Country name:
                    Official:Martinique
                    Common:Martinique
                        Region:Americas
                        Subregion:Caribbean
                        Population:378243
        
​ Country name:
                    Official:Romania
                    Common:Romania
                        Region:Europe
                        Subregion:Southeast Europe
                        Population:19286123
        
​ Country name:
                    Official:Virgin Islands
                    Common:British Virgin Islands
                        Region:Americas
                        Subregion:Caribbean
                        Population:30237
        
​ Country name:
                    Official:New Zealand
                    Common:New Zealand
                        Region:Oceania
                        Subregion:Australia and New Zealand
                        Population:5084300
        
​ Country name:
                    Official:Federative Republic of Brazil
                    Common:Brazil
                        Region:Americas
                        Subregion:South America
                        Population:212559409
        
​ Country name:
                    Official:Central African Republic
                    Common:Central African Republic
                        Region:Africa
                        Subregion:Middle Africa
                        Population:4829764
        
​ Country name:
                    Official:Republic of the Marshall Islands
                    Common:Marshall Islands
                        Region:Oceania
                        Subregion:Micronesia
                        Population:59194
        
​ Country name:
                    Official:Territory of the French Southern and Antarctic Lands
                    Common:French Southern and Antarctic Lands
                        Region:Antarctic
                        Subregion:undefined
                        Population:400
        
​ Country name:
                    Official:Territory of the Wallis and Futuna Islands
                    Common:Wallis and Futuna
                        Region:Oceania
                        Subregion:Polynesia
                        Population:11750
        
​ Country name:
                    Official:Russian Federation
                    Common:Russia
                        Region:Europe
                        Subregion:Eastern Europe
                        Population:144104080
        
​ Country name:
                    Official:Republic of Panama
                    Common:Panama
                        Region:Americas
                        Subregion:Central America
                        Population:4314768
        
​ Country name:
                    Official:Nation of Brunei, Abode of Peace
                    Common:Brunei
                        Region:Asia
                        Subregion:South-Eastern Asia
                        Population:437483
        
​ Country name:
                    Official:Gibraltar
                    Common:Gibraltar
                        Region:Europe
                        Subregion:Southern Europe
                        Population:33691
        
​ Country name:
                    Official:Malaysia
                    Common:Malaysia
                        Region:Asia
                        Subregion:South-Eastern Asia
                        Population:32365998
        
​ Country name:
                    Official:Republic of Ecuador
                    Common:Ecuador
                        Region:Americas
                        Subregion:South America
                        Population:17643060
        
​ Country name:
                    Official:Kingdom of Morocco
                    Common:Morocco
                        Region:Africa
                        Subregion:Northern Africa
                        Population:36910558
        
​ Country name:
                    Official:Saint Vincent and the Grenadines
                    Common:Saint Vincent and the Grenadines
                        Region:Americas
                        Subregion:Caribbean
                        Population:110947
        
​ Country name:
                    Official:Republic of Cuba
                    Common:Cuba
                        Region:Americas
                        Subregion:Caribbean
                        Population:11326616
        
​ Country name:
                    Official:Principality of Liechtenstein
                    Common:Liechtenstein
                        Region:Europe
                        Subregion:Western Europe
                        Population:38137
        
​ Country name:
                    Official:Commonwealth of the Bahamas
                    Common:Bahamas
                        Region:Americas
                        Subregion:Caribbean
                        Population:393248
        
​ Country name:
                    Official:Canada
                    Common:Canada
                        Region:Americas
                        Subregion:North America
                        Population:38005238
        
​ Country name:
                    Official:Republic of Fiji
                    Common:Fiji
                        Region:Oceania
                        Subregion:Melanesia
                        Population:896444
        
​ Country name:
                    Official:Kingdom of Saudi Arabia
                    Common:Saudi Arabia
                        Region:Asia
                        Subregion:Western Asia
                        Population:34813867
        
​ Country name:
                    Official:Cayman Islands
                    Common:Cayman Islands
                        Region:Americas
                        Subregion:Caribbean
                        Population:65720
        
​ Country name:
                    Official:Republic of Lithuania
                    Common:Lithuania
                        Region:Europe
                        Subregion:Northern Europe
                        Population:2794700
        
​ Country name:
                    Official:Bonaire, Sint Eustatius and Saba
                    Common:Caribbean Netherlands
                        Region:Americas
                        Subregion:Caribbean
                        Population:25987
        
​ Country name:
                    Official:Republic of Ireland
                    Common:Ireland
                        Region:Europe
                        Subregion:Northern Europe
                        Population:4994724
        
​ Country name:
                    Official:Republic of Chile
                    Common:Chile
                        Region:Americas
                        Subregion:South America
                        Population:19116209
        
​ Country name:
                    Official:Turkmenistan
                    Common:Turkmenistan
                        Region:Asia
                        Subregion:Central Asia
                        Population:6031187
        
​ Country name:
                    Official:Republic of the Union of Myanmar
                    Common:Myanmar
                        Region:Asia
                        Subregion:South-Eastern Asia
                        Population:54409794
        
​ Country name:
                    Official:Republic of Yemen
                    Common:Yemen
                        Region:Asia
                        Subregion:Western Asia
                        Population:29825968
        
​ Country name:
                    Official:Saint Helena, Ascension and Tristan da Cunha
                    Common:Saint Helena, Ascension and Tristan da Cunha
                        Region:Africa
                        Subregion:Western Africa
                        Population:53192
        
​ Country name:
                    Official:Democratic Republic of São Tomé and Príncipe
                    Common:São Tomé and Príncipe
                        Region:Africa
                        Subregion:Middle Africa
                        Population:219161
        
​ Country name:
                    Official:Republic of Guatemala
                    Common:Guatemala
                        Region:Americas
                        Subregion:Central America
                        Population:16858333
        
​ Country name:
                    Official:Republic of Singapore
                    Common:Singapore
                        Region:Asia
                        Subregion:South-Eastern Asia
                        Population:5685807
        
​ Country name:
                    Official:Bolivarian Republic of Venezuela
                    Common:Venezuela
                        Region:Americas
                        Subregion:South America
                        Population:28435943
        
​ Country name:
                    Official:Union of the Comoros
                    Common:Comoros
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:869595
        
​ Country name:
                    Official:Sahrawi Arab Democratic Republic
                    Common:Western Sahara
                        Region:Africa
                        Subregion:Northern Africa
                        Population:510713
        
​ Country name:
                    Official:Republic of Namibia
                    Common:Namibia
                        Region:Africa
                        Subregion:Southern Africa
                        Population:2540916
        
​ Country name:
                    Official:Democratic Republic of Timor-Leste
                    Common:Timor-Leste
                        Region:Asia
                        Subregion:South-Eastern Asia
                        Population:1318442
        
​ Country name:
                    Official:Bosnia and Herzegovina
                    Common:Bosnia and Herzegovina
                        Region:Europe
                        Subregion:Southeast Europe
                        Population:3280815
        
​ Country name:
                    Official:Republic of Cabo Verde
                    Common:Cape Verde
                        Region:Africa
                        Subregion:Western Africa
                        Population:555988
        
​ Country name:
                    Official:Hong Kong Special Administrative Region of the People's Republic of China
                    Common:Hong Kong
                        Region:Asia
                        Subregion:Eastern Asia
                        Population:7500700
        
​ Country name:
                    Official:Republic of Moldova
                    Common:Moldova
                        Region:Europe
                        Subregion:Eastern Europe
                        Population:2617820
        
​ Country name:
                    Official:Republic of the Philippines
                    Common:Philippines
                        Region:Asia
                        Subregion:South-Eastern Asia
                        Population:109581085
        
​ Country name:
                    Official:Guadeloupe
                    Common:Guadeloupe
                        Region:Americas
                        Subregion:Caribbean
                        Population:400132
        
​ Country name:
                    Official:Republic of Zimbabwe
                    Common:Zimbabwe
                        Region:Africa
                        Subregion:Southern Africa
                        Population:14862927
        
​ Country name:
                    Official:Grenada
                    Common:Grenada
                        Region:Americas
                        Subregion:Caribbean
                        Population:112519
        
​ Country name:
                    Official:Isle of Man
                    Common:Isle of Man
                        Region:Europe
                        Subregion:Northern Europe
                        Population:85032
        
​ Country name:
                    Official:United Republic of Tanzania
                    Common:Tanzania
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:59734213
        
​ Country name:
                    Official:Republic of Seychelles
                    Common:Seychelles
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:98462
        
​ Country name:
                    Official:Kingdom of the Netherlands
                    Common:Netherlands
                        Region:Europe
                        Subregion:Western Europe
                        Population:16655799
        
​ Country name:
                    Official:Republic of Paraguay
                    Common:Paraguay
                        Region:Americas
                        Subregion:South America
                        Population:7132530
        
​ Country name:
                    Official:Republic of San Marino
                    Common:San Marino
                        Region:Europe
                        Subregion:Southern Europe
                        Population:33938
        
​ Country name:
                    Official:Republic of Bulgaria
                    Common:Bulgaria
                        Region:Europe
                        Subregion:Southeast Europe
                        Population:6927288
        
​ Country name:
                    Official:Virgin Islands of the United States
                    Common:United States Virgin Islands
                        Region:Americas
                        Subregion:Caribbean
                        Population:106290
        
​ Country name:
                    Official:Tunisian Republic
                    Common:Tunisia
                        Region:Africa
                        Subregion:Northern Africa
                        Population:11818618
        
​ Country name:
                    Official:Iceland
                    Common:Iceland
                        Region:Europe
                        Subregion:Northern Europe
                        Population:366425
        
​ Country name:
                    Official:Democratic Republic of the Congo
                    Common:DR Congo
                        Region:Africa
                        Subregion:Middle Africa
                        Population:108407721
        
​ Country name:
                    Official:Aruba
                    Common:Aruba
                        Region:Americas
                        Subregion:Caribbean
                        Population:106766
        
​ Country name:
                    Official:Republic of Indonesia
                    Common:Indonesia
                        Region:Asia
                        Subregion:South-Eastern Asia
                        Population:273523621
        
​ Country name:
                    Official:Republic of El Salvador
                    Common:El Salvador
                        Region:Americas
                        Subregion:Central America
                        Population:6486201
        
​ Country name:
                    Official:Slovak Republic
                    Common:Slovakia
                        Region:Europe
                        Subregion:Central Europe
                        Population:5458827
        
​ Country name:
                    Official:Kingdom of Sweden
                    Common:Sweden
                        Region:Europe
                        Subregion:Northern Europe
                        Population:10353442
        
​ Country name:
                    Official:Lao People's Democratic Republic
                    Common:Laos
                        Region:Asia
                        Subregion:South-Eastern Asia
                        Population:7275556
        
​ Country name:
                    Official:Republic of the Gambia
                    Common:Gambia
                        Region:Africa
                        Subregion:Western Africa
                        Population:2416664
        
​ Country name:
                    Official:State of Israel
                    Common:Israel
                        Region:Asia
                        Subregion:Western Asia
                        Population:9216900
        
​ Country name:
                    Official:Svalbard og Jan Mayen
                    Common:Svalbard and Jan Mayen
                        Region:Europe
                        Subregion:Northern Europe
                        Population:2562
        
​ Country name:
                    Official:Montenegro
                    Common:Montenegro
                        Region:Europe
                        Subregion:Southeast Europe
                        Population:621718
        
​ Country name:
                    Official:Federal Republic of Somalia
                    Common:Somalia
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:15893219
        
​ Country name:
                    Official:Réunion Island
                    Common:Réunion
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:840974
        
​ Country name:
                    Official:Democratic Socialist Republic of Sri Lanka
                    Common:Sri Lanka
                        Region:Asia
                        Subregion:Southern Asia
                        Population:21919000
        
​ Country name:
                    Official:Federal Republic of Germany
                    Common:Germany
                        Region:Europe
                        Subregion:Western Europe
                        Population:83240525
        
​ Country name:
                    Official:Republic of Serbia
                    Common:Serbia
                        Region:Europe
                        Subregion:Southeast Europe
                        Population:6908224
        
​ Country name:
                    Official:Macao Special Administrative Region of the People's Republic of China
                    Common:Macau
                        Region:Asia
                        Subregion:Eastern Asia
                        Population:649342
        
​ Country name:
                    Official:Co-operative Republic of Guyana
                    Common:Guyana
                        Region:Americas
                        Subregion:South America
                        Population:786559
        
​ Country name:
                    Official:Republic of Suriname
                    Common:Suriname
                        Region:Americas
                        Subregion:South America
                        Population:586634
        
​ Country name:
                    Official:Kingdom of Lesotho
                    Common:Lesotho
                        Region:Africa
                        Subregion:Southern Africa
                        Population:2142252
        
​ Country name:
                    Official:Faroe Islands
                    Common:Faroe Islands
                        Region:Europe
                        Subregion:Northern Europe
                        Population:48865
        
​ Country name:
                    Official:Republic of Honduras
                    Common:Honduras
                        Region:Americas
                        Subregion:Central America
                        Population:9904608
        
​ Country name:
                    Official:State of Palestine
                    Common:Palestine
                        Region:Asia
                        Subregion:Western Asia
                        Population:4803269
        
​ Country name:
                    Official:Independent State of Papua New Guinea
                    Common:Papua New Guinea
                        Region:Oceania
                        Subregion:Melanesia
                        Population:8947027
        
​ Country name:
                    Official:Arab Republic of Egypt
                    Common:Egypt
                        Region:Africa
                        Subregion:Northern Africa
                        Population:102334403
        
​ Country name:
                    Official:Kingdom of Spain
                    Common:Spain
                        Region:Europe
                        Subregion:Southern Europe
                        Population:47351567
        
​ Country name:
                    Official:State of Eritrea
                    Common:Eritrea
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:5352000
        
​ Country name:
                    Official:Republic of Mozambique
                    Common:Mozambique
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:31255435
        
​ Country name:
                    Official:Democratic People's Republic of Korea
                    Common:North Korea
                        Region:Asia
                        Subregion:Eastern Asia
                        Population:25778815
        
​ Country name:
                    Official:Republic of Senegal
                    Common:Senegal
                        Region:Africa
                        Subregion:Western Africa
                        Population:16743930
        
​ Country name:
                    Official:Niue
                    Common:Niue
                        Region:Oceania
                        Subregion:Polynesia
                        Population:1470
        
​ Country name:
                    Official:Federated States of Micronesia
                    Common:Micronesia
                        Region:Oceania
                        Subregion:Micronesia
                        Population:115021
        
​ Country name:
                    Official:Kingdom of Cambodia
                    Common:Cambodia
                        Region:Asia
                        Subregion:South-Eastern Asia
                        Population:16718971
        
​ Country name:
                    Official:Republic of Djibouti
                    Common:Djibouti
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:988002
        
​ Country name:
                    Official:Republic of Ghana
                    Common:Ghana
                        Region:Africa
                        Subregion:Western Africa
                        Population:31072945
        
​ Country name:
                    Official:Bouvet Island
                    Common:Bouvet Island
                        Region:Antarctic
                        Subregion:undefined
                        Population:0
        
​ Country name:
                    Official:Republic of Belarus
                    Common:Belarus
                        Region:Europe
                        Subregion:Eastern Europe
                        Population:9398861
        
​ Country name:
                    Official:Republic of Benin
                    Common:Benin
                        Region:Africa
                        Subregion:Western Africa
                        Population:12123198
        
​ Country name:
                    Official:Territory of the Cocos (Keeling) Islands
                    Common:Cocos (Keeling) Islands
                        Region:Oceania
                        Subregion:Australia and New Zealand
                        Population:544
        
​ Country name:
                    Official:United Kingdom of Great Britain and Northern Ireland
                    Common:United Kingdom
                        Region:Europe
                        Subregion:Northern Europe
                        Population:67215293
        
​ Country name:
                    Official:Åland Islands
                    Common:Åland Islands
                        Region:Europe
                        Subregion:Northern Europe
                        Population:29458
        
​ Country name:
                    Official:Burkina Faso
                    Common:Burkina Faso
                        Region:Africa
                        Subregion:Western Africa
                        Population:20903278
        
​ Country name:
                    Official:Solomon Islands
                    Common:Solomon Islands
                        Region:Oceania
                        Subregion:Melanesia
                        Population:686878
        
​ Country name:
                    Official:Falkland Islands
                    Common:Falkland Islands
                        Region:Americas
                        Subregion:South America
                        Population:2563
        
​ Country name:
                    Official:Bailiwick of Guernsey
                    Common:Guernsey
                        Region:Europe
                        Subregion:Northern Europe
                        Population:62999
        
​ Country name:
                    Official:Republic of Costa Rica
                    Common:Costa Rica
                        Region:Americas
                        Subregion:Central America
                        Population:5094114
        
​ Country name:
                    Official:Republic of Albania
                    Common:Albania
                        Region:Europe
                        Subregion:Southeast Europe
                        Population:2837743
        
​ Country name:
                    Official:Territory of Christmas Island
                    Common:Christmas Island
                        Region:Oceania
                        Subregion:Australia and New Zealand
                        Population:2072
        
​ Country name:
                    Official:Hellenic Republic
                    Common:Greece
                        Region:Europe
                        Subregion:Southern Europe
                        Population:10715549
        
​ Country name:
                    Official:Ukraine
                    Common:Ukraine
                        Region:Europe
                        Subregion:Eastern Europe
                        Population:44134693
        
​ Country name:
                    Official:Greenland
                    Common:Greenland
                        Region:Americas
                        Subregion:North America
                        Population:56367
        
​ Country name:
                    Official:Republic of North Macedonia
                    Common:North Macedonia
                        Region:Europe
                        Subregion:Southeast Europe
                        Population:2077132
        
​ Country name:
                    Official:Republic of Côte d'Ivoire
                    Common:Ivory Coast
                        Region:Africa
                        Subregion:Western Africa
                        Population:26378275
        
​ Country name:
                    Official:Syrian Arab Republic
                    Common:Syria
                        Region:Asia
                        Subregion:Western Asia
                        Population:17500657
        
​ Country name:
                    Official:Czech Republic
                    Common:Czechia
                        Region:Europe
                        Subregion:Central Europe
                        Population:10698896
        
​ Country name:
                    Official:Republic of Botswana
                    Common:Botswana
                        Region:Africa
                        Subregion:Southern Africa
                        Population:2351625
        
​ Country name:
                    Official:American Samoa
                    Common:American Samoa
                        Region:Oceania
                        Subregion:Polynesia
                        Population:55197
        
​ Country name:
                    Official:United Mexican States
                    Common:Mexico
                        Region:Americas
                        Subregion:North America
                        Population:128932753
        
​ Country name:
                    Official:Republic of Austria
                    Common:Austria
                        Region:Europe
                        Subregion:Central Europe
                        Population:8917205
        
​ Country name:
                    Official:Bermuda
                    Common:Bermuda
                        Region:Americas
                        Subregion:North America
                        Population:63903
        
​ Country name:
                    Official:Kingdom of Bahrain
                    Common:Bahrain
                        Region:Asia
                        Subregion:Western Asia
                        Population:1701583
        
​ Country name:
                    Official:Republic of Nauru
                    Common:Nauru
                        Region:Oceania
                        Subregion:Micronesia
                        Population:10834
        
​ Country name:
                    Official:Republic of Niger
                    Common:Niger
                        Region:Africa
                        Subregion:Western Africa
                        Population:24206636
        
​ Country name:
                    Official:Republic of Angola
                    Common:Angola
                        Region:Africa
                        Subregion:Middle Africa
                        Population:32866268
        
​ Country name:
                    Official:Antigua and Barbuda
                    Common:Antigua and Barbuda
                        Region:Americas
                        Subregion:Caribbean
                        Population:97928
        
​ Country name:
                    Official:Montserrat
                    Common:Montserrat
                        Region:Americas
                        Subregion:Caribbean
                        Population:4922
        
​ Country name:
                    Official:Republic of Korea
                    Common:South Korea
                        Region:Asia
                        Subregion:Eastern Asia
                        Population:51780579
        
​ Country name:
                    Official:Republic of China (Taiwan)
                    Common:Taiwan
                        Region:Asia
                        Subregion:Eastern Asia
                        Population:23503349
        
​ Country name:
                    Official:Barbados
                    Common:Barbados
                        Region:Americas
                        Subregion:Caribbean
                        Population:287371
        
​ Country name:
                    Official:Country of Curaçao
                    Common:Curaçao
                        Region:Americas
                        Subregion:Caribbean
                        Population:155014
        
script.js:17 Country name:
                    Official:Republic of the Maldives
                    Common:Maldives
                        Region:Asia
                        Subregion:Southern Asia
                        Population:540542
        
script.js:17 Country name:
                    Official:Heard Island and McDonald Islands
                    Common:Heard Island and McDonald Islands
                        Region:Antarctic
                        Subregion:undefined
                        Population:0
        
script.js:17 Country name:
                    Official:Commonwealth of Dominica
                    Common:Dominica
                        Region:Americas
                        Subregion:Caribbean
                        Population:71991
        
script.js:17 Country name:
                    Official:Islamic Republic of Mauritania
                    Common:Mauritania
                        Region:Africa
                        Subregion:Western Africa
                        Population:4649660
        
script.js:17 Country name:
                    Official:Georgia
                    Common:Georgia
                        Region:Asia
                        Subregion:Western Asia
                        Population:3714000
        
script.js:17 Country name:
                    Official:Republic of Guinea
                    Common:Guinea
                        Region:Africa
                        Subregion:Western Africa
                        Population:13132792
        
script.js:17 Country name:
                    Official:Republic of Liberia
                    Common:Liberia
                        Region:Africa
                        Subregion:Western Africa
                        Population:5057677
        
script.js:17 Country name:
                    Official:Republic of Guinea-Bissau
                    Common:Guinea-Bissau
                        Region:Africa
                        Subregion:Western Africa
                        Population:1967998
        
script.js:17 Country name:
                    Official:Swiss Confederation
                    Common:Switzerland
                        Region:Europe
                        Subregion:Western Europe
                        Population:8654622
        
script.js:17 Country name:
                    Official:Republic of Cyprus
                    Common:Cyprus
                        Region:Europe
                        Subregion:Southern Europe
                        Population:1207361
        
script.js:17 Country name:
                    Official:British Indian Ocean Territory
                    Common:British Indian Ocean Territory
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:3000
        
script.js:17 Country name:
                    Official:Republic of Finland
                    Common:Finland
                        Region:Europe
                        Subregion:Northern Europe
                        Population:5530719
        
script.js:17 Country name:
                    Official:Kingdom of Belgium
                    Common:Belgium
                        Region:Europe
                        Subregion:Western Europe
                        Population:11555997
        
script.js:17 Country name:
                    Official:United Arab Emirates
                    Common:United Arab Emirates
                        Region:Asia
                        Subregion:Western Asia
                        Population:9890400
        
script.js:17 Country name:
                    Official:Republic of Mali
                    Common:Mali
                        Region:Africa
                        Subregion:Western Africa
                        Population:20250834
        
script.js:17 Country name:
                    Official:Republic of Chad
                    Common:Chad
                        Region:Africa
                        Subregion:Middle Africa
                        Population:16425859
        
script.js:17 Country name:
                    Official:Republic of Equatorial Guinea
                    Common:Equatorial Guinea
                        Region:Africa
                        Subregion:Middle Africa
                        Population:1402985
        
script.js:17 Country name:
                    Official:Vatican City State
                    Common:Vatican City
                        Region:Europe
                        Subregion:Southern Europe
                        Population:451
        
script.js:17 Country name:
                    Official:Republic of Iraq
                    Common:Iraq
                        Region:Asia
                        Subregion:Western Asia
                        Population:40222503
        
script.js:17 Country name:
                    Official:Tokelau
                    Common:Tokelau
                        Region:Oceania
                        Subregion:Polynesia
                        Population:1411
        
script.js:17 Country name:
                    Official:Kingdom of Tonga
                    Common:Tonga
                        Region:Oceania
                        Subregion:Polynesia
                        Population:105697
        
script.js:17 Country name:
                    Official:Commonwealth of the Northern Mariana Islands
                    Common:Northern Mariana Islands
                        Region:Oceania
                        Subregion:Micronesia
                        Population:57557
        
script.js:17 Country name:
                    Official:State of Qatar
                    Common:Qatar
                        Region:Asia
                        Subregion:Western Asia
                        Population:2881060
        
script.js:17 Country name:
                    Official:Oriental Republic of Uruguay
                    Common:Uruguay
                        Region:Americas
                        Subregion:South America
                        Population:3473727
        
script.js:17 Country name:
                    Official:Republic of India
                    Common:India
                        Region:Asia
                        Subregion:Southern Asia
                        Population:1380004385
        
script.js:17 Country name:
                    Official:Territory of Norfolk Island
                    Common:Norfolk Island
                        Region:Oceania
                        Subregion:Australia and New Zealand
                        Population:2302
        
script.js:17 Country name:
                    Official:Sultanate of Oman
                    Common:Oman
                        Region:Asia
                        Subregion:Western Asia
                        Population:5106622
        
script.js:17 Country name:
                    Official:Republic of Colombia
                    Common:Colombia
                        Region:Americas
                        Subregion:South America
                        Population:50882884
        
script.js:17 Country name:
                    Official:Republic of Cameroon
                    Common:Cameroon
                        Region:Africa
                        Subregion:Middle Africa
                        Population:26545864
        
script.js:17 Country name:
                    Official:Federal Democratic Republic of Ethiopia
                    Common:Ethiopia
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:114963583
        
script.js:17 Country name:
                    Official:Republic of the Sudan
                    Common:Sudan
                        Region:Africa
                        Subregion:Northern Africa
                        Population:43849269
        
script.js:17 Country name:
                    Official:Gabonese Republic
                    Common:Gabon
                        Region:Africa
                        Subregion:Middle Africa
                        Population:2225728
        
script.js:17 Country name:
                    Official:Argentine Republic
                    Common:Argentina
                        Region:Americas
                        Subregion:South America
                        Population:45376763
        
script.js:17 Country name:
                    Official:Japan
                    Common:Japan
                        Region:Asia
                        Subregion:Eastern Asia
                        Population:125836021
        
script.js:17 Country name:
                    Official:Hungary
                    Common:Hungary
                        Region:Europe
                        Subregion:Central Europe
                        Population:9749763
        
script.js:17 Country name:
                    Official:Republic of Croatia
                    Common:Croatia
                        Region:Europe
                        Subregion:Southeast Europe
                        Population:4047200
        
script.js:17 Country name:
                    Official:Kyrgyz Republic
                    Common:Kyrgyzstan
                        Region:Asia
                        Subregion:Central Asia
                        Population:6591600
        
script.js:17 Country name:
                    Official:Portuguese Republic
                    Common:Portugal
                        Region:Europe
                        Subregion:Southern Europe
                        Population:10305564
        
script.js:17 Country name:
                    Official:Socialist Republic of Vietnam
                    Common:Vietnam
                        Region:Asia
                        Subregion:South-Eastern Asia
                        Population:97338583
        
script.js:17 Country name:
                    Official:Kingdom of Norway
                    Common:Norway
                        Region:Europe
                        Subregion:Northern Europe
                        Population:5379475
        
script.js:17 Country name:
                    Official:Italian Republic
                    Common:Italy
                        Region:Europe
                        Subregion:Southern Europe
                        Population:59554023
        
script.js:17 Country name:
                    Official:Sint Maarten
                    Common:Sint Maarten
                        Region:Americas
                        Subregion:Caribbean
                        Population:40812
        
script.js:17 Country name:
                    Official:Saint Martin
                    Common:Saint Martin
                        Region:Americas
                        Subregion:Caribbean
                        Population:38659
        
script.js:17 Country name:
                    Official:Hashemite Kingdom of Jordan
                    Common:Jordan
                        Region:Asia
                        Subregion:Western Asia
                        Population:10203140
        
script.js:17 Country name:
                    Official:French Polynesia
                    Common:French Polynesia
                        Region:Oceania
                        Subregion:Polynesia
                        Population:280904
        
script.js:17 Country name:
                    Official:Republic of Rwanda
                    Common:Rwanda
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:12952209
        
script.js:17 Country name:
                    Official:Kingdom of Thailand
                    Common:Thailand
                        Region:Asia
                        Subregion:South-Eastern Asia
                        Population:69799978
        
script.js:17 Country name:
                    Official:Kingdom of Denmark
                    Common:Denmark
                        Region:Europe
                        Subregion:Northern Europe
                        Population:5831404
        
script.js:17 Country name:
                    Official:Tuvalu
                    Common:Tuvalu
                        Region:Oceania
                        Subregion:Polynesia
                        Population:11792
        
script.js:17 Country name:
                    Official:Pitcairn Group of Islands
                    Common:Pitcairn Islands
                        Region:Oceania
                        Subregion:Polynesia
                        Population:56
        
script.js:17 Country name:
                    Official:Republic of Uganda
                    Common:Uganda
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:45741000
        
script.js:17 Country name:
                    Official:Togolese Republic
                    Common:Togo
                        Region:Africa
                        Subregion:Western Africa
                        Population:8278737
        
script.js:17 Country name:
                    Official:Republic of Tajikistan
                    Common:Tajikistan
                        Region:Asia
                        Subregion:Central Asia
                        Population:9537642
        
script.js:17 Country name:
                    Official:Guiana
                    Common:French Guiana
                        Region:Americas
                        Subregion:South America
                        Population:254541
        
script.js:17 Country name:
                    Official:Saint Lucia
                    Common:Saint Lucia
                        Region:Americas
                        Subregion:Caribbean
                        Population:183629
        
script.js:17 Country name:
                    Official:Republic of South Africa
                    Common:South Africa
                        Region:Africa
                        Subregion:Southern Africa
                        Population:59308690
        
script.js:17 Country name:
                    Official:Republic of Armenia
                    Common:Armenia
                        Region:Asia
                        Subregion:Western Asia
                        Population:2963234
        
script.js:17 Country name:
                    Official:Federal Republic of Nigeria
                    Common:Nigeria
                        Region:Africa
                        Subregion:Western Africa
                        Population:206139587
        
script.js:17 Country name:
                    Official:Republic of South Sudan
                    Common:South Sudan
                        Region:Africa
                        Subregion:Middle Africa
                        Population:11193729
        
script.js:17 Country name:
                    Official:Islamic Republic of Afghanistan
                    Common:Afghanistan
                        Region:Asia
                        Subregion:Southern Asia
                        Population:40218234
        
script.js:17 Country name:
                    Official:Republic of Poland
                    Common:Poland
                        Region:Europe
                        Subregion:Central Europe
                        Population:37950802
        
script.js:17 Country name:
                    Official:Antarctica
                    Common:Antarctica
                        Region:Antarctic
                        Subregion:undefined
                        Population:1000
        
script.js:17 Country name:
                    Official:Lebanese Republic
                    Common:Lebanon
                        Region:Asia
                        Subregion:Western Asia
                        Population:6825442
        
script.js:17 Country name:
                    Official:Republic of Palau
                    Common:Palau
                        Region:Oceania
                        Subregion:Micronesia
                        Population:18092
        
script.js:17 Country name:
                    Official:New Caledonia
                    Common:New Caledonia
                        Region:Oceania
                        Subregion:Melanesia
                        Population:271960
        
script.js:17 Country name:
                    Official:Republic of Burundi
                    Common:Burundi
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:11890781
        
script.js:17 Country name:
                    Official:People's Democratic Republic of Algeria
                    Common:Algeria
                        Region:Africa
                        Subregion:Northern Africa
                        Population:44700000
        
script.js:17 Country name:
                    Official:United States Minor Outlying Islands
                    Common:United States Minor Outlying Islands
                        Region:Americas
                        Subregion:North America
                        Population:300
        
script.js:17 Country name:
                    Official:Republic of Peru
                    Common:Peru
                        Region:Americas
                        Subregion:South America
                        Population:32971846
        
script.js:17 Country name:
                    Official:Republic of Estonia
                    Common:Estonia
                        Region:Europe
                        Subregion:Northern Europe
                        Population:1331057
        
script.js:17 Country name:
                    Official:South Georgia and the South Sandwich Islands
                    Common:South Georgia
                        Region:Antarctic
                        Subregion:undefined
                        Population:30
        
script.js:17 Country name:
                    Official:Republic of Vanuatu
                    Common:Vanuatu
                        Region:Oceania
                        Subregion:Melanesia
                        Population:307150
        
script.js:17 Country name:
                    Official:Islamic Republic of Iran
                    Common:Iran
                        Region:Asia
                        Subregion:Southern Asia
                        Population:83992953
        
script.js:17 Country name:
                    Official:People's Republic of China
                    Common:China
                        Region:Asia
                        Subregion:Eastern Asia
                        Population:1402112000
        
script.js:17 Country name:
                    Official:Republic of the Congo
                    Common:Republic of the Congo
                        Region:Africa
                        Subregion:Middle Africa
                        Population:5657000
        
script.js:17 Country name:
                    Official:Commonwealth of Australia
                    Common:Australia
                        Region:Oceania
                        Subregion:Australia and New Zealand
                        Population:25687041
        
script.js:17 Country name:
                    Official:Turks and Caicos Islands
                    Common:Turks and Caicos Islands
                        Region:Americas
                        Subregion:Caribbean
                        Population:38718
        
script.js:17 Country name:
                    Official:Republic of Trinidad and Tobago
                    Common:Trinidad and Tobago
                        Region:Americas
                        Subregion:Caribbean
                        Population:1399491
        
script.js:17 Country name:
                    Official:Anguilla
                    Common:Anguilla
                        Region:Americas
                        Subregion:Caribbean
                        Population:13452
        
script.js:17 Country name:
                    Official:Republic of Haiti
                    Common:Haiti
                        Region:Americas
                        Subregion:Caribbean
                        Population:11402533
        
script.js:17 Country name:
                    Official:Republic of Uzbekistan
                    Common:Uzbekistan
                        Region:Asia
                        Subregion:Central Asia
                        Population:34232050
        
script.js:17 Country name:
                    Official:Dominican Republic
                    Common:Dominican Republic
                        Region:Americas
                        Subregion:Caribbean
                        Population:10847904
        
script.js:17 Country name:
                    Official:Department of Mayotte
                    Common:Mayotte
                        Region:Africa
                        Subregion:Eastern Africa
                        Population:226915
        
script.js:17 Country name:
                    Official:Mongolia
                    Common:Mongolia
                        Region:Asia
                        Subregion:Eastern Asia
                        Population:3278292
        
script.js:17 Country name:
                    Official:Saint Pierre and Miquelon
                    Common:Saint Pierre and Miquelon
                        Region:Americas
                        Subregion:North America
                        Population:6069
        
script.js:17 Country name:
                    Official:Independent State of Samoa
                    Common:Samoa
                        Region:Oceania
                        Subregion:Polynesia
                        Population:198410
        
script.js:17 Country name:
                    Official:Republic of Nicaragua
                    Common:Nicaragua
                        Region:Americas
                        Subregion:Central America
                        Population:6624554
        
script.js:17 Country name:
                    Official:Kingdom of Bhutan
                    Common:Bhutan
                        Region:Asia
                        Subregion:Southern Asia
                        Population:771612
    */


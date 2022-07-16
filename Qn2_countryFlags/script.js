
//Using the rest countries api, display the flags in the console


// 1.setup http Request 
let xhr=new XMLHttpRequest();//created an object xhr 

//2.Open The request

xhr.open('GET',"https://restcountries.com/v3.1/all")


//3.Setup our listener to process the complete request

xhr.onload=function(){
    //get the data 
    if(xhr.status>=200&& xhr.status<300){
        //only if request is ok and received the data 
        let data=JSON.parse(this.response);
       //get the flags of all countries
      for(let i=0;i<data.length;i++)
      {
        console.log(`country:${data[i].name.official}
        Flag:${data[i].flags.png}`);
      }
    }else{
        //Run if the request is not ok
        console.log("Error");
    }
}

//4.Send the request
xhr.send();

/* Output
script.js:25 country:Guam
        Flag:https://flagcdn.com/w320/gu.png
script.js:25 country:People's Republic of Bangladesh
        Flag:https://flagcdn.com/w320/bd.png
script.js:25 country:Cook Islands
        Flag:https://flagcdn.com/w320/ck.png
script.js:25 country:Federal Democratic Republic of Nepal
        Flag:https://flagcdn.com/w320/np.png
script.js:25 country:Principality of Monaco
        Flag:https://flagcdn.com/w320/mc.png
script.js:25 country:Republic of Turkey
        Flag:https://flagcdn.com/w320/tr.png
script.js:25 country:Collectivity of Saint Barthélemy
        Flag:https://flagcdn.com/w320/bl.png
script.js:25 country:Jamaica
        Flag:https://flagcdn.com/w320/jm.png
script.js:25 country:Principality of Andorra
        Flag:https://flagcdn.com/w320/ad.png
script.js:25 country:State of Libya
        Flag:https://flagcdn.com/w320/ly.png
script.js:25 country:Bailiwick of Jersey
        Flag:https://flagcdn.com/w320/je.png
script.js:25 country:Republic of Malta
        Flag:https://flagcdn.com/w320/mt.png
script.js:25 country:Plurinational State of Bolivia
        Flag:https://flagcdn.com/w320/bo.png
script.js:25 country:Republic of Mauritius
        Flag:https://flagcdn.com/w320/mu.png
script.js:25 country:Commonwealth of Puerto Rico
        Flag:https://flagcdn.com/w320/pr.png
script.js:25 country:French Republic
        Flag:https://flagcdn.com/w320/fr.png
script.js:25 country:Grand Duchy of Luxembourg
        Flag:https://flagcdn.com/w320/lu.png
script.js:25 country:Republic of Kosovo
        Flag:https://flagcdn.com/w320/xk.png
script.js:25 country:Republic of Madagascar
        Flag:https://flagcdn.com/w320/mg.png
script.js:25 country:Islamic Republic of Pakistan
        Flag:https://flagcdn.com/w320/pk.png
script.js:25 country:Republic of Malawi
        Flag:https://flagcdn.com/w320/mw.png
script.js:25 country:Republic of Slovenia
        Flag:https://flagcdn.com/w320/si.png
script.js:25 country:Kingdom of Eswatini
        Flag:https://flagcdn.com/w320/sz.png
script.js:25 country:United States of America
        Flag:https://flagcdn.com/w320/us.png
script.js:25 country:Independent and Sovereign Republic of Kiribati
        Flag:https://flagcdn.com/w320/ki.png
script.js:25 country:Republic of Azerbaijan
        Flag:https://flagcdn.com/w320/az.png
script.js:25 country:Republic of Zambia
        Flag:https://flagcdn.com/w320/zm.png
script.js:25 country:Republic of Kenya
        Flag:https://flagcdn.com/w320/ke.png
script.js:25 country:State of Kuwait
        Flag:https://flagcdn.com/w320/kw.png
script.js:25 country:Republic of Kazakhstan
        Flag:https://flagcdn.com/w320/kz.png
script.js:25 country:Republic of Latvia
        Flag:https://flagcdn.com/w320/lv.png
script.js:25 country:Republic of Sierra Leone
        Flag:https://flagcdn.com/w320/sl.png
script.js:25 country:Federation of Saint Christopher and Nevis
        Flag:https://flagcdn.com/w320/kn.png
script.js:25 country:Belize
        Flag:https://flagcdn.com/w320/bz.png
script.js:25 country:Martinique
        Flag:https://flagcdn.com/w320/mq.png
script.js:25 country:Romania
        Flag:https://flagcdn.com/w320/ro.png
script.js:25 country:Virgin Islands
        Flag:https://flagcdn.com/w320/vg.png
script.js:25 country:New Zealand
        Flag:https://flagcdn.com/w320/nz.png
script.js:25 country:Federative Republic of Brazil
        Flag:https://flagcdn.com/w320/br.png
script.js:25 country:Central African Republic
        Flag:https://flagcdn.com/w320/cf.png
script.js:25 country:Republic of the Marshall Islands
        Flag:https://flagcdn.com/w320/mh.png
script.js:25 country:Territory of the French Southern and Antarctic Lands
        Flag:https://flagcdn.com/w320/tf.png
script.js:25 country:Territory of the Wallis and Futuna Islands
        Flag:https://flagcdn.com/w320/wf.png
script.js:25 country:Russian Federation
        Flag:https://flagcdn.com/w320/ru.png
script.js:25 country:Republic of Panama
        Flag:https://flagcdn.com/w320/pa.png
script.js:25 country:Nation of Brunei, Abode of Peace
        Flag:https://flagcdn.com/w320/bn.png
script.js:25 country:Gibraltar
        Flag:https://flagcdn.com/w320/gi.png
script.js:25 country:Malaysia
        Flag:https://flagcdn.com/w320/my.png
script.js:25 country:Republic of Ecuador
        Flag:https://flagcdn.com/w320/ec.png
script.js:25 country:Kingdom of Morocco
        Flag:https://flagcdn.com/w320/ma.png
script.js:25 country:Saint Vincent and the Grenadines
        Flag:https://flagcdn.com/w320/vc.png
script.js:25 country:Republic of Cuba
        Flag:https://flagcdn.com/w320/cu.png
script.js:25 country:Principality of Liechtenstein
        Flag:https://flagcdn.com/w320/li.png
script.js:25 country:Commonwealth of the Bahamas
        Flag:https://flagcdn.com/w320/bs.png
script.js:25 country:Canada
        Flag:https://flagcdn.com/w320/ca.png
script.js:25 country:Republic of Fiji
        Flag:https://flagcdn.com/w320/fj.png
script.js:25 country:Kingdom of Saudi Arabia
        Flag:https://flagcdn.com/w320/sa.png
script.js:25 country:Cayman Islands
        Flag:https://flagcdn.com/w320/ky.png
script.js:25 country:Republic of Lithuania
        Flag:https://flagcdn.com/w320/lt.png
script.js:25 country:Bonaire, Sint Eustatius and Saba
        Flag:https://flagcdn.com/w320/bq.png
script.js:25 country:Republic of Ireland
        Flag:https://flagcdn.com/w320/ie.png
script.js:25 country:Republic of Chile
        Flag:https://flagcdn.com/w320/cl.png
script.js:25 country:Turkmenistan
        Flag:https://flagcdn.com/w320/tm.png
script.js:25 country:Republic of the Union of Myanmar
        Flag:https://flagcdn.com/w320/mm.png
script.js:25 country:Republic of Yemen
        Flag:https://flagcdn.com/w320/ye.png
script.js:25 country:Saint Helena, Ascension and Tristan da Cunha
        Flag:https://flagcdn.com/w320/sh.png
script.js:25 country:Democratic Republic of São Tomé and Príncipe
        Flag:https://flagcdn.com/w320/st.png
script.js:25 country:Republic of Guatemala
        Flag:https://flagcdn.com/w320/gt.png
script.js:25 country:Republic of Singapore
        Flag:https://flagcdn.com/w320/sg.png
script.js:25 country:Bolivarian Republic of Venezuela
        Flag:https://flagcdn.com/w320/ve.png
script.js:25 country:Union of the Comoros
        Flag:https://flagcdn.com/w320/km.png
script.js:25 country:Sahrawi Arab Democratic Republic
        Flag:https://flagcdn.com/w320/eh.png
script.js:25 country:Republic of Namibia
        Flag:https://flagcdn.com/w320/na.png
script.js:25 country:Democratic Republic of Timor-Leste
        Flag:https://flagcdn.com/w320/tl.png
script.js:25 country:Bosnia and Herzegovina
        Flag:https://flagcdn.com/w320/ba.png
script.js:25 country:Republic of Cabo Verde
        Flag:https://flagcdn.com/w320/cv.png
script.js:25 country:Hong Kong Special Administrative Region of the People's Republic of China
        Flag:https://flagcdn.com/w320/hk.png
script.js:25 country:Republic of Moldova
        Flag:https://flagcdn.com/w320/md.png
script.js:25 country:Republic of the Philippines
        Flag:https://flagcdn.com/w320/ph.png
script.js:25 country:Guadeloupe
        Flag:https://flagcdn.com/w320/gp.png
script.js:25 country:Republic of Zimbabwe
        Flag:https://flagcdn.com/w320/zw.png
script.js:25 country:Grenada
        Flag:https://flagcdn.com/w320/gd.png
script.js:25 country:Isle of Man
        Flag:https://flagcdn.com/w320/im.png
script.js:25 country:United Republic of Tanzania
        Flag:https://flagcdn.com/w320/tz.png
script.js:25 country:Republic of Seychelles
        Flag:https://flagcdn.com/w320/sc.png
script.js:25 country:Kingdom of the Netherlands
        Flag:https://flagcdn.com/w320/nl.png
script.js:25 country:Republic of Paraguay
        Flag:https://flagcdn.com/w320/py.png
script.js:25 country:Republic of San Marino
        Flag:https://flagcdn.com/w320/sm.png
script.js:25 country:Republic of Bulgaria
        Flag:https://flagcdn.com/w320/bg.png
script.js:25 country:Virgin Islands of the United States
        Flag:https://flagcdn.com/w320/vi.png
script.js:25 country:Tunisian Republic
        Flag:https://flagcdn.com/w320/tn.png
script.js:25 country:Iceland
        Flag:https://flagcdn.com/w320/is.png
script.js:25 country:Democratic Republic of the Congo
        Flag:https://flagcdn.com/w320/cd.png
script.js:25 country:Aruba
        Flag:https://flagcdn.com/w320/aw.png
script.js:25 country:Republic of Indonesia
        Flag:https://flagcdn.com/w320/id.png
script.js:25 country:Republic of El Salvador
        Flag:https://flagcdn.com/w320/sv.png
script.js:25 country:Slovak Republic
        Flag:https://flagcdn.com/w320/sk.png
script.js:25 country:Kingdom of Sweden
        Flag:https://flagcdn.com/w320/se.png
script.js:25 country:Lao People's Democratic Republic
        Flag:https://flagcdn.com/w320/la.png
script.js:25 country:Republic of the Gambia
        Flag:https://flagcdn.com/w320/gm.png
script.js:25 country:State of Israel
        Flag:https://flagcdn.com/w320/il.png
script.js:25 country:Svalbard og Jan Mayen
        Flag:https://flagcdn.com/w320/sj.png
script.js:25 country:Montenegro
        Flag:https://flagcdn.com/w320/me.png
script.js:25 country:Federal Republic of Somalia
        Flag:https://flagcdn.com/w320/so.png
script.js:25 country:Réunion Island
        Flag:https://flagcdn.com/w320/re.png
script.js:25 country:Democratic Socialist Republic of Sri Lanka
        Flag:https://flagcdn.com/w320/lk.png
script.js:25 country:Federal Republic of Germany
        Flag:https://flagcdn.com/w320/de.png
script.js:25 country:Republic of Serbia
        Flag:https://flagcdn.com/w320/rs.png
script.js:25 country:Macao Special Administrative Region of the People's Republic of China
        Flag:https://flagcdn.com/w320/mo.png
script.js:25 country:Co-operative Republic of Guyana
        Flag:https://flagcdn.com/w320/gy.png
script.js:25 country:Republic of Suriname
        Flag:https://flagcdn.com/w320/sr.png
script.js:25 country:Kingdom of Lesotho
        Flag:https://flagcdn.com/w320/ls.png
script.js:25 country:Faroe Islands
        Flag:https://flagcdn.com/w320/fo.png
script.js:25 country:Republic of Honduras
        Flag:https://flagcdn.com/w320/hn.png
script.js:25 country:State of Palestine
        Flag:https://flagcdn.com/w320/ps.png
script.js:25 country:Independent State of Papua New Guinea
        Flag:https://flagcdn.com/w320/pg.png
script.js:25 country:Arab Republic of Egypt
        Flag:https://flagcdn.com/w320/eg.png
script.js:25 country:Kingdom of Spain
        Flag:https://flagcdn.com/w320/es.png
script.js:25 country:State of Eritrea
        Flag:https://flagcdn.com/w320/er.png
script.js:25 country:Republic of Mozambique
        Flag:https://flagcdn.com/w320/mz.png
script.js:25 country:Democratic People's Republic of Korea
        Flag:https://flagcdn.com/w320/kp.png
script.js:25 country:Republic of Senegal
        Flag:https://flagcdn.com/w320/sn.png
script.js:25 country:Niue
        Flag:https://flagcdn.com/w320/nu.png
script.js:25 country:Federated States of Micronesia
        Flag:https://flagcdn.com/w320/fm.png
script.js:25 country:Kingdom of Cambodia
        Flag:https://flagcdn.com/w320/kh.png
script.js:25 country:Republic of Djibouti
        Flag:https://flagcdn.com/w320/dj.png
script.js:25 country:Republic of Ghana
        Flag:https://flagcdn.com/w320/gh.png
script.js:25 country:Bouvet Island
        Flag:https://flagcdn.com/w320/bv.png
script.js:25 country:Republic of Belarus
        Flag:https://flagcdn.com/w320/by.png
script.js:25 country:Republic of Benin
        Flag:https://flagcdn.com/w320/bj.png
script.js:25 country:Territory of the Cocos (Keeling) Islands
        Flag:https://flagcdn.com/w320/cc.png
script.js:25 country:United Kingdom of Great Britain and Northern Ireland
        Flag:https://flagcdn.com/w320/gb.png
script.js:25 country:Åland Islands
        Flag:https://flagcdn.com/w320/ax.png
script.js:25 country:Burkina Faso
        Flag:https://flagcdn.com/w320/bf.png
script.js:25 country:Solomon Islands
        Flag:https://flagcdn.com/w320/sb.png
script.js:25 country:Falkland Islands
        Flag:https://flagcdn.com/w320/fk.png
script.js:25 country:Bailiwick of Guernsey
        Flag:https://flagcdn.com/w320/gg.png
script.js:25 country:Republic of Costa Rica
        Flag:https://flagcdn.com/w320/cr.png
script.js:25 country:Republic of Albania
        Flag:https://flagcdn.com/w320/al.png
script.js:25 country:Territory of Christmas Island
        Flag:https://flagcdn.com/w320/cx.png
script.js:25 country:Hellenic Republic
        Flag:https://flagcdn.com/w320/gr.png
script.js:25 country:Ukraine
        Flag:https://flagcdn.com/w320/ua.png
script.js:25 country:Greenland
        Flag:https://flagcdn.com/w320/gl.png
script.js:25 country:Republic of North Macedonia
        Flag:https://flagcdn.com/w320/mk.png
script.js:25 country:Republic of Côte d'Ivoire
        Flag:https://flagcdn.com/w320/ci.png
script.js:25 country:Syrian Arab Republic
        Flag:https://flagcdn.com/w320/sy.png
script.js:25 country:Czech Republic
        Flag:https://flagcdn.com/w320/cz.png
script.js:25 country:Republic of Botswana
        Flag:https://flagcdn.com/w320/bw.png
script.js:25 country:American Samoa
        Flag:https://flagcdn.com/w320/as.png
script.js:25 country:United Mexican States
        Flag:https://flagcdn.com/w320/mx.png
script.js:25 country:Republic of Austria
        Flag:https://flagcdn.com/w320/at.png
script.js:25 country:Bermuda
        Flag:https://flagcdn.com/w320/bm.png
script.js:25 country:Kingdom of Bahrain
        Flag:https://flagcdn.com/w320/bh.png
script.js:25 country:Republic of Nauru
        Flag:https://flagcdn.com/w320/nr.png
script.js:25 country:Republic of Niger
        Flag:https://flagcdn.com/w320/ne.png
script.js:25 country:Republic of Angola
        Flag:https://flagcdn.com/w320/ao.png
script.js:25 country:Antigua and Barbuda
        Flag:https://flagcdn.com/w320/ag.png
script.js:25 country:Montserrat
        Flag:https://flagcdn.com/w320/ms.png
script.js:25 country:Republic of Korea
        Flag:https://flagcdn.com/w320/kr.png
script.js:25 country:Republic of China (Taiwan)
        Flag:https://flagcdn.com/w320/tw.png
script.js:25 country:Barbados
        Flag:https://flagcdn.com/w320/bb.png
script.js:25 country:Country of Curaçao
        Flag:https://flagcdn.com/w320/cw.png
script.js:25 country:Republic of the Maldives
        Flag:https://flagcdn.com/w320/mv.png
script.js:25 country:Heard Island and McDonald Islands
        Flag:https://flagcdn.com/w320/hm.png
script.js:25 country:Commonwealth of Dominica
        Flag:https://flagcdn.com/w320/dm.png
script.js:25 country:Islamic Republic of Mauritania
        Flag:https://flagcdn.com/w320/mr.png
script.js:25 country:Georgia
        Flag:https://flagcdn.com/w320/ge.png
script.js:25 country:Republic of Guinea
        Flag:https://flagcdn.com/w320/gn.png
script.js:25 country:Republic of Liberia
        Flag:https://flagcdn.com/w320/lr.png
script.js:25 country:Republic of Guinea-Bissau
        Flag:https://flagcdn.com/w320/gw.png
script.js:25 country:Swiss Confederation
        Flag:https://flagcdn.com/w320/ch.png
script.js:25 country:Republic of Cyprus
        Flag:https://flagcdn.com/w320/cy.png
script.js:25 country:British Indian Ocean Territory
        Flag:https://flagcdn.com/w320/io.png
script.js:25 country:Republic of Finland
        Flag:https://flagcdn.com/w320/fi.png
script.js:25 country:Kingdom of Belgium
        Flag:https://flagcdn.com/w320/be.png
script.js:25 country:United Arab Emirates
        Flag:https://flagcdn.com/w320/ae.png
script.js:25 country:Republic of Mali
        Flag:https://flagcdn.com/w320/ml.png
script.js:25 country:Republic of Chad
        Flag:https://flagcdn.com/w320/td.png
script.js:25 country:Republic of Equatorial Guinea
        Flag:https://flagcdn.com/w320/gq.png
script.js:25 country:Vatican City State
        Flag:https://flagcdn.com/w320/va.png
script.js:25 country:Republic of Iraq
        Flag:https://flagcdn.com/w320/iq.png
script.js:25 country:Tokelau
        Flag:https://flagcdn.com/w320/tk.png
script.js:25 country:Kingdom of Tonga
        Flag:https://flagcdn.com/w320/to.png
script.js:25 country:Commonwealth of the Northern Mariana Islands
        Flag:https://flagcdn.com/w320/mp.png
script.js:25 country:State of Qatar
        Flag:https://flagcdn.com/w320/qa.png
script.js:25 country:Oriental Republic of Uruguay
        Flag:https://flagcdn.com/w320/uy.png
script.js:25 country:Republic of India
        Flag:https://flagcdn.com/w320/in.png
script.js:25 country:Territory of Norfolk Island
        Flag:https://flagcdn.com/w320/nf.png
script.js:25 country:Sultanate of Oman
        Flag:https://flagcdn.com/w320/om.png
script.js:25 country:Republic of Colombia
        Flag:https://flagcdn.com/w320/co.png
script.js:25 country:Republic of Cameroon
        Flag:https://flagcdn.com/w320/cm.png
script.js:25 country:Federal Democratic Republic of Ethiopia
        Flag:https://flagcdn.com/w320/et.png
script.js:25 country:Republic of the Sudan
        Flag:https://flagcdn.com/w320/sd.png
script.js:25 country:Gabonese Republic
        Flag:https://flagcdn.com/w320/ga.png
script.js:25 country:Argentine Republic
        Flag:https://flagcdn.com/w320/ar.png
script.js:25 country:Japan
        Flag:https://flagcdn.com/w320/jp.png
script.js:25 country:Hungary
        Flag:https://flagcdn.com/w320/hu.png
script.js:25 country:Republic of Croatia
        Flag:https://flagcdn.com/w320/hr.png
script.js:25 country:Kyrgyz Republic
        Flag:https://flagcdn.com/w320/kg.png
script.js:25 country:Portuguese Republic
        Flag:https://flagcdn.com/w320/pt.png
script.js:25 country:Socialist Republic of Vietnam
        Flag:https://flagcdn.com/w320/vn.png
script.js:25 country:Kingdom of Norway
        Flag:https://flagcdn.com/w320/no.png
script.js:25 country:Italian Republic
        Flag:https://flagcdn.com/w320/it.png
script.js:25 country:Sint Maarten
        Flag:https://flagcdn.com/w320/sx.png
script.js:25 country:Saint Martin
        Flag:https://flagcdn.com/w320/mf.png
script.js:25 country:Hashemite Kingdom of Jordan
        Flag:https://flagcdn.com/w320/jo.png
script.js:25 country:French Polynesia
        Flag:https://flagcdn.com/w320/pf.png
script.js:25 country:Republic of Rwanda
        Flag:https://flagcdn.com/w320/rw.png
script.js:25 country:Kingdom of Thailand
        Flag:https://flagcdn.com/w320/th.png
script.js:25 country:Kingdom of Denmark
        Flag:https://flagcdn.com/w320/dk.png
script.js:25 country:Tuvalu
        Flag:https://flagcdn.com/w320/tv.png
script.js:25 country:Pitcairn Group of Islands
        Flag:https://flagcdn.com/w320/pn.png
script.js:25 country:Republic of Uganda
        Flag:https://flagcdn.com/w320/ug.png
script.js:25 country:Togolese Republic
        Flag:https://flagcdn.com/w320/tg.png
script.js:25 country:Republic of Tajikistan
        Flag:https://flagcdn.com/w320/tj.png
script.js:25 country:Guiana
        Flag:https://flagcdn.com/w320/gf.png
script.js:25 country:Saint Lucia
        Flag:https://flagcdn.com/w320/lc.png
script.js:25 country:Republic of South Africa
        Flag:https://flagcdn.com/w320/za.png
script.js:25 country:Republic of Armenia
        Flag:https://flagcdn.com/w320/am.png
script.js:25 country:Federal Republic of Nigeria
        Flag:https://flagcdn.com/w320/ng.png
script.js:25 country:Republic of South Sudan
        Flag:https://flagcdn.com/w320/ss.png
script.js:25 country:Islamic Republic of Afghanistan
        Flag:https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
script.js:25 country:Republic of Poland
        Flag:https://flagcdn.com/w320/pl.png
script.js:25 country:Antarctica
        Flag:https://flagcdn.com/w320/aq.png
script.js:25 country:Lebanese Republic
        Flag:https://flagcdn.com/w320/lb.png
script.js:25 country:Republic of Palau
        Flag:https://flagcdn.com/w320/pw.png
script.js:25 country:New Caledonia
        Flag:https://flagcdn.com/w320/nc.png
script.js:25 country:Republic of Burundi
        Flag:https://flagcdn.com/w320/bi.png
script.js:25 country:People's Democratic Republic of Algeria
        Flag:https://flagcdn.com/w320/dz.png
script.js:25 country:United States Minor Outlying Islands
        Flag:https://flagcdn.com/w320/um.png
script.js:25 country:Republic of Peru
        Flag:https://flagcdn.com/w320/pe.png
script.js:25 country:Republic of Estonia
        Flag:https://flagcdn.com/w320/ee.png
script.js:25 country:South Georgia and the South Sandwich Islands
        Flag:https://flagcdn.com/w320/gs.png
script.js:25 country:Republic of Vanuatu
        Flag:https://flagcdn.com/w320/vu.png
script.js:25 country:Islamic Republic of Iran
        Flag:https://flagcdn.com/w320/ir.png
script.js:25 country:People's Republic of China
        Flag:https://flagcdn.com/w320/cn.png
script.js:25 country:Republic of the Congo
        Flag:https://flagcdn.com/w320/cg.png
script.js:25 country:Commonwealth of Australia
        Flag:https://flagcdn.com/w320/au.png
script.js:25 country:Turks and Caicos Islands
        Flag:https://flagcdn.com/w320/tc.png
script.js:25 country:Republic of Trinidad and Tobago
        Flag:https://flagcdn.com/w320/tt.png
script.js:25 country:Anguilla
        Flag:https://flagcdn.com/w320/ai.png
script.js:25 country:Republic of Haiti
        Flag:https://flagcdn.com/w320/ht.png
script.js:25 country:Republic of Uzbekistan
        Flag:https://flagcdn.com/w320/uz.png
script.js:25 country:Dominican Republic
        Flag:https://flagcdn.com/w320/do.png
script.js:25 country:Department of Mayotte
        Flag:https://flagcdn.com/w320/yt.png
script.js:25 country:Mongolia
        Flag:https://flagcdn.com/w320/mn.png
script.js:25 country:Saint Pierre and Miquelon
        Flag:https://flagcdn.com/w320/pm.png
script.js:25 country:Independent State of Samoa
        Flag:https://flagcdn.com/w320/ws.png
script.js:25 country:Republic of Nicaragua
        Flag:https://flagcdn.com/w320/ni.png
script.js:25 country:Kingdom of Bhutan
        Flag:https://flagcdn.com/w320/bt.png
        */
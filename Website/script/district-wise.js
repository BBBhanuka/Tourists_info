 new Vue({
  el: '#district-wise',
  data: {
    district: '',
    dataObj: [
    {
    	name: 'Ampara',
      locations:[' Buddangala Monastery', ' Deegawapiya',' Hulan Nuge Temple',' Kudumbigala Monastery','  Maha Oya Hotwater Springs',' Magul Maha Viharaya, Lahugala','  Muhudu Maha Viharaya, Potthuvil','  Okanda Beach, Kumana',' Rambakanoya Tank','  Serakanda Viharaya']
    },

    {
    	name: 'Anuradhapura',
      locations:["Jaya Shrimaha Bodhiya","Ruwanmeli Maha Seya","Samadhi Buddha Statue","Kuttam Pokuna","Namal Uyana","Thanthirimale Rajamaha Viharaya","Ritigala","Hiriwadunna Temple"]

    },

    {
    	name: 'Badulla',
      locations:["Adisham Bungalow","Bambarakanda Waterfall","Dova Rock Temple","Diyaluma Waterfall","Demodara Nine Arches Bridge","Kuda Dunhinada Falls","Ravana Ella","Sorabora Wewa"]
    },

    {
    	name: 'Colombo',
      locations:["Arcade Shopping Complex","Air Force Museum","Alakeshwara Tomb","Ape Gama","Bellanvila Temple","Colombo Lighthouse","Colombo Town Hall","Gangarama Temple","Independence Memorial Hall","Korathota Temple","Kurugala Sri Shailathanaramaya","Prison Cell of the Last King of Sri Lanka","Lotus Tower","National Museum","Puppet Art Museum","Sadharitha Una Arana","Seethawaka Botanical Garden","Weragala Temple, Padukka","Weherakana Ruins"]
    },
    {
    name: 'Galle',
      locations:["Galle Fort, Galle","Mask Museum, Ambalangoda","Martin Wickramasinghe Folk Museum, Koggala","Peraliya Buddha Statue","Seenigama Devalaya"]
    },
    {
    name: "Gampaha",
    locations:["Attanagalla Rajamaha Viharaya","Henarathgoda Garden","Horagolla National Park","Kelaniya Viharaya","Koskandavila Viharaya","Maligathenna Viharaya","Pilikuththuwa Viharaya","Varana Temple","Water World"]
    },
    {
    name: "Hambanthota",
    locations:["Bandagiriya Temple, Bandagiriya","Hambanthota Saltern","Ussangoda","Yala National Park","Agro Technology Park, Bataatha","Kirinda Rajamaha Viharaya","Yatala Wehera"]
    },
    {
    name: "Jaffna",
    locations:["Anjanajar Temple","Dambakolapatuna Sangamiththa Temple","Jaffna Fort","Jaffna Old Railway Station","Jaffna Public Library","Kadurugoda Temple","Keeramale Pond","King Sankilian Monuments","Kobbekaduwa Memorial","Nilavarai Bottomless Well","Nagadeepa Viharaya","Naga Pooshani Ambal Kovil","Naguleswaram Temple","Nallur Kovil",'Sungupiddy New Bridge']
    },
    {
    name: "Kaluthara",
    locations:["Kande Viharaya","Kaluthara Bodhiya","Lenawara Temple","Panadura Beach","Richmond Castle","Rankoth Viharaya"]
    },
    {
    name: "Kandy",
    locations:["Degaldoruwa Rajamaha Viharaya","Embekke Devalaya, Pilimathalawa","Gadaladeniya Temple, Pilimathalawa","Hindagala Temple","Kadugannawa Rock Tunnel","Lanka Thilaka Viharaya, Pilimathalawa","Peradeniya Gardens","Sri Dalada Maligawa, Kandy"]
    },
    {
    name: "Kegalle",
    locations:['Pinnawala Elephant Orphanage','Berendi Kovil',' Dedimunda Devalaya']
    },
    {
    name: "Kurunegala",
    locations:['Rambodagalla Buddha Statue','Ridi Viharaya','Sri Sambuddha Maligawa']
    },
    {
    name: "Mathale",
    locations:['Dambulla Rock Temple , Dambulla','Kaludiya Pokuna','Pidurangala Rajamaha Viharaya','Ancient City of Sigiriya']
    },
    {
    name: "Monaragala",
    locations:['Buduruwagala Wellawaya',' Govinda Hela ( Westminster Abbey)','Yudaganawa Temple']
    },
    {
    name: "Nuwara Eliya",
    locations:["Bakers Falls, Horton Plains","Devon Falls, Thalawakele","Gregory Lake, Nuwara Eliya","Hanuman Kovil, Ramboda","Puna Ella, Ramboda","Ramboda Falls, Ramboda","Ramboda Tunnel, Ramboda","St Clair Falls, Thalawakele","Victoria Garden, Nuwara Eliya"]
    },
    {
    name: "Polonnaruwa",
    locations:["Atadageya","Bodhisathva Statue in Dalada Maluwa","Counsel Chamber","Gal Potha","Gal Viharaya","Hetadageya","Royal Palace of King Parakumba","Kumara Pokuna","Lanka Thilaka Vihara","Lotus Pond","Minneriya National Park","Nisshanka Latha Mandapaya","Pothgul Viharaya","Rankoth Vehera Stupa","Sath Mahal Prasada","Siva Devalaya(No 1)","Somawathiya","Thuparama Image House","Thivanka Image House","Vatadageya (Dalada Maluwa)","Vatadageya (Medirigiriya)","Velaikkara Slab Inscription"]
    },
    {
    name: "Rathnapura",
    locations:[' Udawalawa Tank, Udawalawa',"Udawalawa National Park - also Belongs to Monaragala District"]
    },
    {
    name: "Trincomalee",
    locations:['Fort Fredrick, Trincomalee','Girihadu Seya','Kanniaya Hot Water Wells','Kinniya Bridge','Koneshwaran Temple, Trincomalee','Pigeon Island','Velgam Vehera']
    },
    
    
],}
})
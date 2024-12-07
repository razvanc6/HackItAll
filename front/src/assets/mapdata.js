var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",

    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
  },
  state_specific: {
    ROAB: {
      name: "Alba",
      localities: ["Alba Iulia", "Sebeș", "Blaj", "Cugir", "Aiud"],
    },
    ROAG: {
      name: "Argeș",
      localities: [
        "Pitești",
        "Câmpulung",
        "Curtea de Argeș",
        "Mioveni",
        "Ștefănești",
      ],
    },
    ROAR: {
      name: "Arad",
      localities: ["Arad", "Ineu", "Lipova", "Chișineu-Criș", "Pecica"],
    },
    ROB: {
      name: "București",
      localities: [
        "Sector 1",
        "Sector 2",
        "Sector 3",
        "Sector 4",
        "Sector 5",
        "Sector 6",
      ],
    },
    ROBC: {
      name: "Bacău",
      localities: ["Bacău", "Onești", "Moinești", "Comănești", "Buhuși"],
    },
    ROBH: {
      name: "Bihor",
      localities: ["Oradea", "Salonta", "Marghita", "Beiuș", "Aleșd"],
    },
    ROBN: {
      name: "Bistrița-Năsăud",
      localities: ["Bistrița", "Năsăud", "Beclean", "Sângeorz-Băi"],
    },
    ROBR: {
      name: "Brăila",
      localities: ["Brăila", "Ianca", "Făurei", "Însurăței"],
    },
    ROBT: {
      name: "Botoșani",
      localities: ["Botoșani", "Dorohoi", "Darabani", "Săveni"],
    },
    ROBV: {
      name: "Brașov",
      localities: ["Brașov", "Făgăraș", "Râșnov", "Codlea", "Săcele"],
    },
    ROBZ: {
      name: "Buzău",
      localities: ["Buzău", "Râmnicu Sărat", "Nehoiu", "Pătârlagele"],
    },
    ROCJ: {
      name: "Cluj",
      localities: ["Cluj-Napoca", "Turda", "Dej", "Gherla", "Câmpia Turzii"],
    },
    ROCL: {
      name: "Călărași",
      localities: ["Călărași", "Oltenița", "Lehliu Gară", "Budești"],
    },
    ROCS: {
      name: "Caraș-Severin",
      localities: [
        "Reșița",
        "Caransebeș",
        "Băile Herculane",
        "Oravița",
        "Bocșa",
      ],
    },
    ROCT: {
      name: "Constanța",
      localities: [
        "Constanța",
        "Mangalia",
        "Medgidia",
        "Năvodari",
        "Cernavodă",
      ],
    },
    ROCV: {
      name: "Covasna",
      localities: ["Sfântu Gheorghe", "Târgu Secuiesc", "Baraolt", "Covasna"],
    },
    RODB: {
      name: "Dâmbovița",
      localities: ["Târgoviște", "Moreni", "Pucioasa", "Găești", "Titu"],
    },
    RODJ: {
      name: "Dolj",
      localities: ["Craiova", "Calafat", "Băilești", "Dăbuleni", "Filiași"],
    },
    ROGJ: {
      name: "Gorj",
      localities: [
        "Târgu Jiu",
        "Motru",
        "Rovinari",
        "Târgu Cărbunești",
        "Turceni",
      ],
    },
    ROGL: {
      name: "Galați",
      localities: ["Galați", "Tecuci", "Târgu Bujor", "Berești"],
    },
    ROGR: {
      name: "Giurgiu",
      localities: ["Giurgiu", "Bolintin-Vale", "Mihăilești"],
    },
    ROHD: {
      name: "Hunedoara",
      localities: [
        "Deva",
        "Hunedoara",
        "Petroșani",
        "Lupeni",
        "Vulcan",
        "Orăștie",
      ],
    },
    ROHR: {
      name: "Harghita",
      localities: [
        "Miercurea Ciuc",
        "Odorheiu Secuiesc",
        "Gheorgheni",
        "Toplița",
      ],
    },
    ROIF: {
      name: "Ilfov",
      localities: [
        "Voluntari",
        "Pantelimon",
        "Popești-Leordeni",
        "Buftea",
        "Bragadiru",
      ],
    },
    ROIL: {
      name: "Ialomița",
      localities: ["Slobozia", "Fetești", "Urziceni", "Amara", "Țăndărei"],
    },
    ROIS: {
      name: "Iași",
      localities: ["Iași", "Pașcani", "Târgu Frumos", "Hârlău"],
    },
    ROMH: {
      name: "Mehedinți",
      localities: [
        "Drobeta-Turnu Severin",
        "Strehaia",
        "Vânju Mare",
        "Baia de Aramă",
      ],
    },
    ROMM: {
      name: "Maramureș",
      localities: [
        "Baia Mare",
        "Sighetu Marmației",
        "Borșa",
        "Vișeu de Sus",
        "Târgu Lăpuș",
      ],
    },
    ROMS: {
      name: "Mureș",
      localities: ["Târgu Mureș", "Reghin", "Sighișoara", "Luduș", "Târnăveni"],
    },
    RONT: {
      name: "Neamț",
      localities: ["Piatra Neamț", "Roman", "Târgu Neamț", "Bicaz"],
    },
    ROOT: {
      name: "Olt",
      localities: ["Slatina", "Caracal", "Balș", "Corabia", "Drăgănești-Olt"],
    },
    ROPH: {
      name: "Prahova",
      localities: ["Ploiești", "Câmpina", "Breaza", "Mizil", "Băicoi"],
    },
    ROSB: {
      name: "Sibiu",
      localities: ["Sibiu", "Mediaș", "Cisnădie", "Avrig", "Agnita"],
    },
    ROSJ: {
      name: "Sălaj",
      localities: ["Zalău", "Șimleu Silvaniei", "Jibou", "Cehu Silvaniei"],
    },
    ROSM: {
      name: "Satu Mare",
      localities: ["Satu Mare", "Carei", "Negrești-Oaș", "Tășnad"],
    },
    ROSV: {
      name: "Suceava",
      localities: [
        "Suceava",
        "Fălticeni",
        "Rădăuți",
        "Câmpulung Moldovenesc",
        "Gura Humorului",
      ],
    },
    ROTL: {
      name: "Tulcea",
      localities: ["Tulcea", "Măcin", "Babadag", "Isaccea", "Sulina"],
    },
    ROTM: {
      name: "Timiș",
      localities: ["Timișoara", "Lugoj", "Sânnicolau Mare", "Jimbolia", "Deta"],
    },
    ROTR: {
      name: "Teleorman",
      localities: [
        "Alexandria",
        "Turnu Măgurele",
        "Roșiorii de Vede",
        "Zimnicea",
      ],
    },
    ROVL: {
      name: "Vâlcea",
      localities: [
        "Râmnicu Vâlcea",
        "Drăgășani",
        "Bălcești",
        "Horezu",
        "Brezoi",
      ],
    },
    ROVN: {
      name: "Vrancea",
      localities: ["Focșani", "Adjud", "Mărășești", "Panciu"],
    },
    ROVS: {
      name: "Vaslui",
      localities: ["Vaslui", "Bârlad", "Huși", "Negrești"],
    },
  },

  locations: {},
  labels: {
    ROAB: {
      name: "Alba",
      parent_id: "ROAB",
      x: 361.5,
      y: 332,
    },
    ROAG: {
      name: "Arges",
      parent_id: "ROAG",
      x: 491.1,
      y: 448,
    },
    ROAR: {
      name: "Arad",
      parent_id: "ROAR",
      x: 193.8,
      y: 311,
    },
    ROB: {
      name: "Bucharest",
      parent_id: "ROB",
      x: 607.2,
      y: 567.8,
    },
    ROBC: {
      name: "Bacau",
      parent_id: "ROBC",
      x: 682.5,
      y: 298.4,
    },
    ROBH: {
      name: "Bihor",
      parent_id: "ROBH",
      x: 230.2,
      y: 224.7,
    },
    ROBN: {
      name: "Bistrita-Nasaud",
      parent_id: "ROBN",
      x: 455.6,
      y: 180.3,
    },
    ROBR: {
      name: "Braila",
      parent_id: "ROBR",
      x: 760.2,
      y: 477.8,
    },
    ROBT: {
      name: "Botosani",
      parent_id: "ROBT",
      x: 663.9,
      y: 79.5,
    },
    ROBV: {
      name: "Brasov",
      parent_id: "ROBV",
      x: 519.8,
      y: 377.8,
    },
    ROBZ: {
      name: "Buzau",
      parent_id: "ROBZ",
      x: 670,
      y: 451.7,
    },
    ROCJ: {
      name: "Cluj",
      parent_id: "ROCJ",
      x: 378.3,
      y: 247.2,
    },
    ROCL: {
      name: "Calarasi",
      parent_id: "ROCL",
      x: 666.2,
      y: 581.9,
    },
    ROCS: {
      name: "Caras-Severin",
      parent_id: "ROCS",
      x: 217.8,
      y: 470.8,
    },
    ROCT: {
      name: "Constanta",
      parent_id: "ROCT",
      x: 816.5,
      y: 611.9,
    },
    ROCV: {
      name: "Covasna",
      parent_id: "ROCV",
      x: 606.6,
      y: 367.4,
    },
    RODB: {
      name: "Dâmbovita",
      parent_id: "RODB",
      x: 552.9,
      y: 522.1,
    },
    RODJ: {
      name: "Dolj",
      parent_id: "RODJ",
      x: 372.6,
      y: 600.2,
    },
    ROGJ: {
      name: "Gorj",
      parent_id: "ROGJ",
      x: 344.3,
      y: 492.8,
    },
    ROGL: {
      name: "Galati",
      parent_id: "ROGL",
      x: 769.8,
      y: 383.7,
    },
    ROGR: {
      name: "Giurgiu",
      parent_id: "ROGR",
      x: 594.9,
      y: 608.1,
    },
    ROHD: {
      name: "Hunedoara",
      parent_id: "ROHD",
      x: 305.5,
      y: 392.3,
    },
    ROHR: {
      name: "Harghita",
      parent_id: "ROHR",
      x: 556.4,
      y: 281.6,
    },
    ROIF: {
      name: "Ilfov",
      parent_id: "ROIF",
      x: 614,
      y: 558.3,
    },
    ROIL: {
      name: "Ialomita",
      parent_id: "ROIL",
      x: 762.3,
      y: 540.8,
    },
    ROIS: {
      name: "Iasi",
      parent_id: "ROIS",
      x: 722.6,
      y: 174.9,
    },
    ROMH: {
      name: "Mehedinti",
      parent_id: "ROMH",
      x: 302.5,
      y: 571.3,
    },
    ROMM: {
      name: "Maramures",
      parent_id: "ROMM",
      x: 401.7,
      y: 116.9,
    },
    ROMS: {
      name: "Mures",
      parent_id: "ROMS",
      x: 464.6,
      y: 280.3,
    },
    RONT: {
      name: "Neamt",
      parent_id: "RONT",
      x: 623.9,
      y: 216.7,
    },
    ROOT: {
      name: "Olt",
      parent_id: "ROOT",
      x: 451.2,
      y: 574.6,
    },
    ROPH: {
      name: "Prahova",
      parent_id: "ROPH",
      x: 611.3,
      y: 490.3,
    },
    ROSB: {
      name: "Sibiu",
      parent_id: "ROSB",
      x: 434.2,
      y: 378.2,
    },
    ROSJ: {
      name: "Salaj",
      parent_id: "ROSJ",
      x: 319,
      y: 197.6,
    },
    ROSM: {
      name: "Satu Mare",
      parent_id: "ROSM",
      x: 287.4,
      y: 130.1,
    },
    ROSV: {
      name: "Suceava",
      parent_id: "ROSV",
      x: 557.8,
      y: 131.1,
    },
    ROTL: {
      name: "Tulcea",
      parent_id: "ROTL",
      x: 840,
      y: 490.6,
    },
    ROTM: {
      name: "Timis",
      parent_id: "ROTM",
      x: 138.3,
      y: 398,
    },
    ROTR: {
      name: "Teleorman",
      parent_id: "ROTR",
      x: 524.8,
      y: 623.5,
    },
    ROVL: {
      name: "Vâlcea",
      parent_id: "ROVL",
      x: 423.2,
      y: 476.5,
    },
    ROVN: {
      name: "Vrancea",
      parent_id: "ROVN",
      x: 689.5,
      y: 380.8,
    },
    ROVS: {
      name: "Vaslui",
      parent_id: "ROVS",
      x: 773.6,
      y: 276.5,
    },
  },
  legend: {
    entries: [],
  },
  regions: {},
};

export default simplemaps_countrymap_mapdata;

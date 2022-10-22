const zipCodes = [
  {
    zip_code: 501,
    state: "NY",
    county: "Suffolk",
  },
  {
    zip_code: 544,
    state: "NY",
    county: "Suffolk",
  },
  {
    zip_code: 601,
    state: "PR",
    county: "Adjuntas",
  },
  {
    zip_code: 602,
    state: "PR",
    county: "Aguada",
  },
  {
    zip_code: 603,
    state: "PR",
    county: "Aguadilla",
  },
  {
    zip_code: 604,
    state: "PR",
    county: "Aguadilla",
  },
  {
    zip_code: 605,
    state: "PR",
    county: "Aguadilla",
  },
  {
    zip_code: 606,
    state: "PR",
    county: "Maricao",
  },
  {
    zip_code: 610,
    state: "PR",
    county: "Anasco",
  },
  {
    zip_code: 611,
    state: "PR",
    county: "Utuado",
  },
  {
    zip_code: 612,
    state: "PR",
    county: "Arecibo",
  },
  {
    zip_code: 613,
    state: "PR",
    county: "Arecibo",
  },
  {
    zip_code: 614,
    state: "PR",
    county: "Arecibo",
  },
  {
    zip_code: 616,
    state: "PR",
    county: "Arecibo",
  },
  {
    zip_code: 617,
    state: "PR",
    county: "Barceloneta",
  },
  {
    zip_code: 622,
    state: "PR",
    county: "Cabo Rojo",
  },
  {
    zip_code: 623,
    state: "PR",
    county: "Cabo Rojo",
  },
  {
    zip_code: 624,
    state: "PR",
    county: "Penuelas",
  },
  {
    zip_code: 627,
    state: "PR",
    county: "Camuy",
  },
  {
    zip_code: 631,
    state: "PR",
    county: "Lares",
  },
  {
    zip_code: 636,
    state: "PR",
    county: "San German",
  },
  {
    zip_code: 637,
    state: "PR",
    county: "Sabana Grande",
  },
  {
    zip_code: 638,
    state: "PR",
    county: "Ciales",
  },
  {
    zip_code: 641,
    state: "PR",
    county: "Utuado",
  },
  {
    zip_code: 646,
    state: "PR",
    county: "Dorado",
  },
  {
    zip_code: 647,
    state: "PR",
    county: "Guanica",
  },
  {
    zip_code: 650,
    state: "PR",
    county: "Florida",
  },
  {
    zip_code: 652,
    state: "PR",
    county: "Arecibo",
  },
  {
    zip_code: 653,
    state: "PR",
    county: "Guanica",
  },
  {
    zip_code: 656,
    state: "PR",
    county: "Guayanilla",
  },
  {
    zip_code: 659,
    state: "PR",
    county: "Hatillo",
  },
  {
    zip_code: 660,
    state: "PR",
    county: "Hormigueros",
  },
  {
    zip_code: 662,
    state: "PR",
    county: "Isabela",
  },
  {
    zip_code: 664,
    state: "PR",
    county: "Jayuya",
  },
  {
    zip_code: 667,
    state: "PR",
    county: "Lajas",
  },
  {
    zip_code: 669,
    state: "PR",
    county: "Lares",
  },
  {
    zip_code: 670,
    state: "PR",
    county: "Las Marias",
  },
  {
    zip_code: 674,
    state: "PR",
    county: "Manati",
  },
  {
    zip_code: 676,
    state: "PR",
    county: "Moca",
  },
  {
    zip_code: 677,
    state: "PR",
    county: "Rincon",
  },
  {
    zip_code: 678,
    state: "PR",
    county: "Quebradillas",
  },
  {
    zip_code: 680,
    state: "PR",
    county: "Mayaguez",
  },
  {
    zip_code: 681,
    state: "PR",
    county: "Mayaguez",
  },
  {
    zip_code: 682,
    state: "PR",
    county: "Mayaguez",
  },
  {
    zip_code: 683,
    state: "PR",
    county: "San German",
  },
  {
    zip_code: 685,
    state: "PR",
    county: "San Sebastian",
  },
  {
    zip_code: 687,
    state: "PR",
    county: "Morovis",
  },
  {
    zip_code: 688,
    state: "PR",
    county: "Arecibo",
  },
  {
    zip_code: 690,
    state: "PR",
    county: "Aguadilla",
  },
  {
    zip_code: 692,
    state: "PR",
    county: "Vega Alta",
  },
  {
    zip_code: 693,
    state: "PR",
    county: "Vega Baja",
  },
  {
    zip_code: 694,
    state: "PR",
    county: "Vega Baja",
  },
  {
    zip_code: 698,
    state: "PR",
    county: "Yauco",
  },
  {
    zip_code: 703,
    state: "PR",
    county: "Aguas Buenas",
  },
  {
    zip_code: 704,
    state: "PR",
    county: "Guayama",
  },
  {
    zip_code: 705,
    state: "PR",
    county: "Aibonito",
  },
  {
    zip_code: 707,
    state: "PR",
    county: "Maunabo",
  },
  {
    zip_code: 714,
    state: "PR",
    county: "Arroyo",
  },
  {
    zip_code: 715,
    state: "PR",
    county: "Ponce",
  },
  {
    zip_code: 716,
    state: "PR",
    county: "Ponce",
  },
  {
    zip_code: 717,
    state: "PR",
    county: "Ponce",
  },
  {
    zip_code: 718,
    state: "PR",
    county: "Naguabo",
  },
  {
    zip_code: 719,
    state: "PR",
    county: "Naranjito",
  },
  {
    zip_code: 720,
    state: "PR",
    county: "Orocovis",
  },
  {
    zip_code: 721,
    state: "PR",
    county: "Rio Grande",
  },
  {
    zip_code: 723,
    state: "PR",
    county: "Patillas",
  },
  {
    zip_code: 725,
    state: "PR",
    county: "Caguas",
  },
  {
    zip_code: 726,
    state: "PR",
    county: "Caguas",
  },
  {
    zip_code: 727,
    state: "PR",
    county: "Caguas",
  },
  {
    zip_code: 728,
    state: "PR",
    county: "Ponce",
  },
  {
    zip_code: 729,
    state: "PR",
    county: "Canovanas",
  },
  {
    zip_code: 730,
    state: "PR",
    county: "Ponce",
  },
  {
    zip_code: 731,
    state: "PR",
    county: "Ponce",
  },
  {
    zip_code: 732,
    state: "PR",
    county: "Ponce",
  },
  {
    zip_code: 733,
    state: "PR",
    county: "Ponce",
  },
  {
    zip_code: 734,
    state: "PR",
    county: "Ponce",
  },
  {
    zip_code: 735,
    state: "PR",
    county: "Ceiba",
  },
  {
    zip_code: 736,
    state: "PR",
    county: "Cayey",
  },
  {
    zip_code: 737,
    state: "PR",
    county: "Cayey",
  },
  {
    zip_code: 738,
    state: "PR",
    county: "Fajardo",
  },
  {
    zip_code: 739,
    state: "PR",
    county: "Cidra",
  },
  {
    zip_code: 740,
    state: "PR",
    county: "Fajardo",
  },
  {
    zip_code: 741,
    state: "PR",
    county: "Humacao",
  },
  {
    zip_code: 742,
    state: "PR",
    county: "Ceiba",
  },
  {
    zip_code: 744,
    state: "PR",
    county: "Naguabo",
  },
  {
    zip_code: 745,
    state: "PR",
    county: "Rio Grande",
  },
  {
    zip_code: 751,
    state: "PR",
    county: "Salinas",
  },
  {
    zip_code: 754,
    state: "PR",
    county: "San Lorenzo",
  },
  {
    zip_code: 757,
    state: "PR",
    county: "Santa Isabel",
  },
  {
    zip_code: 765,
    state: "PR",
    county: "Vieques",
  },
  {
    zip_code: 766,
    state: "PR",
    county: "Villalba",
  },
  {
    zip_code: 767,
    state: "PR",
    county: "Yabucoa",
  },
  {
    zip_code: 769,
    state: "PR",
    county: "Coamo",
  },
  {
    zip_code: 771,
    state: "PR",
    county: "Las Piedras",
  },
  {
    zip_code: 772,
    state: "PR",
    county: "Loiza",
  },
  {
    zip_code: 773,
    state: "PR",
    county: "Luquillo",
  },
  {
    zip_code: 775,
    state: "PR",
    county: "Culebra",
  },
  {
    zip_code: 777,
    state: "PR",
    county: "Juncos",
  },
  {
    zip_code: 778,
    state: "PR",
    county: "Gurabo",
  },
  {
    zip_code: 780,
    state: "PR",
    county: "Ponce",
  },
  {
    zip_code: 782,
    state: "PR",
    county: "Comerio",
  },
  {
    zip_code: 783,
    state: "PR",
    county: "Corozal",
  },
  {
    zip_code: 784,
    state: "PR",
    county: "Guayama",
  },
  {
    zip_code: 785,
    state: "PR",
    county: "Guayanilla",
  },
  {
    zip_code: 786,
    state: "PR",
    county: "Aibonito",
  },
  {
    zip_code: 791,
    state: "PR",
    county: "Humacao",
  },
  {
    zip_code: 792,
    state: "PR",
    county: "Humacao",
  },
  {
    zip_code: 794,
    state: "PR",
    county: "Barranquitas",
  },
  {
    zip_code: 795,
    state: "PR",
    county: "Juana Diaz",
  },
  {
    zip_code: 801,
    state: "VI",
    county: "Saint Thomas",
  },
  {
    zip_code: 802,
    state: "VI",
    county: "Saint Thomas",
  },
  {
    zip_code: 803,
    state: "VI",
    county: "Saint Thomas",
  },
  {
    zip_code: 804,
    state: "VI",
    county: "Saint Thomas",
  },
  {
    zip_code: 805,
    state: "VI",
    county: "Saint Thomas",
  },
  {
    zip_code: 820,
    state: "VI",
    county: "Saint Croix",
  },
  {
    zip_code: 821,
    state: "VI",
    county: "Saint Croix",
  },
  {
    zip_code: 822,
    state: "VI",
    county: "Saint Croix",
  },
  {
    zip_code: 823,
    state: "VI",
    county: "Saint Croix",
  },
  {
    zip_code: 824,
    state: "VI",
    county: "Saint Croix",
  },
  {
    zip_code: 830,
    state: "VI",
    county: "Saint John",
  },
  {
    zip_code: 831,
    state: "VI",
    county: "Saint John",
  },
  {
    zip_code: 840,
    state: "VI",
    county: "Saint Croix",
  },
  {
    zip_code: 841,
    state: "VI",
    county: "Saint Croix",
  },
  {
    zip_code: 850,
    state: "VI",
    county: "Saint Croix",
  },
  {
    zip_code: 851,
    state: "VI",
    county: "Saint Croix",
  },
  {
    zip_code: 901,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 902,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 906,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 907,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 908,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 909,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 910,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 911,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 912,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 913,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 914,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 915,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 916,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 917,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 918,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 919,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 920,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 921,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 922,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 923,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 924,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 925,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 926,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 927,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 928,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 929,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 930,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 931,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 933,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 934,
    state: "PR",
    county: "Bayamon",
  },
  {
    zip_code: 935,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 936,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 937,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 938,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 939,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 940,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 949,
    state: "PR",
    county: "Toa Baja",
  },
  {
    zip_code: 950,
    state: "PR",
    county: "Toa Baja",
  },
  {
    zip_code: 951,
    state: "PR",
    county: "Toa Baja",
  },
  {
    zip_code: 952,
    state: "PR",
    county: "Toa Baja",
  },
  {
    zip_code: 953,
    state: "PR",
    county: "Toa Alta",
  },
  {
    zip_code: 954,
    state: "PR",
    county: "Toa Alta",
  },
  {
    zip_code: 955,
    state: "PR",
    county: "San Juan",
  },
  {
    zip_code: 956,
    state: "PR",
    county: "Bayamon",
  },
  {
    zip_code: 957,
    state: "PR",
    county: "Bayamon",
  },
  {
    zip_code: 958,
    state: "PR",
    county: "Bayamon",
  },
  {
    zip_code: 959,
    state: "PR",
    county: "Bayamon",
  },
  {
    zip_code: 960,
    state: "PR",
    county: "Bayamon",
  },
  {
    zip_code: 961,
    state: "PR",
    county: "Bayamon",
  },
];

export default zipCodes;

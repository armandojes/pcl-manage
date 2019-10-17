const clients = [
	{
		"name": "Alberto Diaz Hernandez",
		"cost": "200",
		"number": "9671413345",
		"adress": "Calle Judea #59"
	},
	{
		"name": "Alejandra Escobedo Aguilar ",
		"cost": "350",
		"number": "9675432128",
		"adress": "Diagonal Ramón Larrainzar #85 C"
	},
	{
		"name": "Alejandro López Sántiz",
		"cost": "200",
		"number": "9611889416",
		"adress": "Calle José Vasconcelos #121 Col. El Progreso. "
	},
	{
		"name": "Alfonso de Jesús López Entzin",
		"cost": "300",
		"number": "9671221983",
		"adress": "Col. La Libertad #156"
	},
	{
		"name": "Alfonso Gomez Santiz (Poncho Padrino)",
		"cost": "200",
		"number": "9676833472",
		"adress": "Av. Nezahualcoyotl #30 Col. Azteca"
	},
	{
		"name": "Alonso López Girón",
		"cost": "200",
		"number": "9671030528",
		"adress": "Av. Las Margaritas #12"
	},
	{
		"name": "Ana Cristina Meza Gómez",
		"cost": "200",
		"number": "9671070644",
		"adress": "Col. Ampliación 5 de mayo"
	},
	{
		"name": "Angelina Gómez Ton",
		"cost": "200",
		"number": "9671547656",
		"adress": "Los trabajadores #16"
	},
	{
		"name": "Antonio Dilmar Ballinas Solis 300",
		"cost": "300",
		"number": "9671467968",
		"adress": "Batalla de Puebla #28"
	},
	{
		"name": "Antonio Méndez Girón ",
		"cost": "200",
		"number": "9671583506",
		"adress": "Av. Las Rosas"
	},
	{
		"name": "Arturo Norberto Hernández",
		"cost": "200",
		"number": "9671007603",
		"adress": "Calle Egipto #45"
	},
	{
		"name": "Beatriz González Pérez",
		"cost": "300",
		"number": "9381861427",
		"adress": "Calle 4 de Marzo #61"
	},
	{
		"name": "Candelaria Gómez Gómez",
		"cost": "200",
		"number": "9671551088",
		"adress": "Calle Panama #13"
	},
	{
		"name": "Candelaria Gómez Guzmán",
		"cost": "200",
		"number": "9671611796",
		"adress": "Calle Rio Usumacinta #43"
	},
	{
		"name": "Candido",
		"cost": "200",
		"number": "9671242539",
		"adress": "Periferico Oriente #12"
	},
	{
		"name": "Carlos Hernández Gómez",
		"cost": "200",
		"number": "9671289388",
		"adress": "Entrada San Antonio del Monte"
	},
	{
		"name": "Carmen Fernández 250",
		"cost": "350",
		"number": "9671149487",
		"adress": "Privada Campestre Colibrí"
	},
	{
		"name": "César Méndez Sántiz",
		"cost": "200",
		"number": "9676791309",
		"adress": "Av. Las Margaritas #5"
	},
	{
		"name": "Claudia Gómez Sántiz",
		"cost": "300",
		"number": "9671659609",
		"adress": "av. Italia #16"
	},
	{
		"name": "Daniel Porras Guillen",
		"cost": "200",
		"number": "9671007613",
		"adress": "Playa de Cozumel #23"
	},
	{
		"name": "Domingo Lopez Perez",
		"cost": "200",
		"number": "9671017378",
		"adress": "Calle Oxchuc No.37"
	},
	{
		"name": "Hermy Gómez López",
		"cost": "200",
		"number": "9671195093",
		"adress": "Av. Claveles #2"
	},
	{
		"name": "Elvia Lopez Gomez",
		"cost": "300",
		"number": "9671942695",
		"adress": "Av. Tonina #31"
	},
	{
		"name": "Enrique Perez Ruiz",
		"cost": "200",
		"number": "9671024449",
		"adress": "Av. Playas de Cozumelno.49"
	},
	{
		"name": "Estela López Sánchez",
		"cost": "200",
		"number": "9671366859",
		"adress": "Av. Las Margaritas #9"
	},
	{
		"name": "Eugenia Isabela Gutiérrez Martínez",
		"cost": "250",
		"number": "9671048694",
		"adress": "Av. 4 de Marzo #62"
	},
	{
		"name": "Eutiquio Perez Vazquez",
		"cost": "200",
		"number": "9671063458",
		"adress": "Av. Bonampak #23"
	},
	{
		"name": "Francisco Montejo ",
		"cost": "200",
		"number": "9611822477",
		"adress": "Av. Prolongación caminero #23"
	},
	{
		"name": "Genaro López Sánchez",
		"cost": "200",
		"number": "9671288961",
		"adress": "av. Real de jovel #8"
	},
	{
		"name": "Genáro Morales Cruz",
		"cost": "200",
		"number": "9671691707",
		"adress": "Av. Playas del Carmen #8"
	},
	{
		"name": "Gerardo Espinosa Albores",
		"cost": "200",
		"number": "9671220121",
		"adress": "Av. Tonina #2"
	},
	{
		"name": "German Ebaristo Martinez Gutierrez",
		"cost": "200",
		"number": "9671031711",
		"adress": "Av. Las Rosas #12"
	},
	{
		"name": "Héctor Francisco Santiago",
		"cost": "300",
		"number": "9671007610",
		"adress": "Calle Cuba #78"
	},
	{
		"name": "Humberto Gomez Ramos ",
		"cost": "300",
		"number": "9671307249",
		"adress": "Av. Central Las Flores #15"
	},
	{
		"name": "Idelfonso Girón Méndez",
		"cost": "300",
		"number": "9671247329",
		"adress": "Calle Los Pinos Edificio"
	},
	{
		"name": "Ivan Ballinas Lievano",
		"cost": "200",
		"number": "9671394730",
		"adress": "Col. Valle de Santo Domingo"
	},
	{
		"name": "Javier Encinos Gómez",
		"cost": "200",
		"number": "9671285652",
		"adress": "Ampliación 5 de Mayo"
	},
	{
		"name": "Jesús López Estrada",
		"cost": "200",
		"number": "9671275757",
		"adress": "Calle Girasol #27"
	},
	{
		"name": "José Alfonso López Gómez",
		"cost": "200",
		"number": "6971332424",
		"adress": "Calle los trabajadores #13"
	},
	{
		"name": "José Antonio Sántiz de la Cruz",
		"cost": "200",
		"number": "9671061221",
		"adress": "Av. Playas de Acapulco #28"
	},
	{
		"name": "José David de la Cruz Gutiérrez",
		"cost": "350",
		"number": "9671386230",
		"adress": "Fraccionamiento Valle Sto. Domingo."
	},
	{
		"name": "José Gilberto Becerra López",
		"cost": "200",
		"number": "9671034952",
		"adress": "Av. Quetzalcotal#53."
	},
	{
		"name": "Juan Gomez Lopez ",
		"cost": "350",
		"number": "9671331362",
		"adress": "Av. Playa Cozumel #68"
	},
	{
		"name": "Juan Mario Pérez Hernández",
		"cost": "200",
		"number": "",
		"adress": "Calle Mérida #25 Col. La Hormiga"
	},
	{
		"name": "Juan Sántiz López",
		"cost": "300",
		"number": "9677066026",
		"adress": "Periferico Norte No. 26"
	},
	{
		"name": "Juan Santiz Santiz",
		"cost": "200",
		"number": "9671639618",
		"adress": "Calle Macedonia #12 Col. Nueva Maravilla"
	},
	{
		"name": "Juana Gómez Guzmán",
		"cost": "250",
		"number": "9671641729",
		"adress": "Calle Jaime Sabines #15 Col. Belisario Domínguez"
	},
	{
		"name": "Juana Rodríguez Pérez",
		"cost": "300",
		"number": "9671292584",
		"adress": "Calle La Joya #10"
	},
	{
		"name": "Julián Pérez Velázquez",
		"cost": "200",
		"number": "9671254324",
		"adress": "Calle José María #29"
	},
	{
		"name": "Julián Sántiz López",
		"cost": "250",
		"number": "9671141478",
		"adress": "Av. Quetzalcoatl"
	},
	{
		"name": "Julio Cesar Perez Hernandez",
		"cost": "300",
		"number": "9671142328",
		"adress": "Calle Miguel Hidalgo #26"
	},
	{
		"name": "Kaleb de Jesús Hernándes Trujillo",
		"cost": "200",
		"number": "9676831745",
		"adress": "Av"
	},
	{
		"name": "Leonardo Gómez Sántiz",
		"cost": "200",
		"number": "9671266979",
		"adress": "Av. Italia #14"
	},
	{
		"name": "Leonardo Gonzales Torres",
		"cost": "300",
		"number": "9671009054",
		"adress": "Pagará $1200 más $100 de reconexión"
	},
	{
		"name": "Lorenzo Jiménez Velasco",
		"cost": "300",
		"number": "9611668523",
		"adress": "PAGA DIRECTO CON LUIS (PREGUNTAR)"
	},
	{
		"name": "Lorenzo López Méndez",
		"cost": "200",
		"number": "9611668523",
		"adress": "Av. Las Rosas #43"
	},
	{
		"name": "Lorenzo Velasco López ",
		"cost": "300",
		"number": "9671461285",
		"adress": ""
	},
	{
		"name": "Lucía Hernández Gómez",
		"cost": "200",
		"number": "9671461285",
		"adress": "Av. Prolongación Caminero #53"
	},
	{
		"name": "Lucina Vázquez Álvarez",
		"cost": "200",
		"number": "9671448678",
		"adress": "Cerrada Amapola"
	},
	{
		"name": "Lucio Jimenez",
		"cost": "200",
		"number": "9671219127",
		"adress": "Calzada Salomón González Blanco #107"
	},
	{
		"name": "Luis Entzin López",
		"cost": "200",
		"number": "9671229931",
		"adress": "calle las margaritas #37"
	},
	{
		"name": "Luis Roberto Bautista Bautista",
		"cost": "200",
		"number": "9671181538",
		"adress": "Col. 24 de Mayo"
	},
	{
		"name": "Luis Ulises de la Torre Hidalgo ",
		"cost": "200",
		"number": "9671339868",
		"adress": "Av. Tonina #10"
	},
	{
		"name": "Luz María Sánchez Morales",
		"cost": "200",
		"number": "9671300431",
		"adress": "Av. Playa del Carmen #59"
	},
	{
		"name": "Manuel Gomez Lopez",
		"cost": "200",
		"number": "9677066026",
		"adress": "Calle Cobre #26"
	},
	{
		"name": "Manuel López López ******",
		"cost": "200",
		"number": "9671084914",
		"adress": "Emiliano Zapata"
	},
	{
		"name": "Manuel Sántiz Entzin",
		"cost": "200",
		"number": "9671250545",
		"adress": "Calle Oro #2-B"
	},
	{
		"name": "Marcelo Arriaga Pérez ",
		"cost": "300",
		"number": "9671029007",
		"adress": "Fracc. Los 11 Cuartos"
	},
	{
		"name": "Marcos Sántiz Castellanos",
		"cost": "200",
		"number": "9671204639",
		"adress": "Playa Miramar #88"
	},
	{
		"name": "Maria López Guzmán ",
		"cost": "200",
		"number": "9671516521",
		"adress": "Av. Las Rosas #22"
	},
	{
		"name": "María Pérez Moshan",
		"cost": "200",
		"number": "9671674121",
		"adress": "Av. Miramar #4"
	},
	{
		"name": "Mario González López",
		"cost": "200",
		"number": "9671225380",
		"adress": "Rio Jordan #38"
	},
	{
		"name": "Martha López Hernández",
		"cost": "200",
		"number": "9671021868",
		"adress": "Esq. Morelos"
	},
	{
		"name": "Martha Girón Jimenez ",
		"cost": "200",
		"number": "9671583306",
		"adress": "Av. Las Rosas"
	},
	{
		"name": "Martha Patricia Méndez Pérez",
		"cost": "200",
		"number": "9671244261",
		"adress": "Av. Las Rosas #41 "
	},
	{
		"name": "Martín Reyes Vázquez",
		"cost": "200",
		"number": "9671029007",
		"adress": "Calle Roma #17"
	},
	{
		"name": "Miguel Ángel Meza Gómez",
		"cost": "200",
		"number": "9671305900",
		"adress": "Av. Zinacantán #6"
	},
	{
		"name": "Miguel Ángel Pérez Díaz",
		"cost": "200",
		"number": "9671377935",
		"adress": "12va Cerrrada s/n Col. 24 de Mayo"
	},
	{
		"name": "Miguel Cruz Santiz",
		"cost": "200",
		"number": "9671184373",
		"adress": "Av. Tonina #53"
	},
	{
		"name": "Miguel Montejo López ",
		"cost": "300",
		"number": "9671370063",
		"adress": "Calle San Manuel #15"
	},
	{
		"name": "Miranda Sántiz",
		"cost": "150",
		"number": "",
		"adress": "PREGUNTAR CON LUIS CADA MES"
	},
	{
		"name": "Mixtlixalli Romo Perez",
		"cost": "200",
		"number": "9611572815",
		"adress": "Fracc. Villareal"
	},
	{
		"name": "Moises Méndez Sántiz",
		"cost": "200",
		"number": "9671333413",
		"adress": "Calle Las Rosas #24"
	},
	{
		"name": "Onesimo Guzmán Arias",
		"cost": "200",
		"number": "9671076744",
		"adress": "Calle Jamaica #13"
	},
	{
		"name": "Oscar Candido Gomez Santiz",
		"cost": "200",
		"number": "9677061576",
		"adress": "Av. Tulipanes #1"
	},
	{
		"name": "Pascual Díaz Díaz",
		"cost": "200",
		"number": "9671031958",
		"adress": "Calle 4 de Marzo #61"
	},
	{
		"name": "Pedro González López",
		"cost": "250",
		"number": "9671421618",
		"adress": "Calle Sol #1"
	},
	{
		"name": "Pedro Lara Martínez",
		"cost": "200",
		"number": "9671223715",
		"adress": "Prol. Caminero #14"
	},
	{
		"name": "Pedro Nolasco",
		"cost": "200",
		"number": "9671029705",
		"adress": "Calle Aluminio #54"
	},
	{
		"name": "Piedad Reyes",
		"cost": "200",
		"number": "",
		"adress": "Av. Los Pinos Edificio 2 departamento 3"
	},
	{
		"name": "Ramiro López Pérez",
		"cost": "200",
		"number": "9671008230",
		"adress": "AV. 4 de Marzo"
	},
	{
		"name": "Rigoberto López Álvarez",
		"cost": "200",
		"number": "9671005742",
		"adress": "Av. Las rosas #"
	},
	{
		"name": "Roberto Crisoforo Méndez Ton",
		"cost": "200",
		"number": "9671507434",
		"adress": "Calle Nube #2"
	},
	{
		"name": "Roberto Hernandez Gomez",
		"cost": "200",
		"number": "9671001014",
		"adress": "Av. 30 de Abril #50"
	},
	{
		"name": "Roberto Jiménez Velasco",
		"cost": "200",
		"number": "",
		"adress": ""
	},
	{
		"name": "Roberto Nicolas Bolom Alvarez",
		"cost": "200",
		"number": "9671688411",
		"adress": "Col. La Rivera"
	},
	{
		"name": "Rogelio Lopez Vasquez",
		"cost": "200",
		"number": "9671144092",
		"adress": "Col. La Rivera #18"
	},
	{
		"name": "Rogelio Mendez Santiz",
		"cost": "200",
		"number": "",
		"adress": ""
	},
	{
		"name": "Rosalía Martínez Ara",
		"cost": "200",
		"number": "9671153021",
		"adress": "Av. Central Las Flores #144"
	},
	{
		"name": "Rosendo Gomez Entzin ",
		"cost": "300",
		"number": "9671009054",
		"adress": "Cerrada Batalla de Puebla #3"
	},
	{
		"name": "Rudy Alfonso lopez lopez",
		"cost": "200",
		"number": "9671219127",
		"adress": "Primera Av. #9a Col. Rio Jordan"
	},
	{
		"name": "Samuel Pérez Díaz",
		"cost": "200",
		"number": "",
		"adress": ""
	},
	{
		"name": "Sebastián Pérez Díaz ",
		"cost": "200",
		"number": "9671141478",
		"adress": "Av. Las Margaritas #76"
	},
	{
		"name": "Sebastian Perez Gonzalez ",
		"cost": "250",
		"number": "9671592917",
		"adress": "Av. Tonina #27"
	},
	{
		"name": "Susana Gómez López",
		"cost": "200",
		"number": "9676797582",
		"adress": "Av. Italia #13"
	},
	{
		"name": "Victor Hugo Gómez Gómez",
		"cost": "200",
		"number": "9671933629",
		"adress": "Av. Las Rosas #24"
	},
	{
		"name": "Victoriana López Gómez",
		"cost": "200",
		"number": "9671254324",
		"adress": "1a Avenida #27"
	},
	{
		"name": "Yesenia Lizbeth Pérez Martínez",
		"cost": "200",
		"number": "9612406863",
		"adress": "Prolongación caminero #9"
	},
	{
		"name": "Victor Manuel Vázquez Álvarez",
		"cost": "200",
		"number": "9671933629",
		"adress": "Prolongación Caminero #48"
	},
	{
		"name": "Oscar Dayan Nuñez Ton",
		"cost": "200",
		"number": "9191503063",
		"adress": "Calle Las Margaritas #70"
	},
	{
		"name": "Rebeca López Luna",
		"cost": "200",
		"number": "9671856883",
		"adress": "Calle Sol #5"
	},
	{
		"name": "Rosa Elizabeth Díaz de la Cruz",
		"cost": "200",
		"number": "9671011457",
		"adress": "Calzada Ojo de Agua #26n"
	},
	{
		"name": "José Alfredo Rincón Cedeño",
		"cost": "200",
		"number": "9651062034",
		"adress": "Av. Contadores #16"
	},
	{
		"name": "Hugo Angeles Cruz",
		"cost": "200",
		"number": "",
		"adress": "Claveles"
	},
	{
		"name": "Julio César Moshan Hernández",
		"cost": "300",
		"number": "9671091006",
		"adress": "Av. Quetzalcoatl #20"
	},
	{
		"name": "Juan Francisco Gómez hernández",
		"cost": "300",
		"number": "9671341555",
		"adress": "Av. Playa de Cozumel #64"
	},
	{
		"name": "Gregorio Guzmán Méndez",
		"cost": "200",
		"number": "9671652887",
		"adress": "Calle Quetzalcoatl #13"
	},
	{
		"name": "Manuel de Jesús López Martínez",
		"cost": "600",
		"number": "S/N",
		"adress": "***COBRO A DOMICILIO***"
	},
	{
		"name": "PRESIDENCIA ZINACANTAN",
		"cost": "500",
		"number": "S/N",
		"adress": "DATOS LUIS"
	},
	{
		"name": "LORENZO ZINACANTAN",
		"cost": "1500",
		"number": "S/N",
		"adress": "DATOS LUIS"
	},
	{
		"name": "JOSÉ FRANCISCO DE LA CRUZ",
		"cost": "200",
		"number": "9671447580",
		"adress": "AV. ITALIA #25"
	},
	{
		"name": "Carlos Vázquez",
		"cost": "200",
		"number": "9671066497",
		"adress": "Playa Cozumel #128"
	},
	{
		"name": "Carlos Gerardo Morales Urbina ",
		"cost": "300",
		"number": "9671690645",
		"adress": "Calle Chanelho #12"
	},
	{
		"name": "Guadalupe López Hernández",
		"cost": "300",
		"number": "9671651664",
		"adress": "Calle Quetzacoatl #27"
	},
	{
		"name": "Genaro Santos",
		"cost": "300",
		"number": "",
		"adress": ""
	},
	{
		"name": "Marisela Pérez Hernández",
		"cost": "300",
		"number": "9671219002",
		"adress": "Av. Quetzalcoatl #29"
	},
	{
		"name": "Pablo Enrique Gómez Cruz",
		"cost": "300",
		"number": "9671420572",
		"adress": "Calle Miguel Hidalgo #28 letra A col. América Libre"
	},
	{
		"name": "Rony Genáro Santos Flores",
		"cost": "300",
		"number": "",
		"adress": ""
	},
	{
		"name": "Héctor López Vázquez",
		"cost": "300",
		"number": "9671391854",
		"adress": "Av. Playa de Acapulco #40"
	},
	{
		"name": "Manuel de Jesús Pérez Mendoza ",
		"cost": "200",
		"number": "9671546799",
		"adress": "Calle Luis Donaldo Colosio #151"
	},
	{
		"name": "Juan Pérez Collazo",
		"cost": "200",
		"number": "9676791706",
		"adress": "Av. Playa de Cozumel #27"
	},
	{
		"name": "cesar neptali lopez hernandez",
		"cost": "250",
		"number": "9671215344",
		"adress": "avenida antropologos #267 colonia prudencio moscoso"
	},
	{
		"name": "Mario miranda sanchez",
		"cost": "300",
		"number": "indefinido",
		"adress": "indefinido"
	},
	{
		"name": "Dalia mendoza",
		"cost": "200",
		"number": "9671030716",
		"adress": "calzada salomon gonzales num 40"
	},
	{
		"name": "felipe ",
		"cost": "600",
		"number": "indefinido",
		"adress": "indefinido"
	},
];

export default clients

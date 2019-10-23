-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-10-2019 a las 16:32:20
-- Versión del servidor: 8.0.13-4
-- Versión de PHP: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `w5V9fg2QxG`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` int(8) NOT NULL,
  `name` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `cost` int(8) NOT NULL,
  `number` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `adress` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `latest_pay` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'activo',
  `meta` varchar(250) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `name`, `cost`, `number`, `adress`, `latest_pay`, `status`, `meta`) VALUES
(1, 'Alberto Diaz Hernandez', 200, '9671413345', 'Calle Judea #59 Colonia Nueva Maravilla', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(2, 'Alejandra Escobedo Aguilar ', 350, '9675432128', 'Diagonal Ramón Larrainzar #85 C', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(3, 'Alejandro López Sántiz', 200, '9611889416', 'Calle José Vasconcelos #121 Col El Progreso ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(4, 'Alfonso de Jesús López Entzin', 300, '9671221983', 'Col La Libertad #156', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(5, 'Alfonso Gomez Santiz (Poncho Padrino)', 200, '9676833472', 'Av Nezahualcoyotl #30 Col Azteca', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(6, 'Alonso López Girón', 200, '9671030528', 'Av Las Margaritas #12 Col La Rivera', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(7, 'Ana Cristina Meza Gómez', 200, '9671070644', 'Col Ampliación 5 de mayo calle batalla de puebla #1', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(8, 'Angelina Gómez Ton', 200, '9671547656', 'Los trabajadores #16 ampliación 5 de mayo', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(9, 'Antonio Dilmar Ballinas Solis 300', 300, '9671467968', 'Batalla de Puebla #28 ampliación 5 de Mayo', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(10, 'Antonio Méndez Girón ', 200, '9671583506', 'Av Las Rosas Col La Rivera', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(11, 'Arturo Norberto Hernández', 200, '9671007603', 'Calle Egipto #45 col Maravilla', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(12, 'Beatriz González Pérez', 300, '9381861427', 'Calle 4 de Marzo #61 Col Emiliano Zapata', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(13, 'Candelaria Gómez Gómez', 200, '9671551088', 'Calle Panama #13 Col Nueva Hermosa', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(14, 'Candelaria Gómez Guzmán', 200, '9671611796', 'Calle Rio Usumacinta #43 Col 31 de Marzo ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(15, 'Candido', 200, '9671242539', 'Periferico Oriente #12 ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(16, 'Carlos Hernández Gómez', 200, '9671289388', 'Entrada San Antonio del Monte Av Cristán ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(17, 'Carmen Fernández 250', 350, '9671149487', 'Privada Campestre Colibrí Barrio Quinta San Martín', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(18, 'César Méndez Sántiz', 200, '9676791309', 'Av Las Margaritas #5 Col Rivera', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(19, 'Claudia Gómez Sántiz', 300, '9671659609', 'av Italia #16 barrio de tlaxcala ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(20, 'Daniel Porras Guillen', 200, '9671007613', 'Playa de Cozumel #23 Col 1 de Enero', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(21, 'Domingo Lopez Perez', 200, '9671017378', 'Calle Oxchuc No 37 Col Erasto Urbina', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(22, 'Hermy Gómez López', 200, '9671195093', 'Av Claveles #2 Las Gardenias ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(23, 'Elvia Lopez Gomez', 300, '9671942695', 'Av Tonina #31 Col Valle de Zacatlan', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(24, 'Enrique Perez Ruiz', 200, '9671024449', 'Av Playas de Cozumelno 49 Col 1 de Enero', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(25, 'Estela López Sánchez', 200, '9671366859', 'Av Las Margaritas #9 Col La Rivera', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(26, 'Eugenia Isabela Gutiérrez Martínez', 250, '9671048694', 'Av 4 de Marzo #62 Col Emiliano Zapata', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(27, 'Eutiquio Perez Vazquez', 200, '9671063458', 'Av Bonampak #23 Col El Caminero', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(28, 'Francisco Montejo ', 200, '9611822477', 'Av Prolongación caminero #23 Valle de Zacatlán ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(29, 'Genaro López Sánchez', 200, '9671288961', 'av Real de jovel #8 col Diego de Mazariegos', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(30, 'Genáro Morales Cruz', 200, '9671691707', 'Av Playas del Carmen #8 Col Primero de Enero ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(31, 'Gerardo Espinosa Albores', 200, '9671220121', 'Av Tonina #2 Col Valle de Zacatlan', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(32, 'German Ebaristo Martinez Gutierrez', 200, '9671031711', 'Av Las Rosas #12 Col La Rivera', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(33, 'Héctor Francisco Santiago', 300, '9671007610', 'Calle Cuba #78 Barrio de Tlaxcala ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(34, 'Humberto Gomez Ramos ', 300, '9671307249', 'Av Central Las Flores #15 Col El Vergel', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(35, 'Idelfonso Girón Méndez', 300, '9671247329', 'Calle Los Pinos Edificio', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(36, 'Ivan Ballinas Lievano', 200, '9671394730', 'Col Valle de Santo Domingo Calle Las Margaritas #3', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(37, 'Javier Encinos Gómez', 200, '9671285652', 'Ampliación 5 de Mayo', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(38, 'Jesús López Estrada', 200, '9671275757', 'Calle Girasol #27 Col Nueva Esperanza', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(39, 'José Alfonso López Gómez', 200, '6971332424', 'Calle los trabajadores #13 col Ampliación 5 de Mayo', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(40, 'José Antonio Sántiz de la Cruz', 200, '9671061221', 'Av Playas de Acapulco #28 Col 1º de Enero', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(41, 'José David de la Cruz Gutiérrez', 350, '9671386230', 'Fraccionamiento Valle Sto Domingo ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(42, 'José Gilberto Becerra López', 200, '9671034952', 'Av Quetzalcotal#53 ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(43, 'Juan Gomez Lopez ', 350, '9671331362', 'Av Playa Cozumel #68 Col 1 de Enero', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(44, 'Juan Mario Pérez Hernández', 200, '', 'Calle Mérida #25 Col La Hormiga', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(45, 'Juan Sántiz López', 300, '9677066026', 'Periferico Norte No 26 Col El Paraíso', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(46, 'Juan Santiz Santiz', 200, '9671639618', 'Calle Macedonia #12 Col Nueva Maravilla', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(47, 'Juana Gómez Guzmán', 250, '9671641729', 'Calle Jaime Sabines #15 Col Belisario Domínguez', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(48, 'Juana Rodríguez Pérez', 300, '9671292584', 'Calle La Joya #10 Ampliación Diego de Mazariegos', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(49, 'Julián Pérez Velázquez', 200, '9671254324', 'Calle José María #29 Col Morelos', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(50, 'Julián Sántiz López', 250, '9671141478', 'Av Quetzalcoatl Col Azteca ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(51, 'Julio Cesar Perez Hernandez', 300, '9671142328', 'Calle Miguel Hidalgo #26 col America Libre', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(52, 'Kaleb de Jesús Hernándes Trujillo', 200, '9676831745', 'Av Las Rosas #68 Col Valle de Santo Domingo', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(53, 'Leonardo Gómez Sántiz', 200, '9671266979', 'Av Italia #14 Col Damasco', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(54, 'Leonardo Gonzales Torres', 300, '9671009054', '', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(55, 'Lorenzo Jiménez Velasco', 300, '9611668523', 'PAGA DIRECTO CON LUIS (PREGUNTAR)', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(56, 'Lorenzo López Méndez', 200, '9611668523', 'Av Las Rosas #43 Col La Rivera', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(57, 'Lorenzo Velasco López ', 300, '9671461285', '', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(58, 'Lucía Hernández Gómez', 200, '9671461285', 'Av Prolongación Caminero #53', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(59, 'Lucina Vázquez Álvarez', 200, '9671448678', 'Cerrada Amapola Col El Vergel ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(60, 'Lucio Jimenez', 200, '9671219127', 'Calzada Salomón González Blanco #107', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(61, 'Luis Entzin López', 200, '9671229931', 'calle las margaritas #37 col La rivera', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(62, 'Luis Roberto Bautista Bautista', 200, '9671181538', 'Col 24 de Mayo 10 cerrada', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(63, 'Luis Ulises de la Torre Hidalgo ', 200, '9671339868', 'Av Tonina #10 Col Valle de Zacatlán', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(64, 'Luz María Sánchez Morales', 200, '9671300431', 'Av Playa del Carmen #59 col 1 de Enero', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(65, 'Manuel Gomez Lopez', 200, '9677066026', 'Calle Cobre #26 Col El Paraíso', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(66, 'Manuel López López ******', 200, '9671084914', 'Emiliano Zapata', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(67, 'Manuel Sántiz Entzin', 200, '9671250545', 'Calle Oro #2-B Col El paraíso', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(68, 'Marcelo Arriaga Pérez ', 300, '9671029007', 'Fracc Los 11 Cuartos Bonampak #21', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(69, 'Marcos Sántiz Castellanos', 200, '9671204639', 'Playa Miramar #88 col 1 de Enero', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(70, 'Maria López Guzmán ', 200, '9671516521', 'Av Las Rosas #22 Col La Rivera ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(71, 'María Pérez Moshan', 200, '9671674121', 'Av Miramar #4 Col Primero de Enero ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(72, 'Mario González López', 200, '9671225380', 'Rio Jordan #38 Col Rio Jordan ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(73, 'Martha López Hernández', 200, '9671021868', 'Esq Morelos Col Río de la Loza ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(74, 'Martha Girón Jimenez ', 200, '9671583306', 'Av Las Rosas Col La Rivera ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(75, 'Martha Patricia Méndez Pérez', 200, '9671244261', 'Av Las Rosas #41 ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(76, 'Martín Reyes Vázquez', 200, '9671029007', 'Calle Roma #17 Col Nueva Maravilla', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(77, 'Miguel Ángel Meza Gómez', 200, '9671305900', 'Av Zinacantán #6 Col Erasto Urbina', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(78, 'Miguel Ángel Pérez Díaz', 200, '9671377935', '12va Cerrrada s/n Col 24 de Mayo', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(79, 'Miguel Cruz Santiz', 200, '9671184373', 'Av Tonina #53 Col Valle de Zacatlán', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(80, 'Miguel Montejo López ', 300, '9671370063', 'Calle San Manuel #15 Col San José ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(81, 'Miranda Sántiz', 150, '', 'PREGUNTAR CON LUIS CADA MES', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(82, 'Mixtlixalli Romo Perez', 200, '9611572815', 'Fracc Villareal Col Los Pinos A2-24', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(83, 'Moises Méndez Sántiz', 200, '9671333413', 'Calle Las Rosas #24 Col La rivera', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(84, 'Onesimo Guzmán Arias', 200, '9671076744', 'Calle Jamaica #13 Barrio de Tlaxcala', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(85, 'Oscar Candido Gomez Santiz', 200, '9677061576', 'Av Tulipanes #1 Col Las Gardenias', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(86, 'Pascual Díaz Díaz', 200, '9671031958', 'Calle 4 de Marzo #61 Col Emiliano Zapata', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(87, 'Pedro González López', 250, '9671421618', 'Calle Sol #1 Col Nuevo Amanecer', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(88, 'Pedro Lara Martínez', 200, '9671223715', 'Prol Caminero #14 Col Valle de Zacatlán', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(89, 'Pedro Nolasco', 200, '9671029705', 'Calle Aluminio #54 Col El Paraíso', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(90, 'Piedad Reyes', 200, '', 'Av Los Pinos Edificio 2 departamento 3', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(91, 'Ramiro López Pérez', 200, '9671008230', 'AV 4 de Marzo Col Emiliano Zapata', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(92, 'Rigoberto López Álvarez', 200, '9671005742', 'Av Las rosas # Col La Rivera', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(93, 'Roberto Crisoforo Méndez Ton', 200, '9671507434', 'Calle Nube #2 Col Nuevo Amanecer', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(94, 'Roberto Hernandez Gomez', 200, '9671001014', 'Av 30 de Abril #50 Fracc Emiliano Zapata', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(95, 'Roberto Jiménez Velasco', 200, '', '', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(96, 'Roberto Nicolas Bolom Alvarez', 200, '9671688411', 'Col La Rivera Calle Las Margaritas', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(97, 'Rogelio Lopez Vasquez', 200, '9671144092', 'Col La Rivera #18 Av Las Rosas', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(98, 'Rogelio Mendez Santiz', 200, '', '', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(99, 'Rosalía Martínez Ara', 200, '9671153021', 'Av Central Las Flores #144 Col El Vergel ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(100, 'Rosendo Gomez Entzin ', 300, '9671009054', 'Cerrada Batalla de Puebla #3 Col Ampliacion 5 de Mayo', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(101, 'Rudy Alfonso lopez lopez', 200, '9671219127', 'Primera Av #9a Col Rio Jordan', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(102, 'Samuel Pérez Díaz', 200, '', '', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(103, 'Sebastián Pérez Díaz ', 200, '9671141478', 'Av Las Margaritas #76 Col Valle de Santo Domingo ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(104, 'Sebastian Perez Gonzalez ', 250, '9671592917', 'Av Tonina #27 Col Valle de Zacatlán', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(105, 'Susana Gómez López', 200, '9676797582', 'Av Italia #13 Col La Florida', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(106, 'Victor Hugo Gómez Gómez', 200, '9671933629', 'Av Las Rosas #24 Col La Rivera', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(107, 'Victoriana López Gómez', 200, '9671254324', '1a Avenida #27 Col Rio Jordan', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(108, 'Yesenia Lizbeth Pérez Martínez', 200, '9612406863', 'Prolongación caminero #9 Col Valle de Zacatlán', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(109, 'Victor Manuel Vázquez Álvarez', 200, '9671933629', 'Prolongación Caminero #48 Col Valle de Zacatlán', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(110, 'Oscar Dayan Nuñez Ton', 200, '9191503063', 'Calle Las Margaritas #70 Col Valle de Santo Domingo ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(111, 'Rebeca López Luna', 200, '9671856883', 'Calle Sol #5 Col Nuevo Amanecer', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(112, 'Rosa Elizabeth Díaz de la Cruz', 200, '9671011457', 'Calzada Ojo de Agua #26n Ojo de Agua ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(113, 'José Alfredo Rincón Cedeño', 200, '9651062034', 'Av Contadores #16 Col Prudencio Moscoso ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(114, 'Hugo Angeles Cruz', 200, '', 'Claveles', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(115, 'Julio César Moshan Hernández', 300, '9671091006', 'Av Quetzalcoatl #20 Col Azteca', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(116, 'Juan Francisco Gómez hernández', 300, '9671341555', 'Av Playa de Cozumel #64 Col 1 de Enero', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(117, 'Gregorio Guzmán Méndez', 200, '9671652887', 'Calle Quetzalcoatl #13 Col Azteca ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(118, 'Manuel de Jesús López Martínez', 600, 'S/N', '***COBRO A DOMICILIO***', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(119, 'PRESIDENCIA ZINACANTAN', 500, 'S/N', 'DATOS LUIS', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(120, 'LORENZO ZINACANTAN', 1500, 'S/N', 'DATOS LUIS', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(121, 'JOSÉ FRANCISCO DE LA CRUZ', 200, '9671447580', 'AV ITALIA #25 COL DAMASCO ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(122, 'Carlos Vázquez', 200, '9671066497', 'Playa Cozumel #128 Col 1 de Enero', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(123, 'Carlos Gerardo Morales Urbina ', 300, '9671690645', 'Calle Chanelho #12 Col Erasto Urbina', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(124, 'Guadalupe López Hernández', 300, '9671651664', 'Calle Quetzacoatl #27 Col Azteca', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(125, 'Genaro Santos', 300, '', '', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(126, 'Marisela Pérez Hernández', 300, '9671219002', 'Av Quetzalcoatl #29 Col Azteca', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(127, 'Pablo Enrique Gómez Cruz', 300, '9671420572', 'Calle Miguel Hidalgo #28 letra A col América Libre', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(128, 'Rony Genáro Santos Flores', 300, '', '', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(129, 'Héctor López Vázquez', 300, '9671391854', 'Av Playa de Acapulco #40 Col 1 de Enero ', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(130, 'Manuel de Jesús Pérez Mendoza ', 200, '9671546799', 'Calle Luis Donaldo Colosio #151 col El Progreso', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(131, 'Juan Pérez Collazo', 200, '9676791706', 'Av Playa de Cozumel #27 Col 1 de Enero', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(132, 'cesar neptali lopez hernandez', 250, '9671215344', 'avenida antropologos #267 colonia prudencio moscoso', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(133, 'Mario miranda sanchez', 300, 'indefinido', 'indefinido', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(134, 'Dalia mendoza', 200, '9671030716', 'calzada salomon gonzales num 40', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}'),
(135, 'felipe ', 600, 'indefinido', 'indefinido', 'pending', 'activo', '{\"place\":\"Erasto Urbina\",\"date\":\"miércoles 23 octubre 2019\"}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pays`
--

CREATE TABLE `pays` (
  `id` int(8) UNSIGNED NOT NULL,
  `id_client` int(8) UNSIGNED NOT NULL,
  `id_place` int(8) UNSIGNED NOT NULL,
  `place` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `cost` int(8) UNSIGNED NOT NULL,
  `period` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `date` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `year` int(8) NOT NULL,
  `meta` varchar(500) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `places`
--

CREATE TABLE `places` (
  `id` int(8) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `meta` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `places`
--

INSERT INTO `places` (`id`, `name`, `meta`, `user`, `password`, `admin`) VALUES
(1, 'Erasto Urbina', '{}', 'matriz', 'matriz', 1),
(2, 'Guadalupe', '{}', 'guadalupe', 'guadalupe', 0),
(3, 'Salomon', '{}', 'salomon', 'salomon', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pays`
--
ALTER TABLE `pays`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place` (`place`),
  ADD KEY `year` (`year`);

--
-- Indices de la tabla `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT de la tabla `pays`
--
ALTER TABLE `pays`
  MODIFY `id` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `places`
--
ALTER TABLE `places`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

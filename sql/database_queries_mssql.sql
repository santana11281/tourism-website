-- Drop existing tables if they exist
IF OBJECT_ID('TipsViaje', 'U') IS NOT NULL DROP TABLE TipsViaje;
IF OBJECT_ID('TransporteOpciones', 'U') IS NOT NULL DROP TABLE TransporteOpciones;
IF OBJECT_ID('RutaParadas', 'U') IS NOT NULL DROP TABLE RutaParadas;
IF OBJECT_ID('RutasDestinoRelation', 'U') IS NOT NULL DROP TABLE RutasDestinoRelation;
IF OBJECT_ID('Rutas', 'U') IS NOT NULL DROP TABLE Rutas;
IF OBJECT_ID('DestinoDetalles', 'U') IS NOT NULL DROP TABLE DestinoDetalles;
IF OBJECT_ID('AlojamientoDestinoRelation', 'U') IS NOT NULL DROP TABLE AlojamientoDestinoRelation;
IF OBJECT_ID('Alojamiento', 'U') IS NOT NULL DROP TABLE Alojamiento;
IF OBJECT_ID('TransporteDestinoRelation', 'U') IS NOT NULL DROP TABLE TransporteDestinoRelation;
IF OBJECT_ID('Transporte', 'U') IS NOT NULL DROP TABLE Transporte;
IF OBJECT_ID('MejorEpocaVisitaDestinoRelation', 'U') IS NOT NULL DROP TABLE MejorEpocaVisitaDestinoRelation;
IF OBJECT_ID('MejorEpocaVisita', 'U') IS NOT NULL DROP TABLE MejorEpocaVisita;
IF OBJECT_ID('ClimaDestinoRelation', 'U') IS NOT NULL DROP TABLE ClimaDestinoRelation;
IF OBJECT_ID('Clima', 'U') IS NOT NULL DROP TABLE Clima;
IF OBJECT_ID('DestinosActivityRelation', 'U') IS NOT NULL DROP TABLE DestinosActivityRelation;
IF OBJECT_ID('Activity', 'U') IS NOT NULL DROP TABLE Activity;
IF OBJECT_ID('Destinos', 'U') IS NOT NULL DROP TABLE Destinos;

-- Create tables
CREATE TABLE Destinos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(100),
    ciudad VARCHAR(100),
    provincia VARCHAR(100),
    tipo VARCHAR(50),
    descripcion VARCHAR(MAX),
    imagen_portada_url VARCHAR(MAX),
    imagen VARCHAR(MAX),
    rating DECIMAL(2,1)
);

CREATE TABLE Activity (
    id INT IDENTITY(1,1) PRIMARY KEY,
    icon VARCHAR(MAX) NOT NULL,
    title VARCHAR(MAX) NOT NULL,
    description VARCHAR(MAX) NOT NULL
);

CREATE TABLE DestinosActivityRelation (
    id INT IDENTITY(1,1) PRIMARY KEY,
    destino_id INT NOT NULL,
    activity_id INT NOT NULL,
    FOREIGN KEY (destino_id) REFERENCES Destinos(id),
    FOREIGN KEY (activity_id) REFERENCES Activity(id)
);

CREATE TABLE Clima (
    id INT IDENTITY(1,1) PRIMARY KEY,
    tipo VARCHAR(MAX) NOT NULL,
    tempratura VARCHAR(MAX) NOT NULL
);

CREATE TABLE ClimaDestinoRelation (
    id INT IDENTITY(1,1) PRIMARY KEY,
    destino_id INT NOT NULL,
    clima_id INT NOT NULL,
    FOREIGN KEY (destino_id) REFERENCES Destinos(id),
    FOREIGN KEY (clima_id) REFERENCES Clima(id)
);

CREATE TABLE MejorEpocaVisita (
    id INT IDENTITY(1,1) PRIMARY KEY,
    epoca VARCHAR(MAX) NOT NULL,
    temporada VARCHAR(MAX) NOT NULL
);

CREATE TABLE MejorEpocaVisitaDestinoRelation (
    id INT IDENTITY(1,1) PRIMARY KEY,
    destino_id INT NOT NULL,
    epoca_id INT NOT NULL,
    FOREIGN KEY (destino_id) REFERENCES Destinos(id),
    FOREIGN KEY (epoca_id) REFERENCES MejorEpocaVisita(id)
);

CREATE TABLE Transporte (
    id INT IDENTITY(1,1) PRIMARY KEY,
    tipo VARCHAR(MAX) NOT NULL,
    descripcion VARCHAR(MAX) NOT NULL
);

CREATE TABLE TransporteDestinoRelation (
    id INT IDENTITY(1,1) PRIMARY KEY,
    destino_id INT NOT NULL,
    transporte_id INT NOT NULL,
    FOREIGN KEY (destino_id) REFERENCES Destinos(id),
    FOREIGN KEY (transporte_id) REFERENCES Transporte(id)
);

CREATE TABLE Alojamiento (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(MAX) NOT NULL,
    tipo VARCHAR(MAX) NOT NULL,
    descripcion VARCHAR(MAX) NOT NULL,
    direccion VARCHAR(MAX) NOT NULL,
    telefono VARCHAR(MAX) NOT NULL,
    email VARCHAR(MAX) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    rating DECIMAL(2,1) NOT NULL
);

CREATE TABLE AlojamientoDestinoRelation (
    id INT IDENTITY(1,1) PRIMARY KEY,
    destino_id INT NOT NULL,
    alojamiento_id INT NOT NULL,
    FOREIGN KEY (destino_id) REFERENCES Destinos(id),
    FOREIGN KEY (alojamiento_id) REFERENCES Alojamiento(id)
);

CREATE TABLE DestinoDetalles (
    id INT IDENTITY(1,1) PRIMARY KEY,
    destino_id INT NOT NULL,
    detalle VARCHAR(MAX) NOT NULL,
    descripcion VARCHAR(MAX) NOT NULL,
    FOREIGN KEY (destino_id) REFERENCES Destinos(id)
);

CREATE TABLE Rutas (
    id INT IDENTITY(1,1) PRIMARY KEY,
    origen VARCHAR(MAX) NOT NULL,
    destino VARCHAR(MAX) NOT NULL,
    distancia_km INT,
    duracion VARCHAR(MAX)
);

CREATE TABLE RutasDestinoRelation (
    id INT IDENTITY(1,1) PRIMARY KEY,
    ruta_id INT NOT NULL,
    destino_id INT NOT NULL,
    FOREIGN KEY (ruta_id) REFERENCES Rutas(id),
    FOREIGN KEY (destino_id) REFERENCES Destinos(id)
);

CREATE TABLE RutaParadas (
    id INT IDENTITY(1,1) PRIMARY KEY,
    ruta_id INT NOT NULL,
    nombre VARCHAR(MAX) NOT NULL,
    descripcion VARCHAR(MAX),
    tiempo VARCHAR(MAX),
    icono VARCHAR(MAX),
    FOREIGN KEY (ruta_id) REFERENCES Rutas(id)
);

CREATE TABLE TransporteOpciones (
    id INT IDENTITY(1,1) PRIMARY KEY,
    ruta_id INT NOT NULL,
    tipo VARCHAR(MAX) NOT NULL,
    duracion VARCHAR(MAX),
    precio_min DECIMAL(10,2),
    precio_max DECIMAL(10,2),
    icono VARCHAR(MAX),
    FOREIGN KEY (ruta_id) REFERENCES Rutas(id)
);

CREATE TABLE TipsViaje (
    id INT IDENTITY(1,1) PRIMARY KEY,
    ruta_id INT NOT NULL,
    texto VARCHAR(MAX) NOT NULL,
    FOREIGN KEY (ruta_id) REFERENCES Rutas(id)
);

-- Insert data
INSERT INTO Destinos (nombre, ciudad, provincia, tipo, descripcion, imagen_portada_url, imagen, rating)
VALUES
('Santo Domingo', 'Santo Domingo', 'Distrito Nacional', 'Ciudad', 'Capital de República Dominicana.', '', '', 4.5),
('San Pedro de Macorís', 'San Pedro', 'San Pedro de Macorís', 'Ciudad', 'Conocida por su historia azucarera.', '', '', 4.0),
('La Romana', 'La Romana', 'La Romana', 'Ciudad', 'Cerca de Altos de Chavón.', '', '', 4.3),
('Punta Cana', 'Punta Cana', 'La Altagracia', 'Playa', 'Zona turística famosa por sus playas.', 'https://example.com/imagen-pc.jpg', '', 4.8),
('Puerto Plata', 'Puerto Plata', 'Puerto Plata', 'Ciudad', 'Conocida por sus playas paradisíacas.', '', '', 4.2),
('Santiago de Cuba', 'Santiago', 'Santiago de Cuba', 'Ciudad', 'Capital de Cuba.', '', '', 4.1),
('La Habana', 'La Habana', 'La Habana', 'Ciudad', 'Capital de Cuba.', '', '', 4.0),
('Cienfuegos', 'Cienfuegos', 'Cienfuegos', 'Ciudad', 'Conocida por sus playas paradisíacas.', '', '', 4.2),
('Matanzas', 'Matanzas', 'Matanzas', 'Ciudad', 'Conocida por sus playas paradisíacas.', '', '', 4.2),
('Sancti Spiritus', 'Sancti Spiritus', 'Sancti Spiritus', 'Ciudad', 'Conocida por sus playas paradisíacas.', '', '', 4.2);

-- Update Punta Cana image
UPDATE Destinos
SET imagen_portada_url = 'https://content.r9cdn.net/rimg/dimg/c5/58/d56628fa-city-23052-162e4aeda47.jpg?width=1366&height=768&xhint=1688&yhint=1513&crop=true'
WHERE id = 4;

-- Insert Activities
INSERT INTO Activity (icon, title, description) VALUES
('fa-water', 'Deportes Acuáticos', 'Disfruta de actividades como snorkel, buceo y surf en nuestras hermosas playas.'),
('fa-mountain', 'Aventuras', 'Explora montañas, cascadas y senderos con guías experimentados.'),
('fa-utensils', 'Gastronomía', 'Descubre la deliciosa cocina dominicana y sus sabores únicos.'),
('fa-umbrella-beach', 'Playas', 'Relájate en las mejores playas del Caribe con aguas cristalinas.');

-- Insert Activity Relations
INSERT INTO DestinosActivityRelation (destino_id, activity_id) VALUES
(4, 1), -- Punta Cana - Deportes Acuáticos
(4, 4), -- Punta Cana - Playas
(3, 3), -- La Romana - Gastronomía
(3, 4), -- La Romana - Playas
(2, 2), -- San Pedro de Macorís - Aventuras
(2, 3), -- San Pedro de Macorís - Gastronomía
(1, 2), -- Santo Domingo - Aventuras
(1, 3), -- Santo Domingo - Gastronomía
(1, 4); -- Santo Domingo - Playas

-- Insert Clima
INSERT INTO Clima (tipo, tempratura) VALUES
('tropical', '30°'),
('tropical húmedo', '29°'),
('tropical seco', '31°'),
('tropical costero', '32°');

-- Insert Clima Relations
INSERT INTO ClimaDestinoRelation (destino_id, clima_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4);

-- Insert Mejor Epoca
INSERT INTO MejorEpocaVisita (epoca, temporada) VALUES
('Primavera', 'Abril a Junio'),
('Verano', 'Julio a Agosto'),
('Otono', 'Septiembre a Noviembre'),
('Invierno', 'Diciembre a Febrero');

-- Insert Mejor Epoca Relations
INSERT INTO MejorEpocaVisitaDestinoRelation (destino_id, epoca_id) VALUES
(1, 4),  -- Santo Domingo → Invierno
(2, 4),  -- San Pedro de Macorís → Invierno
(3, 4),  -- La Romana → Invierno
(4, 4);  -- Punta Cana → Invierno

-- Insert Transporte
INSERT INTO Transporte (tipo, descripcion) VALUES
('Aéreo', 'Vuelos directos a Santo Domingo.'),
('Terrestre', 'Autobuses y taxis disponibles en todo el país.'),
('Marítimo', 'Ferries y cruceros que conectan las islas del Caribe.');

-- Insert Transporte Relations
INSERT INTO TransporteDestinoRelation (destino_id, transporte_id) VALUES
(1, 1),  -- Santo Domingo → Aéreo
(2, 2),  -- San Pedro de Macorís → Terrestre
(3, 2),  -- La Romana → Terrestre
(4, 1);  -- Punta Cana → Aéreo

-- Insert Alojamiento
INSERT INTO Alojamiento (nombre, tipo, descripcion, direccion, telefono, email, precio, rating) VALUES
('Hotel Santo Domingo', 'Hotel', 'Hotel de lujo en el corazón de la ciudad.', 'Av. George Washington 123', '809-555-1234', '8tH4j@example.com', 150.00, 4.5),
('Hostal San Pedro', 'Hostal', 'Hostal acogedor y económico cerca del centro.', 'Calle Duarte 456', '809-555-5678', 'm8C5o@example.com', 80.00, 4.0),
('Apartamento La Romana', 'Apartamento', 'Apartamento moderno con vista al mar.', 'Calle Principal 789', '809-555-9012', '6Oa0f@example.com', 200.00, 4.3),
('Resort Punta Cana', 'Hotel', 'Resort todo incluido con acceso a la playa.', 'Carretera Punta Cana 101', '809-555-3456', 'kqTtj@example.com', 300.00, 4.8);

-- Insert Alojamiento Relations
INSERT INTO AlojamientoDestinoRelation (destino_id, alojamiento_id) VALUES
(1, 1),  -- Santo Domingo → Hotel Santo Domingo
(2, 2),  -- San Pedro de Macorís → Hostal San Pedro
(3, 3),  -- La Romana → Apartamento La Romana
(4, 4);  -- Punta Cana → Resort Punta Cana

-- Insert Destino Detalles
INSERT INTO DestinoDetalles (destino_id, detalle, descripcion) VALUES
(1, 'Centro histórico vibrante con arquitectura colonial, museos, vida nocturna y cultura dominicana.',
 'Santo Domingo, la capital de República Dominicana, es una ciudad donde convergen historia y modernidad. Con su famosa Zona Colonial, declarada Patrimonio de la Humanidad por la UNESCO, ofrece una mezcla única de calles empedradas, arquitectura del siglo XVI, museos culturales y una activa vida urbana con restaurantes, galerías y centros comerciales.'),
(2, 'Ciudad costera con raíces azucareras, arquitectura tradicional y encanto cultural.',
 'San Pedro de Macorís es conocida por su rica historia en la industria azucarera y su legado cultural, especialmente en el béisbol. Sus calles cuentan con edificaciones históricas, mientras que su costa ofrece vistas relajantes del Mar Caribe. Además, es cuna de importantes figuras del deporte y la literatura dominicana.'),
(3, 'Destino cultural cercano a Altos de Chavón, con playas tranquilas y campos de golf.',
 'La Romana es un destino turístico de lujo ubicado al sureste del país. Famosa por Altos de Chavón, una réplica de un pueblo mediterráneo del siglo XVI, y por su cercanía a resorts exclusivos como Casa de Campo, ofrece actividades como golf, excursiones en catamarán y visitas a la isla Catalina. Ideal para el turismo cultural y de descanso.'),
(4, 'Destino de ensueño famoso por sus playas de arena blanca bordeadas de palmeras y sus aguas turquesas y cálidas.',
 'Punta Cana es el principal destino turístico del Caribe por sus playas paradisíacas, resorts todo incluido y una amplia oferta de actividades acuáticas. Sus aguas cristalinas, excelente clima durante todo el año y opciones para relajación o aventura la convierten en el lugar ideal tanto para vacaciones familiares como para escapadas románticas o de lujo.');

-- Insert Rutas
INSERT INTO Rutas (origen, destino, distancia_km, duracion)
VALUES ('Santo Domingo', 'Punta Cana', 200, '2h 30min');

-- Insert Rutas Relations
INSERT INTO RutasDestinoRelation (ruta_id, destino_id) VALUES
(1, 1),  -- Ruta de Santo Domingo a Punta Cana
(1, 4);  -- Ruta de Santo Domingo a Punta Cana

-- Insert Ruta Paradas
INSERT INTO RutaParadas (ruta_id, nombre, descripcion, tiempo)
VALUES
(1, 'Parada 1', 'Descripción de la parada 1', '1:00'),
(1, 'Parada 2', 'Descripción de la parada 2', '2:30'),
(1, 'Parada 3', 'Descripción de la parada 3', '3:00');

-- Insert Transporte Opciones
INSERT INTO TransporteOpciones (ruta_id, tipo, duracion, precio_min, precio_max, icono)
VALUES
(1, 'Carro privado', '2h 30min', 150.00, 200.00, 'car'),
(1, 'Autobús', '3h 00min', 50.00, 70.00, 'bus'),
(1, 'Taxi compartido', '2h 45min', 100.00, 120.00, 'taxi');

-- Insert Tips Viaje
INSERT INTO TipsViaje (ruta_id, texto)
VALUES
(1, 'Lleva protector solar y repelente de insectos para disfrutar al máximo de las playas.'),
(1, 'Hidrátate constantemente, especialmente si viajas en verano.'),
(1, 'Consulta el clima antes de viajar para llevar la ropa adecuada.'),
(1, 'Prueba la gastronomía local en los restaurantes recomendados a lo largo de la ruta.');

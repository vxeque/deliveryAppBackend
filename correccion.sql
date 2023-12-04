create database deliverypluscomplet;
use deliverypluscomplet;

create table cliente(
ID int primary key not null,
Nombre varchar (70),
Apellido_Paterno varchar(20) not null,
Apellido_Materno varchar (20) not null,
Direccion varchar(255) not null,
telefono varchar (10) not null,
Correo_Electronico varchar(50) not null,
Numero_Bancario varchar (20));
select * from cliente; 

drop table restaurantes;
create table restaurantes(
ID_restaurante varchar (15) primary key not null,
Nombre varchar (50) not null,
Dias_Habiles varchar (100) not null,
HoraApertura time,
HoraCierre time,
Direccion varchar (100));

create table productos(
ID varchar (50) primary key not null,
nombre varchar (50),
descripcion text,
categoria varchar (50),
precio decimal(10,2),
RestauranteID varchar (15) not null,
foreign key (RestauranteID) references restaurantes(ID_restaurante));

/* dddddddddddddddd */
create table pedido(
ID_Pedido int primary key not null,
clienteID int,
RepartidorID int,
Estado varchar(25),
FechaHoraPedido datetime,
FechaHoraEntrega datetime,
direccion varchar (255),
costo decimal(10,2),
Foreign key (clienteID) references cliente (ID),
Foreign key (RepartidorID ) references Repartidores(ID)
);

alter table pedido add horaEntrega time; 

create table DetallesPedido(
ID int primary key not null,
PedidoID int not null,
ProductoID varchar(50),
cantidad int,
precioUnitario decimal(10,2),
Foreign key (PedidoID) references pedido (ID_Pedido),
Foreign key (ProductoID) references productos (ID)
);

create table repartidores(
ID int primary key ,
Nombre varchar (100)
);

CREATE TABLE Transferencias (
    ID INT PRIMARY KEY,
    OrdenID INT not null,
    Monto DECIMAL(10, 2),
    FechaHoraTransferencia DATETIME,
    TipoDeTransferencia VARCHAR(50) NOT NULL DEFAULT 'Transferencia Bancaria',
    Foreign key (OrdenID) references pedido (ID_Pedido)
);

create table notification(
	notification_id int auto_increment primary key,
    notification_description varchar(500) not null,
    notification_ID_restaurante varchar (15),
    foreign key(notification_ID_restaurante) references restaurantes (ID_restaurante)
);

alter table notification add notification_title varchar(50);
alter table notification add notication_date timestamp default current_timestamp;

/*Registros*/

/* Lista de restaurantes */
insert into restaurantes(ID_restaurante,Nombre,Dias_Habiles, HoraApertura, HoraCierre,Direccion) 
values("Res-1","Tio artesano","Lunes a sabado",'16:30:00','00:00:00',"Plaza Quinta Real Av Patricio trueba junto a Bodega Aurrera, San Francisco de Campeche Mexico"),
("Res-2","Oishidesu","Lunes a Domingo",'13:30:00','23:30:00',"Av fundadores plaza girasol	local 11,San Francisco de Campeche,Mexico"),
("Res-3","Texas grill & burgue","Lunes, Miercoles a Domingo",'16:30:00','00:00:00'," Av. López portillo en la clínica Santa Mónica, frente a Ximbal, San Francisco de Campeche, Mexico");

/*Restaurante 1*/

insert into productos(ID,Nombre,descripcion,categoria,precio,RestauranteID) 
values("HM-01","Hamburguesa Clasica",'Hamburguesa con carne de la casa 160gr, queso, tomate, cebolla morada y lechuga italiana',"Comida",95.00,"Res-1");
insert into productos(ID,Nombre,descripcion,categoria,precio,RestauranteID) 
values("HM-02","Hamburguesa con piña",'Hamburguesa con carne de la casa 160gr, queso, tomate, cebolla morada, lechuga italiana y con piña',"Comida",110.00,"Res-1"),
("HM-03","Hamburguesa con tocino",'Hamburguesa con carne de la casa 160gr, queso, tomate, cebolla morada, lechuga italiana y con tocino',"Comida",110.00,"Res-1"),
("HM-04","Hamburguesa con banana",'Carne de la casa, queso, tocino y platano frito',"Comida",120.00,"Res-1"),
("HM-05","Hamburguesa con Champi",'Carne de la casa, Champiñones a la plancha gratinados con queso marmoleado y tocino',"Comida",120.00,"Res-1"),
("HM-06","Hamburguesa con Crunchi",'Pechuga de pollo crujiente, queso, tomate, cebolla morada, zanahoria rayada y lechuga italiana en la base',"Comida",120.00,"Res-1"),
("HM-08","Hamburguesa con Hebra",'Carne de la casa,tocino, tomate, lechuga italiana y queso hebra sobre el pan',"Comida",130.00,"Res-1"),
("HM-09","Hamburguesa con Especial",'Carne, queso, tomate, aros de cebolla(pueden ir bañados: BBQ, BUFALO, TAMARINDO O MANGO HABANERO) y lechuga italiana en la base',"Comida",130.00,"Res-1"),
("HM-10","Hamburguesa con Pastor",'Carne de la casa 160gr, carne al pastor gratiñada con queso rayado, piña y cebolla a la plancha',"Comida",139.00,"Res-1"),
("HM-11","Hamburguesa con Arrachera",'Carne de la casa, carne de arrachera gratinado con queso , cebolla frita y aguacate',"Comida",149.00,"Res-1"),
("HM-12","Hamburguesa con Luchona",'Carne de la casa, carne de chuleta gratinados con queso, cebolla frita y chistorra',"Comida",159.00,"Res-1"),
("HM-13","Hamburguesa con MegaLuchona",'Carne de la casa 250gr, pan de 18-20cm, carne de chuleta,chistorra, champiñones, cebolla frita y queso gratinado',"Comida",209.00,"Res-1");

insert into productos(ID,Nombre,descripcion,categoria,precio,RestauranteID) 
values("BOON-01","Boneless 1/2kg",'Boneless 1/2kg',"Boneless",179.00,"Res-1"),
("BOON-02","Boneless 1kg",'Boneless 1kg',"Boneless",279.00,"Res-1"),
("BOON-03","Boneless y fries",'250gr de boneless y papas fritas',"Boneless",149.00,"Res-1"),
("COMP-01","Papas francesa",'220gr de papas francesas',"Complementos",80.00,"Res-1"),
("COMP-02","Papas gajo",'220gr de papas gajo',"Complementos",80.00,"Res-1"),
("COMP-03","Aros de cebolla",'12 piezas de aro de cebolla',"Complementos",80.00,"Res-1"),
("COMP-04","Dedotes de queso",'6 piezas de dedotes de queso',"Complementos",119.00,"Res-1"),
("COMP-05","Box botanero",'papas francesas, papas gajo, aros de cebolla, dip de nachos, captsup y picante',"Complementos",159.00,"Res-1"),
("EXT-01","Salsa ranch",'salsa ranch',"Extras",20.00,"Res-1"),
("EXT-02","Salsa tamarindo",'Salsa tamarinda',"Extras",20.00,"Res-1"),
("EXT-03","Salsa BBQ",'Salsa BBQ',"Extras",20.00,"Res-1"),
("EXT-04","Salsa BBQ picoso",'Salsa BBQ picoso',"Extras",20.00,"Res-1");

insert into productos(ID,Nombre,descripcion,categoria,precio,RestauranteID) 
values("BEB-01","Natural",'Natural embotellado 500ml',"Bebida",25.00,"Res-1"),
("BEB-02","Coca Cola",'Coca cola de 600ml',"Bebida",25.00,"Res-1"),
("BEB-03","Agua",'Agua de 500ml',"Bebida",20.00,"Res-1");

 


/*Restaurante 2*/

insert into productos(ID,Nombre,descripcion,categoria,precio,RestauranteID) 
values("ENT-01","Edames", "","Entrada",65.00,"Res-2"),
("ENT-02","Oniguiris", "","Entrada",65.00,"Res-2"),
("ENT-03","Rollitos primavera", "","Entrada",65.00,"Res-2"),
("ENT-04","Kushiagues", "una pieza de kushiagues de queso philadelphia","Entrada",30.00,"Res-2"),
("ENT-05","Kushiagues", "una pieza de kushiagues de queso philadelphia y salmon","Entrada",35.00,"Res-2"),
("ENT-06","Champiñones rellenos", "Rellenos de queso philadelphia","Entrada",60.00,"Res-2"),
("ENT-07","Champiñones rellenos", "Rellenos de tampico","Entrada",70.00,"Res-2"),
("ENT-08","Kushiagues", "5 piezas de rellenos de queso manchego","Entrada",65.00,"Res-2"),
("ENT-09","Kushiagues", "5 piezas de rellenos de pollo","Entrada",70.00,"Res-2"),
("ENT-10","Kushiagues", "Una pieza relleno de platano y manchego","Entrada",35.00,"Res-2"),
("ENT-11","Kushiagues", "Una pieza relleno de camaron philadelphia y jalapeño","Entrada",40.00,"Res-2");

/*Sushi de pollo*/
/* esta no quedo */
select * from productos;

select nombre, categoria,RestauranteID, id from productos where categoria='comida';

select nombre, categoria,RestauranteID, id from productos where RestauranteID='Res-3';

insert into productos(ID,nombre,descripcion,categoria,precio,RestauranteID) 
values("SHU-01","Sushi California",'Pd.Pechuga de pollo a la plancha, aguacate, pepino, queso philadelphia;Pf. Ajonjolí',"Comida",90.00,"Res-2"),
("SHU-02","Sushi Monkey Roll",'Pd.Pechuga de pollo a la plancha, aguacate, pepino, queso philadelphia;Pf. Plátano frito',"Comida",110.00,"Res-2"),
("SHU-03","Sushi Norteño Roll",'Pd.Pechuga de pollo a la plancha,arrachera, tocineta;Pf.Salsa tampico',"Comida",115.00,"Res-2"),
("SHU-04","Sushi Tampico Roll",'Pd.Pechuga de pollo a la plancha, aguacate, pepino, queso philadelphia;Pf.Salsa tampico',"Comida",115.00,"Res-2"),
("SHU-05","Sushi Hawai Roll",'Pd.Pechuga de pollo tempurado, aguacate,tocino frito Pf.Ajonjolí, Queso Philadelphia y piña',"Comida",120.00,"Res-2"),
("SHU-06","Sushi Dragón Roll",'Pd.Camarón tempurado, pepino, y queso philadelphia Pf.Aguacate, anguila y salsa dragón',"Comida",120.00,"Res-2"),
("SHU-07","Sushi Crunch Roll",'Pd.Pechuga de pollo a la plancha, aguacate, pepino, queso philadelphia;Pf. Empanizado de hojuelas de maíz',"Comida",120.00,"Res-2"),

/*Sushi de mar*/

("SHU-08"," Sushi California de surimi",'Pd.Surimi,aguacate, pepino, queso philadelphia;Pf.Ajonjolí',"Comida",90.00,"Res-2"),
("SHU-09"," Sushi California de camarón",'Pd.Camaron cocido, aguacate, pepino, queso philadelphia;Pf.ajonjolí',"Comida",100.00,"Res-2"),
("SHU-10"," Sushi California de atún",'Pd.Atún fresco, aguacate, pepino, queso philadelphia;Pf. Ajonjolí',"Comida",100.00,"Res-2"),
("SHU-11"," Sushi California de salmón",'Pd.Salmón fresco,aguacate, pepino, queso philadelphia;Pf. Ajonjolí',"Comida",100.00,"Res-2"),
("SHU-12","Furai Ebi",'Pd.Camarón empanizado, pepino, queso philadelphia;Pf. Empanizado,salsa tampico y lasco de aguacate',"Comida",120.00,"Res-2"),
("SHU-13"," Avocado especial",'Pd.Salmón fresco, pepino, queso philadelphia;Pf. Aguacate,Kanikama y salsa chipotle',"Comida",130.00,"Res-2"),
("SHU-14"," Escorpion roll",'Pd.Aguacate , surimi,tocino;Pf. queso manchego y salsa escorpión',"Comida",135.00,"Res-2"),
("SHU-15"," Oshidesu special",'Pd.Pepino , queso philadelphia, surimi;Pf. spice de mayonesa, aguacate y camarón empanizado',"Comida",135.00,"Res-2"),
("SHU-16"," Coco roll",'Pd.Aguacate,piña, coco rayado,queso philadelphia y camaron empanizado;Pf. Coco rayado,salsa tampico y chipotle',"Comida",135.00,"Res-2"),
("SHU-17"," Ebi especial",'Pd.Aguacate,pepino, queso philadelphia y camarón empanizado;Pf.salsa tampico y camarón a la plancha',"Comida",160.00,"Res-2"),

/*Sushi de arrachera  y gourmet*/

("SHU-18","California arrachera",'Pd.Aguacate, pepino, queso philadelphia, arrachera;Pf.Ajonjolí',"Comida",95.00,"Res-2"),
("SHU-19"," Gyu crunch roll",'Pd.Aguacate, pepino, queso philadelphia, arrachera;Pf. Empanizado con hojuelas de maíz',"Comida",120.00,"Res-2"),
("SHU-20"," Ebi crunch roll",'Pd.Aguacate , pepino, camarón cocido y queso philadelphia;Pf. Empanizado con hojuelas de maíz',"Comida",120.00,"Res-2"),
("SHU-21"," Bistec roll",'Pd.Arrachera gratinado con queso manchego, chile toreado y cebolla cambray;Pf. Empanizado y topping de guacamole',"Comida",140.00,"Res-2"),
("SHU-22"," Mar y tierra",'Pd.Arrachera, queso philadelphia, camarón cocido y aguacate;Pf.Empanizado y salsa tampico',"Comida",145.00,"Res-2"),
("SHU-23"," Tierra, mar y cielo",'Pd.Arrachera, queso manchego, camarón cocido, pepino y pollo;Pf.Empanizado, salsa tampico',"Comida",155.00,"Res-2"),

/*Sushi sókan*/

("SHU-24","Tropical rollo",'Pd.Camarón empanizado, queso philadelphia y surimi;Pf.Lasca de mango',"Comida",145.00,"Res-2"),
("SHU-25"," Primavera roll",'Pd.Aguacate, Camarón empanizado y salsa tampico;Pf. Verduras tempudas y salsa de la casa',"Comida",145.00,"Res-2"),
("SHU-26"," Hiroshima roll",'Pd.Surimi, queso philadelphia, aguacate;Pf. Salmón flameado, chipotle, ajonjolí',"Comida",145.00,"Res-2"),
("SHU-27"," Burrito choch",'Pd.Tiras de arrachera, plátano frito, queso gratinado y guacamole;Pf. Empanizado',"Comida",190.00,"Res-2"),
("SHU-28"," Tampico ball",'Pd.Camarón empanizado, queso philadelphia y aguacate;Pf.salsa tampico, ajonjolí y chipotle',"Comida",120.00,"Res-2"),
("SHU-29"," Tanuki ball",'Pd.Arrachera, queso philadelphia y aguacate;Pf.Empanizado y chile toreado',"Comida",155.00,"Res-2"),
("SHU-30"," Mae ploy ball",'Pd.Tocineta, queso gratinado y pechuga de pollo;Pf.Empanizado con salsa especial de la casa',"Comida",120.00,"Res-2"),

/*Sushi gourmet*/

("SHU-31","Teriyaki rollo",'Pd.Kakiague de verdura, pollo,pepino, queso philadelphia;Pf.Alga, tempurado y salsa teriyaki',"Comida",145.00,"Res-2"),
("SHU-32"," Sake philadelphia",'Pd.Aguacate, pepino, tanuki;Pf. Queso philadelphia,salmón',"Comida",150.00,"Res-2"),
("SHU-33"," Kape maki",'Pd.Camarón tempura, aguacate, queso philadelphia;Pf. pepino, spice',"Comida",150.00,"Res-2"),
("SHU-34"," Gyu special",'Pd.Arrachera, plátano, aguacate, queso philadelphia;Pf. Pepino, spice',"Comida",150.00,"Res-2"),
("SHU-35"," Kio special",'Pd.Salmón, atún, pepino, togarashi;Pf.Queso philadelphia, mayonesa, cilantro',"Comida",160.00,"Res-2"),
("SHU-36"," Kani roll",'Pd.Pollo, pepino, aguacate, queso philadelphia;Pf.Surimi y chipotle',"Comida",140.00,"Res-2"),
("SHU-37"," Maguro roll",'Pd.Pepino, aguacate, queso philadelphia;Pf.Atún flameado, spice de la casa',"Comida",150.00,"Res-2"),
("SHU-38"," Nevado roll",'Pd.Pepino, aguacate, pollo tempurado;Pf.Queso philadelphia, soyamiel y ajonjolí',"Comida",145.00,"Res-2"),
("SHU-39"," Rainbow roll",'Pd.Pollo, pepino, queso philadelphia, arrachera;Pf.Atún, salmón, aguacate y surimi',"Comida",175.00,"Res-2"),
("SHU-40"," Furai oshidesu",'Pd.Camaron empanizado, plátano, pepino,queso philadelphia, aguacate;Pf.Hoja de soya, spice de la casa',"Comida",150.00,"Res-2"),


/*Tazones y sopas*/

("SOP-01","Gohan especial",'Arroz al vapor, tampico, aguacate, philadelphia, ajonjolí y salsa anguila',"Comida",110.00,"Res-2"),
("SOP-02","Gohan Oshidesu",'Arroz al vapor, tampico, aguacate, philadelphia, ajonjolí, salsa anguila, pollo, arrachera y camarones',"Comida",160.00,"Res-2"),
("SOP-03","Yakimeshi de pollo",'Arroz salteado ala plancha con salsa de soya, verdurasy y pollo',"Comida",110.00,"Res-2"),
("SOP-04","Yakimeshi de res",'Arroz salteado a la plancha con salsa de soya, verduras y res',"Comida",110.00,"Res-2"),
("SOP-05","Yakimeshi de camarón",'Arroz salteado a la plancha con salsa de soya, verduras y camarón',"Comida",120.00,"Res-2"),
("SOP-06","Yakimeshi oshidesu",'Arroz salteado a la plancha con salsa de soya, verduras, philadelphia, aguacate, camarón, res y pollo',"Comida",135.00,"Res-2"),
("SOP-07","Ramen",'Sopa con fideos, elotes, 1/2 huevo cocido, cebollín, wakame y camaboko; pollo o cerdo',"Comida",120.00,"Res-2"),
("SOP-08","Misoramen",'Pasta de miso de la casa	, pollo, 1/2 huevo cocido, fideos, cebollín, camaboko y elotes',"Comida",120.00,"Res-2"),
("SOP-09","Ramen oshidesu",'Sopa con fideos, elotes, 1/2 huevo cocido, cebollín, wakame y camaboko; salmón y camarón',"Comida",135.00,"Res-2"),


/*De la plancha*/

("PAST-1","Pasta Thai",'Tallarines, col blanca, zanahoria, apio y pechuga de pollo',"Comida",95.00,"Res-2");

select * from productos where ID= "PAST-1";

insert into productos(ID,Nombre,descripcion,categoria,precio,RestauranteID) 
values("BE-01","Natural",'Bebida Natural 500ml',"Bebida",18.00,"Res-2"),
("BE-02","Coca Cola",'Coca cola de 600ml',"Bebida",18.00,"Res-2"),
("BE-03","Ramune",'Ramune',"Bebida",65.00,"Res-2"),
("BE-04","Arzona",'Agua de 500ml',"Bebida",20.00,"Res-2");

insert into productos(ID,Nombre,descripcion,categoria,precio,RestauranteID) 
values("POT-01","Pocky",'Pocky 45gr',"Postre",50.00,"Res-2"),
("POT-02","Pocky",'Pocky 70gr',"Postre",70.00,"Res-2"),
("POT-03","Pocky",'Pocky 108gr',"Postre",150.00,"Res-2"),
("POT-04","Helado tempura",'Helado',"Postre",85.00,"Res-2");

/*Restaurante 3*/

/*Burguer*/
insert into productos(ID,Nombre,descripcion,categoria,precio,RestauranteID) 
values("HMB-01","Hamburguesa cryspi chiken",'Disco de pollo empanizado con cereal, lechuga sangría, queso americano, ensalada de col tipo kentucky y tocino',"Comida",120.00,"Res-3"),
("HMB-02","Hawaiana burguer",'Carne angus 250gr, lechuga francesa, tomate bola, queso cheddar, jamón, piña asada y tocino',"Comida",139.00,"Res-3"),
("HMB-03","Champiñons burguer",'Carne angus 250gr, lechuga francesa, tomate bola,tocino, champiñon con cebolla y queso california',"Comida",175.00,"Res-3"),
("HMB-04","Hamburguesa La Argentina",'Carne angus 250gr, lechuga francesa, chorizo argentino, queso cheddar, tocino, chistorra, chimichurri argentino',"Comida",175.00,"Res-3"),
("HMB-05","Avocado burguer",'Carne angus 250gr, guacamole, aros de cebolla, queso cheddar, tomate bola y tocino',"Comida",175.00,"Res-3"),
("HMB-06","Suprema burguer",'Doble carne angus 250gr, lechuga francesa, tomate bola, queso cheddar, tocino y cebolla caramelizada',"Comida",195.00,"Res-3"),

/*Burguer carne de la casa*/

("HMB-07","Hamburguesa clasica",'Carne de la casa 180gr, queso americano, tomate bola, cebolla morada caramelizada y lechuga sangría',"Comida",95.00,"Res-3"),
("HMB-08","Hamburguesa Tocinator",'Carne de la casa 180gr, lechuga sangría, tomate bola, cebolla morado frita, queso americano y tocino doble',"Comida",135.00,"Res-3"),
("HMB-09","Hamburguesa Mexicana",'Carne de la casa 180gr, choriqueso, cebolla, guacamole, lechuga sangría, tomate bola, y mayonesa de jalapeño',"Comida",139.00,"Res-3"),
("HMB-10","Spacy burguer",'Carne de la casa 180gr, tocino, queso americano, tomate bola, salchichas enchipotladas y lechuga sangría',"Comida",139.00,"Res-3"),


/*Burguer de temporada*/
("HMB-11","Pizza burguer",'Carne de la casa 180gr , pan de 18-20cm, pechuga de pollo empanizado, queso mozzarella, pepperoní y salsa pomodoro',"Comida",139.00,"Res-3"),
("HMB-12","Jack Daniel´s burguer",'Carne de la casa 180gr,queso americano, tomate bola, lechuga y salsa	de tocino',"Comida",145.00,"Res-3"),
("HMB-13","Burguer ranch",'Carne de la casa 180gr, queso oaxaca, tomate bola, lechugay salchicha para asar',"Comida",149.00,"Res-3");

/*Extras*/
insert into productos(ID,Nombre,descripcion,categoria,precio,RestauranteID) 
values("EXTR-01","Papas chicas",'Papas a la francesa, wafles o gajos 200gr, salsa cátsup y cheddar',"Extras",90.00,"Res-3"),
("EXTR-02","¨Papas grandes",'Papas a la francesa, wafles o gajos 250gr, salsas cátsup y cheddar',"Extras",150.00,"Res-3");

/*Bebidas*/
insert into productos(ID,Nombre,descripcion,categoria,precio,RestauranteID) 
values("BEBI-01","Coca cola",'Coca cola 450ml',"Bebida",22.00,"Res-3"),
("BEBI-02","Agua",'Agua de sabor 500ml',"Bebida",22.00,"Res-3");


/*REPARTIDORES*/
insert into repartidores(ID,Nombre) values
(01,"Ethan Garcia Sanchez"),
(02,"Isabella Rodriguez Ramirez"),
(03,"Daniel Wilson Torres"),
(04,"Elizabeth Martinez Flores"),
(05,"William Anderson Cruz");

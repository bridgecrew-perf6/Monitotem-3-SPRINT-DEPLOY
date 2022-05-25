CREATE DATABASE monitotem;
USE monitotem;

create table if not exists registro(
	idRegistro int primary key auto_increment,
    usoMemoria varchar(45),
    usoCpu varchar(45),
    temposAtividade varchar(45),
    dataRegistro datetime
);

CREATE DATABASE  securityWings;

USE securityWings;

CREATE TABLE Endereco(
    idEndereco int primary key auto_increment,
    cidade varchar(50),
    bairro varchar(50),
    uf char(2),
    rua varchar(50),
    cep char(8),
    complemento char(10)
);

CREATE TABLE Empresa(
    idEmpresa int primary key auto_increment,
    email varchar(255),
    senha varchar(255),
    nome varchar(45),
    cnpj char(18),
    telefone char(11),
    fkEndereco int,
    constraint fk_endereco foreign key (fkEndereco) references Endereco(idEndereco)
);

CREATE TABLE usuario(
    idUsuario int primary key auto_increment,
    nome varchar(45),
    cpf char(14),
    email varchar(255) UNIQUE,
    isAdmin boolean,
    senha varchar(255),
    fkEmpresa int,
    constraint fk_empresa_funcionario foreign key (fkEmpresa) references Empresa(idEmpresa)
);

CREATE TABLE ComputadorESpec(
    idComputador int primary key auto_increment,
    discoEspec varchar(45),
    processadorEspec varchar(45),
    memoriaEspec varchar(45),
    fkEmpresa int,
    fkUsuario int,
    constraint fkEmpresa foreign key (fkEmpresa) references Empresa(idEmpresa),
    constraint fkUsuarioComp foreign key(fkUsuario) references usuario(idUsuario)
);

CREATE TABLE Monitoramento(
    idMonitoramento int primary key auto_increment,
    fkComputador int,
    fkUsuario int,
    constraint fkComputadorMon foreign key (fkComputador) references ComputadorESpec(idComputador),
    constraint fkUsuarioMon foreign key(fkUsuario) references usuario(idUsuario)
);

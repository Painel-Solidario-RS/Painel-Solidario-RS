

Insert into Person_Activity (name) values
	('Costurar'),
	('Cozinhar'),
	('Limpar'),
	('Dirigir');

Insert into Volunteer_Category (name) values
	('Voluntário Civil'),
	('Voluntário Veterinário'),
	('Voluntário Saúde');

Insert into Person_Employment("cboCode", name) values
	('317110', 'Programador de sistemas de informação');

Insert into Address (state, city) values
	('RS', 'Novo Hamburgo'),
	('RS', 'São Leopoldo'),
	('RS', 'Sapucaia do Sul');

Insert into Person (name, email, phone, allocated, "employmentId", "addressId") values
	('João', 'joao@feevale.br', '(51) 999998877', true, 1, 1);

Insert into "User" (password, "personId") values
	('password123', 1);

Insert into
	Person_Activity (name)
values
	('Costurar'),
	('Cozinhar'),
	('Limpar'),
	('Dirigir');

Insert into
	Volunteer_Category (name)
values
	('Voluntário Civil'),
	('Voluntário Veterinário'),
	('Voluntário Saúde');

Insert into
	Person_Employment("cboCode", name)
values
	(
		'317110',
		'Programador de sistemas de informação'
	);

Insert into
	Address (state, city)
values
	('RS', 'Novo Hamburgo'),
	('RS', 'São Leopoldo'),
	('RS', 'Sapucaia do Sul');

Insert into
	Person_Shifts (name, "startDate", "endDate")
values
	('Madrugada', '00:00:00', '06:00:00'),
	('Manhã', '08:00:00', '12:00:00'),
	('Tarde', '13:00:00', '17:00:00'),
	('Noite', '18:00:00', '22:00:00');
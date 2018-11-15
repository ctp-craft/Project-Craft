module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define('Task', {
		// id, createdAt, updatedAt already exists in sequelize
		task_description: {	
			type: DataTypes.TEXT,
		},
		task_title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
	});

	return Task;
}
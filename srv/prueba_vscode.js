module.exports = async (srv) => {
	srv.on ('validarOC', async (req) => {
		const { sociedad, tipoDocumento } = req.data;
		let mensajes = [];
		// Ejemplo de validación (simula BAdI)
		if (sociedad === '1000') {
			mensajes.push({
				tipo: 'E',
				texto: 'La sociedad 1000 no permite crear OCs'
			});
		}
		if (tipoDocumento === 'ZSER') {
			mensajes.push({
				tipo: 'W',
				texto: 'El tipo de documento ZSER requiere aprobación'
			});
		}
		return { mensajes };
		//Prueba versiones 02.03.2026
	});
};

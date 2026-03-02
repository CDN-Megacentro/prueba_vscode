service prueba_vscode @(path: '/odata/v4/zmm') {
	action validarOC(
	sociedad : String,
	tipoDocumento : String
	) returns {
		mensajes : array of {
		tipo : String;
		texto : String;
		};
	};
}

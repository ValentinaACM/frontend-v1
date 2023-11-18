const datosUsuarios = [
    { numPedido: '1010', nomCliente: 'juan pablo', fechaPedido: '09/11/2023', formaPago: 'bancolombia', estado: 'revision', totalPago: 120000 },
    { numPedido: '1011', nomCliente: 'juan esteban', fechaPedido: '10/11/2023', formaPago: 'nequi', estado: 'revision', totalPago: 50000 }
    // Agrega más datos según sea necesario
  ];

  function validarFormulario() {

        // Obtener los valores de los campos
        var numPedido = document.getElementById('numPedido').value;
        var fechaPedido = document.getElementById('fechaPedido').value;
        var nombreCliente = document.getElementById('nombreCliente').value;
        var formaPago = document.getElementById('formaPago').value;
        var totalPago = document.getElementById('totalPago').value;

        // Expresión regular para validar un número de pedido (puedes ajustarla según tus necesidades)
        var numPedido = /^\d{1,}$/;

        // Expresión regular para validar una fecha (puedes ajustarla según tus necesidades)
        var fechaPedido = /^\d{4}-\d{2}-\d{2}$/;

        // Expresión regular para validar un nombre (solo letras y espacios permitidos)
        var nombreCliente = /^[a-zA-Z\s]+$/;

        // Expresión regular para validar una forma de pago (solo letras y espacios permitidos)
        var formaPago = /^[a-zA-Z\s]+$/;

        // Expresión regular para validar un total de pago (solo números)
        var totalPago = /^\d{1,}$/;

        // Validar cada campo
        if (!regexNumPedido.test(numPedido)) {
            alert('Número de pedido no válido');
            return;
        }

        if (!regexFecha.test(fechaPedido)) {
            alert('Fecha no válida');
            return;
        }

        if (!regexNombre.test(nombreCliente)) {
            alert('Nombre de cliente no válido');
            return;
        }

        if (!regexFormaPago.test(formaPago)) {
            alert('Forma de pago no válida');
            return;
        }

        if (!regexTotalPago.test(totalPago)) {
            alert('Total de pago no válido');
            return;
        }

        // Si llegamos aquí, el formulario es válido
        alert('Formulario válido. Guardando cambios...');
        // Aquí puedes agregar código para enviar el formulario, etc.
    }

















    // const numPedido = document.getElementById('numPedido').value.trim();
    // const nomCliente = document.getElementById('nomCliente').value.trim();
    // const fechaPedido = document.getElementById('fechaPedido').value.trim();
    // const formaPago = document.getElementById('formaPago').value.trim();
    // const estado = document.getElementById('estado').value.trim();
    // const totalPago = document.getElementById('totalPago').value.trim();


    //     // Limpiar mensajes de error
    //     document.getElementById('errornumPedido').textContent = '';
    //     document.getElementById('errornomCliente').textContent = '';
    //     document.getElementById('errorfechaPedido').textContent = '';
    //     document.getElementById('errorformaPago').textContent = '';
    //     document.getElementById('errorestado').textContent = '';
    //     document.getElementById('totalPago').textContent = '';



   
    //  // Validar campos
    //  let valido = true;
  
    //  if (!numPedido || !/^\d{9}$/.test(numPedido)) {
    //    document.getElementById('errornumPedido').textContent = 'Ingrese un número de pedido válido (4 dígitos)';
    //    valido = false;
    //  }
   
    //  if (!nomCliente || /^[a-zA-Z\s]+$/.test(nomCliente)) {
    //    document.getElementById('errorCorreo').textContent = 'Ingrese un nombre válido';
    //    valido = false;
    //  }
   
    //  if (!fechaPedido || /^\d{2}-\d{2}-\d{4}$/.test(fechaPedido)) {
    //    document.getElementById('errorTelefono').textContent = 'Fecha no valida (Ej: 09/12/2012)';
    //    valido = false;
    //  }
   
    //  if (!formaPago || /^[a-zA-Z\s]+$/.test(formaPago)) {
    //    document.getElementById('errorCedula').textContent = 'Forma de pago no válida';
    //    valido = false;
    //  }    
     
     
    //  if (!totalPago || /^\d{1,}$/.test(totalPago)) {
    //     document.getElementById('errorCedula').textContent = 'Total de pago no válido';
    //     valido = false;
    //   }   

    //   alert('Formulario válido. Guardando cambios...');

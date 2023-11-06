function validarFormulario() {
    var name = document.getElementById("name").value.trim();
    var lastname = document.getElementById("lastname").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var dni = document.getElementById("dni").value.trim();
    var edad = document.getElementById("edad").value.trim();
    var email = document.getElementById("email").value.trim();
   
   


   
    if (name === "" || lastname=== "" ||telefono==="" ||dni=== ""||  edad === "" || email=== "" ) {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }

    
    for (var i = 0; i < name.length; i++) {
      var charCode = name.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre completo' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

    for (var o = 0; o < lastname.length; o++) {
        var charCode = lastname.charCodeAt(o);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
          alert("El campo 'Apellido' solo puede contener caracteres alfabéticos y espacios.");
          return false;
        }
      }

  
    if (dni.length !== 8) {
      alert("El campo 'dni' debe contener exactamente 8 dígitos numéricos.");
      return false;
    }
    for (var j = 0; j < dni.length; j++) {
      var digit = dni.charAt(j);
      if (digit < "0" || digit > "9") {
        alert("El campo 'dni' solo puede contener dígitos numéricos.");
        return false;
      }
    }

    if (telefono.length !== 10) {
        alert("El campo 'telefono' debe contener exactamente 10 dígitos numéricos.");
        return false;
      }
      for (var k = 0; k < telefono.length; k++) {
        var digit = telefono.charAt(k);
        if (digit < "0" || digit > "9") {
          alert("El campo 'telefono' solo puede contener dígitos numéricos.");
          return false;
        }
      }

    
    
  }
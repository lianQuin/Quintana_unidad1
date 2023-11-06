var lis = document.querySelectorAll(".valor-desplegable [data-val]");
// cada vez que se pulse en una opción del menú desplegable
for (var x = 0; x < lis.length; x++) {
  lis[x].addEventListener("click", function() {
    // actualizar el texto y el valor
    document.getElementById("miValorVisible").textContent = this.textContent;
    document.getElementById("miValor").value = this.dataset.val;
  });
};


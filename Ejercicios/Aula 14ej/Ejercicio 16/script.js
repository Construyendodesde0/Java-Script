function contarNumeros() {
    
    const inicio = parseInt(document.getElementById('inicio').value);
    const fin = parseInt(document.getElementById('fin').value);
    const paso = parseInt(document.getElementById('paso').value);
    
    
    if (isNaN(inicio) || isNaN(fin) || isNaN(paso)) {
        alert("Por favor ingresa números válidos en todos los campos");
        return;
    }
    
    if (paso <= 0) {
        alert("El paso debe ser un número positivo");
        return;
    }
    
   
    let resultado = "";
    if (inicio <= fin) {
        // Contar hacia adelante
        for (let i = inicio; i <= fin; i += paso) {
            resultado += i;
            if (i + paso <= fin) {
                resultado += ' <span class="emoji">👉</span> ';
            }
        }
    } else {
        // Contar hacia atrás
        for (let i = inicio; i >= fin; i -= paso) {
            resultado += i;
            if (i - paso >= fin) {
                resultado += ' <span class="emoji">👈</span> ';
            }
        }
    }
    
    // Agregar dedo levantado al final
    resultado += ' <span class="emoji">👍</span>';
    
   
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = "<strong>Resultado:</strong> " + resultado;
    divResultado.style.display = "block";
}
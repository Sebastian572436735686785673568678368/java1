function resolverEcuacion() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    var discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
        var x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.getElementById('resultado').innerText = "x1 = " + x1 + ", x2 = " + x2;
    } else if (discriminante === 0) {
        var x = -b / (2 * a);
        document.getElementById('resultado').innerText = "La solución doble es: x = " + x;
    } else {
        document.getElementById('resultado').innerText = "No hay soluciones reales.";
    }
}

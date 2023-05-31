function validarTexto() {
    let textoEscrito = document.querySelector("#textoIngresado").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if (!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;

    }

}

function crypt() {

    if (!validarTexto()) {

        let mensaje = document.getElementById("textoIngresado").value;

        let textArea = document.querySelector("#textoIngresado");
        textArea.value = "";

        let textOriginal = mensaje.split('');
        let textFinal = [];
        let u = 0;

        let procesado = document.querySelector("#textoProcesado");
        procesado.style.backgroundImage = "none"

        for (let i = 0; i < textOriginal.length; i++) {
            let element = textOriginal[i];

            switch (element) {
                case "a":
                    textFinal[u] = "ai";
                    u++;
                    break;

                case "e":
                    textFinal[u] = "enter"
                    u++;
                    break;

                case "i":
                    textFinal[u] = "imes"
                    u++;
                    break;

                case "o":
                    textFinal[u] = "ober"
                    u++;
                    break;

                case "u":
                    textFinal[u] = "ufat"
                    u++;
                    break;

                default:
                    textFinal[u] = element;
                    u++
                    break;
            }
        }

        let final = textFinal.join('');

        document.getElementById("textoProcesado").innerHTML = final;

    }

}

function decrypt() {
    let mensaje = document.getElementById("textoIngresado").value;

    let textOriginal = mensaje.split('');
    let textFinal = [];
    let u = 0;

    if (!validarTexto()) {

        for (let i = 0; i < textOriginal.length;) {
            element = textOriginal[i];

            switch (element) {
                case "a":
                    textFinal[u] = "a";
                    if (textOriginal[i + 1] == "i") {
                        i++;
                    }
                    u++;
                    i++;
                    break;

                case "e":
                    textFinal[u] = "e";
                    if (textOriginal[i + 1] == "n" && textOriginal[i + 2] == "t" && textOriginal[i + 3] == "e" && textOriginal[i + 4] == "r") {
                        i = i + 4;
                    }
                    u++;
                    i++;
                    break;

                case "i":
                    textFinal[u] = "i";
                    if (textOriginal[i + 1] == "m" && textOriginal[i + 2] == "e" && textOriginal[i + 3] == "s") {
                        i = i + 3;
                    }
                    u++;
                    i++;
                    break;

                case "o":
                    textFinal[u] = "o";
                    if (textOriginal[i + 1] == "b" && textOriginal[i + 2] == "e" && textOriginal[i + 3] == "r") {
                        i = i + 3;
                    }
                    u++;
                    i++;
                    break;

                case "u":
                    textFinal[u] = "u";
                    if (textOriginal[i + 1] == "f" && textOriginal[i + 2] == "a" && textOriginal[i + 3] == "t") {
                        i = i + 3;
                    }
                    u++;
                    i++;
                    break;

                default:
                    textFinal[u] = element;
                    u++
                    i++;
                    break;
            }

        }

        final = textFinal.join('');

        document.getElementById("textoProcesado").innerHTML = final;

    }

}

function copiar() {
    let texto = document.getElementById("textoProcesado");

    texto.select();
    navigator.clipboard.writeText(texto.value);
    document.getElementById("textoProcesado").innerHTML = "";

}



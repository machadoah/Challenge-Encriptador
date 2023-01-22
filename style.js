const textarea = document.querySelector(".conteudo-fonte-primario-insercao");
const mensagem = document.querySelector(".conteudo-destino-texto");

/*
A) letra "a" será convertida para "ai"
E) letra "e" será convertida para "enter"
I) letra "i" será convertida para "imes"
O) letra "o" será convertida para "ober"
U) letra "u" será convertida para "ufat"
*/


// BOTÃO ENCRIPTAR

    function botaoEncriptar() {

        const textoEncriptado = encriptar(textarea.value);
        mensagem.value = textoEncriptado;

        textarea = "";

        
    }

    function encriptar(stringEncriptada) {

        let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "obter"] , ["u", "ufat"]];
        // console.table(matrizCodigo);
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])) {

                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        return stringEncriptada;

    }


// BOTÃO DESENCRIPTAR

    function botaoDesencriptar() {

        const textoDesencriptado = desencriptar(textarea.value);
        mensagem.value = textoDesencriptado;

        textarea = "";

        
    }

    function desencriptar(stringDesencriptada) {

        let matrizCodigo = [["a", "ai"] , ["e", "enter"] , ["i", "imes"] , ["o", "obter"] , ["u", "ufat"]];
        // console.table(matrizCodigo);
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][1])) {

                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }

        return stringDesencriptada;

    }

// botao copiar

function copiar () {
    let textoEncriptado = stringEncriptada.value;
    let copia = navigator.clipboard.writeText(textoEncriptado);

    return copia;
}
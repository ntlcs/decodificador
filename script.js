document.addEventListener('DOMContentLoaded', function() {
    const inputTexto = document.getElementById('inputTexto');
    const outputTexto = document.getElementById('outputTexto');
    const btnCriptografar = document.getElementById('btnCriptografar');
    const btnDescriptografar = document.getElementById('btnDescriptografar');
    const btnCopiar = document.getElementById('btnCopiar');
    const imagemPlaceholder = document.getElementById('imagemPlaceholder');

    btnCriptografar.addEventListener('click', function() {
        const textoCriptografado = criptografarTexto(inputTexto.value);
        outputTexto.value = textoCriptografado;
        aplicarEstilosCriptografar();
        inputTexto.value = '';
        exibirImagem();
    });

    btnDescriptografar.addEventListener('click', function() {
        const textoDescriptografado = descriptografarTexto(inputTexto.value);
        outputTexto.value = textoDescriptografado;
        aplicarEstilosDescriptografar();
        inputTexto.value = '';
        exibirImagem();
    });

    btnCopiar.addEventListener('click', function() {
        outputTexto.select();
        document.execCommand('copy');
        
    });

    function criptografarTexto(texto) {
        return texto.replace(/e/g, 'enter')
                    .replace(/i/g, 'imes')
                    .replace(/a/g, 'ai')
                    .replace(/o/g, 'ober')
                    .replace(/u/g, 'ufat');
    }

    function descriptografarTexto(texto) {
        return texto.replace(/enter/g, 'e')
                    .replace(/imes/g, 'i')
                    .replace(/ai/g, 'a')
                    .replace(/ober/g, 'o')
                    .replace(/ufat/g, 'u');
    }

    function aplicarEstilosCriptografar() {
       
    }

    function aplicarEstilosDescriptografar() {
        
    }

    function exibirImagem() {
       
        if (outputTexto.value.trim() === "") {
           
            imagemPlaceholder.style.display = "block";
        } else {
          
            imagemPlaceholder.style.display = "none";
        }
    }
});

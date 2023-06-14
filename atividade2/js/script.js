//COR DE FUNDO

document.addEventListener('DOMContentLoaded', function() {
    var corFundo = document.getElementById('corFundo');

    function gerarCorAleatoria() {
        var cor = '#';
        var caracteres = '0123456789ABCDEF';

        for (var i = 0; i < 6; i++) {
            cor += caracteres[Math.floor(Math.random() * 16)];
        }

        return cor;
    }

    corFundo.addEventListener('click', function() {
        var corAleatoria = gerarCorAleatoria();
        document.body.style.backgroundColor = corAleatoria;
    });

});

//COR DO TÍTULO

document.addEventListener('DOMContentLoaded', function() {
    var corTitulo = document.getElementById('corTitulo');

    function gerarCorAleatoria() {
        var cor = '#';
        var caracteres = '0123456789ABCDEF';

        for (var i = 0; i < 6; i++) {
            cor += caracteres[Math.floor(Math.random() * 16)];
        }

        return cor;
    }

    corTitulo.addEventListener('click', function() {
        var corAleatoria = gerarCorAleatoria();
        titulo.style.color = corAleatoria;
    });
    
});

//COR DO PARÁGRAFO

document.addEventListener('DOMContentLoaded', function() {
    var corParagrafo = document.getElementById('corParagrafo');

    function gerarCorAleatoria() {
        var cor = '#';
        var caracteres = '0123456789ABCDEF';

        for (var i = 0; i < 6; i++) {
            cor += caracteres[Math.floor(Math.random() * 16)];
        }

        return cor;
    }

    corParagrafo.addEventListener('click', function() {
        var corAleatoria = gerarCorAleatoria();
        texto.style.color = corAleatoria;
    });
    
});

//FONTE TÍTULO

//FONTE PARÁGRAFO

//MUDAR TUDO 

document.addEventListener('DOMContentLoaded', function() {
    var mudarTudo = document.getElementById('mudarTudo');

    function gerarCorAleatoria() {
        var cor = '#';
        var caracteres = '0123456789ABCDEF';

        for (var i = 0; i < 6; i++) {
            cor += caracteres[Math.floor(Math.random() * 16)];
        }

        return cor;
    }

    mudarTudo.addEventListener('click', function() {
        var corAleatoria = gerarCorAleatoria();
        document.body.style.backgroundColor = corAleatoria;
        var corAleatoria = gerarCorAleatoria();
        titulo.style.color = corAleatoria;
        var corAleatoria = gerarCorAleatoria();
        texto.style.color = corAleatoria;
    });
    
});
document.getElementById('formulario-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Resetar mensagens de erro
    const mensagensErro = document.querySelectorAll('.mensagem-erro');
    mensagensErro.forEach(msg => {
        msg.style.display = 'none';
    });
    
    // Esconder mensagem de sucesso se estiver visível
    document.getElementById('mensagem-sucesso').style.display = 'none';
    
    // Validação
    let valido = true;
    
    // Nome completo
    const nomeCompleto = document.getElementById('nome-completo').value.trim();
    if (nomeCompleto === '') {
        document.getElementById('erro-nome').style.display = 'block';
        valido = false;
    }
    
    // E-mail
    const email = document.getElementById('email').value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        document.getElementById('erro-email').style.display = 'block';
        valido = false;
    }
    
    // Senha
    const senha = document.getElementById('senha').value;
    if (senha.length < 6) {
        document.getElementById('erro-senha').style.display = 'block';
        valido = false;
    }
    
    // Confirmar senha
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    if (senha !== confirmarSenha) {
        document.getElementById('erro-confirmar-senha').style.display = 'block';
        valido = false;
    }
    
    // Data de nascimento
    const dataNascimento = document.getElementById('data-nascimento').value;
    if (dataNascimento === '') {
        document.getElementById('erro-data').style.display = 'block';
        valido = false;
    }
    
    // Gênero
    const generoSelecionado = document.querySelector('input[name="genero"]:checked');
    if (!generoSelecionado) {
        document.getElementById('erro-genero').style.display = 'block';
        valido = false;
    }
    
    // Termos
    const termosAceitos = document.getElementById('termos').checked;
    if (!termosAceitos) {
        document.getElementById('erro-termos').style.display = 'block';
        valido = false;
    }
    
    // Se tudo estiver válido
    if (valido) {
        document.getElementById('mensagem-sucesso').style.display = 'block';
        // Aqui você pode adicionar o envio do formulário para o servidor
    }
});
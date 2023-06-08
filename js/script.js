function validarEmail(email) {
    // Expressão regular para validar o formato do email
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verifica se o email corresponde à expressão regular
    if (regex.test(email)) {
      return true; // Email válido
    } else {
      return false; // Email inválido
    }
  }
  
  // Função para tratar o envio do formulário
  function enviarFormulario() {
    var email = document.getElementById("email").value;
    
    if (validarEmail(email)) {
      // Email válido - prosseguir com o envio do formulário
      alert("Formulário enviado com sucesso!");
    } else {
      // Email inválido - exibir mensagem de erro
      alert("Digite um email válido");
    }

    // Adicionar os eventos ao botão
    document.getElementsByClassName("btn btn-primary").addEventListener("click", validarEmail);
    document.getElementsByClassName("btn btn-primary").addEventListener("click", enviarFormulario);
  }
  
// Seletor do botão
const whatsappButton = document.querySelector('#whatsappButton');


// Número de telefone para o qual você deseja criar o link do WhatsApp
const numeroTelefone = '5511945932318';

// Manipulador de evento de clique do botão
whatsappButton.addEventListener('click',function(){
    // Crie o URL do WhatsApp com o número de telefone
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefone}`;
    // Redirecione o usuário para o WhatsApp
    window.location.href = url;
});

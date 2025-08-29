// Função para calcular a quantidade de tinta necessária
function calcularTinta() {
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const portas = parseInt(document.getElementById('portas').value);
    const janelas = parseInt(document.getElementById('janelas').value);
    const demao = parseInt(document.getElementById('demao').value);
    
    if (!comprimento || !altura) {
        alert("Por favor, preencha pelo menos o comprimento e a altura da parede.");
        return;
    }
    
    // Cálculo da área total
    let areaTotal = comprimento * altura;
    
    // Subtrair áreas de portas e janelas (estimativa)
    areaTotal -= (portas * 1.6); // Porta padrão ~1.6m²
    areaTotal -= (janelas * 1.2); // Janela média ~1.2m²
    
    // Considerar demãos
    areaTotal *= demao;
    
    // Rendimento médio da tinta: 1L para 6m² por demão
    const litrosNecessarios = areaTotal / 6;
    
    // Arredondar para cima
    const latas18L = Math.ceil(litrosNecessarios / 18);
    const latas3_6L = Math.ceil(litrosNecessarios / 3.6);
    
    // Exibir resultado
    document.getElementById('quantidade-tinta').textContent = 
        `Quantidade necessária: ${litrosNecessarios.toFixed(2)} litros`;
    
    document.getElementById('latas').textContent = 
        `Opções de compra: ${latas18L} lata(s) de 18L ou ${latas3_6L} lata(s) de 3,6L`;
    
    document.getElementById('resultado').style.display = 'block';
}

// Função para enviar mensagem de contato
function enviarMensagem() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if (!nome || !email) {
        alert("Por favor, preencha pelo menos seu nome e e-mail.");
        return;
    }
    
    alert("Obrigado por sua mensagem! Em breve entraremos em contato.");
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('mensagem').value = "";
}

// Adicionar evento de scroll suave para os links de navegação
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links a');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }
});
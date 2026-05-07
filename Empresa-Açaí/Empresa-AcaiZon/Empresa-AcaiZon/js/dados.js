// Dados do cardápio. Edite para alterar os itens.
const ITENS = [
  { nome: "Açaí - 300ml",      descricao: "Açaí cremoso na tigela.",        preco: "R$ 10,00", imagem: "../img/acai1.jpeg" },
  { nome: "Açaí - 500ml",      descricao: "Para quem tem mais fome.",        preco: "R$ 15,00", imagem: "../img/acai3.jpeg" },
  { nome: "Açaí - 500ml Tradicional",      descricao: "Açaí grande para compartilhar.", preco: "R$ 20,00", imagem: "../img/acai4.jpeg" },
  { nome: "Tigelão - 1L", descricao: "Vitamina gelada de banana.",      preco: "R$ 25,00", imagem: "../img/acai5.jpeg" }
];

// Descontos por tipo de cliente
const DESCONTOS = {
  "N": 0,     // Comum
  "P": 0.10,  // Preferencial
  "V": 0.15   // VIP
};

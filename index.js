const Modal = {
  /*open() {
    // Abrir Modal
    // Adicionar a class active do Modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    // fechar o modal
    // remover a class active do modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },*/

  verifyOpenClose() {
    document.querySelector(".modal-overlay").classList.toggle("active");
  },
};

const transaction = [
  {
    id: 1,
    description: "luz",
    amount: -50000,
    date: "04/02/2021",
  },
  {
    id: 2,
    description: "Website",
    amount: 500000,
  },
  {
    id: 3,
    description: "internet",
    amount: -20000,
  },
];

const Transaction = {
  income() {
    // somar as entradas
  },
  expenses() {
    // somar as saídas
  },
  total() {
    // entradas - saídas
  },
};

const DOM = {
  innerHTMLTransaction() {
    const html = `
      <tr>
        <td class="description">Luz</td>
        <td class="expense">- R$ 500,00</td>
        <td class="date">23/01/2021</td>
        <td>
          <img src="./assets/minus.svg" alt="Remover transação" />
        </td>
      </tr>
    `
  },
};

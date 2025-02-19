const pageForm = document.getElementById("newForm");
pageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Creo Card To do");
  const toDo = document.getElementById("toDo");
  const toDoList = {
    toDo: toDo.value,
  };
  console.log("lista", toDoList);
  const card = document.createElement("div");
  card.classList.add("cardToDo");
  card.innerHTML = `<p onclick="done()" id = "inlinep">${toDoList.toDo}
  <button onclick="deletecard()">ELIMINA</button>
  `;
  const conteiner = document.getElementById("savedList");
  conteiner.appendChild(card);
  toDo.value = "";
});
const done = function () {
  const par = document.getElementById("inlinep");
  par.classList.add("pline");
};

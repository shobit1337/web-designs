const chipInputRef = document.getElementById("chip-input");
const chipsInputRef = document.getElementById("chips-input");
// TODO: Add Remove chip functionality
// const closeChipsRef = document.getElementsByClassName("fa-times-circle");

const handleAddChip = (e) => {
  if (e.keyCode === 13 && chipInputRef.value !== "") {
    let chipName = chipInputRef.value;
    let chip = document.createElement("span");
    chip.setAttribute("class", "chip");
    chip.innerHTML = `<i class="fas fa-circle"></i> ${chipName} <i class="fas fa-times-circle"></i>`;
    chipsInputRef.appendChild(chip);
    chipInputRef.value = "";
  }
};

// const handleRemoveChip = (e) => {
//   console.log(e);
// };

// console.log(closeChipsRef);
// closeChipsRef.forEach((element) => {
//   element.addEventListener("click", handleRemoveChip);
// });

chipInputRef.addEventListener("keypress", handleAddChip);

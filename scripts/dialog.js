const saveButton = document.querySelector(".save-button");
const memoryDialog = document.querySelector(".memory-dialog");
const closeDialogButton = memoryDialog.querySelector(".memory-dialog__button");

saveButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (!memoryDialog.open) {
    memoryDialog.showModal();
  }
});

closeDialogButton.addEventListener("click", (event) => {
  event.preventDefault();
  memoryDialog.close();
});

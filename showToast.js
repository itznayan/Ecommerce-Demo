export function showToast(operation, id) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  
    
    if (operation === "add") {
    toast.textContent = `Product with ID${id} has beem added.`;
  } else {
    toast.textContent = `Product with ID${id} has beem deleted.`;
  }

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2000);
}

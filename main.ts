const button = document.querySelector<HTMLButtonElement>("#hello");

button?.addEventListener("click", () => {
  alert("Hello from TypeScript");
});

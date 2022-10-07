export function getLinkToClipboard(): void {
  const el = document.createElement("input");
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

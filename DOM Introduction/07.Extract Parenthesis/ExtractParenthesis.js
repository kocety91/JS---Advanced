function extract(content) {
  let element = document.getElementById(content);
  return element.textContent.split(/\(([^)]+)\)/).filter( (x,y) => y % 2 != 0).join(';');
}
function solve() {
  let creator = document.querySelector("#creator");
  let title = document.querySelector("#title");
  let category = document.querySelector("#category");
  let content = document.querySelector("#content");
  let section = document.querySelector(".site-content > main > section > h2");
  let archive = document.querySelector(".archive-section > ol");

  document.querySelector(".btn.create").addEventListener("click", function (e) {
    e.preventDefault();

    let article = document.createElement("article");
    let h1 = document.createElement("h1");
    h1.textContent = title.value;
    let p = document.createElement("p");
    p.textContent = `Category:`;
    let strong = document.createElement("strong");
    strong.textContent = category.value;
    p.appendChild(strong);
    let pCreator = document.createElement("p");
    pCreator.textContent = `Creator:`;
    let strong2 = document.createElement("strong");
    strong2.textContent = creator.value;
    pCreator.appendChild(strong2);
    let pContent = document.createElement("p");
    pContent.textContent = content.value;

    let div = document.createElement("div");
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "Delete";

    let archiveBtn = document.createElement("button");
    archiveBtn.classList.add("btn");
    archiveBtn.classList.add("archive");
    archiveBtn.textContent = "Archive";

    div.appendChild(deleteBtn);
    div.appendChild(archiveBtn);

    article.appendChild(h1);
    article.appendChild(p);
    article.appendChild(pCreator);
    article.appendChild(pContent);
    article.appendChild(div);
    section.appendChild(article);

    creator.value = "";
    title.value = "";
    category.value = "";
    content.value = "";

    archiveBtn.addEventListener("click", function (e) {
      let archiveLi = document.createElement("li");
      archiveLi.textContent = h1.textContent;
      archive.appendChild(archiveLi);

      h1.textContent = "";
      p.textContent = "";
      pCreator.textContent = "";
      pContent.textContent = "";
      div.textContent = "";
    });

    deleteBtn.addEventListener("click", function (e) {
      article.textContent = "";
    });
  });
}

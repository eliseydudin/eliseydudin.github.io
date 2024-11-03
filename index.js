const links = [
  {
    text: "also check out luna clippa!",
    href: "https://lunaclippa.bandcamp.com/album/shall-we",
  },
  { text: "also check out nlo!", href: "https://nlolnlolnlo.neocities.org" },
  {
    text: "also check out disa!",
    href: "https://somepeoplecallmedisa.github.io/",
  },
  {
    text: "also check out webbop!",
    href: "https://www.dempah.com/bigsearch/",
  },
];

const el = document.getElementById("header-check-out");
const link = links[Math.floor(Math.random() * links.length)];

el.textContent = link.text;
el.setAttribute("href", link.href);

function create_article(title, flavour_text) {
  const elem = document.createElement("div");
  elem.className = "article";

  const new_title = document.createElement("h1");
  new_title.textContent = title;

  const new_text = document.createElement("div");
  new_text.textContent = flavour_text;

  const new_link = document.createElement("a");
  new_link.href = title;
  new_link.textContent = "read";

  elem.appendChild(new_title);
  elem.appendChild(new_text);
  elem.appendChild(new_link);

  document.getElementById("articles").appendChild(elem);
}

fetch(
  "https://raw.githubusercontent.com/eliseydudin/github-articles/refs/heads/main/articles-map.json"
)
  .then((resp) => resp.text())
  .then((text) => {
    console.log(text);
    const obj = JSON.parse(text);

    if (Object.keys(obj).length === 0) {
      return;
    }

    const articles = obj.articles;

    for (let article of articles) {
      create_article(article.title, article.flavour_text);
    }
  })
  .catch((error) => console.error("Error fetching articles:", error));

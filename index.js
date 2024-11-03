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

/* =====================================================================
   SEUS DADOS — edite só esta parte para atualizar o site
   ===================================================================== */

// Links de contato. Deixe "" (vazio) para esconder o botão.
const CONTATOS = {
  email: "gustavovieira0519@gmail.com",
  whatsapp: "5555992150198", // só números: 55 (Brasil) + DDD + número
  instagram: "https://instagram.com/eaiivieira",
  github: "",     // ex.: "https://github.com/seu_usuario"
  linkedin: "",   // ex.: "https://linkedin.com/in/seu_usuario"
};

// Projetos. Para adicionar um novo, copie um bloco { ... } e mude os campos.
//   status:    "real" (em uso), "dev" (em desenvolvimento) ou "pronto"
//   categoria: usada nos filtros (ex.: "Desktop", "Web", "Python")
//   imagem:    caminho de um print em assets/ (ex.: "assets/painel.png"); vazio usa o emoji
//   links:     botões do card; deixe [] se não tiver
const PROJETOS = [
  {
    titulo: "DivertidaMente Painel",
    descricao:
      "Aplicativo desktop para controlar sessões de tempo pago em brinquedos infláveis. " +
      "Alarmes sonoros, pausa e retomada de tempo e relatórios financeiros automáticos. " +
      "Hoje em uso real em um negócio de eventos.",
    tecnologias: ["Electron", "JavaScript", "HTML", "CSS"],
    categoria: "Desktop",
    status: "real",
    emoji: "🎈",
    cor: ["#7c5cff", "#ec4899"],
    imagem: "",
    links: [],
  },
  {
    titulo: "Sea Punk: Combate CLI",
    descricao:
      "Jogo de combate por turnos que roda no terminal. Projeto que estou usando para " +
      "praticar lógica de programação e Python.",
    tecnologias: ["Python", "Lógica de programação"],
    categoria: "Python",
    status: "dev",
    emoji: "⚔️",
    cor: ["#0ea5e9", "#22d3ee"],
    imagem: "",
    links: [],
  },
  {
    titulo: "Este portfólio",
    descricao:
      "Site pessoal feito do zero, responsivo para celular, para reunir meus projetos e " +
      "facilitar o contato com clientes.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    categoria: "Web",
    status: "pronto",
    emoji: "🌐",
    cor: ["#22c55e", "#14b8a6"],
    imagem: "",
    links: [],
  },
];

/* =====================================================================
   DAQUI PARA BAIXO É O FUNCIONAMENTO DO SITE
   ===================================================================== */

const STATUS = {
  real: { texto: "● Em uso real", classe: "status--real" },
  dev: { texto: "● Em desenvolvimento", classe: "status--dev" },
  pronto: { texto: "● Concluído", classe: "status--pronto" },
};

const ICONES = {
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13.1H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
};

function montarProjetos() {
  const grade = document.querySelector(".grade-projetos");
  grade.innerHTML = PROJETOS.map((p) => {
    const status = STATUS[p.status] || STATUS.pronto;
    const capa = p.imagem
      ? `<img src="${p.imagem}" alt="Captura de tela do projeto ${p.titulo}" loading="lazy">`
      : `<span aria-hidden="true">${p.emoji}</span>`;
    const links = p.links
      .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.texto} →</a>`)
      .join("");

    return `
      <article class="projeto revelar" data-categoria="${p.categoria}">
        <div class="projeto__capa" style="background: linear-gradient(135deg, ${p.cor[0]}, ${p.cor[1]})">
          ${capa}
          <span class="projeto__status ${status.classe}">${status.texto}</span>
        </div>
        <div class="projeto__corpo">
          <h3>${p.titulo}</h3>
          <p>${p.descricao}</p>
          <ul class="chips">${p.tecnologias.map((t) => `<li>${t}</li>`).join("")}</ul>
          ${links ? `<div class="projeto__links">${links}</div>` : ""}
        </div>
      </article>`;
  }).join("");

  // Filtros por categoria
  const categorias = ["Todos", ...new Set(PROJETOS.map((p) => p.categoria))];
  const filtros = document.querySelector(".filtros");
  filtros.innerHTML = categorias
    .map((c, i) => `<button class="filtro${i === 0 ? " ativo" : ""}" data-filtro="${c}">${c}</button>`)
    .join("");

  filtros.addEventListener("click", (e) => {
    const botao = e.target.closest(".filtro");
    if (!botao) return;
    filtros.querySelectorAll(".filtro").forEach((b) => b.classList.toggle("ativo", b === botao));
    const escolhido = botao.dataset.filtro;
    grade.querySelectorAll(".projeto").forEach((card) => {
      const mostrar = escolhido === "Todos" || card.dataset.categoria === escolhido;
      card.classList.toggle("escondido", !mostrar);
    });
  });
}

function montarContatos() {
  const destinos = {
    email: { texto: "E-mail", url: (v) => `mailto:${v}` },
    whatsapp: {
      texto: "WhatsApp",
      url: (v) => `https://wa.me/${v}?text=${encodeURIComponent("Olá Gustavo! Vi seu portfólio e gostaria de conversar.")}`,
    },
    instagram: { texto: "Instagram", url: (v) => v },
    github: { texto: "GitHub", url: (v) => v },
    linkedin: { texto: "LinkedIn", url: (v) => v },
  };

  const html = Object.entries(CONTATOS)
    .filter(([, valor]) => valor)
    .map(([chave, valor], i) => {
      const d = destinos[chave];
      const classe = i === 0 ? "btn--primario" : "btn--secundario";
      return `<a class="btn ${classe}" href="${d.url(valor)}" target="_blank" rel="noopener">${ICONES[chave]} ${d.texto}</a>`;
    })
    .join("");

  document.querySelector(".contato__links").innerHTML = html;
}

function menuCelular() {
  const botao = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  const alternar = (abrir) => {
    nav.classList.toggle("aberto", abrir);
    botao.setAttribute("aria-expanded", abrir);
  };
  botao.addEventListener("click", () => alternar(!nav.classList.contains("aberto")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => alternar(false)));
}

function efeitosDeRolagem() {
  const topo = document.querySelector(".topo");
  const aoRolar = () => topo.classList.toggle("rolou", window.scrollY > 10);
  window.addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visivel");
          observador.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".revelar").forEach((el) => observador.observe(el));
}

montarProjetos();
montarContatos();
menuCelular();
efeitosDeRolagem();
document.getElementById("ano").textContent = new Date().getFullYear();
document.getElementById("total-projetos").textContent = PROJETOS.length;

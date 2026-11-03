/* ==========================================================================
   NOKRA — i18n dictionary
   4 languages: pt (default) · en · it · es
   Every language MUST mirror the exact same key structure as `pt`.
   app.js runs a structural validation on load and warns about any gap.
   ========================================================================== */

/* --------------------------------------------------------------------------
   BRAND — single source of truth. Rename the team here and the whole site
   (header, footer wordmark, titles, simulator URL) follows.
   -------------------------------------------------------------------------- */
window.BRAND = {
  name: "Nokra",               // <title>, footer © line, aria labels
  lockup: ["nokra"],           // header wordmark (a 2nd item would render lighter, as a two-word logo)
  wordmark: "NOKRA",           // giant outlined footer type, preceded by the orange //
  slug: "nokra"                // simulator fake URL
};
// The // symbol itself is inline SVG in index.html (header) and favicon.svg.

window.TRANSLATIONS = {
  "pt": {
    "langName": "Português (BR)",
    "meta": {
      "title": "{brand} — Desenvolvimento Web, Sistemas e Automação Python",
      "description": "Sites, sistemas e automações sob medida. Estúdio de software de Santa Rita do Passa Quatro/SP."
    },
    "a11y": {
      "lang": "Selecionar idioma",
      "menu": "Abrir menu de navegação",
      "range": "Controle de compilação do wireframe",
      "tabs": "Abas do simulador"
    },
    "status": {
      "status": "STATUS",
      "statusValue": "DISPONÍVEL PARA NOVOS PROJETOS",
      "local": "HORA LOCAL"
    },
    "nav": {
      "services": "Serviços",
      "projects": "Projetos",
      "sim": "Teste ao vivo",
      "about": "Sobre",
      "cta": "Fale com a gente"
    },
    "hero": {
      "line1": "Sites que <em>vendem.</em>",
      "line2": "Sistemas que <em>organizam.</em>",
      "line3": "Automações que <em>trabalham por você.</em>",
      "l1": "INTERFACE · WEB",
      "l2": "SISTEMA · DADOS",
      "l3": "ROTINA · PYTHON",
      "fig": "FIG. 01 — UMA INFRAESTRUTURA, TRÊS CAMADAS",
      "index": "[01] — ESTÚDIO DE SOFTWARE",
      "sub": "Sites, sistemas e automações sob medida para empresas de todo o Brasil.",
      "ctaPrimary": "Ver projetos",
      "ctaSecondary": "Fale com a gente",
      "scroll": "Role para ver mais"
    },
    "marquee": [
      "Sites",
      "Sistemas",
      "Automação",
      "Design"
    ],
    "services": {
      "index": "[02] — SERVIÇOS",
      "title": "Do site ao <em>sistema.</em>",
      "items": [
        {
          "t": "Sites e landing pages",
          "d": "Páginas que transformam visita em cliente."
        },
        {
          "t": "Sistemas sob medida",
          "d": "Estoque, vendas e cadastros num só lugar."
        },
        {
          "t": "Automação com Python",
          "d": "Planilhas e relatórios que se fazem sozinhos."
        },
        {
          "t": "Design de interface",
          "d": "UI/UX, identidade visual e protótipos."
        }
      ]
    },
    "projects": {
      "index": "[03] — PROJETOS",
      "title": "Projetos.",
      "intro": "Trabalhos publicados. Clique e veja funcionando.",
      "by": "por",
      "links": {
        "site": "Ver site",
        "behance": "Ver no Behance",
        "code": "Ver código"
      },
      "items": [
        {
          "title": "K-Byte",
          "cat": "Sistema · Marketplace",
          "desc": "Liga lojas de tecnologia a clientes, com painel completo para o lojista."
        },
        {
          "title": "Iron Park",
          "cat": "Site · Academia",
          "desc": "Leva o visitante da primeira impressão até a matrícula."
        },
        {
          "title": "Rivlo",
          "cat": "Landing page · Fitness com IA",
          "desc": "Apresenta uma plataforma de treinos gerados por IA."
        },
        {
          "title": "Aurora Contábil",
          "cat": "Site · Contabilidade",
          "desc": "Passa confiança e leva o cliente direto pro WhatsApp."
        },
        {
          "title": "La Forno & Lumina",
          "cat": "Sites · Gastronomia",
          "desc": "Um para pedir pizza, outro para reservar mesa."
        },
        {
          "title": "ComunaCheck",
          "cat": "Automação · Python + IA",
          "desc": "Filtra notícias regionais e vagas de emprego sozinho."
        }
      ]
    },
    "sim": {
      "index": "[04] — TESTE AO VIVO",
      "title": "Teste ao vivo.",
      "intro": "Três mini demonstrações rodando no seu navegador.",
      "live": "AO VIVO",
      "tabs": {
        "web": "Web & Landing Pages",
        "stock": "Sistemas & Estoque",
        "py": "Automação Python"
      },
      "web": {
        "hint": "Arraste o controle para compilar o wireframe em interface",
        "wire": "WIREFRAME · FIGMA",
        "ui": "INTERFACE · HTML/CSS/TAILWIND",
        "desktop": "Desktop",
        "mobile": "Mobile",
        "brand": "Aurora Odonto",
        "nav1": "Serviços",
        "nav2": "Equipe",
        "nav3": "Contato",
        "heroTitle": "Agende sua avaliação em 30 segundos.",
        "heroText": "Atendimento humanizado, horários flexíveis e confirmação imediata pelo WhatsApp.",
        "cta": "Agendar agora",
        "card1": "Implantes",
        "card2": "Ortodontia",
        "card3": "Clareamento",
        "status": "build ok · responsivo · acessível",
        "figma": "frame: Hero / Auto Layout 24 · Figma"
      },
      "stock": {
        "title": "Painel de Estoque — v1.0",
        "kItems": "Itens em estoque",
        "kValue": "Valor do inventário",
        "kSales": "Vendas hoje",
        "kLow": "Alertas de baixa",
        "fName": "Produto",
        "fQty": "Qtd.",
        "fPrice": "Preço",
        "add": "Cadastrar",
        "cProduct": "Produto",
        "cQty": "Qtd.",
        "cPrice": "Preço",
        "cAct": "Ação",
        "sell": "Vender",
        "restock": "Repor",
        "low": "BAIXO",
        "ok": "OK",
        "logReady": "Conectado a mysql://estoque — pronto.",
        "logInsert": "INSERT INTO produtos",
        "logSale": "UPDATE estoque SET qtd = qtd - 1 · venda registrada",
        "logRestock": "UPDATE estoque SET qtd = qtd + 5 · reposição",
        "invalid": "Preencha produto, quantidade e preço válidos.",
        "seed": [
          "Tela iPhone 11",
          "Bateria Galaxy S21",
          "Conector USB-C",
          "Película 3D Privacidade"
        ]
      },
      "py": {
        "run": "Executar Rotina",
        "running": "Executando…",
        "rerun": "Executar novamente",
        "raw": "ENTRADA · planilha bruta",
        "clean": "SAÍDA · relatório limpo",
        "idle": "Aguardando execução. Clique em “Executar Rotina”.",
        "waiting": "aguardando dados…",
        "colChannel": "Canal",
        "colOrders": "Pedidos",
        "colRevenue": "Receita",
        "total": "Total",
        "issues": {
          "dup": "DUPLICADO",
          "missing": "VAZIO",
          "format": "FORMATO"
        },
        "header": "data;cliente;canal;valor",
        "file": "vendas_brutas.xlsx",
        "report": "relatorio_limpo.xlsx",
        "channels": [
          "Marketplace",
          "Loja física",
          "E-commerce",
          "WhatsApp"
        ],
        "logs": [
          "$ python rotina_relatorio.py --input vendas_brutas.xlsx",
          "[1/5] Lendo planilha bruta… 1.284 linhas encontradas",
          "[2/5] Removendo duplicatas… 37 registros descartados",
          "[3/5] Normalizando datas, valores e nomes…",
          "[4/5] Agrupando por canal de venda…",
          "[5/5] Exportando relatorio_limpo.xlsx + dashboard.pdf",
          "✓ Rotina concluída em 0,84 s — 1.247 linhas válidas"
        ]
      }
    },
    "about": {
      "index": "[05] — SOBRE",
      "title": "Quem está por trás.",
      "shared": "Ciência da Computação — UNIP · Santa Rita do Passa Quatro/SP",
      "k": {
        "role": "SISTEMAS · DADOS · INFRA",
        "text": "Implanta sistemas de vendas e estoque e cuida da infraestrutura."
      },
      "g": {
        "role": "FRONT-END · UI/UX · PYTHON",
        "text": "Cria interfaces, landing pages e automações em Python."
      },
      "portfolio": "Portfólio"
    },
    "contact": {
      "index": "[06] — CONTATO",
      "title": "Vamos tirar sua ideia do papel?",
      "intro": "Escolha o tipo de projeto e chame no WhatsApp. Proposta sob medida e sem compromisso.",
      "types": {
        "site": "Site",
        "landing": "Landing page",
        "system": "Sistema",
        "automation": "Automação"
      },
      "waK": "Falar com Kauã",
      "waG": "Falar com Gustavo",
      "email": "Mandar e-mail",
      "msg": "Olá, Kauã e Gustavo! Vim pelo site da {brand} e quero conversar sobre um projeto de {type}.",
      "subject": "Projeto de {type} — via site"
    },
    "footer": {
      "rights": "© 2026 {brand}.",
      "made": "Feito à mão em Santa Rita do Passa Quatro/SP.",
      "backTop": "Voltar ao topo"
    }
  },
  "en": {
    "langName": "English",
    "meta": {
      "title": "{brand} — Custom Web Engineering, Systems & Python Automation",
      "description": "Custom websites, systems and automation. A software studio from Brazil."
    },
    "a11y": {
      "lang": "Select language",
      "menu": "Open navigation menu",
      "range": "Wireframe compile control",
      "tabs": "Simulator tabs"
    },
    "status": {
      "status": "STATUS",
      "statusValue": "AVAILABLE FOR NEW PROJECTS",
      "local": "LOCAL TIME"
    },
    "nav": {
      "services": "Services",
      "projects": "Projects",
      "sim": "Try it live",
      "about": "About",
      "cta": "Talk to us"
    },
    "hero": {
      "line1": "Websites that <em>convert.</em>",
      "line2": "Systems that <em>organize.</em>",
      "line3": "Automations that <em>work for you.</em>",
      "l1": "INTERFACE · WEB",
      "l2": "SYSTEM · DATA",
      "l3": "ROUTINE · PYTHON",
      "fig": "FIG. 01 — ONE INFRASTRUCTURE, THREE LAYERS",
      "index": "[01] — SOFTWARE STUDIO",
      "sub": "Custom websites, systems and automation for businesses of any size.",
      "ctaPrimary": "See projects",
      "ctaSecondary": "Talk to us",
      "scroll": "Scroll to see more"
    },
    "marquee": [
      "Websites",
      "Systems",
      "Automation",
      "Design"
    ],
    "services": {
      "index": "[02] — SERVICES",
      "title": "From website to <em>system.</em>",
      "items": [
        {
          "t": "Websites and landing pages",
          "d": "Pages that turn visitors into customers."
        },
        {
          "t": "Custom systems",
          "d": "Inventory, sales and records in one place."
        },
        {
          "t": "Python automation",
          "d": "Spreadsheets and reports that build themselves."
        },
        {
          "t": "Interface design",
          "d": "UI/UX, visual identity and prototypes."
        }
      ]
    },
    "projects": {
      "index": "[03] — PROJECTS",
      "title": "Projects.",
      "intro": "Published work. Click and see it running.",
      "by": "by",
      "links": {
        "site": "Live site",
        "behance": "View on Behance",
        "code": "View code"
      },
      "items": [
        {
          "title": "K-Byte",
          "cat": "System · Marketplace",
          "desc": "Connects tech stores with customers, with a full merchant dashboard."
        },
        {
          "title": "Iron Park",
          "cat": "Website · Gym",
          "desc": "Takes visitors from first impression to sign-up."
        },
        {
          "title": "Rivlo",
          "cat": "Landing page · AI fitness",
          "desc": "Presents a platform for AI-generated workouts."
        },
        {
          "title": "Aurora Contábil",
          "cat": "Website · Accounting",
          "desc": "Builds trust and sends clients straight to WhatsApp."
        },
        {
          "title": "La Forno & Lumina",
          "cat": "Websites · Food",
          "desc": "One to order pizza, one to book a table."
        },
        {
          "title": "ComunaCheck",
          "cat": "Automation · Python + AI",
          "desc": "Filters local news and job openings on its own."
        }
      ]
    },
    "sim": {
      "index": "[04] — TRY IT LIVE",
      "title": "Try it live.",
      "intro": "Three mini demos running right in your browser.",
      "live": "LIVE",
      "tabs": {
        "web": "Web & Landing Pages",
        "stock": "Systems & Inventory",
        "py": "Python Automation"
      },
      "web": {
        "hint": "Drag the handle to compile the wireframe into a live interface",
        "wire": "WIREFRAME · FIGMA",
        "ui": "INTERFACE · HTML/CSS/TAILWIND",
        "desktop": "Desktop",
        "mobile": "Mobile",
        "brand": "Aurora Dental",
        "nav1": "Services",
        "nav2": "Team",
        "nav3": "Contact",
        "heroTitle": "Book your check-up in 30 seconds.",
        "heroText": "Caring service, flexible hours and instant confirmation on WhatsApp.",
        "cta": "Book now",
        "card1": "Implants",
        "card2": "Orthodontics",
        "card3": "Whitening",
        "status": "build ok · responsive · accessible",
        "figma": "frame: Hero / Auto Layout 24 · Figma"
      },
      "stock": {
        "title": "Inventory Dashboard — v1.0",
        "kItems": "Units in stock",
        "kValue": "Inventory value",
        "kSales": "Sales today",
        "kLow": "Low-stock alerts",
        "fName": "Product",
        "fQty": "Qty",
        "fPrice": "Price",
        "add": "Add",
        "cProduct": "Product",
        "cQty": "Qty",
        "cPrice": "Price",
        "cAct": "Action",
        "sell": "Sell",
        "restock": "Restock",
        "low": "LOW",
        "ok": "OK",
        "logReady": "Connected to mysql://inventory — ready.",
        "logInsert": "INSERT INTO products",
        "logSale": "UPDATE inventory SET qty = qty - 1 · sale recorded",
        "logRestock": "UPDATE inventory SET qty = qty + 5 · restocked",
        "invalid": "Please enter a valid product, quantity and price.",
        "seed": [
          "iPhone 11 Screen",
          "Galaxy S21 Battery",
          "USB-C Connector",
          "3D Privacy Screen Protector"
        ]
      },
      "py": {
        "run": "Run Routine",
        "running": "Running…",
        "rerun": "Run again",
        "raw": "INPUT · raw spreadsheet",
        "clean": "OUTPUT · clean report",
        "idle": "Waiting to run. Click “Run Routine”.",
        "waiting": "waiting for data…",
        "colChannel": "Channel",
        "colOrders": "Orders",
        "colRevenue": "Revenue",
        "total": "Total",
        "issues": {
          "dup": "DUPLICATE",
          "missing": "EMPTY",
          "format": "FORMAT"
        },
        "header": "date;customer;channel;amount",
        "file": "raw_sales.xlsx",
        "report": "clean_report.xlsx",
        "channels": [
          "Marketplace",
          "Physical store",
          "E-commerce",
          "WhatsApp"
        ],
        "logs": [
          "$ python report_routine.py --input raw_sales.xlsx",
          "[1/5] Reading raw spreadsheet… 1,284 rows found",
          "[2/5] Removing duplicates… 37 records dropped",
          "[3/5] Normalizing dates, amounts and names…",
          "[4/5] Grouping by sales channel…",
          "[5/5] Exporting clean_report.xlsx + dashboard.pdf",
          "✓ Routine finished in 0.84 s — 1,247 valid rows"
        ]
      }
    },
    "about": {
      "index": "[05] — ABOUT",
      "title": "Who's behind it.",
      "shared": "Computer Science — UNIP · São Paulo, Brazil",
      "k": {
        "role": "SYSTEMS · DATA · INFRA",
        "text": "Rolls out sales and inventory systems and runs the infrastructure."
      },
      "g": {
        "role": "FRONT-END · UI/UX · PYTHON",
        "text": "Builds interfaces, landing pages and Python automation."
      },
      "portfolio": "Portfolio"
    },
    "contact": {
      "index": "[06] — CONTACT",
      "title": "Let's get your idea off the ground?",
      "intro": "Pick the type of project and message us on WhatsApp. Tailored proposal, no strings attached.",
      "types": {
        "site": "Website",
        "landing": "Landing page",
        "system": "System",
        "automation": "Automation"
      },
      "waK": "Talk to Kauã",
      "waG": "Talk to Gustavo",
      "email": "Send an e-mail",
      "msg": "Hi Kauã and Gustavo! I found {brand}'s website and I'd like to talk about a {type} project.",
      "subject": "{type} project — via website"
    },
    "footer": {
      "rights": "© 2026 {brand}.",
      "made": "Handmade in São Paulo, Brazil.",
      "backTop": "Back to top"
    }
  },
  "it": {
    "langName": "Italiano",
    "meta": {
      "title": "{brand} — Sviluppo Web, Sistemi Gestionali & Automazione Python",
      "description": "Siti web, sistemi e automazioni su misura. Studio di software dal Brasile."
    },
    "a11y": {
      "lang": "Seleziona la lingua",
      "menu": "Apri il menu di navigazione",
      "range": "Controllo di compilazione del wireframe",
      "tabs": "Schede del simulatore"
    },
    "status": {
      "status": "STATO",
      "statusValue": "DISPONIBILI PER NUOVI PROGETTI",
      "local": "ORA LOCALE"
    },
    "nav": {
      "services": "Servizi",
      "projects": "Progetti",
      "sim": "Prova dal vivo",
      "about": "Chi siamo",
      "cta": "Parliamone"
    },
    "hero": {
      "line1": "Siti web che <em>convertono.</em>",
      "line2": "Sistemi su misura che <em>organizzano.</em>",
      "line3": "Automazioni che <em>lavorano per te.</em>",
      "l1": "INTERFACCIA · WEB",
      "l2": "SISTEMA · DATI",
      "l3": "ROUTINE · PYTHON",
      "fig": "FIG. 01 — UN'INFRASTRUTTURA, TRE LIVELLI",
      "index": "[01] — STUDIO DI SOFTWARE",
      "sub": "Siti web, sistemi e automazioni su misura per aziende di ogni dimensione.",
      "ctaPrimary": "Vedi i progetti",
      "ctaSecondary": "Parliamone",
      "scroll": "Scorri per vedere di più"
    },
    "marquee": [
      "Siti web",
      "Sistemi",
      "Automazione",
      "Design"
    ],
    "services": {
      "index": "[02] — SERVIZI",
      "title": "Dal sito al <em>gestionale.</em>",
      "items": [
        {
          "t": "Siti web e landing page",
          "d": "Pagine che trasformano le visite in clienti."
        },
        {
          "t": "Sistemi su misura",
          "d": "Magazzino, vendite e anagrafiche in un unico posto."
        },
        {
          "t": "Automazione con Python",
          "d": "Fogli e report che si compilano da soli."
        },
        {
          "t": "Design di interfacce",
          "d": "UI/UX, identità visiva e prototipi."
        }
      ]
    },
    "projects": {
      "index": "[03] — PROGETTI",
      "title": "Progetti.",
      "intro": "Lavori pubblicati. Clicca e guardali funzionare.",
      "by": "di",
      "links": {
        "site": "Vedi il sito",
        "behance": "Vedi su Behance",
        "code": "Vedi il codice"
      },
      "items": [
        {
          "title": "K-Byte",
          "cat": "Sistema · Marketplace",
          "desc": "Collega negozi di tecnologia e clienti, con un pannello completo per il commerciante."
        },
        {
          "title": "Iron Park",
          "cat": "Sito · Palestra",
          "desc": "Accompagna il visitatore dalla prima impressione all'iscrizione."
        },
        {
          "title": "Rivlo",
          "cat": "Landing page · Fitness con IA",
          "desc": "Presenta una piattaforma di allenamenti generati dall'IA."
        },
        {
          "title": "Aurora Contábil",
          "cat": "Sito · Commercialisti",
          "desc": "Trasmette fiducia e porta il cliente dritto su WhatsApp."
        },
        {
          "title": "La Forno & Lumina",
          "cat": "Siti · Ristorazione",
          "desc": "Uno per ordinare la pizza, l'altro per prenotare il tavolo."
        },
        {
          "title": "ComunaCheck",
          "cat": "Automazione · Python + IA",
          "desc": "Filtra da solo notizie locali e offerte di lavoro."
        }
      ]
    },
    "sim": {
      "index": "[04] — PROVA DAL VIVO",
      "title": "Prova dal vivo.",
      "intro": "Tre mini demo che girano direttamente nel tuo browser.",
      "live": "DAL VIVO",
      "tabs": {
        "web": "Web & Landing Page",
        "stock": "Gestionali & Magazzino",
        "py": "Automazione Python"
      },
      "web": {
        "hint": "Trascina il cursore per compilare il wireframe in interfaccia",
        "wire": "WIREFRAME · FIGMA",
        "ui": "INTERFACCIA · HTML/CSS/TAILWIND",
        "desktop": "Desktop",
        "mobile": "Mobile",
        "brand": "Aurora Dental",
        "nav1": "Servizi",
        "nav2": "Team",
        "nav3": "Contatti",
        "heroTitle": "Prenota la tua visita in 30 secondi.",
        "heroText": "Assistenza attenta, orari flessibili e conferma immediata su WhatsApp.",
        "cta": "Prenota ora",
        "card1": "Implantologia",
        "card2": "Ortodonzia",
        "card3": "Sbiancamento",
        "status": "build ok · responsive · accessibile",
        "figma": "frame: Hero / Auto Layout 24 · Figma"
      },
      "stock": {
        "title": "Pannello Magazzino — v1.0",
        "kItems": "Articoli in giacenza",
        "kValue": "Valore inventario",
        "kSales": "Vendite oggi",
        "kLow": "Scorte basse",
        "fName": "Prodotto",
        "fQty": "Q.tà",
        "fPrice": "Prezzo",
        "add": "Registra",
        "cProduct": "Prodotto",
        "cQty": "Q.tà",
        "cPrice": "Prezzo",
        "cAct": "Azione",
        "sell": "Vendi",
        "restock": "Riordina",
        "low": "BASSO",
        "ok": "OK",
        "logReady": "Connesso a mysql://magazzino — pronto.",
        "logInsert": "INSERT INTO prodotti",
        "logSale": "UPDATE magazzino SET qta = qta - 1 · vendita registrata",
        "logRestock": "UPDATE magazzino SET qta = qta + 5 · riassortimento",
        "invalid": "Inserisci prodotto, quantità e prezzo validi.",
        "seed": [
          "Display iPhone 11",
          "Batteria Galaxy S21",
          "Connettore USB-C",
          "Pellicola 3D Privacy"
        ]
      },
      "py": {
        "run": "Esegui Routine",
        "running": "In esecuzione…",
        "rerun": "Esegui di nuovo",
        "raw": "INPUT · foglio grezzo",
        "clean": "OUTPUT · report pulito",
        "idle": "In attesa di esecuzione. Clicca su “Esegui Routine”.",
        "waiting": "in attesa dei dati…",
        "colChannel": "Canale",
        "colOrders": "Ordini",
        "colRevenue": "Fatturato",
        "total": "Totale",
        "issues": {
          "dup": "DUPLICATO",
          "missing": "VUOTO",
          "format": "FORMATO"
        },
        "header": "data;cliente;canale;importo",
        "file": "vendite_grezze.xlsx",
        "report": "report_pulito.xlsx",
        "channels": [
          "Marketplace",
          "Negozio fisico",
          "E-commerce",
          "WhatsApp"
        ],
        "logs": [
          "$ python routine_report.py --input vendite_grezze.xlsx",
          "[1/5] Lettura del foglio grezzo… 1.284 righe trovate",
          "[2/5] Rimozione dei duplicati… 37 record scartati",
          "[3/5] Normalizzazione di date, importi e nomi…",
          "[4/5] Raggruppamento per canale di vendita…",
          "[5/5] Esportazione report_pulito.xlsx + dashboard.pdf",
          "✓ Routine completata in 0,84 s — 1.247 righe valide"
        ]
      }
    },
    "about": {
      "index": "[05] — CHI SIAMO",
      "title": "Chi c'è dietro.",
      "shared": "Informatica — UNIP · San Paolo, Brasile",
      "k": {
        "role": "SISTEMI · DATI · INFRA",
        "text": "Implementa sistemi di vendite e magazzino e gestisce l'infrastruttura."
      },
      "g": {
        "role": "FRONT-END · UI/UX · PYTHON",
        "text": "Crea interfacce, landing page e automazioni in Python."
      },
      "portfolio": "Portfolio"
    },
    "contact": {
      "index": "[06] — CONTATTI",
      "title": "Diamo forma alla tua idea?",
      "intro": "Scegli il tipo di progetto e scrivici su WhatsApp. Proposta su misura e senza impegno.",
      "types": {
        "site": "Sito web",
        "landing": "Landing page",
        "system": "Sistema",
        "automation": "Automazione"
      },
      "waK": "Scrivi a Kauã",
      "waG": "Scrivi a Gustavo",
      "email": "Invia un'e-mail",
      "msg": "Ciao Kauã e Gustavo! Ho visto il sito di {brand} e vorrei parlare di un progetto: {type}.",
      "subject": "Progetto {type} — dal sito"
    },
    "footer": {
      "rights": "© 2026 {brand}.",
      "made": "Fatto a mano a San Paolo, Brasile.",
      "backTop": "Torna su"
    }
  },
  "es": {
    "langName": "Español",
    "meta": {
      "title": "{brand} — Desarrollo Web, Sistemas a Medida y Automatización Python",
      "description": "Sitios web, sistemas y automatizaciones a medida. Estudio de software de Brasil."
    },
    "a11y": {
      "lang": "Seleccionar idioma",
      "menu": "Abrir menú de navegación",
      "range": "Control de compilación del wireframe",
      "tabs": "Pestañas del simulador"
    },
    "status": {
      "status": "ESTADO",
      "statusValue": "DISPONIBLES PARA NUEVOS PROYECTOS",
      "local": "HORA LOCAL"
    },
    "nav": {
      "services": "Servicios",
      "projects": "Proyectos",
      "sim": "Pruébalo en vivo",
      "about": "Nosotros",
      "cta": "Hablemos"
    },
    "hero": {
      "line1": "Sitios web que <em>venden.</em>",
      "line2": "Sistemas que <em>organizan.</em>",
      "line3": "Automatizaciones que <em>trabajan por ti.</em>",
      "l1": "INTERFAZ · WEB",
      "l2": "SISTEMA · DATOS",
      "l3": "RUTINA · PYTHON",
      "fig": "FIG. 01 — UNA INFRAESTRUCTURA, TRES CAPAS",
      "index": "[01] — ESTUDIO DE SOFTWARE",
      "sub": "Sitios web, sistemas y automatizaciones a medida para empresas de cualquier tamaño.",
      "ctaPrimary": "Ver proyectos",
      "ctaSecondary": "Hablemos",
      "scroll": "Desliza para ver más"
    },
    "marquee": [
      "Sitios web",
      "Sistemas",
      "Automatización",
      "Diseño"
    ],
    "services": {
      "index": "[02] — SERVICIOS",
      "title": "Del sitio web al <em>sistema.</em>",
      "items": [
        {
          "t": "Sitios web y landing pages",
          "d": "Páginas que convierten visitas en clientes."
        },
        {
          "t": "Sistemas a medida",
          "d": "Inventario, ventas y registros en un solo lugar."
        },
        {
          "t": "Automatización con Python",
          "d": "Hojas e informes que se hacen solos."
        },
        {
          "t": "Diseño de interfaces",
          "d": "UI/UX, identidad visual y prototipos."
        }
      ]
    },
    "projects": {
      "index": "[03] — PROYECTOS",
      "title": "Proyectos.",
      "intro": "Trabajos publicados. Haz clic y míralos funcionar.",
      "by": "por",
      "links": {
        "site": "Ver sitio",
        "behance": "Ver en Behance",
        "code": "Ver código"
      },
      "items": [
        {
          "title": "K-Byte",
          "cat": "Sistema · Marketplace",
          "desc": "Conecta tiendas de tecnología con clientes, con un panel completo para el comerciante."
        },
        {
          "title": "Iron Park",
          "cat": "Sitio · Gimnasio",
          "desc": "Lleva al visitante de la primera impresión a la inscripción."
        },
        {
          "title": "Rivlo",
          "cat": "Landing page · Fitness con IA",
          "desc": "Presenta una plataforma de entrenamientos generados por IA."
        },
        {
          "title": "Aurora Contábil",
          "cat": "Sitio · Contabilidad",
          "desc": "Transmite confianza y lleva al cliente directo a WhatsApp."
        },
        {
          "title": "La Forno & Lumina",
          "cat": "Sitios · Restauración",
          "desc": "Uno para pedir pizza, otro para reservar mesa."
        },
        {
          "title": "ComunaCheck",
          "cat": "Automatización · Python + IA",
          "desc": "Filtra solo noticias locales y ofertas de empleo."
        }
      ]
    },
    "sim": {
      "index": "[04] — PRUÉBALO EN VIVO",
      "title": "Pruébalo en vivo.",
      "intro": "Tres mini demos funcionando en tu navegador.",
      "live": "EN VIVO",
      "tabs": {
        "web": "Web & Landing Pages",
        "stock": "Sistemas & Inventario",
        "py": "Automatización Python"
      },
      "web": {
        "hint": "Arrastra el control para compilar el wireframe en interfaz",
        "wire": "WIREFRAME · FIGMA",
        "ui": "INTERFAZ · HTML/CSS/TAILWIND",
        "desktop": "Escritorio",
        "mobile": "Móvil",
        "brand": "Aurora Dental",
        "nav1": "Servicios",
        "nav2": "Equipo",
        "nav3": "Contacto",
        "heroTitle": "Reserva tu cita en 30 segundos.",
        "heroText": "Atención cercana, horarios flexibles y confirmación inmediata por WhatsApp.",
        "cta": "Reservar ahora",
        "card1": "Implantes",
        "card2": "Ortodoncia",
        "card3": "Blanqueamiento",
        "status": "build ok · responsive · accesible",
        "figma": "frame: Hero / Auto Layout 24 · Figma"
      },
      "stock": {
        "title": "Panel de Inventario — v1.0",
        "kItems": "Unidades en stock",
        "kValue": "Valor del inventario",
        "kSales": "Ventas hoy",
        "kLow": "Alertas de stock bajo",
        "fName": "Producto",
        "fQty": "Cant.",
        "fPrice": "Precio",
        "add": "Registrar",
        "cProduct": "Producto",
        "cQty": "Cant.",
        "cPrice": "Precio",
        "cAct": "Acción",
        "sell": "Vender",
        "restock": "Reponer",
        "low": "BAJO",
        "ok": "OK",
        "logReady": "Conectado a mysql://inventario — listo.",
        "logInsert": "INSERT INTO productos",
        "logSale": "UPDATE inventario SET cant = cant - 1 · venta registrada",
        "logRestock": "UPDATE inventario SET cant = cant + 5 · reposición",
        "invalid": "Introduce un producto, una cantidad y un precio válidos.",
        "seed": [
          "Pantalla iPhone 11",
          "Batería Galaxy S21",
          "Conector USB-C",
          "Protector 3D Privacidad"
        ]
      },
      "py": {
        "run": "Ejecutar Rutina",
        "running": "Ejecutando…",
        "rerun": "Ejecutar de nuevo",
        "raw": "ENTRADA · hoja bruta",
        "clean": "SALIDA · informe limpio",
        "idle": "Esperando ejecución. Haz clic en “Ejecutar Rutina”.",
        "waiting": "esperando datos…",
        "colChannel": "Canal",
        "colOrders": "Pedidos",
        "colRevenue": "Ingresos",
        "total": "Total",
        "issues": {
          "dup": "DUPLICADO",
          "missing": "VACÍO",
          "format": "FORMATO"
        },
        "header": "fecha;cliente;canal;importe",
        "file": "ventas_brutas.xlsx",
        "report": "informe_limpio.xlsx",
        "channels": [
          "Marketplace",
          "Tienda física",
          "E-commerce",
          "WhatsApp"
        ],
        "logs": [
          "$ python rutina_informe.py --input ventas_brutas.xlsx",
          "[1/5] Leyendo hoja de cálculo bruta… 1.284 filas encontradas",
          "[2/5] Eliminando duplicados… 37 registros descartados",
          "[3/5] Normalizando fechas, importes y nombres…",
          "[4/5] Agrupando por canal de venta…",
          "[5/5] Exportando informe_limpio.xlsx + dashboard.pdf",
          "✓ Rutina completada en 0,84 s — 1.247 filas válidas"
        ]
      }
    },
    "about": {
      "index": "[05] — NOSOTROS",
      "title": "Quién está detrás.",
      "shared": "Ciencias de la Computación — UNIP · São Paulo, Brasil",
      "k": {
        "role": "SISTEMAS · DATOS · INFRA",
        "text": "Implanta sistemas de ventas e inventario y cuida la infraestructura."
      },
      "g": {
        "role": "FRONT-END · UI/UX · PYTHON",
        "text": "Crea interfaces, landing pages y automatizaciones en Python."
      },
      "portfolio": "Portafolio"
    },
    "contact": {
      "index": "[06] — CONTACTO",
      "title": "¿Hacemos realidad tu idea?",
      "intro": "Elige el tipo de proyecto y escríbenos por WhatsApp. Propuesta a medida y sin compromiso.",
      "types": {
        "site": "Sitio web",
        "landing": "Landing page",
        "system": "Sistema",
        "automation": "Automatización"
      },
      "waK": "Hablar con Kauã",
      "waG": "Hablar con Gustavo",
      "email": "Enviar e-mail",
      "msg": "¡Hola, Kauã y Gustavo! Vi el sitio de {brand} y quiero hablar sobre un proyecto de {type}.",
      "subject": "Proyecto de {type} — desde el sitio"
    },
    "footer": {
      "rights": "© 2026 {brand}.",
      "made": "Hecho a mano en São Paulo, Brasil.",
      "backTop": "Volver arriba"
    }
  }
};

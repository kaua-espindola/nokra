/* ==========================================================================
   NOKRA — i18n dictionary
   4 languages: pt (default) · en · it · es
   Every language MUST mirror the exact same key structure as `pt`.
   app.js runs a structural validation on load and warns about any gap.
   ========================================================================== */

/* --------------------------------------------------------------------------
   BRAND — single source of truth. Rename the team here and the whole site
   (header, footer wordmark, titles) follows.
   -------------------------------------------------------------------------- */
window.BRAND = {
  name: "Nokra",               // <title>, footer © line, aria labels
  lockup: ["nokra"],           // header wordmark (a 2nd item would render lighter, as a two-word logo)
  wordmark: "NOKRA",           // giant outlined footer type, preceded by the orange //
  slug: "nokra"                // short id
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
      "wa": "Falar com a equipe no WhatsApp"
    },
    "status": {
      "status": "STATUS",
      "statusValue": "DISPONÍVEL PARA NOVOS PROJETOS",
      "local": "HORA LOCAL"
    },
    "nav": {
      "services": "Serviços",
      "projects": "Projetos",
      "method": "Método",
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
      "index": "// ESTÚDIO DE SOFTWARE",
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
      "index": "[01] — SERVIÇOS",
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
      "index": "[02] — PROJETOS",
      "title": "Projetos em <em>destaque.</em>",
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
    "manifesto": {
      "label": "Manifesto",
      "p1": "Muitas empresas ainda perdem oportunidades com sites lentos, processos manuais e informações espalhadas em planilhas.",
      "p2": "A {brand} desenvolve sites, sistemas e automações sob medida para resolver esses problemas, com acompanhamento em todas as etapas.",
      "quote": "Projetos [sob medida], do planejamento à entrega, com a mesma equipe.",
      "cite": "Manifesto {brand}"
    },
    "method": {
      "index": "[03] — MÉTODO",
      "title": "Da conversa <em>ao ar.</em>",
      "intro": "Quatro etapas, com você acompanhando cada uma.",
      "steps": [
        {
          "t": "Conversar",
          "d": "Entendemos o seu negócio, o seu cliente e o que precisa mudar.",
          "tags": [
            "Briefing",
            "Objetivos",
            "Referências"
          ]
        },
        {
          "t": "Planejar",
          "d": "Definimos páginas, funções e prazo. Você aprova antes de começarmos.",
          "tags": [
            "Escopo",
            "Wireframe",
            "Prazo"
          ]
        },
        {
          "t": "Construir",
          "d": "Design e código andam juntos, e você vê cada versão.",
          "tags": [
            "Design",
            "Código",
            "Testes"
          ]
        },
        {
          "t": "Entregar",
          "d": "Colocamos no ar, ensinamos a usar e seguimos por perto.",
          "tags": [
            "Publicação",
            "Treinamento",
            "Suporte"
          ]
        }
      ]
    },
    "about": {
      "index": "[04] — SOBRE",
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
      "index": "[05] — CONTATO",
      "title": "Seu negócio <em>no ar.</em>",
      "intro": "Escreva o nome do seu negócio e veja uma prévia. O resto a gente constrói junto.",
      "nameLabel": "Nome do seu negócio",
      "namePh": "Ex.: Padaria Central",
      "nameFallback": "Seu Negócio",
      "typeLabel": "Que tipo de projeto?",
      "types": {
        "site": "Site",
        "landing": "Landing page",
        "system": "Sistema",
        "automation": "Automação"
      },
      "cta": "Falar com a equipe",
      "email": "Prefiro e-mail",
      "msg": "Olá! Vim pelo site da {brand} e quero conversar sobre um projeto de {type}.",
      "msgPlain": "Olá! Vim pelo site da {brand} e quero conversar sobre um projeto.",
      "msgNamed": "Olá! Vim pelo site da {brand}. Sou da {name} e quero conversar sobre um projeto de {type}.",
      "previewTag": "PRÉVIA",
      "domain": ".com.br",
      "preview": {
        "site": {
          "k": "Bem-vindo",
          "s": "Tudo o que o seu cliente precisa saber, num só lugar.",
          "b": "Conheça",
          "b2": "Ver serviços",
          "nav": [
            "Início",
            "Serviços",
            "Contato"
          ],
          "feats": [
            "Atendimento rápido",
            "Qualidade garantida",
            "Fale no WhatsApp"
          ],
          "rating": "128 avaliações",
          "online": "Aberto agora"
        },
        "landing": {
          "k": "Oferta especial",
          "s": "Uma página feita para transformar visita em contato.",
          "b": "Quero agora",
          "strip": "Últimas vagas",
          "timer": "Termina em",
          "form": "Garanta sua vaga",
          "fields": [
            "Seu nome",
            "Seu WhatsApp"
          ],
          "send": "Enviar",
          "safe": "Seus dados estão seguros",
          "proof": "+1.200 clientes satisfeitos",
          "off": "OFF"
        },
        "system": {
          "k": "Painel",
          "nav": [
            "Visão geral",
            "Vendas",
            "Estoque",
            "Clientes"
          ],
          "search": "Buscar…",
          "kpis": [
            {
              "l": "Vendas hoje",
              "v": "R$ 4.280",
              "d": "+12%"
            },
            {
              "l": "Pedidos",
              "v": "38",
              "d": "+5"
            },
            {
              "l": "Estoque baixo",
              "v": "5",
              "d": "itens"
            }
          ],
          "chart": "Vendas da semana",
          "days": [
            "S",
            "T",
            "Q",
            "Q",
            "S",
            "S",
            "D"
          ],
          "table": "Últimos pedidos",
          "orders": [
            [
              "#1042",
              "Ana S.",
              "R$ 189"
            ],
            [
              "#1041",
              "Bruno L.",
              "R$ 74"
            ],
            [
              "#1040",
              "Carla M.",
              "R$ 312"
            ]
          ],
          "status": [
            "Pago",
            "Pago",
            "Pendente"
          ],
          "goal": "Meta do mês"
        },
        "automation": {
          "k": "Rotina automática",
          "file": "vendas",
          "nodes": [
            {
              "t": "Planilha",
              "d": "1.248 linhas"
            },
            {
              "t": "Script Python",
              "d": "todo dia às 08:00"
            },
            {
              "t": "Relatório PDF",
              "d": "enviado por e-mail"
            }
          ],
          "log": [
            "lendo planilha…",
            "1.248 linhas processadas",
            "gerando relatório…"
          ],
          "done": "Relatório enviado às 08:00",
          "stats": [
            {
              "v": "32h",
              "l": "economizadas por mês"
            },
            {
              "v": "0",
              "l": "planilhas abertas à mão"
            },
            {
              "v": "100%",
              "l": "no horário, todo dia"
            }
          ]
        }
      },
      "direct": {
        "title": "Ou fale direto",
        "wa": "WhatsApp",
        "mail": "E-mail",
        "ig": "Instagram"
      },
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
      "wa": "Talk to the team on WhatsApp"
    },
    "status": {
      "status": "STATUS",
      "statusValue": "AVAILABLE FOR NEW PROJECTS",
      "local": "LOCAL TIME"
    },
    "nav": {
      "services": "Services",
      "projects": "Projects",
      "method": "Process",
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
      "index": "// SOFTWARE STUDIO",
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
      "index": "[01] — SERVICES",
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
      "index": "[02] — PROJECTS",
      "title": "Featured <em>projects.</em>",
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
    "manifesto": {
      "label": "Manifesto",
      "p1": "Many businesses still lose opportunities to slow websites, manual processes and information scattered across spreadsheets.",
      "p2": "{brand} builds custom websites, systems and automation to solve these problems, with close follow-up at every stage.",
      "quote": "[Custom-built] projects, from planning to delivery, by the same team.",
      "cite": "{brand} manifesto"
    },
    "method": {
      "index": "[03] — PROCESS",
      "title": "From first call <em>to live.</em>",
      "intro": "Four steps, and you follow each one.",
      "steps": [
        {
          "t": "Listen",
          "d": "We get to know your business, your customers and what needs to change.",
          "tags": [
            "Briefing",
            "Goals",
            "References"
          ]
        },
        {
          "t": "Plan",
          "d": "We define pages, features and timeline. You approve before we start.",
          "tags": [
            "Scope",
            "Wireframe",
            "Timeline"
          ]
        },
        {
          "t": "Build",
          "d": "Design and code move together, and you see every version.",
          "tags": [
            "Design",
            "Code",
            "Testing"
          ]
        },
        {
          "t": "Launch",
          "d": "We put it live, show you how to use it and stay close.",
          "tags": [
            "Launch",
            "Training",
            "Support"
          ]
        }
      ]
    },
    "about": {
      "index": "[04] — ABOUT",
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
      "index": "[05] — CONTACT",
      "title": "Your business, <em>live.</em>",
      "intro": "Type your business name and see a preview. We'll build the rest together.",
      "nameLabel": "Your business name",
      "namePh": "e.g. Central Bakery",
      "nameFallback": "Your Business",
      "typeLabel": "What kind of project?",
      "types": {
        "site": "Website",
        "landing": "Landing page",
        "system": "System",
        "automation": "Automation"
      },
      "cta": "Talk to the team",
      "email": "I'd rather email",
      "msg": "Hi! I found {brand}'s website and I'd like to talk about a {type} project.",
      "msgPlain": "Hi! I found {brand}'s website and I'd like to talk about a project.",
      "msgNamed": "Hi! I found {brand}'s website. I'm from {name} and I'd like to talk about a {type} project.",
      "previewTag": "PREVIEW",
      "domain": ".com",
      "preview": {
        "site": {
          "k": "Welcome",
          "s": "Everything your customers need to know, in one place.",
          "b": "Explore",
          "b2": "Our services",
          "nav": [
            "Home",
            "Services",
            "Contact"
          ],
          "feats": [
            "Fast service",
            "Guaranteed quality",
            "Chat on WhatsApp"
          ],
          "rating": "128 reviews",
          "online": "Open now"
        },
        "landing": {
          "k": "Special offer",
          "s": "A page built to turn visits into leads.",
          "b": "Get it now",
          "strip": "Last spots",
          "timer": "Ends in",
          "form": "Save your spot",
          "fields": [
            "Your name",
            "Your phone"
          ],
          "send": "Send",
          "safe": "Your data is safe",
          "proof": "1,200+ happy customers",
          "off": "OFF"
        },
        "system": {
          "k": "Dashboard",
          "nav": [
            "Overview",
            "Sales",
            "Stock",
            "Customers"
          ],
          "search": "Search…",
          "kpis": [
            {
              "l": "Sales today",
              "v": "$4,280",
              "d": "+12%"
            },
            {
              "l": "Orders",
              "v": "38",
              "d": "+5"
            },
            {
              "l": "Low stock",
              "v": "5",
              "d": "items"
            }
          ],
          "chart": "Sales this week",
          "days": [
            "M",
            "T",
            "W",
            "T",
            "F",
            "S",
            "S"
          ],
          "table": "Latest orders",
          "orders": [
            [
              "#1042",
              "Anna S.",
              "$189"
            ],
            [
              "#1041",
              "Brian L.",
              "$74"
            ],
            [
              "#1040",
              "Carla M.",
              "$312"
            ]
          ],
          "status": [
            "Paid",
            "Paid",
            "Pending"
          ],
          "goal": "Monthly goal"
        },
        "automation": {
          "k": "Automated routine",
          "file": "sales",
          "nodes": [
            {
              "t": "Spreadsheet",
              "d": "1,248 rows"
            },
            {
              "t": "Python script",
              "d": "every day at 8:00"
            },
            {
              "t": "PDF report",
              "d": "sent by e-mail"
            }
          ],
          "log": [
            "reading spreadsheet…",
            "1,248 rows processed",
            "building report…"
          ],
          "done": "Report sent at 8:00",
          "stats": [
            {
              "v": "32h",
              "l": "saved per month"
            },
            {
              "v": "0",
              "l": "spreadsheets opened by hand"
            },
            {
              "v": "100%",
              "l": "on time, every day"
            }
          ]
        }
      },
      "direct": {
        "title": "Or reach us directly",
        "wa": "WhatsApp",
        "mail": "Email",
        "ig": "Instagram"
      },
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
      "wa": "Parla con il team su WhatsApp"
    },
    "status": {
      "status": "STATO",
      "statusValue": "DISPONIBILI PER NUOVI PROGETTI",
      "local": "ORA LOCALE"
    },
    "nav": {
      "services": "Servizi",
      "projects": "Progetti",
      "method": "Metodo",
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
      "index": "// STUDIO DI SOFTWARE",
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
      "index": "[01] — SERVIZI",
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
      "index": "[02] — PROGETTI",
      "title": "Progetti in <em>evidenza.</em>",
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
    "manifesto": {
      "label": "Manifesto",
      "p1": "Molte aziende perdono ancora opportunità a causa di siti lenti, processi manuali e informazioni sparse in fogli di calcolo.",
      "p2": "{brand} sviluppa siti, gestionali e automazioni su misura per risolvere questi problemi, con un affiancamento in ogni fase.",
      "quote": "Progetti [su misura], dalla pianificazione alla consegna, con lo stesso team.",
      "cite": "Manifesto {brand}"
    },
    "method": {
      "index": "[03] — METODO",
      "title": "Dalla chiamata <em>al lancio.</em>",
      "intro": "Quattro fasi, e tu le segui tutte.",
      "steps": [
        {
          "t": "Ascoltare",
          "d": "Conosciamo la tua attività, i tuoi clienti e cosa va cambiato.",
          "tags": [
            "Briefing",
            "Obiettivi",
            "Riferimenti"
          ]
        },
        {
          "t": "Pianificare",
          "d": "Definiamo pagine, funzioni e tempi. Approvi tu prima di iniziare.",
          "tags": [
            "Perimetro",
            "Wireframe",
            "Tempi"
          ]
        },
        {
          "t": "Costruire",
          "d": "Design e codice vanno di pari passo, e vedi ogni versione.",
          "tags": [
            "Design",
            "Codice",
            "Test"
          ]
        },
        {
          "t": "Consegnare",
          "d": "Lo mettiamo online, ti mostriamo come usarlo e restiamo vicini.",
          "tags": [
            "Pubblicazione",
            "Formazione",
            "Supporto"
          ]
        }
      ]
    },
    "about": {
      "index": "[04] — CHI SIAMO",
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
      "index": "[05] — CONTATTI",
      "title": "La tua attività <em>online.</em>",
      "intro": "Scrivi il nome della tua attività e guarda un'anteprima. Il resto lo costruiamo insieme.",
      "nameLabel": "Nome della tua attività",
      "namePh": "Es.: Forno Centrale",
      "nameFallback": "La Tua Attività",
      "typeLabel": "Che tipo di progetto?",
      "types": {
        "site": "Sito web",
        "landing": "Landing page",
        "system": "Sistema",
        "automation": "Automazione"
      },
      "cta": "Parla con il team",
      "email": "Preferisco l'e-mail",
      "msg": "Ciao! Ho visto il sito di {brand} e vorrei parlare di un progetto di {type}.",
      "msgPlain": "Ciao! Ho visto il sito di {brand} e vorrei parlare di un progetto.",
      "msgNamed": "Ciao! Ho visto il sito di {brand}. Sono di {name} e vorrei parlare di un progetto di {type}.",
      "previewTag": "ANTEPRIMA",
      "domain": ".it",
      "preview": {
        "site": {
          "k": "Benvenuti",
          "s": "Tutto ciò che i tuoi clienti devono sapere, in un solo posto.",
          "b": "Scopri",
          "b2": "I nostri servizi",
          "nav": [
            "Home",
            "Servizi",
            "Contatti"
          ],
          "feats": [
            "Risposta rapida",
            "Qualità garantita",
            "Scrivici su WhatsApp"
          ],
          "rating": "128 recensioni",
          "online": "Aperto ora"
        },
        "landing": {
          "k": "Offerta speciale",
          "s": "Una pagina fatta per trasformare le visite in contatti.",
          "b": "Lo voglio",
          "strip": "Ultimi posti",
          "timer": "Termina tra",
          "form": "Prenota il tuo posto",
          "fields": [
            "Il tuo nome",
            "Il tuo telefono"
          ],
          "send": "Invia",
          "safe": "I tuoi dati sono al sicuro",
          "proof": "Oltre 1.200 clienti soddisfatti",
          "off": "OFF"
        },
        "system": {
          "k": "Pannello",
          "nav": [
            "Panoramica",
            "Vendite",
            "Magazzino",
            "Clienti"
          ],
          "search": "Cerca…",
          "kpis": [
            {
              "l": "Vendite oggi",
              "v": "€ 4.280",
              "d": "+12%"
            },
            {
              "l": "Ordini",
              "v": "38",
              "d": "+5"
            },
            {
              "l": "Scorte basse",
              "v": "5",
              "d": "articoli"
            }
          ],
          "chart": "Vendite della settimana",
          "days": [
            "L",
            "M",
            "M",
            "G",
            "V",
            "S",
            "D"
          ],
          "table": "Ultimi ordini",
          "orders": [
            [
              "#1042",
              "Anna S.",
              "€ 189"
            ],
            [
              "#1041",
              "Bruno L.",
              "€ 74"
            ],
            [
              "#1040",
              "Carla M.",
              "€ 312"
            ]
          ],
          "status": [
            "Pagato",
            "Pagato",
            "In attesa"
          ],
          "goal": "Obiettivo del mese"
        },
        "automation": {
          "k": "Routine automatica",
          "file": "vendite",
          "nodes": [
            {
              "t": "Foglio di calcolo",
              "d": "1.248 righe"
            },
            {
              "t": "Script Python",
              "d": "ogni giorno alle 8:00"
            },
            {
              "t": "Report PDF",
              "d": "inviato via e-mail"
            }
          ],
          "log": [
            "lettura del foglio…",
            "1.248 righe elaborate",
            "creazione del report…"
          ],
          "done": "Report inviato alle 8:00",
          "stats": [
            {
              "v": "32h",
              "l": "risparmiate al mese"
            },
            {
              "v": "0",
              "l": "fogli aperti a mano"
            },
            {
              "v": "100%",
              "l": "puntuale, ogni giorno"
            }
          ]
        }
      },
      "direct": {
        "title": "Oppure scrivici direttamente",
        "wa": "WhatsApp",
        "mail": "E-mail",
        "ig": "Instagram"
      },
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
      "wa": "Hablar con el equipo por WhatsApp"
    },
    "status": {
      "status": "ESTADO",
      "statusValue": "DISPONIBLES PARA NUEVOS PROYECTOS",
      "local": "HORA LOCAL"
    },
    "nav": {
      "services": "Servicios",
      "projects": "Proyectos",
      "method": "Método",
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
      "index": "// ESTUDIO DE SOFTWARE",
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
      "index": "[01] — SERVICIOS",
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
      "index": "[02] — PROYECTOS",
      "title": "Proyectos <em>destacados.</em>",
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
    "manifesto": {
      "label": "Manifiesto",
      "p1": "Muchas empresas todavía pierden oportunidades por webs lentas, procesos manuales e información dispersa en hojas de cálculo.",
      "p2": "{brand} desarrolla webs, sistemas y automatizaciones a medida para resolver estos problemas, con acompañamiento en cada etapa.",
      "quote": "Proyectos [a medida], de la planificación a la entrega, con el mismo equipo.",
      "cite": "Manifiesto {brand}"
    },
    "method": {
      "index": "[03] — MÉTODO",
      "title": "De la charla <em>al lanzamiento.</em>",
      "intro": "Cuatro etapas, y tú sigues cada una.",
      "steps": [
        {
          "t": "Escuchar",
          "d": "Conocemos tu negocio, a tus clientes y lo que hay que cambiar.",
          "tags": [
            "Briefing",
            "Objetivos",
            "Referencias"
          ]
        },
        {
          "t": "Planificar",
          "d": "Definimos páginas, funciones y plazos. Tú apruebas antes de empezar.",
          "tags": [
            "Alcance",
            "Wireframe",
            "Plazos"
          ]
        },
        {
          "t": "Construir",
          "d": "Diseño y código avanzan juntos, y ves cada versión.",
          "tags": [
            "Diseño",
            "Código",
            "Pruebas"
          ]
        },
        {
          "t": "Entregar",
          "d": "Lo publicamos, te enseñamos a usarlo y seguimos cerca.",
          "tags": [
            "Publicación",
            "Formación",
            "Soporte"
          ]
        }
      ]
    },
    "about": {
      "index": "[04] — NOSOTROS",
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
      "index": "[05] — CONTACTO",
      "title": "Tu negocio, <em>en línea.</em>",
      "intro": "Escribe el nombre de tu negocio y mira una vista previa. El resto lo construimos juntos.",
      "nameLabel": "Nombre de tu negocio",
      "namePh": "Ej.: Panadería Central",
      "nameFallback": "Tu Negocio",
      "typeLabel": "¿Qué tipo de proyecto?",
      "types": {
        "site": "Sitio web",
        "landing": "Landing page",
        "system": "Sistema",
        "automation": "Automatización"
      },
      "cta": "Hablar con el equipo",
      "email": "Prefiero e-mail",
      "msg": "¡Hola! Vi la web de {brand} y quiero hablar sobre un proyecto de {type}.",
      "msgPlain": "¡Hola! Vi la web de {brand} y quiero hablar sobre un proyecto.",
      "msgNamed": "¡Hola! Vi la web de {brand}. Soy de {name} y quiero hablar sobre un proyecto de {type}.",
      "previewTag": "VISTA PREVIA",
      "domain": ".es",
      "preview": {
        "site": {
          "k": "Bienvenidos",
          "s": "Todo lo que tus clientes necesitan saber, en un solo lugar.",
          "b": "Conoce más",
          "b2": "Servicios",
          "nav": [
            "Inicio",
            "Servicios",
            "Contacto"
          ],
          "feats": [
            "Atención rápida",
            "Calidad garantizada",
            "Escríbenos por WhatsApp"
          ],
          "rating": "128 reseñas",
          "online": "Abierto ahora"
        },
        "landing": {
          "k": "Oferta especial",
          "s": "Una página hecha para convertir visitas en contactos.",
          "b": "Lo quiero",
          "strip": "Últimas plazas",
          "timer": "Termina en",
          "form": "Reserva tu plaza",
          "fields": [
            "Tu nombre",
            "Tu teléfono"
          ],
          "send": "Enviar",
          "safe": "Tus datos están seguros",
          "proof": "Más de 1.200 clientes satisfechos",
          "off": "DTO"
        },
        "system": {
          "k": "Panel",
          "nav": [
            "Resumen",
            "Ventas",
            "Stock",
            "Clientes"
          ],
          "search": "Buscar…",
          "kpis": [
            {
              "l": "Ventas hoy",
              "v": "4.280 €",
              "d": "+12%"
            },
            {
              "l": "Pedidos",
              "v": "38",
              "d": "+5"
            },
            {
              "l": "Stock bajo",
              "v": "5",
              "d": "artículos"
            }
          ],
          "chart": "Ventas de la semana",
          "days": [
            "L",
            "M",
            "X",
            "J",
            "V",
            "S",
            "D"
          ],
          "table": "Últimos pedidos",
          "orders": [
            [
              "#1042",
              "Ana S.",
              "189 €"
            ],
            [
              "#1041",
              "Bruno L.",
              "74 €"
            ],
            [
              "#1040",
              "Carla M.",
              "312 €"
            ]
          ],
          "status": [
            "Pagado",
            "Pagado",
            "Pendiente"
          ],
          "goal": "Meta del mes"
        },
        "automation": {
          "k": "Rutina automática",
          "file": "ventas",
          "nodes": [
            {
              "t": "Hoja de cálculo",
              "d": "1.248 filas"
            },
            {
              "t": "Script Python",
              "d": "cada día a las 8:00"
            },
            {
              "t": "Informe PDF",
              "d": "enviado por e-mail"
            }
          ],
          "log": [
            "leyendo la hoja…",
            "1.248 filas procesadas",
            "generando el informe…"
          ],
          "done": "Informe enviado a las 8:00",
          "stats": [
            {
              "v": "32h",
              "l": "ahorradas al mes"
            },
            {
              "v": "0",
              "l": "hojas abiertas a mano"
            },
            {
              "v": "100%",
              "l": "puntual, cada día"
            }
          ]
        }
      },
      "direct": {
        "title": "O escríbenos directo",
        "wa": "WhatsApp",
        "mail": "E-mail",
        "ig": "Instagram"
      },
      "subject": "Proyecto de {type} — desde el sitio"
    },
    "footer": {
      "rights": "© 2026 {brand}.",
      "made": "Hecho a mano en São Paulo, Brasil.",
      "backTop": "Volver arriba"
    }
  }
};

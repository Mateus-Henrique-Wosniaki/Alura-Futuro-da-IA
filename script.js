const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em 2088, uma sinal de rádio vindo do sistema Alpha Centauri é confirmado como origem inteligente. O conselho mundial decide enviar uma nave tripulada. Como você reage?",
        alternativas: [
            {
                texto: "Sente um tremor de ansiedade pelo perigo e incerteza do espaço profundo.",
                afirmacao: "Inicialmente hesitation perante os riscos da exploração espacial."
            },
            {
                texto: "Fica eufórico com a oportunidade de presenciar o maior marco da história humana.",
                afirmacao: "Abraçou com fascínio a ideia de expandir os horizontes da humanidade."
            }
        ]
    },
    {
        enunciado: "Para compor a tripulação, abre-se uma seleção global. Qual perfil de especialista você defende que deve liderar a expedição?",
        alternativas: [
            {
                texto: "Cientistas e pesquisadores focado em biologia e diplomacia alienígena.",
                afirmacao: "Priorizou a busca pelo conhecimento e comunicação pacífica."
            },
            {
                texto: "Engenheiros e estrategistas militares focados na segurança e sobrevivência do grupo.",
                afirmacao: "Defendeu uma postura cautelosa, focando em segurança e infraestrutura."
            }
        ]
    },
    {
        enunciado: "A nave precisará de um sistema de inteligência artificial de bordo para navegação rápida e decisões de emergência. Que nível de autonomia essa IA deve ter?",
        alternativas: [
            {
                texto: "Autonomia total para tomar decisões críticas em frações de segundo sem intervenção humana.",
                afirmacao: "Apostou na eficiência extrema da automação espacial."
            },
            {
                texto: "Supervisão total: a IA sugere caminhos, mas a palavra final é sempre dos astronautas humanos.",
                afirmacao: "Manteve o livre-arbítrio e o julgamento humano no centro do comando."
            }
        ]
    },
    {
        enunciado: "Durante a viagem, a nave encontra os restos de uma antiga sonda alienígena à deriva com tecnologias desconhecidas. O que deve ser feito?",
        alternativas: [
            {
                texto: "Rebocar e examinar os destroços imediatamente para extrair novas tecnologias.",
                afirmacao: "Assumiu riscos calculados em nome do progresso tecnológico rápido."
            },
            {
                texto: "Apenas escancear à distância e registrar a posição para evitar contaminação ou perigos.",
                afirmacao: "Agiu de forma preventiva para proteger a integridade da nave e tripulação."
            }
        ]
    },
    {
        enunciado: "Ao chegar ao destino, descobre-se que o planeta é habitável, mas carece de recursos hídricos abundantes. Como a nave deve proceder?",
        alternativas: [
            {
                texto: "Povoar o planeta adaptando os ecossistemas por meio de terraformação artificial.",
                afirmacao: "E moldou novos mundos para garantir a sobrevivência e expansão da espécie."
            },
            {
                texto: "Estabelecer apenas um posto avançado de estudos sem alterar a estrutura nativa do planeta.",
                afirmacao: "E ajudou a criar uma presença sustentável baseada na preservação cósmica."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O Futuro em 2100...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.remove("escondido");
}

mostraPergunta();

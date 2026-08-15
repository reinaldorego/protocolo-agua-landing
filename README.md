# Landing Page — Protocolo Integrado de Vigilância e Gestão da Potabilidade da Água

Projeto front-end estático criado a partir de:
- briefing de design/UX fornecido pelo usuário;
- documento técnico do Protocolo Integrado de Vigilância e Gestão da Potabilidade da Água no âmbito dos DSEIs no Brasil, 2026.

## Estrutura

```text
protocolo_agua_landing/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
```

## Execução local

Não há dependências obrigatórias.

Opção 1 — abrir diretamente:
- abra `index.html` no navegador.

Opção 2 — servidor local recomendado:
```bash
python -m http.server 8000
```
Depois acesse:
`http://localhost:8000`

## Publicação

O projeto é compatível com hospedagem estática, incluindo GitHub Pages, Vercel, Netlify ou servidor web convencional.

### Vercel
1. Crie um repositório no GitHub.
2. Envie a pasta do projeto.
3. Importe o repositório na Vercel.
4. Framework: Other.
5. Build command: vazio.
6. Output directory: `.`

## Tecnologias

- HTML5 semântico
- CSS3
- JavaScript moderno
- SVG inline para elementos gráficos
- IntersectionObserver para animações de entrada
- `prefers-reduced-motion`
- sem bibliotecas externas obrigatórias

## Decisões de conteúdo

O conteúdo foi mantido dentro do que é sustentado pelos dois arquivos fornecidos. Não foram criados resultados experimentais, percentuais ou coordenadas fictícias.

O mapa do projeto piloto é deliberadamente conceitual e não representa coordenadas geográficas.

Os CTAs "Baixar protocolo" e "Ver infográfico" estão como placeholders até que os URLs oficiais sejam fornecidos.

## Auditoria inicial

Implementado:
- navegação sticky;
- menu mobile;
- scroll suave;
- barra de progresso;
- animações discretas;
- fluxo operacional completo;
- arquitetura tecnológica;
- classificação de risco;
- tabela de parâmetros;
- distinção entre sensores e análises laboratoriais;
- projeto piloto e municípios;
- aldeias do piloto;
- governança;
- indicadores;
- políticas públicas;
- resultados esperados;
- CTA final;
- SEO básico;
- foco visível;
- HTML semântico;
- suporte a `prefers-reduced-motion`;
- responsividade para 360, 390, 430, 768, 1024, 1280 e 1440 px por regras CSS.

Ainda depende de conteúdo oficial:
- logos institucionais;
- URLs oficiais;
- arquivo PDF definitivo para download;
- infográfico oficial;
- imagens institucionais autorizadas.

## Observação técnica

A landing page é uma interface de divulgação e comunicação científica. Ela não substitui o protocolo técnico-operacional.


## Acesso aos materiais

A seção final possui dois acessos funcionais:
- **Baixar protocolo** → `assets/protocolo-integrado-potabilidade-agua-dseis.pdf`
- **Ver infográfico** → `assets/infografico-protocolo.png` em nova aba

A seção final foi compactada e reorganizada em duas colunas para reduzir espaço vertical e criar uma área de acesso visualmente mais clara.

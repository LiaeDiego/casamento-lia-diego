# Site do casamento Lia e Diego

Versão publicável do site de casamento, baseada no `index - R03.html` e com identidade visual aplicada a partir da pasta `Versão Claude Design`.

## Arquivos principais

- `index.html`: site público.
- `admin.html`: painel dos noivos para editar conteúdo, seções, presentes, RSVP e recados.
- `site-config.js`: configuração da URL do Google Apps Script.
- `app.js` e `styles.css`: comportamento e visual do site público.
- `admin.js` e `admin.css`: comportamento e visual do painel.
- `apps-script/Code.gs`: backend para Google Sheets.
- `assets/casal.jpg`: foto provisória usada no site.

## Como configurar o Google Sheets

1. Crie uma planilha no Google Sheets.
2. Vá em `Extensões > Apps Script`.
3. Apague o conteúdo padrão e cole o conteúdo de `apps-script/Code.gs`.
4. Em `Configurações do projeto > Propriedades do script`, crie:
   - `ADMIN_PASSWORD`: a senha que vocês usarão no painel dos noivos.
5. Volte ao editor, selecione a função `setup` e clique em `Executar`.
6. Autorize o script com sua conta Google.
7. Clique em `Implantar > Nova implantação`.
8. Tipo: `App da Web`.
9. Executar como: `Eu`.
10. Quem pode acessar: `Qualquer pessoa`.
11. Copie a URL do Web App.
12. Cole essa URL em `site-config.js`, no campo `apiUrl`.

Sem essa URL, o site funciona apenas em modo local no navegador atual. Com a URL configurada, RSVP, presentes, recados e edições do painel ficam compartilhados online.

## Como publicar no GitHub Pages

1. Suba estes arquivos para um repositório GitHub.
2. No GitHub, abra `Settings > Pages`.
3. Em `Build and deployment`, selecione `Deploy from a branch`.
4. Branch: `main`.
5. Folder: `/root`.
6. Salve e aguarde o link do GitHub Pages.

## Como editar depois de publicado

1. Acesse `https://seu-usuario.github.io/seu-repositorio/admin.html`.
2. Informe a senha definida em `ADMIN_PASSWORD`.
3. Edite conteúdo, ordem/visibilidade das seções, presentes, FAQ, acomodações e galeria.
4. Clique em `Salvar alterações`.

Para trocar fotos pelo painel, use URLs públicas de imagem. A foto provisória local é `assets/casal.jpg`.

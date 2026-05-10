# Publicação e operação

## Decisões adotadas

- Hospedagem: GitHub Pages gratuito.
- Backend: Google Sheets por meio de Google Apps Script.
- Acesso público: qualquer pessoa com o link.
- Painel dos noivos: `admin.html`, protegido pela senha do Apps Script.
- RSVP: aceita `Sim, confirmo presença` e `Não poderei ir`, com acompanhantes ilimitados e observações.
- Lista de presentes: mantém o formato do R03, com link PIX e link de cartão por presente.

## Observações de segurança

O site é estático e público. A senha administrativa não fica gravada no HTML, mas é enviada ao Apps Script quando vocês entram no painel. Use uma senha própria, não reutilizada em outras contas.

Como o acesso ao site é por link público, qualquer pessoa que receba o link poderá ver o site e enviar RSVP/recados. O painel administrativo continua exigindo senha.

## Próximos ajustes manuais

- Inserir a URL real do Apps Script em `site-config.js`.
- Editar textos finais pelo painel.
- Cadastrar links reais de PIX/cartão nos presentes.
- Trocar as fotos por URLs públicas definitivas ou substituir `assets/casal.jpg` no repositório.

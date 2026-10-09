# Bup
1. Suba a pasta num repositório e importe na Vercel.
2. Vercel > Storage > Neon (Postgres): conecte ao projeto. Isso cria `DATABASE_URL`.
3. Em Settings > Environment Variables adicione `GEMINI_API_KEY` (aistudio.google.com) e `AUTH_SECRET` (qualquer texto longo e aleatório, ex.: `openssl rand -hex 32`).
4. Deploy. As tabelas (users, pets, messages) são criadas sozinhas no primeiro acesso.

Páginas: `/` (início), `/expressoes`, `/como-funciona`, `/faq`, `/privacidade`, `/termos`, `/conta`, `/configuracoes`, `/conversar` (login + chat). Menu e rodapé ficam em `site.js`; estilos em `site.css`.

## Pré-lançamento (/join)
- Quem entra em qualquer página é redirecionado na hora para `/join` (redirect 307 no `vercel.json`, antes de carregar qualquer HTML). Seguem livres: `/join`, `/api/*`, `/assets/*`, `/niverdamel`, `site.css`, `site.js`, `favicon.svg`.
- Na `/join` o menu mostra só a marca (sem links nem "Entrar") e o rodapé só tem o copyright.
- O formulário "Me avise quando inaugurar!" grava em `waitlist` (name, phone, created_at) no Neon via `/api/waitlist`. Para ver a lista: Neon > SQL Editor > `SELECT * FROM waitlist ORDER BY created_at;`.
- **Para inaugurar:** apague o bloco `redirects` do `vercel.json` e faça o deploy.

## Administração
- `/administracao/ticord/inscrições-join` lista todas as inscrições da `/join` (busca, WhatsApp, remover e baixar CSV).
- Protegida por chave: em Settings > Environment Variables da Vercel crie `ADMIN_KEY` (texto longo e aleatório) e faça o deploy. A página pede essa chave ao abrir; a API `/api/admin-waitlist` recusa qualquer requisição sem ela.

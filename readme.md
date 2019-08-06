# Webpack Workflow + ReactJS

Para utilizar esse workflow basta **clonar o repositório** e rodar os comandos.

```bash
# Para desenvolvimento
yarn dev
# npm run dev

# Para produção
yarn build
# npm run build
```

## Bibliotecas já instaladas

- [React](https://pt-br.reactjs.org/)
- [jQuery v3.4.1](https://jquery.com/)
- [Bootstrap v4.3.1](https://getbootstrap.com/)
- [FontAwesome v5.9.0](https://fontawesome.com/)

## Pasta para desenvolvimento

Os arquivos para desenvolvimento fica dentro da pasta `resources` contendo os seguintes diretórios.

- `resources/images` local responsável para armazenar as **imagens `(.png, .jpe?g, .gif)`**.
- `resources/js` local responsável para codificar os seus **`.js` e em `resources/app.js` deve ser importados**..
- `resources/sass` local responsável para codificar seus **`.s[ac]ss` e em `resources/app.scss` deve ser importados**.
- `resources/svg` local responsável para armazenar seus **`.svg`**.

## Diretório compilado

Todos arquivos serão compilados para pasta `public` ficando da seguinte maneiras.

- `public/images` local que será salvo as **imagens**.
- `public/svg` local que será salvo os **svg**.
- `public/fonts` local que será salvo as **fontes**.
- `public/app.css` arquivo que será salvo os **estilos**.
- `public/app.js` arquivo que será salvo os **javascripts**.

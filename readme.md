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

- [jQuery v3.4.1](https://jquery.com/)
- [Bootstrap v4.3.1](https://getbootstrap.com/)
- [FontAwesome v5.9.0](https://fontawesome.com/)

## Pasta para desenvolvimento

Os arquivos para desenvolvimento fica dentro da pasta `resources` contendo os seguintes diretórios.

- `resources/images` local responsável para armazenar as **imagens `(.png, .jpe?g, .gif)`**.
- `resources/nodesass` local para compilar arquivos automáticos e o nome será gerado em **/public/assets/**.
- `resources/react` local para criar components separados de react e todos será compilado em **/public/assets/react**.
- `resources/styles` local responsável para codificar seus **`.s[ac]ss` e em `resources/app.scss` deve ser importados**.
- `resources/util` local que contém funções auxiliares..
- `resources/vue` local para criar components separados de vue.js.
- `resources/app.js` arquivo de entrada do webpack.

## Diretório compilado

Todos arquivos serão compilados para pasta `public` ficando da seguinte maneiras.

- `public/static/images` local que será salvo as **imagens**.
- `public/static/svg` local que será salvo os **svg**.
- `public/static/fonts` local que será salvo as **fontes**.
- `public/assets/app.css` arquivo que será salvo os **estilos**.
- `public/assets/app.js` arquivo que será salvo os **javascripts**.

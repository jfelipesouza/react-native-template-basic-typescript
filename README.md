# React Native Basic Template

Este template foi feito e é mantido por [Felipe Souza](https://github.com/jfelipesouza) com o intuito de facilitar o começo de desenvolvimento de aplicações feitas com React Native.


## Comece a usar
Para utilizar este template use:


```
npx react-native init projectName --template react-native-template-basic-typescript
```
Em seguida:

```
cd projectName
```

```
yarn start ou npm start
```

- Android: 
 
```
yarn android ou npm run android
```

- IOS:

```
yarn ios ou npm run ios
```

**Obs:** Adicione suas fonts dentro de **assets/fonts** na raiz do projeto e rode o comando **npx react-native-asset** no terminal.

## O que já vem configurado?

Neste template já estão configurados:

- Styled Components;
- React Navigation;
- Typescript;
- Hermes;
- Proguard;
- Reanimated v2;
- Lucide Icons;

### Configuração do desenvolvimento

- babel-plugin-transform-remove-console;

### Atualização da versão

- Atualizada versão do React e React Native;
- Removida a font Inter como configuração padrão;
- Alterada configuração de Icones;

### Observações da versão:

Para adicionar novas fonts adicione na em "./assets/fonts" e use o comando: 

```
npx react-native-asset
```
# Scaffolding for Vue 3 Library

This is a simple scaffold for a Vue 3 library. It uses [Vite](https://vitejs.dev/) for building.
You can use this as a starting point for your own library.

## Usage

```bash
yarn
yarn dev
```

#### Customize the library name

1. Change the name in `package.json`
2. Change the name in `vite.config.js`
3. Change the name in `src/lib.ts`
4. Change the import in `src/main.ts` to match the name in `src/lib.ts`, used for demo purpose. (`src/Demo.vue`)
5. Have fun!

#### Note
Currently Vue 3 lib mode does not support CSS injection, so the built library will separate the CSS file.

## Publishing (Updating...)

This will build the library and place it in the `dist` folder. You can then publish this folder to npm.

```bash
yarn build
```

Then publish the `dist` folder to npm.

#### Using the library

```bash
yarn add <your-library-name>
```

```js
// Import library styles
import 'your-library-name/dist/style.css'; // Or import inside main component

// Global import - Contains all components
import YourLibraryName from 'your-library-name';
createApp(App).use(YourLibraryName).mount('#app');

// Individual component import
import { YourComponentName } from 'your-library-name';
```

## Testing

Currently I'm not applying any testing. All contributions are welcome.




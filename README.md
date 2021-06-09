Initialization:

```bash
npm/yarn init -y
```

Dependencies:

```bash
yarn add express dotenv
yarn add nodemon --dev
```

configure package.json:

```json
{
   "type": "module",
   "scripts": {
      "dev": "nodemon server.js"
   }
}
```

```ts
import dotenv from 'dotenv';
dotenv.config();
```


# Better Server Only

I got so frustrated with React's server-only package that I decided to make a slightly altered version.

This version allows you to easily disable "server-only" in tests and scripts.

## Mark a module as server-only

```js
import "better-server-only";
```

## Disable server-only in tests and scripts

```bash
BETTER_SERVER_ONLY=disabled node my-script.js
```

```bash
BETTER_SERVER_ONLY=disabled npm test
```

## Note

If you're just trying to disable "server-only" in scripts, you don't need this package.
You can run the script with `node --conditions=react-server ...` which will disabled the package.
The same can also be done for this package.

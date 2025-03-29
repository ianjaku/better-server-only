
if (process.env.BETTER_SERVER_ONLY !== "disabled") {
  throw new Error(`
    ***********************************************************
    ** This module cannot be called from a client component! **
    ***********************************************************

    This module, or a module that it imports, is being loaded from a client component.
    You can find server-only modules by searching for imports of the "better-server-only" package.
    If you're running into this while running a **test** or a **script**, you can set the BETTER_SERVER_ONLY environment variable to "disabled" to bypass this check.
  `)
}


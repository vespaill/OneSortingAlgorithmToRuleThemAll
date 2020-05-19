#### Goal
-   Write a single sorting algorithm to work equally well on different data structures.

#### TypeScript Compiler (tsc)

-   tsc compiles TypeScript files into JavaScript.

-   tsc has been configured in `tsconfig.json`.

-   Set to take files from `./src` and place output in `./build`.

#### Nodemon

-   To allow us to re-run Node any time a file changes in our project (execute our code once it has been compiled).

#### Concurrently

-   For helping us run multiple scripts at the same time.

#### We're going to want to run 2 scripts:

1. Start up the TypeScript compiler.
2. Use Nodemon to execute that code.

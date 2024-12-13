Using ZOD for types
-------------------

This repo represents a way to use zod to define a schema for functions.
It shows that runtime type checking occurs. 
It has been tested to work for internal code completion in vscode and vim.
It has been test with published modules when used as in installed module.
The prepublish step is important to build some files that vscode needs when using the package as a module.
The tsc generated files should not be checked into source control and are excluded in the gitignore

The following commands should work and test the code
```
npm i
npm test 
```

The .gitignore rule of ignoring package-lock.json is just to keep this repo smaller. In a real project you probably want that in source control.
The choice of 'standard' as a coding style is arbitrary. It is not what is being shown off.
The choise of tape for testing is arbitrary. It is not what is being shown off. 



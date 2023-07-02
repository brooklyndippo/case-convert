# Case Convert

A JS library to convert variable names in your code across different programming languages.

## Instructions

1. Install the library using `npm i epic-case-converter`   
2. Require the library in your file: `const convertCase = require('epic-case-converter)`   
3. Call the function and pass in two arguments: the variable you want to convert and the case you want to convert it to (all cases outlined below). For example, if you call `convertCase('MyVariableName', 'kebab')` it will return the string `my-variable-name`   

### Camel Case:

Programs: JavaScript, Java, C#, Swift   
Example: myVariableName

### Pascal Case (Upper Camel Case):

Programs: C#, Swift   
Example: MyVariableName

### Snake Case:

Programs: Python, Ruby   
Example: my_variable_name

### Kebab Case (Hyphen Case):

Programs: CSS, HTML, URL slugs   
Example: my-variable-name

### Train Case (Title Case):

Programs: Pascal, Erlang   
Example: My-Variable-Name

### Screaming Snake Case (Upper Snake Case):

Programs: Python (for constants)   
Example: MY_VARIABLE_NAME

### Upper Case:

Programs: C, C++, PHP   
Example: MYVARIABLENAME

### Lower Case:

Programs: C, C++, PHP   
Example: myvariablename

### * LIIMITATIONS: The library cannot convert from Upper Case or Lower Case (C, C++, PHP) since there is no way to parse the words in the variable. It can convert to these cases though. 
# Object Prototype

Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros. Exemplo:

```javascript
// new Object -> Object.prototype

const objA = {
  chaveA: 'A'
  // __proto__: Object.prototype
};

const objB = {
  chaveB: 'B'
  // __proto__: objA
}

// Setando um prototype no objeto B, assim ele herdam recursos do objeto A.
Object.setPrototypeOf(objB, objA);
```


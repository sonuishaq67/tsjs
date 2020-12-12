function getValue(): string | undefined{
  if (Math.random() > 0.5){
    return undefined;
  }
  return "Good";
}

let value = getValue() ?? "Default";
console.log(value);

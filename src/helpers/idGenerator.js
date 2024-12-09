export function idGenerator() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  let resultado = "";

  for (let i = 0; i < 6; i++) {
    const indiceAleatorio = Math.floor(
      Math.random() * (i < 2 ? letters.length : numbers.length)
    );
    resultado += i < 2 ? letters[indiceAleatorio] : numbers[indiceAleatorio];
  }

  return resultado;
}

import Home from '@/pages/index'

const capitalize = (text: string) => {
  if (text.length === 0)
    return "";

  const words = text.split(" ");

  const caplizeWord = (text: string) => {
    const firstLetter = text[0].toUpperCase();
    const othersLetters = text.substring(1);

    return `${firstLetter}${othersLetters}`;
  }

  return words.map((word) => caplizeWord(word)).join(" ");
};

describe("Sanity of formatter", () => {

  test("Should do nothing for empty entry", () => {
    expect(capitalize("")).toBe("");
  })

  test("Should return Teste for teste", () => {
    expect(capitalize("teste")).toBe("Teste");
  })

  test("Should return Teste Teste for teste teste", () => {
    expect(capitalize("teste teste")).toBe("Teste Teste");
  })
})
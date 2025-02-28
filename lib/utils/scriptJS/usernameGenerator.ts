import { customAlphabet } from "nanoid";

export const userNameGenerator = async (name: string) => {
  const number = "0123456789";
  const processedName = name
    .replace(/\s+/g, "_") // Remplace un ou plusieurs espaces par un underscore
    .toLowerCase() // Convertir en minuscules pour plus de cohérence
    .slice(0, 6); // Limiter à 6 caractères
  const uniqueNumbers = customAlphabet(number, 5)();

  // console.log(`@${name}_${uniqueNumbers}`);

  return `@${processedName}_${uniqueNumbers}`;
};

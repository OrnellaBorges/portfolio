/* Cette fonction permet de transformer un tableau d'objet qu'on lui passe*/

/* const chunkSize = 2; // Définir la taille de chaque sous-tableau
const transformedTEST = [];
for (let i = 0; i < TEST.length; i += chunkSize) {
  const chunk = TEST.slice(i, i + chunkSize);
  console.log('chunk >', chunk);
  console.log('end of chunk')
  transformedTEST.push(chunk);
} */

export const groupEvenElements = (array) => {
    const chunkSize = 2;
    const transformedArray = array
        .map((item, index) =>
            index % chunkSize === 0
                ? array.slice(index, index + chunkSize)
                : null
        )
        .filter(Boolean);
    return transformedArray;
};

export const defineCor = (tipos) => {
  const tipo = typeof tipos !== 'string' ? tipos[0].name : tipos

  const cores = {
    normal: {
      color: "#a8a878",
      backgroundColor: "#a8a878",
    },
    fire: {
      color: "#f08030",
      backgroundColor: "#f08030",
    },
    water: {
      color: "#6890f0",
      backgroundColor: "#6890f0",
    },
    electric: {
      color: "#f8d030",
      backgroundColor: "#f8d030",
    },
    grass: {
      color: "#78c850",
      backgroundColor: "#78c850",
    },
    ice: {
      color: "#98d8d8",
      backgroundColor: "#98d8d8",
    },
    ground: {
      color: "#e0c068",
      backgroundColor: "#e0c068",
    },
    flying: {
      color: "#a890f0",
      backgroundColor: "#a890f0",
    },
    ghost: {
      color: "#705898",
      backgroundColor: "#705898",
    },
    rock: {
      color: "#b8a038",
      backgroundColor: "#b8a038",
    },
    fighting: {
      color: "#c03028",
      backgroundColor: "#c03028",
    },
    poison: {
      color: "#a040a0",
      backgroundColor: "#a040a0",
    },
    psychic: {
      color: "#f85888",
      backgroundColor: "#f85888",
    },
    bug: {
      color: "#a8b820",
      backgroundColor: "#a8b820",
    },
    dark: {
      color: "#705848",
      backgroundColor: "#705848",
    },
    steel: {
      color: "#b8b8d0",
      backgroundColor: "#b8b8d0",
    },
    dragon: {
      color: "#7038f8",
      backgroundColor: "#7038f8",
    },
    fairy: {
      color: "#f781d8",
      backgroundColor: "#f781d8",
    },
  };

  return cores[tipo]
};

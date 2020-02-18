export const uniqueInn = (regexp, current) => (value, data = {}) => {
  for (const name in data) {
    if (name !== current && name.match(regexp) && data[name] === value)
      return "Данный ИНН уже указан в анкете";
  }
};

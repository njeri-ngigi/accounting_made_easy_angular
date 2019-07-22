export const titleCase = (name) => {
  const nameArray = name.split(' ');
  nameArray.map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`);
  return nameArray.join(' ');
};

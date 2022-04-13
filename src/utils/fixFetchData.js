export const fixFetchData = (children, setData) => {
  const auxArray = [];
  children.forEach((child) => auxArray.push(child.data));
  setData(auxArray);
};

export const fixFetchData = (children) => {
  const auxArray = [];
  if (children) children.forEach((child) => auxArray.push(child.data));

  return auxArray;
};

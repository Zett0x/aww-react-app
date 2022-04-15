/* i am are not interested in other keys, the only keys that i am interested on is id,title,thumbnail, subreddit_name_prefixed and permalink
  This function is for extracting those keys from the children array.

*/

export const fixFetchData = (children) => {
  const auxArray = [];
  //if (children) children.forEach((child) => auxArray.push(child.data));
  if (children)
    children.forEach((child) =>
      auxArray.push({
        id: child.data.id,
        title: child.data.title,
        thumbnail: child.data.thumbnail,
        subreddit_name_prefixed: child.data.subreddit_name_prefixed,
        permalink: child.data.permalink,
      })
    );

  return auxArray;
};

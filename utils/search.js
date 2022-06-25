export const searchInObjectsArray = (val, key, arr) => {
  const res = [];

  arr.forEach((el) => {
    const currEl = el?.[key]?.toLowerCase();

    const idx = currEl?.indexOf(val?.toLowerCase());

    if (idx !== -1) {
      res.push(el);
    }
  });

  return res || [];
};

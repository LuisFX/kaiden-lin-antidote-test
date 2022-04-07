const arrayToGroupObj = (array) => {
  return array.reduce((r, a) => {
    r[a.groupBy] = r[a.groupBy] || [];
    r[a.groupBy].push(a);

    return r;
  }, Object.create(null));
};

export default arrayToGroupObj;

const square = (req: Array<number>) => {
  console.log(`we square ${req[0]} and ${req[1]}`);
  req[0] = Math.sqrt(req[0]);
  req[1] = Math.sqrt(req[1]);
  console.log(req[0]);
  console.log(req[1]);
  let next = [req[0], req[1]];
  return next;
};

export default square;

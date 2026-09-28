export function chunkArray(array, size) {
  if (!Array.isArray(array)) throw new TypeError("Expected array to be an array");
  if (!Number.isInteger(size) || size < 1) throw new RangeError("Expected size to be a positive integer");
  const result=[];
  for(let i=0;i<array.length;i+=size) result.push(array.slice(i,i+size));
  return result;
}

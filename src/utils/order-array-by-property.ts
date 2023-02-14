export function orderArrayByProperty(
  array: Array<any>,
  property: string
): Array<any> {
  array.sort((a, b) => {
    if (a[property] > b[property]) {
      return 1;
    }
    if (a[property] < b[property]) {
      return -1;
    }
    return 0;
  });
  return array;
}

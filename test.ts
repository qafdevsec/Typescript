function compareStrings(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  let equal = true;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      equal = false;
    }
  }

  return equal;
}

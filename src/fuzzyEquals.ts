export function fuzzyEquals(
  query: string,
  text: string,
  caseSensitive = false
) {
  const textLength = text.length,
    queryLength = query.length;

  if (queryLength > textLength) {
    return false;
  } else {
    return internalFuzzyEquals(
      caseSensitive !== true ? query.toLowerCase() : query,
      queryLength,
      caseSensitive !== true ? text.toLowerCase() : text,
      textLength
    );
  }
}

export function internalFuzzyEquals(
  query: string,
  queryLength: number,
  text: string,
  textLength: number
) {
  let i = 0,
    j = 0;

  outer: while (i < queryLength) {
    const ch = query.charAt(i++);

    while (j < textLength) {
      if (text.charAt(j++) === ch) {
        continue outer;
      }
    }

    return false;
  }

  return true;
}

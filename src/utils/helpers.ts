export function truncateString(string: string, limit: number) {
  if (string.length > limit) {
    return string.substring(0, limit) + "...";
  } else {
    return string;
  }
}

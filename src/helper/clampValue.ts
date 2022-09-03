export function clampValue(min: number, max: number) {
  let length = max - min;
  if (length === 0) {
    length = 1;
  }
  return (value: number) => {
    if (value <= min) {
      return 0;
    }
    if (value >= max) {
      return 1;
    }
    return (value - min) / length;
  };
}

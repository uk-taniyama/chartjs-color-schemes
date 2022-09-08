export function clampValue(
  min: number,
  max: number,
  rangeMin: number = 0,
  rangeMax: number = 1,
) {
  const d = max - min;
  if (d === 0) {
    return () => rangeMin;
  }
  const a = (rangeMax - rangeMin) / d;
  const b = (rangeMin * max - rangeMax * min) / d;
  return (value: number) => {
    if (value <= min) {
      return rangeMin;
    }
    if (value >= max) {
      return rangeMax;
    }
    return a * value + b;
  };
}

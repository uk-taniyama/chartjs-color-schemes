/**
 * Get the function is input value [min,max] translate to [colorMin, colorMax].
 * ex) min:0, max:20, colorMin: 1.0, colorMax: 0.0
 * returned function call by '0' then returned '1.0'.
 * returned function call by '20' then returned '0.0'.
 */
export function clampValue(
  min: number,
  max: number,
  rangeMin: number = 0.0,
  rangeMax: number = 1.0,
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

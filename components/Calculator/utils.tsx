export const formatStringToNumber = (value: number | string) => {
  if (typeof value === 'string') {
    const padronizedValue = value.replace(',', '.');
    const floatValue = parseFloat(padronizedValue);
    return isNaN(floatValue) ? null : floatValue;
  }
  return 0;
}
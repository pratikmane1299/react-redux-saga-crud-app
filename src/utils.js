export function generateRandomHexColor(removeHashPrefix = false) {
  const letters = '0123456789ABCDEF';

  let color = '';
  if (!removeHashPrefix) {
    color = '#';
  }

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

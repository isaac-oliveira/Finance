export default function getRandom(length) {
  return Math.floor(
    10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1)
  );
}

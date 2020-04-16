export default function getRandomColor() {
  return `rgb(${128+Math.floor(128*Math.random())}, ${128+Math.floor(128*Math.random())}, ${128+Math.floor(128*Math.random())})`;
}

export function checkCollision(objectA, objectB) {
  const xDistance = (objectA.pos[0] + (objectA.width / 2)) - (objectB.pos[0] + (objectB.width / 2));
  const yDistance = (objectA.pos[1] + (objectA.height / 2)) - (objectB.pos[1] + (objectB.height / 2));
  const width = (objectA.width + objectB.width) / 2;
  const height = (objectA.height + objectB.height) / 2;

  if (Math.abs(xDistance) <= width && Math.abs(yDistance) <= height) {
    if (((Math.abs(xDistance) / width) * 0.80) > (Math.abs(yDistance) / height)) {
      return 'side';
    }
    return 'top';
  }
  return 'none';
}
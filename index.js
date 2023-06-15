// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  return Math.abs(blockNumber - 42);
}
function distanceFromHqInFeet(blockNumber) {
  const blocks = distanceFromHqInBlocks(blockNumber);
  return blocks * 264;
 }
  function distanceTravelledInFeet(startBlock, endBlock) {
  const blocks = Math.abs(endBlock - startBlock);
  return blocks * 264; 
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; 
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
    return 25; 
  } else {
    return 'cannot travel that far'; 
}
}

console.log(distanceFromHqInBlocks(35));
console.log(distanceFromHqInFeet(35)); 
console.log(distanceTravelledInFeet(35, 45));
console.log(calculatesFarePrice(35, 45))
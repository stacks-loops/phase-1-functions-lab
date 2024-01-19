// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - 42);
  }

  function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264
    const blocks = distanceFromHqInBlocks(pickupLocation)
    return feetPerBlock * blocks
  }


  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(startBlock - endBlock);
    return blocksTravelled * 264;
  }

  function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)

    if (feet <= 400) {
      return 0
    }
    else if ( feet >= 400 && feet < 2000 ) {
      return (feet - 400) * .02
    }
    else if (feet > 2000 && feet < 2500 )
      return 25
    else { return 'cannot travel that far'}


  }
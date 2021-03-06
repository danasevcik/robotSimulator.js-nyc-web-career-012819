class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0,0];
    this.bearing = 'north';
  }

  setCoordinates(x, y) {
    // this.x = x;
    // this.y = y;
    this.coordinates = [x,y];
  }

  setBearing(bearing) {
    const directions = ["north", "south", "east", "west"];
    if (directions.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw 'Invalid Robot Bearing';
    }
  }

  place({x, y, direction}) {
    this.coordinates = [x, y];
    this.bearing = direction
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.setBearing('east')
    } else if (this.bearing === 'east') {
      this.setBearing('south')
    } else if (this.bearing === 'south') {
      this.setBearing('west')
    } else if (this.bearing === 'west') {
      this.setBearing('north')
    }
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.setBearing('west')
    } else if (this.bearing === 'west') {
      this.setBearing('south')
    } else if (this.bearing === 'south') {
      this.setBearing('east')
    } else if (this.bearing === 'east') {
      this.setBearing('north')
    }
  }

  advance() {
    let x = this.coordinates[0]
    let y = this.coordinates[1]
    // console.log('this in advance', this)
    if (this.bearing === 'north') {
      // console.log('this in if statement', this)
      this.setCoordinates(x, y+1)
    } else if (this.bearing === 'east') {
      this.setCoordinates(x+1, y)
    } else if (this.bearing === 'south') {
      this.setCoordinates(x, y-1)
    } else if (this.bearing === 'west') {
      this.setCoordinates(x-1, y)
    }
  }

  translateInstructions(instruction) {
    let instArray = instruction.split('')
    instArray.forEach(letter => {
      if (letter === 'L') {
        this.turnLeft()
      } else if (letter === 'R') {
        this.turnRight()
      } else if (letter === 'A') {
        this.advance()
      }
    })
  }
  
}

// let robo = new Robot
// robo.setCoordinates(1,3)
// robo.coordinates[0]

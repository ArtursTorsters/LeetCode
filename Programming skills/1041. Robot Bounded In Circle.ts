// On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:

//     The north direction is the positive direction of the y-axis.
//     The south direction is the negative direction of the y-axis.
//     The east direction is the positive direction of the x-axis.
//     The west direction is the negative direction of the x-axis.

// The robot can receive one of three instructions:

//     "G": go straight 1 unit.
//     "L": turn 90 degrees to the left (i.e., anti-clockwise direction).
//     "R": turn 90 degrees to the right (i.e., clockwise direction).

// The robot performs the instructions given in order, and repeats them forever.





// if the final position does not change return true


function isRobotBounded(instructions: string): boolean {
  
    const directions = [
        [0, 1],  // Up
        [1, 0],  // Right
        [0, -1], // Down
        [-1, 0]  // Left
      ];
      let x = 0;   // Current robot position in x axis
      let y = 0;   // Current robot position in y axis
      let dir = 0; // Current robot direction
    
      for (let c of instructions) {
        switch (c) {
          case 'G':
            x += directions[dir][0]; // Move forward in current direction
            y += directions[dir][1]; // Move forward in current direction
            break;
          case 'L':
            dir = (dir + 3) % 4; // dir = dir - 1
            break;
          case 'R':
            dir = (dir + 1) % 4; // dir = dir + 1
        }
      }
    
      // If the robot returns to initially position
      // or the robot is not facing north
      // it will eventually back to the initially position
      // within 4 times of repeating the instructions
      return x === 0 && y === 0 || dir !== 0;
    };
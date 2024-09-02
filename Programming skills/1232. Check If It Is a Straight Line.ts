// You are given an array coordinates, coordinates[i] = [x, y], 
// where [x, y] represents the coordinate of a point. 
// Check if these points make a straight line in the XY plane.


function checkStraightLine(coordinates: number[][]): boolean {
    // There must be at least two points to form a line
    if (coordinates.length < 2) return false;
    
    // Calculate the slope components (dy, dx) between the first two points
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    
    const dx1 = x2 - x1;
    const dy1 = y2 - y1;
    
    // Loop over all other points and check if they have the same slope
    for (let i = 2; i < coordinates.length; i++) {
      const [x3, y3] = coordinates[i];
      
      const dx2 = x3 - x1;
      const dy2 = y3 - y1;
      
      // Cross product should be zero for collinear points (same slope)
      if (dy1 * dx2 !== dy2 * dx1) {
        return false; // The points are not on the same line
      }
    }
  
    return true; // All points are on the same line
  }
  
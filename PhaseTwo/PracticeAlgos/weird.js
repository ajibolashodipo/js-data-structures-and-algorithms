//Code starts here
https://www.hackerrank.com/contests/projecteuler/challenges

       N
    W     E
       S
       
// modulo
 -2 -1 0 1 2 3 4 5 6 7 8 9
	1	 2 0 1 2 0 1 2 0 1 2 0

//e.g cmds = "GL"  cmds = "GL" cmds = "GL"  cmds = "GL" 

// cmds == "RG"

// current goal is to check if starting point is rqual to end point
// i.e if end point is [0, 0]
       
function doesCircleExists(cmds)
{    
  //initial position 
  // (x, y)
  pos = [0, 0] // anything you want
  
  c_arr = ["N", "E", "S", "W"]  // method 2
  c_pos = 0  										// method 2
  //d = "N" //method 1 and 3
  d = c_arr[c_pos] // method 2
  
//   spin = {"R": 1, "L":-1} // method 2b

//   assumption you start from facing north

  cardinal = { "N":  [0, 1], 
                "W":  [-1, 0],
                "E":  [1, 0],
                "S":  [0, -1],
  }
  

  for(let i =0; i < cmds.length; i++)
  {
    
    
    /// method 1
        //   for (const hand of [
        //     ["L", ["NW", "WS", "SE", "EN"]],
        //     ["R", ["NE", "ES", "WN", "SW"]]
        //   ])
        //   {

        //     //e.g hand = ["L", ["NW", "WS", "SE", "EN"]]
        //     //i.e hand[0] = "L"
        //     //		hand[1] = ["NW", "WS", "SE", "EN"]
        //     for (const map of hand[1])
        //     {
        //       //e.g map = "NW"
        //       //i.e map[0] = "N"
        //       //    map[1] = "W"
        //       if(cmds[i]===hand[0] && d===map[0]){
        //         d=map[1]
        //       }
        //     }
        //   }
    
    // method 2a
    				if(cmds[i]==="R")
            {
              c_pos = (c_pos+1)%4
            }
    				if(cmds[i]==="L")
            {
              c_pos = (c_pos-1)%4
            }
    
    //method 2b
    				// s = spin[cmds[i]]
					// 	c_pos = (c_pos + s)%4
    
    
    // method 3
              if(cmds[i]==="L" && d==="N"){
                d="W"
              }
               if(cmds[i]==="L" && d==="W"){
                d="S"
              }
               if(cmds[i]==="L" && d==="E"){
                d="N"
              }
               if(cmds[i]==="L" && d==="S"){
                d="E"
              }
                if(cmds[i]==="R" && d==="N"){
                d="E"
              }
               if(cmds[i]==="R" && d==="W"){
                d="N"
              }
               if(cmds[i]==="R" && d==="E"){
                d="S"
              }
               if(cmds[i]==="R" && d==="S"){
                d="W"
              }
    
    
    
    if( cmds[i]==="G")
    {
      d = c_arr[c_pos]  // method 2
      
      x  = pos[0] + cardinal[d][0]
      y =  pos[1] + cardinal[d][1]

      pos = [x, y]
    }
  }
  
  if(pos===[0, 0])
  {
    return true
  }
  return false
}

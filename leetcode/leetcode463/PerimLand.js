/**
 * @param {number[][]} grid
 * @return {number}
 */

// 解题思路：每当有一块陆地相邻的时候，边长都会减2；所以我们可以通过判断有多少块陆地以及有多少条相邻的边来取得最终的周长。
// 岛屿的总周长 = 陆地的数量 * 4 - 相邻的边的数量 * 2 




var islandPerimeter = function(grid) {
  let land  = 0; // 定义陆地
  let border = 0; // 定义相交的边

  for (let i = 0; i< grid.length; i++) {  
      for(let j = 0; j < grid[i].length; j++){
          if(grid[i][j] == 1){
              land++
              if (i < grid.length-1 && grid[i+1][j] == 1 ) { //判断同一列是否相邻 
                  border++
              }
              if (j < grid[i].length - 1 &&  grid[i][j+1] == 1 ) { // 判断同一行是否有相邻的
                  border++
              }
          }
      }
  }
  return 4 * land - 2 * border
};
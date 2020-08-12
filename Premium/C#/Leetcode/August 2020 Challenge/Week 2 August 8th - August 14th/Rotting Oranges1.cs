public class Solution {
    public int OrangesRotting(int[][] grid) {
        var rows = grid.Length;
        var cols = grid[0].Length;
        
        Queue<int[]> rottenQ = new Queue<int[]>();
        var oranges = 0;
        
        
        for(var i = 0; i < rows; i++){
            for(var j = 0; j < cols; j++){
                var current = grid[i][j];
                if(current == 1){
                    oranges++;
                    var noOrange = 0;
                    if(i - 1 < 0 || grid[i-1][j] == 0) noOrange++;
                    if(i + 1 >= grid.Length || grid[i+1][j] == 0) noOrange++;
                    if(j - 1 < 0 || grid[i][j-1] == 0) noOrange++;
                    if(j + 1 >= grid[0].Length || grid[i][j + 1] == 0) noOrange++;
                        
                } 
                else if (current == 2)
                {
                    rottenQ.Enqueue(new int[] {i,j});
                }
            }
        }
        // if no fresh oranges to begin with
        if (oranges == 0) return 0;
        // if no rotten oranges to rot the fresh oranges
        if (rottenQ.Count == 0) return -1;
        
        int mins = 0;
        while (rottenQ.Count > 0)
        {
            int qC = rottenQ.Count;
            for (int idx = 0; idx < qC; ++idx)
            {
                int[] orange = rottenQ.Dequeue();
                int i = orange[0];
                int j = orange[1];
                // up
                if (i - 1 >= 0 && grid[i - 1][j] == 1)
                {
                    rottenQ.Enqueue(new int[] { i - 1, j });
                    grid[i - 1][j] = 2;
                    oranges--;
                }
                // down
                if (i + 1 < grid.Length && grid[i + 1][j] == 1)
                {
                    rottenQ.Enqueue(new int[] { i + 1, j });
                    grid[i + 1][j] = 2;
                    oranges--;
                }
                // left
                if (j - 1 >= 0 && grid[i][j - 1] == 1)
                {
                    rottenQ.Enqueue(new int[] { i, j - 1 });
                    grid[i][j - 1] = 2;
                    oranges--;
                }
                // right
                if (j + 1 < grid[0].Length && grid[i][j + 1] == 1)
                {
                    rottenQ.Enqueue(new int[] { i, j + 1 });
                    grid[i][j + 1] = 2;
                    oranges--;
                }
            }
            // since we're starting from the rotten oranges, only increment resulting minutes if there are oranges to process
            if (rottenQ.Count != 0) mins++;
        }
        
        // handling cases like [[2],[2],[1],[0],[1],[1]] where oranges are isolated but not by themselves
        return oranges == 0 ? mins : -1;
    }
    
    
    
}
/*Random Point in Non-overlapping Rectangles

Given a list of non-overlapping axis-aligned rectangles rects, write a function pick which randomly and uniformily picks an integer point in the space covered by the rectangles.

Note:

    An integer point is a point that has integer coordinates. 
    A point on the perimeter of a rectangle is included in the space covered by the rectangles. 
    ith rectangle = rects[i] = [x1,y1,x2,y2], where [x1, y1] are the integer coordinates of the bottom-left corner, and [x2, y2] are the integer coordinates of the top-right corner.
    length and width of each rectangle does not exceed 2000.
    1 <= rects.length <= 100
    pick return a point as an array of integer coordinates [p_x, p_y]
    pick is called at most 10000 times.

Example 1:

Input: 
["Solution","pick","pick","pick"]
[[[[1,1,5,5]]],[],[],[]]
Output: 
[null,[4,1],[4,1],[3,3]]

Example 2:

Input: 
["Solution","pick","pick","pick","pick","pick"]
[[[[-2,-2,-1,-1],[1,0,3,0]]],[],[],[],[],[]]
Output: 
[null,[-1,-2],[2,0],[-2,-1],[3,0],[-2,-2]]

Explanation of Input Syntax:

The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array of rectangles rects. pick has no arguments. 
Arguments are always wrapped with a list, even if there aren't any.
*/
public class Solution {

    public int[][] sPoints {get; set;}
    public SortedDictionary<int,int> RectangleByArea = new SortedDictionary<int, int>();
    public int NumberOfSolutions {get;set;}
    public Random rand = new Random();
    public Solution(int[][] rects) {
        // get the points of each rectangle
        sPoints = rects;
        // iterate through rects array
        for(var i = 0; i < rects.Length; i++){
            
            var rect = rects[i];
            // the num of solutions is calculated by adding (x2 - x1 +1) times (y2 - y1 +1)
            NumberOfSolutions += (rect[2] - rect[0]+1) *(rect[3]-rect[1]+1);
            // set the rectangle by area by adding the number of solutions and the current index to the SortedDictionary
            RectangleByArea.Add(NumberOfSolutions, i);
        }
    }
    
    public int[] Pick() {
        // randomly generate a number and add 1 to it
        var randomNum = rand.Next(NumberOfSolutions)+1;
        var rectIdx = RectangleByArea.First(x => x.Key >= randomNum).Value;

        return Pick(SolutionPoints[rectIdx]);
    }

    public int[] Pick(int[] rectangle){
        var x = rand.Next(rectangle[0],rectangle[2]+1);
        var y = rand.Next(rectangle[1],rectangle[3]+1);
        return new[] {x,y};
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(rects);
 * int[] param_1 = obj.Pick();
 */
/* Given an array A of non-negative integers, return an array consisting of all the even elements of A, 
followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

 

Note:

    1 <= A.length <= 5000
    0 <= A[i] <= 5000
*/
public class Solution {
    public int[] SortArrayByParity(int[] A) {
        // create index to store the next even number you run into
        int index = 0;
        int i = 0;
        int temp = 0;
        // iterate through array
        while(i < A.Length){
            // if you encounter an even number move it to a[index]
            if(A[i] % 2 == 0){
                temp = A[index];
                A[index] = A[i];
                index++;
                A[i] = temp;
            }
            i++;
        }
        return A;
    }
}



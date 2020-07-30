/** 4. Median of Two Sorted Arrays
Hard

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0

Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

*/

const findMedianSortedArrays = (nums1,nums2) => {
    
    // combine nums1 and nums2 array
    const numArr = nums1.concat(nums2);
    // sort numArr
    numArr.sort((a,b)=> { return a - b; });
    // find array median index
    let i = numArr.length / 2;
    return i % 1 === 0 ? Number.parseFloat((numArr[i-1] + numArr[i]) / 2.0).toFixed(1) : 
    Number.parseFloat(numArr[Math.floor(i)]).toFixed(1);
    
}


console.log(findMedianSortedArrays([1,3,4],[2,7]));
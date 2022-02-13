# time- O(n klogk),
# space- O(n)

# solution needs to be optimized though


class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
         # Create an empty array to store your answer
        res = []
        
        # Get the length of the nums array
        n = len(nums)
        
        # Slice the input array to get data from index 0 to index k
        win_arr = nums[:k-1]
        # [1,3]
        
        # From index 2 - n. i.e data [-1 to 7]
        for i in range(k-1, n):
             # We want to append the integer at the current index to  curr_arr
            win_arr.append(nums[i])
            # [1,3,-1]
            
            # If we go past the window size k, we want to remove the first integer in the curr_arr
            if i > k - 1:
                win_arr.pop(0)
            
            # Sort the curr_arr after every iteration
            sorted_arr = sorted(win_arr)
            
            # Check if k is odd
            if k % 2 == 1:
                # Then append the integer at k//2th index of the sorted_arr to the ans array
                res.append(sorted_arr[k//2])
                
            # If k is even, grab the integers at k//2 and before that of the sorted array, sum the two integers and divide by 2
            else:
                res.append((sorted_arr[k//2] + sorted_arr[k//2 - 1]) / 2)
                           
        return res
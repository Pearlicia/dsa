# Time complexity Big O(n), Space complexity Big O(n)

class Solution:

    def medianSlidingWindow( nums: list, k: int):
        window = []
        result = []
        
        // loop through list of numbers
        for i, num in enumerate(nums):
        
        // add the curren num to the window
            window.append(num)
            
            // check if lenght of window is equal to the given k
            if len(window) == k:
            
                if len(window) == k:
                // sort the items in window
                    sortW = sorted(window)
                    
                    // get the legnth of window 
                    lennn =  len(window)
                    
                    // if the length of window is odd number, get the median
                    if lennn % 2 == 1:
                        result.append(sortW[lennn //2])
                        // delete the first item in the window so our window can move forward
                        del  window[0]
                    else:
                    // if the length of window is event number, get the median
                        result.append((sortW[lennn //2] +  sortW[lennn //2- 1])/ 2)
                        del window[0]

// since length of window is not equal to k, just waka pass
            else:
                pass

// return the result when loops ends
        return result
        
        
        
        
        
        // without comment
        

class Solution:

    def medianSlidingWindow( nums: list, k: int):
        window = []
        result = []
        

        for i, num in enumerate(nums):
            window.append(num)
            if len(window) == k:
                if len(window) == k:
                    sortW = sorted(window)
                    lennn =  len(window)
                    if lennn % 2 == 1:
                        result.append(sortW[lennn //2])
                        del  window[0]
                    else:
                        result.append((sortW[lennn //2] +  sortW[lennn //2- 1])/ 2)
                        del window[0]

            else:
                pass

        return result
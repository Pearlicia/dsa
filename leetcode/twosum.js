



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const compound = {};
    for(let i = 0; i < nums.length; i++){
        if(compound[nums[i]] >= 0){
            return [ compound[nums[i]], i ]
        }
        compound[target-nums[i]] = i
    }
    
    return compound;
    
};

console.log([2,7,11,15], 9)
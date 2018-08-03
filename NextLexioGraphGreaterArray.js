/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
        
    for(i=nums.length-2;i>=0;i--)
    {
        if(nums[i+1]>nums[i])
            {
                
             fix=i;
             j=nums.length-1;
                min=100;
                while(j>i)
                    {
                        if((nums[j]>nums[fix])&&(nums[j]-nums[fix]<min))
                            {
                                min=nums[j]-nums[fix];
                                loc=j;
                                console.log(loc);
                            }
                        j--;
                        
                    }
                swap(nums,i,loc);
                console.log(nums);
                reverse(nums,fix);
                return;
            }
        
       
    }
     nums.reverse();
};
var swap=function(nums,i,j)
{
    var temp=nums[j];
    nums[j]=nums[i];
    nums[i]=temp;
};
var reverse=function(nums,loc)
{
    len=nums.length-(loc+1);
    fix=len;
    i=0;
    while(len!=parseInt(fix/2))
        {
            temp=nums[loc+1];
            nums[loc+1]=nums[nums.length-1-i];
            nums[nums.length-1-i]=temp;
            loc++;
            len--;
            i++;
        }
}

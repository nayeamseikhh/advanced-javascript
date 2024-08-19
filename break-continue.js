const nums = [1, 2, 3, - 6, - 6, - 4, - 2, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < nums.length; i++) {
    
    if (nums[i] > 7) {
        break;
    }
    console.log(nums[i]);
}

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
        continue;
    }
    console.log(nums[i]);
}
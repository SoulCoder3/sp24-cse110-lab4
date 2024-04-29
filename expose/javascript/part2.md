## Part2
1. It prints "3". Since the parameter ```price = [100, 200, 300], so prices.length = 3```. During the for loop, when ```i = 3, i < prices.length was false```, and it was out of the loop. Since we declare $i$ with var, the scope of $i$ will be the whole function. So ```console.log(i)``` will print 3.

2. It prints "150". During the last for loop, $i$ = 2.
```javascript
var discountedPrice = prices[2] * (1 - discount) = 300 * (0.5) = 150
```
Since we declare **discountedPrice** with var, the scope of it will be the whole function. So ```console.log(discountedPrice)``` will print 150.

3. It prints "150". Because we declared *finalPrice$* with *var*, the scope of the variable is in the whole function. After the *for loop*, 
```javascript
finalPrice = 150
```
So ```console.log(finalPrice)``` will print 150.

4. The function will return ```[50, 100, 150]```.  During the *for loop*, for each element in *prices* array, it will mutiple $(1 - discount)$ and round the result, and then push to *discounted* array. So we have
```javascript
discounted[0] = 100 * 0.5 = 50
discounted[1] = 200 * 0.5 = 100
discounted[2] = 300 * 0.5 = 150
```
Since the function return *discounted*, it actually return  ```[50, 100, 150]``.
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

5. It returns *ReferenceError* because $i$ is not defined. Since $i$ was declared by **let**, the scope of $i$ is just in the *for loop*. But ```console.log(i)``` is out of for loop. So the function returns error.

6. It returns *ReferenceError* because **discountedPrice** variable is not defined. Since $discountedPrice$ was declared by **let**, the scope of $i$ is just in the *for loop*. But ```console.log(discountedPrice)``` is out of for loop. So the function returns error.

7. It prints "150". Since the function declare **finalPrice** in the function but out of the for loop, the scope of **finalPrice** is the whole function. ```console.log(discountedPrice)``` is in the function. So it successfully prints "150".

8. The function will return ```[50, 100, 150]```. **finalPrice** is declared in the function but out of the for loop, the scope of **finalPrice** is the whole function. By **Q4**, ```discounted = [50, 100, 150]```. So the function successfully return **discounted** variable. 

9. It returns *ReferenceError* because $i$ is not defined. Since $i$ was declared by **let**, the scope of $i$ is just in the *for loop*. But ```console.log(i)``` is out of for loop. So the function returns error.

10. It prints $"3"$. Since **length** is declared with const and its initial value is $3$, its scope is the whole function. And ```console.log(length)``` is in the function, so it prints $3$, which is the length of the input array.

11. The function will return ```[50, 100, 150]```. **discountedPrice** is declared with **const** in the for loop, we initialize **discountedPrice** in each loop but never change the value. So the function is correct and successfully return the discounted array.

12. 
* A. ```student.name```
* B. ```student["Grad Year"]```
* C. ```student.greeting()```
* D. ```student['Favorite Teacher'].name```
* E. ```student.courseLoad[0]```

13.
* A. **'32'**, because integer 2 map to string '2' in '+' operation.
* B. **1**, because string '3' map to integer 3 in '-' operation.
* C. **3**, in '+' operation, **null** will conver to integer 0, then add to 3.
* D. **'3null'**, in '+' operation, **null** will conver to string 'null', then connect to '3'.
* E. **4**, **true** will conver to 1, then add to 3.
* F. **3**, **false** will conver to 0.
* G. **3undefined**, **undefined** conver to string, then connect to '3'.
* H. **NaN**, which means **Not a Number** because **underfined** can't conver to a vaild number.

14.
* A. **true**, because string '2' will conver to integer 2.
* B. **false**. Because Javascript compared strings letter-by-letter. By the first letter, '2' < '1', which is false, so it return false.
* C. **true**. '2' will conver to integer 2, and then compared, so it return true.
* D. **false**. '===' will compared the value and the type. Since they have different type, it return false.
* E. **false**. true conver to 1, and it is not eqal to 2. So it return false.
* F. **true**. Since $2 != 0$, boolean(2) is true.

15. **==**: can compared with different type variable. If their types are different, it will conver to the same type and then compare their value.
    **===**:  It compare their types and values. The types and the values should be strictly equal.

16. In part2-question16.js file

17. The function will return the ```[2, 4, 6]```. In the for loop in the **modifyArray** function, for each element in array, it will call the **callback(array[i])** function, and the function will return twic the original number. The return value will be push to the **newArr** array and final return **newArr**. So the final return is ```[2, 4, 6]```.

18. In part2-question18.js file

19. Output:
```
1
4
3
2
```
Since ```setTimeout()``` is an asynchronous function, so it will not pause execution of other function in the functions stack. In the function, it will print $1$ first. When the program run in line 3, it will set a 1 second timer. The function is put into the event queue to wait and conuntie run the next line. The function in line 4 will also be put into the event queue to wait even its delay is 0. Then in line 5, the function prints 4. After the function body is executed, the event loop begins to process the events in the queue. It prints $3$ first because it has delay of 0, then finally prints $2$.
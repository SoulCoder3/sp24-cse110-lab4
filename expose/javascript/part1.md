## Part 1
#### var
1. It prints "values added: 20".
2. It prints "final result: 20".

#### let
3. It prints "values added: 20".
4. It returns an *error*, because the scope of _let_ is in **if else block**. So **result** variable out of the if else block is undefine.

#### const
5. It won't return anything because the code return error in line $7$, since it tried to reassigned the result variable. Since the result variable is declared by **const**, we can't reassigned after it is assigned for the first time.
6. Since the code returns an error in line $7$, it won't print anything by line 13. The reason is same as above. 


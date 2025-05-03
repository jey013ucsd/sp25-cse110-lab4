1. values added: 20
2. final result: 20
3. var should not be used because it allows for result to be accessed outside of its if-statement. This may lead to unintended behavior later on.
4. values added: 20
5. Line 9 returns a reference error. This is because line 13 attempts to access result outside of its scope.
6. Line 9 returns a type error because it tries to assign a value to result, which is a const and cannot be changed.
7. Line 13 does not return anything because an error is thrown by line 9 before it can run.
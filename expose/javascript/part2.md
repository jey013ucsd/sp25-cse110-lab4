1. It will print 3
2. It will print 150
3. It will print 150
4. It will return [50, 100, 150]. The loop multiplies each element in the input array by (1 - discount), so each element in the input is halved
5. Line 12 will return a reference error because it attempts to access i outside its scope. 
6. Line 13 will return a reference error because it attempts to access discountedPrice outside its scope. 
7. Line 14 will print 150. finalPrice is defined within the scope of the console log statement, so it can be accessed and doesn't throw an error.
8. It will return [50, 100, 150]. The function behaves exactly as it did before, and it has no errors.
9. Line 11 will return a reference error because it attempts to access i outside its scope. 
10. It will return 3. Length is defined within its scope.
11. It will return [50, 100, 150]. The function behaves exactly as it did before, and it has no errors.
12.  
    - student.name
    - student["Grad Year"]
    - student.greeting()
    - student["Favorite Teacher"].name
    - student.courseLoad[0]
13.  
    - 32. + concatanates a string and number
    - 1. 3 is mapped to a number and 2 is subtracted
    - 3. null is mapped to 0 in addition
    - 3null. + concatanates a string and null
    - 4. True is mapped to 1
    - 0. false and null are mapped to 0
    - 3undefined. undefined is mapped to a string
    - NaN. '3' is mapped to 3 and undefined is mapped to NaN. 3 - NaN = Nan
14.  
    - true. '2' is mapped to 2, which is greater than 1
    - false. '2' comes after '1' lexicographically
    - true. '2' is mapped to 2
    - false. === checks both type and value, which is not equivalent
    - false. true is mapped to 1, which is not equivalent to 2
    - true. 2 is true so Boolean(2) is true
15. == compares AFTER type mapping, === compares before and requires both value and type to be equal.
17. It will return [2, 4, 6]. doSomething doubles an input. modifyArray takes an input and populates a new array with the result of calling doSomething on all elements in the input array. This returns the original array with all its elements doubled. 
19. 1
    4
    3
    2
    console.log(1) executes immediatly and prints 1
    console.log(4) executes immediatly and prints 4 after 1
    console.log(3); prints 3 immediatly after the current stack call completes, so after 1 and 4
    console.log(2); prints 2 after 1000 milliseconds, printing last.
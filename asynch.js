{
    function doSomething(x, y, z, displayer) {
        sum = x + y + z
        displayer(sum)
    }

    function myDisplayer(whatToDisplay) {
        console.log(whatToDisplay)
    }

    function fancyDisplayer(whatToDisplay){
        console.log("Hello mathematician, your sum is : "+ whatToDisplay)
    }
    doSomething(20, 30, 40, fancyDisplayer)
}
{
    {
        function calculator(a, b, summer, multiplyer, divider, sub, displayer){
            sum = summer(a, b)
            product = multiplyer(a, b)
            div = divider(a, b)
            diff = sub(a, b)
            displayer(sum, product, div, diff)
        }
        function getSum(x, y){
            return x + y
        }
        function multiply(f, k){
            return f * k
        }
        function divide(r, w){
            return r/w
        }
        function subtract(t, y){
            return t - y
        }
        function displayResults(s, m, d, su){
            console.log("Sum: " + s )
            console.log("Mult: "+ m)
            console.log("Division: "+d)
            console.log("Diff: "+ su)
        }
        calculator(27, 3, getSum, multiply, divide, subtract, displayResults)
        function print(){
            console.log("hello")
        }
        print()
    }
    







}
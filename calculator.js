alert("Use this calculator to add, substract, multiply, divide, exponent, or sqrt. Input two numbers")
let calculator = {
    add : function(a,b){
        if (a==undefined || b==undefined) {
            console.log("enter two numbers to be added, for example: calculator.add(1,2)")
        } else {
     return (a+b)
        }
    },
    subtract : function(a,b){
        if (a==undefined || b==undefined) {
            console.log("enter two numbers to be subtracted, for example: calculator.subtract(1,2)")
        } else {
        return (a-b)
        }
    },
    multiply: function(a,b){
        if (a==undefined || b==undefined) {
            console.log("enter two numbers to be multiplied, for example: calculator.multiply(1,2)")
        } else {
        return (a*b)
        }
    },
    divide: function(a,b){ 
        if (a==undefined || b==undefined) {
            console.log("enter two numbers to be divided, for example: calculator.divide(1,2)")
        } else {
        return (a/b)
        }
    },
    exponent: function(a,b){
        if (a==undefined || b==undefined) {
            console.log("enter the base and the exponent, for example: calculator.exponent(2,3), ie. 2^3")
        } else {
        return (a**b)
        }
    },
    sqrt: function(a){
        if (a==undefined) {
            console.log("enter the number for the square root, for example: calculator.sqrt(9)")
        } else {
        return (a**(1/2))
        }
    }

}

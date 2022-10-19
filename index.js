function hasBalanced (str) {
    let countR = 0;
    let countL = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            countL++
        } else if (str[i] === ')') {
            countR++
        } 
    }
    if (str.startsWith(')') || str.endsWith('(')) {
        return false
    }
    if (countR === countL) {
        return true
    } else if (countR > countL) {
        return false
    } else {
        return false 
    }
}




console.log(hasBalanced("()"))
console.log(hasBalanced("(Oh Noes!)("))
console.log(hasBalanced("((There's a bonus open paren here.)"))
console.log(hasBalanced(")"))
console.log(hasBalanced("("))
console.log(hasBalanced("(This has (too many closes.) ) )"))
console.log(hasBalanced("Hey...there are no parens here!"))
console.log(hasBalanced("(Hey...there are) no parens)( here!"))
// the last one comes back as true because it only cheks the end and the beginning if it has a misplacerd ()

//Take in the str and confirm if it starts with and ends with a (  & )

function reverseParentheses(s) {

    const re = /\(([^\(\)]*)\)/g;
    while(re.test(s)) {
        s = s.replace(re, function(match, capture) {
            return capture.split("").reverse().join("");
        })
    }
    return s
}

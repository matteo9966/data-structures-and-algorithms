/**
 * @description find reverse of a string in a recursive way
 * @param {string} str
 */
function reverse(str){
    if (str.length===0){
        return ""
    };

    return str[str.length-1] + reverse(str.slice(0,str.length-1))

}

console.log(reverse("bologna"));
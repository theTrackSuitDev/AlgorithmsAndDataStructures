function reverse(str) {
    let strArr = str.split("");
    let result = [];

    function reverser(strArr) {
        if (strArr.length === 0) {
            return;
        }

        result.push(strArr.pop());
        return reverser(strArr);
    }

    reverser(strArr);
    return result.join("");
}

console.log(reverse("awesome"));

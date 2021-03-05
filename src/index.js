function find (bracket, array)
{
    for (let brackets of array)
    {
        if (brackets.includes(bracket))
            return brackets;
    }
    return undefined;
}

module.exports = function check(str, bracketsConfig) {
    let tmp = [];

    if (str.length % 2 !== 0)
        return false;
    for (let bracket of str)
    {
        let arr = find(bracket, bracketsConfig);
        if (arr === undefined)
            return false;
        else if (arr.indexOf(bracket) % 2 === 0 && arr.lastIndexOf(bracket) % 2 === 0)
            tmp.push(bracket);
        else if (arr[0] === arr[1] && tmp[tmp.length - 1] === bracket)
            tmp.pop();
        else if (arr[0] === arr[1] && tmp[tmp.length - 1] !== bracket)
            tmp.push(bracket);
        else if (!arr.includes(tmp.pop()))
            return false;
    }
    if (tmp.length !== 0)
        return false;
    return true;
}

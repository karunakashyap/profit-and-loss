const filterNum = (str) => {
    const numericalChar = new Set(['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    str = str
        .split('')
        .filter((char) => numericalChar.has(char))
        .join('');
    return str;
};

module.exports = filterNum;

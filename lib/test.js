// 5 2 C D +

const input = "5 2 C D +".split(" ");

const calculateScore = (input) => {
    const result = input
        .reduce((scoreArr, i) => {
            if (parseInt(i)) scoreArr.push(parseInt(i));
            if (i === "D") scoreArr.push(scoreArr[scoreArr.length - 1] * 2);
            if (i === "C") scoreArr.pop();
            if (i === "+") scoreArr.push(scoreArr[scoreArr.length - 1] + scoreArr[scoreArr.length - 2]);
            // return scoreArr;
        }, [])
        .reduce((total, i) => total + i, 0);
    // return result;
};

console.log(calculateScore(input));

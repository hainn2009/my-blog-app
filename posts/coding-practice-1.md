---
title: Coding practice 1
excerpt: Coding practice 1
image: coding-practice-1.png
isFeatured: true
date: "2022-10-20"
---

## Bài toán tính điểm của đội bóng chày

![Coding practice](coding-practice-1.png)

## Bài toán tính điểm của đội bóng chày

-   Yêu cầu: tính số điểm đạt được của đội bóng chày.
-   Đầu vào: một chuỗi chứa điểm của đội bóng chày

-   Nguyên tắc ghi nhận điểm:

    -   Số: ghi nhận điểm hiện tại
    -   C: xóa điểm ngay trước đó
    -   D: điểm được ghi nhận là nhân đôi điểm ngay trước đó
    -   +: điểm được ghi nhận là cộng 02 điểm ngay trước đó

-   Ví dụ: đầu vào "5 2 C D +" ta tính được mảng chứa điểm của đội bóng là [5, 10, 15] và số điểm cuối cùng là 30

    -   Với giá trị 5, 2 đầu tiên là số nên ta ghi nhận vào mảng chứa điểm của đội bóng là [5, 2]
    -   Tiếp theo đến giá trị C, ta xóa điểm ngay trước đó là 2, lúc này mảng chứa điểm là [5]
    -   Tiếp theo đến giá trị D, ta nhân đôi điểm ngay trước đó là 5, lúc này mảng chứa điểm là [5, 10]
    -   Tiếp theo đến giá trị +, ta công 02 điểm ngay trước đó là 10 và 5, lúc này mảng chứa điểm là [5, 10, 15]
    -   Sau đó tính được tổng số điểm là 30.

-   Source code:

```js
const input = "5 2 C D +".split(" ");

const calculateScore = (input) => {
    const result = input
        .reduce((scoreArr, i) => {
            if (parseInt(i)) scoreArr.push(parseInt(i));
            if (i === "D") scoreArr.push(scoreArr[scoreArr.length - 1] * 2);
            if (i === "C") scoreArr.pop();
            if (i === "+") scoreArr.push(scoreArr[scoreArr.length - 1] + scoreArr[scoreArr.length - 2]);
            return scoreArr;
        }, [])
        .reduce((total, i) => total + i, 0);
    return result;
};

console.log(calculateScore(input));
```

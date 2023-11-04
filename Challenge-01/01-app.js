'use strict'

function secret(dataArr) {
    const visit = {}
    let solution = "";

    for (let word of dataArr) {
        if (!visit[word]) {
            let res = 0

            dataArr.forEach(element => {
                if (element == word) {
                    ++res;
                }
            });

            visit[word] = true;
            res = res.toString()
            solution += word.concat(res)
        }
    }
    console.log(solution);
}

fetch('https://codember.dev/data/message_01.txt').then(respone => {
    return respone.text()
}).then(data => {
    const dataArr = data.toLocaleLowerCase().split(" ")
    secret(dataArr)
})
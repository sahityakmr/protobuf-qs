const fs = require("fs")
const employees = []

employees.push(
    {
        "name" : "Sahitya",
        "salary" : 1000,
        "id" : 1001
    }
)

const shlok = {
    "name" : "Shlok",
    "salary" : 1500,
    "id" : 1002
}

const kunal = {
    "name" : "Kunal",
    "salary" : 2000,
    "id" : 1003
}

employees.push(shlok)
employees.push(kunal)
fs.writeFileSync("jsonData.json", JSON.stringify(employees))
console.log(JSON.stringify(employees))
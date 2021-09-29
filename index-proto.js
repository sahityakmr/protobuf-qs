// https://github.com/protocolbuffers/protobuf/releases
// protoc --js_out=import_style=commonjs,binary:. employees.proto

const fs = require("fs");

const Schema = require("./employee_pb")

const sahitya = new Schema.Employee();
sahitya.setId(1001);
sahitya.setName("Sahitya");
sahitya.setSalary(1000);

const nakul = new Schema.Employee();
nakul.setId(1002);
nakul.setName("Nakul");
nakul.setSalary(1100);

const kevin = new Schema.Employee();
kevin.setId(1003);
kevin.setName("Kevin");
kevin.setSalary(1500);

const employees = new Schema.Employees();
employees.addEmployees(nakul);
employees.addEmployees(sahitya);
employees.addEmployees(kevin);

bytes = employees.serializeBinary();
fs.writeFileSync("binaryEmployee", bytes);

const employees2 = Schema.Employees.deserializeBinary(bytes);
console.log(employees2.toString());
console.log("End")
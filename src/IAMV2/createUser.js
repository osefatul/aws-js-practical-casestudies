const AWS = require("aws-sdk")

const iam = new AWS.IAM()
const params = {
  UserName: "Mike"
}

iam.createUser(params, (err, data)=>{
  if(err) console.log(err)

  console.log(data)
})
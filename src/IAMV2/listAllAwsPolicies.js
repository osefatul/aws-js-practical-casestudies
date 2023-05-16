const AWS = require("aws-sdk");
const iam = new AWS.IAM();

const params = {
  // Scope: "All",
  // Scope: "AWS",
  // Scope: "Local"
}

iam.listPolicies(params, (err, data)=>{
  if(err) throw Error(err)
  console.log(data)
})
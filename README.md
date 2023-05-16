# AWS in Javascript

## IAM (Identity and Access Management)
Specify who can access which services and resources.

### AWS Configuration with CLI in Local Machine 
- install aws cli
- create an IAM account to start configuration with AWS using cli
- open cmd
```
aws configure
```
- then, add access key, secret key and region... and you can find these data in `C://Users/userLogin/.aws`

### Installing AWS SKD Version 2 for Javascript
- Click [here](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html) for more information.
- Docs for installing sdk click [here](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/installing-jssdk.html)
  ```
    npm i aws-sdk
  ```

### Create Use with Javascript using SDK2
Before we use aws-sdk, make sure you are done with configuration in your local machine using [this](###aws-configuration-with-cli-in-local-machine)
```javascript
const AWS = require("aws-sdk")

const iam = new AWS.IAM()
const params = {
  UserName: "Mike"
}

iam.createUser(params, (err, data)=>{
  if(err) console.log(err)

  console.log(data)
})
```


### List All Users with JS
```javascript
const AWS = require('aws-sdk');

const iam = new AWS.IAM();
iam.listUsers((err, data)=>{
  if(err) throw Error(err);
  console.log(data)
})
```


### Update User with JS
```javascript
const AWS = require('aws-sdk');

const iam = new AWS.IAM();
const params = {
  NewUserName: "John",
  UserName: "UpdatedJohn"
}

iam.updateUser(params, (err, data)=>{
  if(err) throw Error(err);
  console.log(data);
})
```

### Creating AWS Custom Policy with JS

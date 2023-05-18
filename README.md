# AWS in Javascript

### Intro
I started working with AWS SDK in Javascript when I was asked to start developing, testing and deploying IT applications with the the help of AWS. This course is about the most used AWS services for developers.

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

### Installing AWS SKD V2 for Javascript
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

### Note: For more operations on IAM please go to `src/IAMV2` directory.


### Installing IAM using SDK V3
In V3, we have to separately use each service/package.

```
npm install @aws-sdk/client-iam
```

For practical example please visit `src/IAMV3` directory.


## IAM with CloudShell
CloudShell is a browser-based, pre-authenticated shell that you can launch directly from the AWS Management Console. 

## DynamoDB
Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. [For more information click here](https://docs.aws.amazon.com/dynamodb/index.html). Also, for best practices go to `src/dynamodbV2|dynamodbV3` directories.


## Amazon ElasticCache
Amazon ElastiCache is a fully managed, Redis- and Memcached-compatible service delivering real-time, cost-optimized performance for modern applications. ElastiCache scales to hundreds of millions of operations per second with microsecond response time, and offers enterprise-grade security and reliability.
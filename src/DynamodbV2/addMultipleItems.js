const AWS = require('aws-sdk');
AWS.config.update({'region':'us-east-1'})
const dynamodb = new AWS.DynamoDB();


const params = {
    RequestItems: {
        'employee':[
            {
                PutRequest :{
                    Item: {
                      "id" : {
                        "N": "3"
                      },
                  
                      "name":{
                        "S": "Mikeyy"
                      },
                  
                      "age":{
                        "S": "21"
                      },
                  
                      "dept":{
                        "S": "HR"
                      }
                    }
                }
            },

            {
                PutRequest :{
                    Item: {
                      "id" : {
                        "N": "4"
                      },
                  
                      "name":{
                        "S": "sunny"
                      },
                  
                      "age":{
                        "S": "27"
                      },
                  
                      "dept":{
                        "S": "IT"
                      }
                    }
                }

            }, 

            {
                PutRequest :{
                    Item: {
                      "id" : {
                        "N": "5"
                      },
                  
                      "name":{
                        "S": "Cole"
                      },
                  
                      "age":{
                        "S": "33"
                      },
                  
                      "dept":{
                        "S": "SDE"
                      }
                    }
                }
            }
        ]
    }
}

dynamodb.batchWriteItem(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})
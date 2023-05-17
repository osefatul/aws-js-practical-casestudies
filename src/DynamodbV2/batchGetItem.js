const AWS = require('aws-sdk');
AWS.config.update({'region':'us-east-1'})
const dynamodb = new AWS.DynamoDB();


const params = {
    RequestItems: {
        "employee": {
            Keys:[
                {
                    "id": {
                        N:"1"
                    }
                },

                {
                    "id" : {
                        N:"2"
                    }
                },

                {
                    "id": {
                        N:"3"
                    }
                },

                {
                    "id": {
                        N:"4"
                    }
                }
            ]
        }
    }
}

dynamodb.batchGetItem(params, function(err, data) {
    if(err) {
        console.log(err, err.stack);
        
    } else {
        data.Responses.employee.forEach(function(element, index) {
            console.log(element);
            
        })
    }
})
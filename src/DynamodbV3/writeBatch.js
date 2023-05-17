import {DynamoDBClient, BatchWriteItemCommand} from "@aws-sdk/client-dynamodb";
const ddbClient = new DynamoDBClient();



const params = {
    RequestItems: {
        Employee: [
            {
                PutRequest: {
                    Item: {
                        id:{N:"2"},
                        emp_name:{S:"test0"}
                    }
                }
            },

            {
                PutRequest: {
                    Item: {
                        id:{N:"3"},
                        emp_name:{S:"test1"}
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        id:{N:"4"},
                        emp_name:{S:"test2"}
                    }
                }
            }
        ]
    }
}

const run = async() => {
    try {
        const data = await ddbClient.send(new BatchWriteItemCommand(params));
        console.log("Data is added", data);
        return data;
        
    }catch(err) {
        console.log(err);
        
    }
}

run();
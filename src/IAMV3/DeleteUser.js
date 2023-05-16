
//In order to delete a user, make sure you delete its AccessKey first.



import {IAMClient, DeleteUserCommand, DeleteAccessKeyCommand} from "@aws-sdk/client-iam";
const iamClient = new IAMClient()


const keyParams = {
    UserName:'iamV3',
    AccessKeyId: "AKIAVM7K5RAN3WCUCPGO"
}


const params = {
    UserName:'iamV3'
}


const run = async() => {
    try {

        const deleteAccessKey = await iamClient.send(new DeleteAccessKeyCommand(keyParams));
        console.log("User Access Key is deleted: " + deleteAccessKey)

        const data = await iamClient.send(new DeleteUserCommand(params));
        console.log('User is delete', data);
        
    }catch(err) {
        console.log(err);
        
    }
}

run();
import {IAMClient, DetachGroupPolicyCommand} from "@aws-sdk/client-iam";


const iamClient = new IAMClient();


const params = {

    GroupName:'IAM_S3Admins',
    PolicyArn:'arn:aws:iam::aws:policy/AmazonS3FullAccess'

};


const run = async() => {
    try {
        const data = await iamClient.send(new DetachGroupPolicyCommand(params));
        console.log("Policy us detached",data);
        
    }catch(err) {
        console.log(err);
        
    }


}

run();
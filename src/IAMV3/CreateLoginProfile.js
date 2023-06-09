import {IAMClient, CreateLoginProfileCommand} from "@aws-sdk/client-iam";
const iamClient = new IAMClient();

const params = {
    Password:'password5%',
    PasswordResetRequired:false,
    UserName:'admin'
}

const run = async() => {
    try {
        const data = await iamClient.send(new CreateLoginProfileCommand(params));
        console.log('User is created', data);
        return data;
        
    }catch(err) {
        console.log(err);
        
    }

}

run();
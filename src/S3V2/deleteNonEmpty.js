const AWS = require('aws-sdk');
AWS.config.update({"region":'us-east-1'})
const s3 = new AWS.S3();


const DeleteBucket = async Bucket => {
    try {
        console.log(`Deleting ${Bucket}`);
        const {Contents } = await s3.listObjects({Bucket}).promise();

        if(Contents.length > 0 ) {
            await s3
                .deleteObjects({
                    Bucket,
                    Delete: {
                        Objects: Contents.map(({Key}) => ({Key}))
                    }
                })
                .promise();
        } 
        
        await s3.deleteBucket({Bucket}).promise();
        return true;
    }catch(err) {
        console.log('Can not delete bucket', err);
        return false;
        
    }
};

DeleteBucket('public-testing-buc');
const cdk = require('aws-cdk-lib');
const { Stack, RemovalPolicy } = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');

class NathancdkStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new s3.Bucket(this, 'NathancdkBucket', {
      bucketName: 'nathancdk',
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
  }
}

module.exports = { NathancdkStack };

#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { NathancdkStack } = require('../lib/nathancdk-stack');

const app = new cdk.App();
new NathancdkStack(app, 'NathancdkStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-gov-west-1' }
});

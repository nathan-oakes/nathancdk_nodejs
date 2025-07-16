
# NathanCDK Node.js AWS CDK Example

This CDK app (Node.js) creates:
- An S3 bucket called `nathancdk`

It is configured to deploy to the US GovCloud (us-gov-west-1) region.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Bootstrap your environment (if not already done):
   ```bash
   npx cdk bootstrap --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess --qualifier gov
   # Example qualifier; adjust as needed
   ```

3. Synthesize and deploy:
   ```bash
   npx cdk synth
   npx cdk deploy --region us-gov-west-1
   ```


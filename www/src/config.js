// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5u0q954nemam8dbb2r3rlsi86a",     // CognitoClientID
  "api_base_url": "https://5hhsuyjwch.execute-api.ap-southeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-sam.auth.ap-southeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d384cca881s4dh.amplifyapp.com"                                      // AmplifyURL
};

export default config;

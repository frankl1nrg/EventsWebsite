// amplify-config.js
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

// Configure Amplify with the awsExports
Amplify.configure(awsExports);

// Export the configured Amplify instance
export default Amplify;

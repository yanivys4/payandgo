import Auth0 from "react-native-auth0";

//import {AUTH0_DOMAIN,AUTH0_CLIENT_ID} from '@env';

const auth0 = new Auth0({
    domain: "dev-p3iiz9fp.eu.auth0.com",
    clientId: "8RjX8ZEaZxGcjUx4SnScrpnNQOJBMBHF",
});

export default auth0;
import * as msal from '@azure/msal-browser'


const requestedScopes = { scopes: ["User.Read"]}

const msalInstance = new msal.PublicClientApplication({
    auth : {
        clientId: process.env.VUE_APP_OAUTH_CLIENT_ID
    },
    cache: {
        cacheLocation: 'sessionStorage',
    }
})

msalInstance.initialize()


export async function signInAndGetUser(){
    const authResult = await msalInstance.loginPopup(requestedScopes)
    msalInstance.setActiveAccount(authResult.account)
    return authResult.account
}

export {msalInstance}
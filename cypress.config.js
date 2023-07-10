const { defineConfig } = require('cypress')
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://preprod-au.intelex.com/Login/?returnUrl=%2FLogin%2Foauth%2FLOR_AUSTest%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3DV6%26redirect_uri%3Dhttps%253a%252f%252fpreprod-au.intelex.com%252fLogin%252fLOR_AUSTest%252fUser%252fSignIn%253freturnUrl%253d%25252FLogin%25252FLOR_AUSTest%25252F%26state%3DTFbX3YNagtIPbnyQrRJJOg%253d%253d%26tzName%3DBritish%2520Summer%2520Time%26tzOffSet%3D00%253A00%253A00',
    projectId: "75q3nh",
  },
})
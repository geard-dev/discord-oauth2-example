# Discord Oauth2 Example

## Information

This is a simple example for Discord Oauth2 that will print out the user profile information, such as their UID, username, and guilds that they're in.

## Prerequisites

* [Node.js](https://nodejs.org)

## Setup

First, Clone the repo and cd into the folder:

`git clone https://github.com/geard-dev/discord-oauth2-example && cd discord-oauth2-example`

Next, install the dependencies:

`npm i`

Next, go to the [.env](.env) file and replace YOUR_CLIENT_ID with your client ID and YOUR_CLIENT_SECRET with your client secret

Finally, you can start the server by running

`npm run dev`

## Pointers

* The web server runs at port 3000
* When setting up your app on the Developer Portal, make sure "http://localhost:3000/auth/redirect" is set as a redirect URI

## License

View information about the license on the [LICENCE](LICENSE) file
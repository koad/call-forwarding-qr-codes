# forwarding.koad.sh

Welcome to the repository for `forwarding.koad.sh`, a sleek call forwarding setup tool built with Meteor. This project simplifies the process of setting up call forwarding, allowing users to generate QR codes for various forwarding types easily.

You can see it in action at [forwarding.koad.sh](https://forwarding.koad.sh)

## Overview

`forwarding.koad.sh` is designed to leverage the `koad:io` development environment, providing an efficient and streamlined setup for building Meteor applications. However, recognizing that `koad:io` is a specialized tool not available publicly, this README includes instructions for setting up the project using standard Meteor packages.

## Getting Started

### Prerequisites

- [Meteor](https://www.meteor.com/install)
- [Node.js](https://nodejs.org/)

### Setup with koad:io (Recommended)

If you have access to `koad:io` and it's packages:

1. Clone this repository.
2. Set the environment variables in the .env file
```bash
cd ~/wherever-you-cloned-this-repo
copy .env.example .env
nano .env
```
3. Start the application with your koad-io entity. (assuming an entity named Alice)
```bash
cd ~/wherever-you-cloned-this-repo
alice start
```

### Setup with Standard Meteor Packages

If you do not have access to `koad:io`:

1. Clone this repository.
2. Replace the contents of `src/.meteor/packages` with the following standard Meteor packages:
```
   meteor-base@1.5.1
   mobile-experience@1.1.1
   mongo@1.16.8
   iron:router
   cultofcoders:persistent-session
   standard-minifier-css@1.9.2
   standard-minifier-js@2.8.1
   es5-shim@4.8.0
   ecmascript@0.16.8
   typescript@4.9.5
   shell-server@0.5.0
   reactive-var@1.0.12
   tracker@1.3.3
   templating
   session
```
3. Run `meteor npm install` to install dependencies.
4. Start the application with `meteor`.

## Features

- **Call Forwarding Setup**: Simplifies the setup of call forwarding for iPhones.
- **QR Code Generation**: Dynamically generates QR codes for different forwarding types.
- **Print-Ready**: Designed with print-friendly layouts for easy access to forwarding codes.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements or report bugs.

## License

This project is shared under the MIT License. See the LICENSE file for more details.

## Acknowledgments

This project is built using [Meteor](https://www.meteor.com/), an open-source platform for web, mobile, and desktop.


# ipm package: device-management-system

## Overview

Framework for a device management system. Focus is on edges, firmware and pushing updates using deployments.

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

## Usage
This package helps user to view edge status. Allows firmware upload into a collection which can later be used for deployments.
## Assets
### Code Services
* `DevMgnFirmwareUpload` - This service creates a new row in the `firmware` collection. On success it deletes all the message history on the `PORTALUPDATETOPIC` message topic and then publishes a new _fileupdated_ message on that topic.

* `DevMgnMessageFirmwareMonitor` - Deletes all the message history on the messaging topic _FIRMWARETOPIC_. Fetches all rows from the _TABLENAME_FILES_ collection.
### Code Libraries
`DevMgnConstants` - This library has constants which are required while using this package.
### Portals
`DeviceManagementDemoPortal` - This portals allows user to upload a new firmware. Shows description of a selected edge.
### Collections
`firmware` - This collection stores the firmware file and it's description.

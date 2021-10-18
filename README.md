# React Smart Button

A smart button with dynamic configuration.

- [Getting Started](#getting-started)
  - [Setup](#setup)
  - [Usage](#usage)

<!-- GETTING STARTED-->

## Getting Started

 A smart button created using react. It receives properties in form of JSON from an API call.

The configurable properties are:

* Label
* Background
* Color
* Icon
* Status (enable/disabled)
* Action

<!-- SETUP -->

## Setup

1. Download or Clone the repo.

```bash
 git clone git@github.com:tlnkzl/react-smart-button.git
```

2. Serve the project.
```bash
 npm start
```

<!-- USAGE -->

## Usage

A button can be added to the page by adding a JSON object in the public/db.json file. The JSON object structure is as follows:

```json
{
  "id": 1,
  "label": "Toronto",
  "background": "#423654",
  "color": "#FFFFFF",
  "icon": "cloud",
  "enabled": true,
  "action": "URL for weather api"
}
```

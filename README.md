# uptime-status

A Status page based UptimeRobot API.
This project is fork of the [yb/uptime-status](https://github.com/yb/uptime-status) for translation to English.

<img width="1152" alt="image" src="https://user-images.githubusercontent.com/25887822/178935137-6d23521d-5894-4fb8-922d-3575be4f7abc.png">

## Prerequisites

- You need to add site monitoring on [UptimeRobot](https://uptimerobot.com/ "UptimeRobot") and get the API Key from the My Settings page.
- You need to have a hosting provider, even static web-page hosting works.

## How to deploy:

- Download and unzip: [uptime-status.zip](https://github.com/yb/uptime-status/releases/latest/download/uptime-status.zip "uptime-status.zip") 
- Modify the `config.js` file:
   - `SiteName`: The name of the website to display
   - `ApiKeys`: The API Key obtained from UptimeRobot, supports Monitor-Specific API Keys and Read-Only API Key
   - `CountDays`: The number of log days to display, 60 or 90 are recommended for better display
   - `ShowLink`: Whether to display site links
   - `Navi`: The menu list of the navigation bar
- Upload all files to the hosting service.

⚠️ If you do not need to modify the code, you do not need to git clone this project, you only need to download the Release file package.
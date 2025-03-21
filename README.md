# Papirskjema

## Setup

### start.sh

```bash
#! /bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

cd /home/ubuntu/papirskjema
export NODE_ENV=production
npm start
```

### /etc/systemd/system/papirskjema.service

```
[Unit]
Description=Papirskjema nextjs service
After=syslog.target network.target

[Service]
Type=simple
Restart=always
RestartSec=1
ExecStart=/home/ubuntu/start.sh
User=ubuntu

[Install]
WantedBy=multi-user.target
```

`> systemctl enable papirskjema`

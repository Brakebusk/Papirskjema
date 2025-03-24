# Papirskjema

[https://papirskjema.no](https://papirskjema.no)

## Setup

### Nginx conf

```
        location / {
                proxy_pass http://localhost:3000;
                proxy_redirect default;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-Host $host;
                proxy_set_header X-Forwarded-Proto $scheme;
        }
```

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

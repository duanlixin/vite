# hooks 配置


开发地址
http://1.13.5.145:3000/

打包后地址
http://1.13.5.145/

webhooks地址
http://1.13.5.145:9000/

## nginx 配置

    第一行
    user  root;

    默认html目录
    location / {
        #root dist;
        root /root/webhooks/dist;
        index  index.html index.htm;
    }

## host 配置git

    # /etc/host
    github.com 192.30.253.112
    github.global.ssl.fastly.net 151.101.185.194

## 安装nvm 安装node

## 安装git yum install git

# Nginx  

Nginx拥有轻量级、高性能等特点，可作为HTTP服务器，也可作为反向代理服务器。

__负载均衡__  
Nginx作为反向代理服务器，对来自外部的请求进行处理，按照配置规则分发到多台内部服务器。

引入负载均衡技术可带来的收益：  
- 系统的高可用：当某个节点宕机后可以迅速将流量转移至其他节点。
- 系统的高性能：多台服务器共同对外提供服务，为整个系统提供了更高规模的吞吐。
- 系统的拓展性：当业务再次出现增长或萎靡时，可再加入/减少节点，灵活伸缩。

nginx.conf简单配置 
```js
  http {
    ···
    upstream nginx_boot{ //根据其中配置信息将请求转发到其他服务器处理
        # 30s内检查心跳发送两次包，未回复就代表该机器宕机，请求分发权重比为1:2
        server 172.16.8.30:8085 weight=100 max_fails=2 fail_timeout=30s; 
        server 172.16.8.30:8086 weight=200 max_fails=2 fail_timeout=30s;
        # 这里的IP请配置成你WEB服务所在的机器IP
    }

    server {
        listen       9000; //监听9000端口
        server_name  localhost; //监听地址 本地ip

        location / {
            proxy_pass http://nginx_boot; //匹配路径为 ’/’开头的url 根据配置找到名为 nginx_boot 的 upstream
        }

    }
    ···
  }
```

__动静分离__  
原理也是通过Nginx来对请求进行分发，这样可以将静态资源和动态资源分离，从而降低单个服务器的压力。
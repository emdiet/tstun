# TSTUN / STUNT / TCP-STUN
tcp session traversal utilities for NAT

example usage:

requirements: node.js.

run: `node server.js`

tcp socket to `[domain/ip]:5000`

response:

```
{
    "ip": string,
    "port": number
}
```


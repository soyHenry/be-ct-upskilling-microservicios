const express = require('express');
const { createProxyMiddleware } = require("http-proxy-middleware");

const appGateway = express();

appGateway.use("/characters", createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true
}))

appGateway.use("/films", createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true
}))

appGateway.use("/planets", createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true
}))

appGateway.listen(8000)
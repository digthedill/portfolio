---
title: Setup Static Outbound IP for AWS Lambda
date: 2023-11-20T22:27:46.655Z
tags:
  - aws
  - static
  - ip
  - lambda
  - serverless
---
## Why do this?
Lambda functions in AWS have an ever changing outbound IP address due to their nature as using a server at the time of request

This is a guide on configuring a static ip address for a lambda function hosted on AWS. This is useful if you need to access a server protected by a firewall. Once you configure a static outbound IP address, you can use that address to whitelist access to interact with the server in question.

[AWS Docs](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/generate-a-static-outbound-ip-address-using-a-lambda-function-amazon-vpc-and-a-serverless-architecture.html) on this are a good source to keep when troubleshooting




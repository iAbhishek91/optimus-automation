# ZAP

## Download ZAP

Download ZAP from [official site](https://www.zaproxy.org/download/).

## Start ZAP

## ZAP APIs

I would recommend to use the UI before you get started with API. There are two way you can learn about the APIs.

- Learn from official [documentation](https://www.zaproxy.org/docs/api/#overview).
- From localhost (NOTE: URL will work only when ZAP is running in local). URL: [http://localhost:8080/UI](http://localhost:8080/UI).

## How ZAP and ZAP API works

Lets understand the architecture of ZAP.

ZAP is an application written in Java. Which contains a proxy server and a webserver where it hosts several APIs to work with ZAP. The APIs are able to update the data store of ZAP. Hence, when you access ZAP via [http://localhost:8080/UI](http://localhost:8080/UI) and perform some actions, changes are reflected in the app as well.

There are mostly two types of API: Views and Actions. View are to retrieve information/stats from ZAP, whereas actions are to perform any action on ZAP.

Now, we understand that there are API exposed by ZAP to manipulate ZAP programmatically. So you can go ahead and choose your fav language and start automating. Wait, there are few more good stuff! ZAP have not stopped here. There are official modules created on top of the API layer. So that developer don't have to bother about the API calls, parameters etc.

Hence in short ZAProxy is a nodejs module (set of JS functions) which helps you to access ZAP via API.

## How ZAP works

There are detail documentation done by OWASP. I strongly suggest you to go through that.

In my words, in short workings of ZAP, ZAP sits in between browser and application (as a proxy), listening to all the HTTP request made from browser to internet. ZAP can then filter what is required and whats not. Then it performs different actions like passive scan, active scan, spider and generates report.

## FAQ

- **How to configure the proxy, to use ZAP?** Configure browser proxy to point to ZAP' URL.
- **What if my browser is already configured with a proxy, then where do I configure ZAP's proxy?** - this is slightly complex scenario. The concept is known as *Proxy chain*. In this case, the already configured browser proxy should be replaced with ZAP URL, and configure ZAP to proxy to the browser proxy. Please use inbuilt function `setProxyChain(<params>)`.
- **What is the sequence of steps** - please refer `src/modules/zaproxy/callSequenceZap.example.js`. This is kept only for reference.
- **How to integrate with selenium tests** - quite easy the function that are exposed from optimus-automation can be invoked at different stages. In Before hook do all the prerequisite: setproxychain if required, setSession if required. and once the selenium test are done start Active scan, wait for it and generated report. The Post actions can be done in after hook of selenium.
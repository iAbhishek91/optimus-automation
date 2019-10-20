# Optimizing automation framework creation

## About

### Problem statement

There are multiple frameworks or boilerplate code available which can help you to kick start with your test automation project. But it's not about getting your job done!!!

We belong to the group of engineers who try to avoid boilerplate or abstract layer of code in our projects. It always pays-off when you understand the core concepts of a module before consuming it.

Couple of reasons to support:

* **Generalized code:** *One may or may not need all the functionality provided by the boilerplate code or module.*

* **Customizing features:** *Every project changes over course of time. Most of the time, it's not worth spending time to understand the boilerplate code in order to develop custom features on top of that.*

* **Control and Maintenance:** *Project inherited from a boilerplate are difficult to maintain in long run. Also developers lose control of the code and start treating that piece of code as black box.*

In reality, we tend to download code from internet and try to achieve our goals. Mostly because of complexity or lack of understanding or time.

With help of this module we are trying to help and coach engineers who wants to create an test automation project from scratch. It's really simple! Once you understand every bit of it go ahead and use the module.

### Scope

Engineers who want to perform browser based UI testing, API testing etc... can use this module to learn and save time.

Refer [features section](https://github.com/iAbhishek91/optimus-automation#features) for  list of features provided.

### Before you start

**[Optimus automation](https://github.com/iAbhishek91/optimus-automation)** is structured in multiple modules. We suggest you to understand the modules you are interested in and their core concepts. Each module comes with detail documentation which can be co-related with their official documentation.

Each module is independent of each other resulting in a loose-coupled system. Hence provides flexibility to learn and use one or few all modules as per requirement.

For any suggestion, doubts or contribution, please feel free to raise issues on [GitHub](https://github.com/iAbhishek91/optimus-automation/issues). We will try to respond ASAP.

## Installation

```sh
npm install optimus-automation --save
```

## Features

* **BDD** business driven development is the core of this module. [Cucumber-js](https://github.com/cucumber/cucumber-js) is used to support BDD.
  
  Cucumber starts as a nodejs [child process](https://nodejs.org/api/child_process.html) using [cross-spawn](https://www.npmjs.com/package/cross-spawn) module to support windows environment.

  CLI options and configurations of `cucumber` is mentioned here. <<>>.

  Learn about `cucumber-js` implementation from [/src/modules/cucumber](https://github.com/iAbhishek91/optimus-automation/tree/master/src/modules/cucumber).

  > NOTE: `cucumber-js` is not an dependency for this framework. Instead `cucumber-js` required as a dependency on the framework/project consuming it.

* **Three layer configuration**: This module processes three type of configurations namely **CLI**, **.optimusrc.js** and **default configuration**. These configurations are consumed directly by the core modules. Details about all the CLI options are mentioned <<provide reference>>.

  * **CLI** configurations can be passed from CLI. Providing flexibility for passing parameter to the modules using command prompt. CLI options are processed into command line arguments using [command-line-args](https://www.npmjs.com/package/command-line-args) module.
  
    CLI has highest priority and will override the values passed from .optimusrc.js or default configuration.

  * **.optimusrc.js** is a configuration file kept at root of the project. This file exports an object containing configuration object specific to modules. Refer an example of full [/.optimusrc.js](https://github.com/iAbhishek91/boilerplate-optimus-automation/blob/master/.optimusrc.js) config file.
  
    As there are many configurations to be passed for each module, it's important that you define .optimusrc.js file and override only required using CLI.
  
    > NOTE: .optimusrc.js file has the second priority in the list.

  * **default configuration** is the hard-coded configuration file. These values are used in case they are not passed from CLI or .optimusrc.js. Structure of default-configuration file are same as .optimusrc.js.
  
    Refer [default configuration file](https://github.com/iAbhishek91/optimus-automation/blob/master/src/config/default.js).

* **Selenium standalone** in-built. `selenium-standalone` is one of the core module used for browser automation. [Selenium standalone](https://github.com/vvo/selenium-standalone) APIs are used to implement installation and starting of selenium server.

  Selenium-standalone helps you to install(download) selenium-standalone jar(java archive) file and other supporting browser drivers. It also help you to start the selenium-server.

  CLI options and configurations of `selenium` is mentioned here. <<>>

  Learn about `selenium-standalone` API implementation from [/src/modules/selenium-standalone](https://github.com/iAbhishek91/optimus-automation/tree/master/src/modules/selenium-standalone).

  > NOTE: Don't get confuse with selenium-webdriver with selenium-standalone. Selenium-standalone is just a server used as an interface between `webdriver-io` and your browser. If you are using [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) instead of [webdriver-io](https://www.npmjs.com/package/webdriverio), then use of selenium-standalone is optional. To know more about selenium-webdriver and selenium-standalone refer [seleniumhq.org](https://www.seleniumhq.org/docs/03_webdriver.jsp#webdriver-and-the-selenium-server).

* **API methods** in-built. [Request](https://www.npmjs.com/package/request) module is used to make any HTTP calls (REST or SOAP). One can take advantage of this functions to make request and validate the response object.

Learn at the `request` simple implementation from [/src/modules/request](https://github.com/iAbhishek91/optimus-automation/blob/master/src/modules/request/index.js).

* **Logger methods** in-built. [Winston](https://www.npmjs.com/package/winston) module is used for logging. Most project requires logging mechanism for debugging, analytics or ML. One may use the function to learn about basic of log implementation.

These module also be useful to learn how CLI logs are beatified without using any module. Color format and categorizing different type of logs.

Learn at the `request` simple implementation from [/src/modules/request](https://github.com/iAbhishek91/optimus-automation/blob/master/src/modules/request/index.js).

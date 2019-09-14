# Optimizing automation framework creation

## Problem statement

There are multiple framework or boilerplate code available which can help you kick start test automation. But it's not about getting your job done.

We belong to the group of engineers who try to avoid boilerplate or abstract layer of code in out projects. It always payoff when you understand the core concepts of a module before consuming it. Couple of reasons to support:

* **Generalized code:** *One may or may not need all the functionality provided by the boilerplate code.*
* **Customizing features:** *Every project changes over course of time. Most of the time, it's not worth spending time to understand the boilerplate code in order to develop custom features on top of that.*
* **Control and Maintenance:** *Project inherited from a boilerplate are difficult to maintain in long run. Also developers lose control of the code and start treating that piece of code as black box.*

In reality, we tend to download code from internet and try to achieve our goals. Mostly because of complexity or lack of understanding or time.

With help of this module we are trying to help and coach engineers who wants to create an automation project from scratch. It's really simple! Once you understand every bit of it go ahead and reuse the module.

## Before you start

**Optimus automation** are structured in modules. We suggest you to understand the modules you are interested in and their core concepts. Each module comes with detail documentation which can be co-related with official documentation.

For any suggestion, doubts or contribution, please feel free to raise issues on [git](https://github.com/iAbhishek91/optimus-automation/issues). We will try to respond ASAP.

## Installation

```sh
npm install optimus-automation --save
```

## Features

* **BDD** business driven development is the core of this module. [Cucumber-js](https://github.com/cucumber/cucumber-js) is used to support BDD.

  > NOTE: `cucumber-js` is not an dependency for this framework. Instead it's required as a dependency on the framework/project consuming this.

* **Three layer configuration**: This module processes three type of configurations: **CLI**, **/.optimusrc.js** and **default inbuilt configuration**. These configurations are consumed directly by the core modules. Details about all the CLI options are mentioned below<<provide reference>>.

  * **CLI** configurations can be passed from CLI. This provide flexibility for passing parameter to the modules. Configurations are transformed internally to command line arguments using `command-line-args` module.
  
    CLI has highest priority and will override the values passed from .optimusrc.js or default inbuilt configuration.

  * **.optimusrc.js** is a configuration file kept at root of the project. This file exports an object containing configuration object specific to modules. Refer an example of full [/.optimusrc.js](https://github.com/iAbhishek91/boilerplate-optimus-automation/blob/master/.optimusrc.js) config file.
  
    As there are many configurations to be passed for each module, it's important that you define .optimusrc.js file and override only required using CLI.
  
    > NOTE: .optimusrc.js file has the second priority in the list.

  * **default inbuilt configuration** is the hard-coded default configuration file. These values are used in case they are not passed from CLI or .optimusrc.js. Structure of default inbuilt configuration file are same as .optimusrc.js.
  
    Refer [default configuration file](https://github.com/iAbhishek91/optimus-automation/blob/master/src/config/default.js).

* **Selenium standalone** in-built. `Selenium-standalone` is one of core module used for browser automation. [Selenium standalone](https://github.com/vvo/selenium-standalone) APIs are used to implement installation and starting of selenium server.

  Selenium-standalone helps you to install(download) selenium-standalone jar(java archive) file and other supporting browser drivers. It also help you to start the selenium-server.

  Learn about `Selenium-standalone` API implementation from [/src/modules]()

  > NOTE: Don't get confuse with selenium-webdriver with selenium-standalone. Selenium-standalone is just a server used as an interface between `webdriver-io` and your browser. If you are using [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) instead of [webdriver-io](https://www.npmjs.com/package/webdriverio), then use of selenium-standalone is optional. Two know the difference between selenium-webdriver and selenium-standalone refer [seleniumhq.org](https://www.seleniumhq.org/docs/03_webdriver.jsp#webdriver-and-the-selenium-server).

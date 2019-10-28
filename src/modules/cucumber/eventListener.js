import { logger } from '../logger/logBuilder';

/**
 * @description this function defines all the event listener for cucumber
 * spawned process.
 * @param {Object} runCucumber child process(spawned) to run cucumber test
 * @returns {null}
 */
export default (cucumberChildProcess, outputDirName) => {
  /*
  Cucumber process is created using spawn. Thus, by
  default it is standard IO is "pipe" and is redirected to
  "subprocess.stdin", "sbuprocess.stdout" and "stdprocess.stderr".
  */
  cucumberChildProcess.stderr.on('data', (data) => logger.error(data));
  cucumberChildProcess.stdout.on('data', (data) => logger.info(data));
  /*
  "exit" event is emitted after the cucumber child process ends.
  The listener (callback) accepts two arguments(either of two will always be non-null):
    1. code(number): The exit code if the child exited on its own.
    2. signal(string): The signal by which the child process was terminated.
  */
  cucumberChildProcess.on('exit', (code, signal) => {
    /* eslint-disable max-len */
    if (code) {
      if (code === 0) logger.success(`Cucumber process exited successfully. Status of test execution are available on "./${outputDirName}".`);
      else {
        logger.error(`Cucumber process exited forcefully with code ${code}. Refer cucumber report for detail information on test execution.`);
        throw new Error('Cucumber test failed');
      }
    } else if (signal === null) logger.success(`All scenarios are executed! Status of test execution are available on "./${outputDirName}".`);
    else logger.error(`Cucumber process terminated by signal ${signal}. Refer cucumber report for detail information on test execution.`);
    /* eslint-enable max-len */
  });

  /*
  "error" event is emitted whenever any of the below happens:
    1. The cucumber process could not be spawned, or
    2. The cucumber process could not be killed, or
    3. Sending message to the child process failed.

  In the above scenario the exit event may or may not fire after an error has occured.
  */
  cucumberChildProcess.on('error', (error) => {
    logger.error(`Error occured in cucumber process: ${error.message}.`);
  });
};

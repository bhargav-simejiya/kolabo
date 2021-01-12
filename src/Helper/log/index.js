import colors from "../Colors";
class log { }
/* eslint-disable */

/**
 *  Generate success log
 */
log.success = (msg, data) => {
  if (__DEV__) {
    if (msg && data !== undefined) {
      console.log(
        `%c ${msg} `,
        `background:${colors.COLOR_SUCCESS};
        color:${colors.BLACK};
        line-height: 30px;
        font-weight: bold;
        font-size: 15px;
        border: 1px clear;
        border-radius: 0px 15px 15px 0px;`,
        data
      );
    } else {
      console.log(msg);
    }
  }
};

/**
 *  Generate error log
 */
log.error = (msg, data) => {
  if (__DEV__) {
    if (msg && data !== undefined) {
      console.log(
        `%c ${msg} `,
        `background:${colors.COLOR_ERROR};
        color:${colors.COLOR_WHITE};
        line-height: 30px;
        font-weight: bold;
        font-size: 15px;
        border: 1px clear;
        border-radius: 0px 15px 15px 0px;`,
        data
      );
    } else {
      console.log(msg);
    }
  }
};

/**
 *  Generate warning log
 */
log.warn = (msg, data) => {
  if (__DEV__) {
    if (msg && data !== undefined) {
      console.log(
        `%c ${msg} `,
        `background:${colors.COLOR_WARNING};
        color:${colors.COLOR_WHITE};
        line-height: 30px;
        font-weight: bold;
        font-size: 15px;
        border: 1px clear;
        border-radius: 0px 15px 15px 0px;`,
        data
      );
    } else {
      console.log(msg);
    }
  }
};

/**
 *  Generate info log
 */
log.info = (msg, data) => {
  if (__DEV__) {
    if (msg && data !== undefined) {
      console.log(
        `%c ${msg} `,
        `background:${colors.COLOR_INFO};
        color:${colors.COLOR_WHITE};
        line-height: 30px;
        font-weight: bold;
        font-size: 15px;
        border: 1px clear;
        border-radius: 0px 15px 15px 0px;`,
        data
      );
    } else {
      console.log(msg);
    }
  }
};

/**
 *  Generate url log
 */
log.url = msg => {
  if (__DEV__) {
    if (msg) {
      console.log(`%c↳ ${msg} `,
        `color:${colors.COLOR_APP_GREEN};
        line-height: 30px;
        font-weight: bold;
        font-size: 15px;
        border: 1px clear;
        border-radius: 0px 15px 15px 0px;`);
    }
  }
};

/* eslint-enable */

export default log;

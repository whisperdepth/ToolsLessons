export const createLogger = (name) => {
  const logs = [];
  return {
    log(message) {
      logs.push(`log - ${name} - ${message}`);
    },

    error(message) {
        logs.push(`error - ${name} - ${message}`);
    },

    getLogs() {
      return logs;
    },
  };
};

const _ = require('underscore');
const Monitor = require('icecast-monitor');

class Icecast {
  constructor(cfg) {
    this.monitor = new Monitor(_.pick(cfg, 'host', 'port', 'user', 'password'));
  }

  /**
   * Returns a list of the sources currently attached to the Icecast server
   * @return {Object[]}
   */
  getSources() {
    return new Promise((resolve, reject) => {
      this.monitor.getSources((err, sources) => {
        if (err) return reject(err);

        resolve(sources);
      });
    });
  }
}

module.exports = Icecast;

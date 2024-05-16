"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $db }) {
  class $Closure5 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      const id = ((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(request.vars, "id");
      (await $db.delete(id));
      return ({"status": 204});
    }
  }
  return $Closure5;
}
//# sourceMappingURL=inflight.$Closure5-1.cjs.map
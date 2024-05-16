"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $db, $std_Json }) {
  class $Closure4 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      {
        const $if_let_value = request.body;
        if ($if_let_value != undefined) {
          const body = $if_let_value;
          const employeeData = JSON.parse(body);
          const id = ((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(request.vars, "id");
          (await $db.update(id, employeeData));
          return ({"status": 200, "body": ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(employeeData)});
        }
      }
    }
  }
  return $Closure4;
}
//# sourceMappingURL=inflight.$Closure4-1.cjs.map
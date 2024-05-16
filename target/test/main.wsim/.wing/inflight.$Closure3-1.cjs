"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $counter, $db, $std_Json }) {
  class $Closure3 {
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
          const id = String.raw({ raw: ["", ""] }, (await $counter.inc()));
          (await $db.insert(id, employeeData));
          return ({"status": 201, "body": id});
        }
      }
    }
  }
  return $Closure3;
}
//# sourceMappingURL=inflight.$Closure3-1.cjs.map
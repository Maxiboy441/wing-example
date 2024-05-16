"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure2Client = 
          require("/Volumes/data/private/winglang-tut/target/test/main.wsim/.wing/inflight.$Closure2-1.cjs")({
            $expect_Util: require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/expect/assert.js").Util,
            $queue: (function() {
  let handle = process.env.QUEUE_HANDLE_d3f7cda4;
  if (!handle) {
    throw new Error("Missing environment variable: QUEUE_HANDLE_d3f7cda4");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  const caller = process.env.WING_SIMULATOR_CALLER;
  if (!caller) {
    throw new Error("Missing environment variable: WING_SIMULATOR_CALLER");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle, caller);
})(),
            $redis: (function() {
  let handle = process.env.REDIS_HANDLE_41240b06;
  if (!handle) {
    throw new Error("Missing environment variable: REDIS_HANDLE_41240b06");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  const caller = process.env.WING_SIMULATOR_CALLER;
  if (!caller) {
    throw new Error("Missing environment variable: WING_SIMULATOR_CALLER");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle, caller);
})(),
            $util_Util: require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/util/util.js").Util,
          })
        ;
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};
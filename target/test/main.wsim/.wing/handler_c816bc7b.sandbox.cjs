"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure3Client = 
          require("/Volumes/data/private/winglang-tut/target/test/main.wsim/.wing/inflight.$Closure3-1.cjs")({
            $http_Util: require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/http/http.js").Util,
            $invokeAndAssert: 
          (await (async () => {
            const $Closure2Client = 
          require("/Volumes/data/private/winglang-tut/target/test/main.wsim/.wing/inflight.$Closure2-1.cjs")({
            $expect_Util: require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/expect/assert.js").Util,
          })
        ;
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ,
            $website_url: process.env["WING_TOKEN_WSIM_ROOT_ENV0_WEBSITE_ATTRS_URL"],
          })
        ;
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};
process.on("uncaughtException", (reason) => {
  process.send({ type: "error", reason });
});

process.on("message", async (message) => {
  const { fn, args } = message;
  const value = await exports[fn](...args);
  process.send({ type: "ok", value });
});

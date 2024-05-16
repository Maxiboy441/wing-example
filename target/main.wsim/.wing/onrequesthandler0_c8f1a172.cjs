"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? ((await (async () => {
  const $func = async (ctx, event) => {
            if (!event) {
                throw new Error("invalid API request event");
            }
            let req = JSON.parse(event);
            const response = await ctx.handler(req);
            if (!response) {
                return undefined;
            }
            else {
                return JSON.stringify(response);
            }
        }
  const $ctx = {
  handler: 
              (await (async () => {
                const $Closure3Client = 
              require("/Volumes/data/private/winglang-tut/target/main.wsim/.wing/inflight.$Closure3-1.cjs")({
                $__parent_this_3_api_url: process.env["WING_TOKEN_WSIM_ROOT_DEFAULT_A_API_ATTRS_URL"],
              })
            ;
                const client = new $Closure3Client({
                });
                if (client.$inflight_init) { await client.$inflight_init(); }
                return client;
              })())
            
  };
  let newFunction = async (...args) => {
    return $func($ctx, ...args);
  };
  newFunction.handle = newFunction;
  return newFunction;
}
)()));
  return await $handler.handle(event);
};
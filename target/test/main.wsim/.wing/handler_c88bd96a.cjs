"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure5Client = 
          require("/Volumes/data/private/winglang-tut/target/test/main.wsim/.wing/inflight.$Closure5-1.cjs")({
            $api_url: process.env["WING_TOKEN_WSIM_ROOT_ENV2_API_ATTRS_URL"],
            $expect_Util: require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/expect/assert.js").Util,
            $http_HttpMethod: {"GET": "GET","PUT": "PUT","DELETE": "DELETE","PATCH": "PATCH","POST": "POST","OPTIONS": "OPTIONS","HEAD": "HEAD",},
            $http_Util: require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/http/http.js").Util,
            $std_Json: require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
          })
        ;
            const client = new $Closure5Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};
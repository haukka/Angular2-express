System.register(['@angular/platform-browser-dynamic', './app.component.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_js_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_js_1_1) {
                app_component_js_1 = app_component_js_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_js_1.PriceComponent);
        }
    }
});
//# sourceMappingURL=main.js.map
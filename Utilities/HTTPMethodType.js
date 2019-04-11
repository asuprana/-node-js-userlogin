"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPMethodType;
(function (HTTPMethodType) {
    HTTPMethodType[HTTPMethodType["get"] = 0] = "get";
    HTTPMethodType[HTTPMethodType["post"] = 1] = "post";
    HTTPMethodType[HTTPMethodType["put"] = 2] = "put";
    HTTPMethodType[HTTPMethodType["patch"] = 3] = "patch";
    HTTPMethodType[HTTPMethodType["delete"] = 4] = "delete";
    HTTPMethodType[HTTPMethodType["copy"] = 5] = "copy";
    HTTPMethodType[HTTPMethodType["head"] = 6] = "head";
    HTTPMethodType[HTTPMethodType["options"] = 7] = "options";
    HTTPMethodType[HTTPMethodType["link"] = 8] = "link";
    HTTPMethodType[HTTPMethodType["unlink"] = 9] = "unlink";
    HTTPMethodType[HTTPMethodType["purge"] = 10] = "purge";
    HTTPMethodType[HTTPMethodType["lock"] = 11] = "lock";
    HTTPMethodType[HTTPMethodType["unlock"] = 12] = "unlock";
    HTTPMethodType[HTTPMethodType["propfind"] = 13] = "propfind";
    HTTPMethodType[HTTPMethodType["view"] = 14] = "view";
})(HTTPMethodType = exports.HTTPMethodType || (exports.HTTPMethodType = {}));
;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var signup_init_1 = require("@src/controllers/signup-init");
var chai_1 = require("chai");
var sinon_1 = require("sinon");
var signup_1 = require("@src/ports/repos/signup");
var insertSignup;
describe("Signup initilization", function () {
    beforeEach(function () {
        insertSignup = sinon_1.stub(signup_1["default"], "insert").resolves();
    });
    afterEach(function () { return sinon_1.restore(); });
    it("return a signup with init params that sent to the function.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var signup;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, signup_init_1["default"](signupParams)];
                case 1:
                    signup = _a.sent();
                    chai_1.expect(signup.initParams).to.be.deep.equal(signupParams);
                    return [2 /*return*/];
            }
        });
    }); });
    it("persit signup in the database.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var signup;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, signup_init_1["default"](signupParams)];
                case 1:
                    signup = _a.sent();
                    chai_1.expect(insertSignup).to.have.been.calledOnce;
                    chai_1.expect(insertSignup).to.have.been.calledWith(signup);
                    return [2 /*return*/];
            }
        });
    }); });
});
var signupParams = {
    fullName: "Some Body",
    dateOfBirht: "1990-01-01",
    address: "av. somestrest, N° 123"
};

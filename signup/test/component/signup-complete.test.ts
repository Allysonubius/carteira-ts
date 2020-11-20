import { SinonStub, stub  , restore} from "sinon"
import signupRepo from '@src/ports/repos/signup';
import signupComplete from "@src/controllers/signup-complete";
import { expect } from "chai";
import Signup from '../../src/types/signup';

let getByTokenSignup: SinonStub;
let updateStausTokenSignup: SinonStub;
let updateStatusSignup: SinonStub;
let completeNotificationSignup: SinonStub;


describe ("Signup complete", () =>{
    beforeEach(() =>{
        getByTokenSignup = stub(signupRepo, "getByToken");
        updateStausTokenSignup  = stub(signupRepo, "updateStatus");
        completeNotificationSignup = stub(signupNotification, "COMPLETE");
    });
    afterEach(() => restore());

    it("send a notification when a signup is completed", async () =>{
        const token =  "some-token";
        getByTokenSignup.resolves(signup);

        await signupComplete(token);
         
        expect(completeNotificationSignup).to.have.been.calledOnce;
    });
});

const signup :Signup = {
    token: "some-token",
    staus: "IN_PROGRESS",
    initParams:{
        fullName: "Some body",
        dateOfBirht: "1990-01-01",
        address: "Some place, 123"
    },
};
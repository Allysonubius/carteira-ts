import { SinonStub, stub  , restore} from "sinon"
import signupRepo from '@src/ports/repos/signup';
import signupComplete from "@src/controllers/signup-complete";
import { expect } from "chai";
import Signup from '../../src/types/signup';
import signup from '@src/ports/repos/signup';
import { SignupStatus } from '../../src/types/signup';

let getByTokenSignup: SinonStub;
let updateStausTokenSignup: SinonStub;
let updateStatusSignup: SinonStub;

describe ("Signup complete", () =>{
    beforeEach(() =>{
        getByTokenSignup = stub(signupRepo, "getByToken");
        updateStausTokenSignup  = stub(signupRepo, "updateStatus");
    });
    afterEach(() => restore());

    it("update signup status to complete", async () =>{
        const token =  "some-token";
        getByTokenSignup.resolves(signup);

        await signupComplete(token);
         
        expect(updateStatusSignup).to.have.been.calledWith(signup, "COMPLETE" );
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
import signupInit from '@src/controllers/signup-init';
import { SignupInitParams } from '@src/types/signup';
import { expect } from 'chai';
import { restore, SinonStub, stub } from 'sinon';
import signupRepo from "@src/ports/repos/signup";

let insertSignup: SinonStub;

describe ("Signup initilization",() =>{
 
    beforeEach(() =>{
        insertSignup = stub(signupRepo,"insert").resolves();
    });

    afterEach(() => restore());

    it("return a signup with init params that sent to the function.", async () =>{
 
        const signup = await signupInit(signupParams);
        
        expect (signup.initParams).to.be.deep.equal(signupParams);
    });
    it("persit signup in the database.", async () =>{

        const signup = await signupInit(signupParams);
        
        expect (insertSignup).to.have.been.calledOnce;
        expect (insertSignup).to.have.been.calledWith(signup);
    });
});

const signupParams: SignupInitParams = {
    fullName: "Some Body",
    dateOfBirht:"1990-01-01",
    address:"av. somestrest, N° 123",
};
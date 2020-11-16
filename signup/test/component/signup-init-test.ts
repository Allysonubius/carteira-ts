import signupInit from '@src/controllers/signup-init';
import { SignupInitParams } from '@src/types/signup';
import { expect } from 'chai';


describe ("Signup initilization",() =>{
    it("return a signup token as response to signup initialization.", async () =>{
        const signupParams: SignupInitParams = {
            fullName: "Some Body",
            dateOfBirht:"1990-01-01",
            address:"av. somestrest, N° 123",
        };

        const signup = await signupInit(signupParams);
        
        expect (signup.token).to.be.a("string").that.has.length(36);
    });
});
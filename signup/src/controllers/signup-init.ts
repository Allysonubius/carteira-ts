import { SignupInitParams } from '@src/types/signup';
import { uuid } from 'uuidv4';
import Signup from '../types/signup';
import signupRepo from '@src/ports/repos/signup';

export default async(signupInitParams: SignupInitParams): Promise<Signup> =>{
    const signup: Signup ={
        token: uuid(),
        initParams: signupInitParams
    };

    await signupRepo.insert(signup);
    return signup;
};
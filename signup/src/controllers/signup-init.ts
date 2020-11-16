import { SignupInitParams } from '@src/types/signup';
import { stringify } from 'querystring';
import { uuid } from 'uuidv4';
import Signup from '../types/signup';

export default async(signupInitParams: SignupInitParams): Promise<Signup> =>{
    return{
        token: uuid(),
        initParams: signupInitParams
    };
};
import signupRepo from '@src/ports/repos/signup';

export default async (_token: string): Promise<void> => {
    const signup = await  signupRepo.getByToken(_token);
    await signupRepo.updateStatus(signup, "COMPLETE");
};
export interface SignupInitParams{
    readonly  fullName:string;
    readonly dateOfBirht: string;
    readonly address:string;
}

export default interface Signup{
    readonly token: string;
    readonly initParams: SignupInitParams;
    readonly selfie?: string;
    readonly frontDocumentPicture?: string;
    readonly backDocumentPicture?: string;
}
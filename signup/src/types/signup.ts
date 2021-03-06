export interface SignupInitParams{
    readonly  fullName:string;
    readonly dateOfBirht: string;
    readonly address:string;
}

export type SignupStatus = "IN_PROGRESS" | "COMPLETE";

export default interface Signup{
    readonly token: string;
    readonly staus: SignupStatus;
    readonly initParams: SignupInitParams;
    readonly selfie?: string;
    readonly frontDocumentPicture?: string;
    readonly backDocumentPicture?: string;
}
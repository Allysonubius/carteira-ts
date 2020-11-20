 import {expect} from "chai";
import { SinonStub, restore, stub } from 'sinon';

let createAccountBanckPartener: SinonStub;

describe ("Create bank account",() =>{
    beforeEach(() =>[
        createAccountBanckPartener = stub()
    ]);
    afterEach(() => restore())
    it("call a bank partener to create a bank account", async () =>{
        const userParams = {};

        await createBankAccount(userParams);

        expect(createAccountBanckPartener).to.have.been.calledOnce;
    });
});
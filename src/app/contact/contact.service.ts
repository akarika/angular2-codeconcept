import { Injectable } from '@angular/core';

@Injectable()
export class ContactServiceS {

    postContactForm(contactFormValue: any){
        console.log(contactFormValue);
        console.log("depuis le service ");
    }

    constructor() { }
}
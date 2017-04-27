import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {ContactServiceS} from './contact.service';
@Component({
    moduleId: module.id,
    //selector: 'contact-us', si on besoin de l insérer dans un autre template
    templateUrl: 'contact-us.component.html'
})

export class ContactUsComponent implements OnInit {
subject: string;
isVisible: boolean = true;



    constructor(private ContactServiceS: ContactServiceS) { }
    sendMessage(form: NgForm){
    this.ContactServiceS.postContactForm(form.value);
}
    ngOnInit() { }
}
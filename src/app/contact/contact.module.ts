import { NgModule } from '@angular/core';
import {ContactServiceS} from './contact.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ContactUsComponent} from './contact-us.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [ContactUsComponent],
    declarations: [ ContactUsComponent],
    providers: [ContactServiceS],//service
})
export class ContactModule { }

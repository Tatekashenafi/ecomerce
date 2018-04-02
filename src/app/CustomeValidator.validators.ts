import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomeValidator {
    static Checkspace(myntrol: AbstractControl): ValidationErrors|null {
        if ((myntrol.value as string).indexOf(' ') >= 0) {
            return {'space': true};
        }
         return null;
    }
}
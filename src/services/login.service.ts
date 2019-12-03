import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {

    public get isLogined(): boolean {
        return true;
    }

}

import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from './login.service';

/* For adding token with headers */
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private logServ:LoginService){ }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>>{
      const token = this.logServ.getToken();
      let authReq = req;
      if(token!=null){
        authReq = authReq.clone({
          setHeaders:{Authorization: `Bearer ${token}`},
      });
      }
      return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true,
  },
];

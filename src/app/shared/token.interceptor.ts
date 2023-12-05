import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class tokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(localStorage.getItem("token") != "") {
      let clone = request.clone(
        {headers : new HttpHeaders({"authorization": "bearer "+ localStorage.getItem("token")})
      })

      return next.handle(clone)
    }

    return next.handle(request);
  }
}

// export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
//   let token = localStorage.getItem("token")
//   if(token != undefined) {
//     let clone = req.clone({headers : new HttpHeaders({"authorization": "bearer "+ localStorage.getItem("token")})})
//     return next(clone);
//   }
//   return next(req);
// };

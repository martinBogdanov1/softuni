import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
const authHeaders = environment.authHeaders;
const contentHeaders = environment.headers;
const API_URL = environment.API_URL

@Injectable()

export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let reqModifier;

        if (req.url.includes('classes')) {
            reqModifier = req.clone({
                headers: new HttpHeaders(contentHeaders),
                url: req.url.replace('/api/', API_URL)
            });
        } else {
            reqModifier = req.clone({
                headers: new HttpHeaders(authHeaders),
                url: req.url.replace('/api/', API_URL)
            });
        }
        

        return next.handle(reqModifier);
    }
}

export const AppInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}
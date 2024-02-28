/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAuthAuthenticatePost } from '../fn/auth/api-auth-authenticate-post';
import { ApiAuthAuthenticatePost$Params } from '../fn/auth/api-auth-authenticate-post';
import { apiAuthValidateTokenGet } from '../fn/auth/api-auth-validate-token-get';
import { ApiAuthValidateTokenGet$Params } from '../fn/auth/api-auth-validate-token-get';

@Injectable({ providedIn: 'root' })
export class BackAuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthAuthenticatePost()` */
  static readonly ApiAuthAuthenticatePostPath = '/api/Auth/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthAuthenticatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthAuthenticatePost$Response(params?: ApiAuthAuthenticatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthAuthenticatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthAuthenticatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthAuthenticatePost(params?: ApiAuthAuthenticatePost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthAuthenticatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthValidateTokenGet()` */
  static readonly ApiAuthValidateTokenGetPath = '/api/Auth/validate-token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthValidateTokenGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthValidateTokenGet$Response(params?: ApiAuthValidateTokenGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthValidateTokenGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthValidateTokenGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthValidateTokenGet(params?: ApiAuthValidateTokenGet$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthValidateTokenGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

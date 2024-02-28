/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserGet$Json } from '../fn/user/api-user-get-json';
import { ApiUserGet$Json$Params } from '../fn/user/api-user-get-json';
import { apiUserGet$Plain } from '../fn/user/api-user-get-plain';
import { ApiUserGet$Plain$Params } from '../fn/user/api-user-get-plain';
import { apiUserIdDelete } from '../fn/user/api-user-id-delete';
import { ApiUserIdDelete$Params } from '../fn/user/api-user-id-delete';
import { apiUserIdGet$Json } from '../fn/user/api-user-id-get-json';
import { ApiUserIdGet$Json$Params } from '../fn/user/api-user-id-get-json';
import { apiUserIdGet$Plain } from '../fn/user/api-user-id-get-plain';
import { ApiUserIdGet$Plain$Params } from '../fn/user/api-user-id-get-plain';
import { apiUserIdPut } from '../fn/user/api-user-id-put';
import { ApiUserIdPut$Params } from '../fn/user/api-user-id-put';
import { apiUserPost$Json } from '../fn/user/api-user-post-json';
import { ApiUserPost$Json$Params } from '../fn/user/api-user-post-json';
import { apiUserPost$Plain } from '../fn/user/api-user-post-plain';
import { ApiUserPost$Plain$Params } from '../fn/user/api-user-post-plain';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class BackUserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserGet()` */
  static readonly ApiUserGetPath = '/api/User';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Plain$Response(params?: ApiUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return apiUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Plain(params?: ApiUserGet$Plain$Params, context?: HttpContext): Observable<Array<User>> {
    return this.apiUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Json$Response(params?: ApiUserGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return apiUserGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Json(params?: ApiUserGet$Json$Params, context?: HttpContext): Observable<Array<User>> {
    return this.apiUserGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `apiUserPost()` */
  static readonly ApiUserPostPath = '/api/User';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Plain$Response(params?: ApiUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Plain(params?: ApiUserPost$Plain$Params, context?: HttpContext): Observable<User> {
    return this.apiUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Json$Response(params?: ApiUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Json(params?: ApiUserPost$Json$Params, context?: HttpContext): Observable<User> {
    return this.apiUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `apiUserIdGet()` */
  static readonly ApiUserIdGetPath = '/api/User/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdGet$Plain$Response(params: ApiUserIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUserIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdGet$Plain(params: ApiUserIdGet$Plain$Params, context?: HttpContext): Observable<User> {
    return this.apiUserIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdGet$Json$Response(params: ApiUserIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUserIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdGet$Json(params: ApiUserIdGet$Json$Params, context?: HttpContext): Observable<User> {
    return this.apiUserIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `apiUserIdPut()` */
  static readonly ApiUserIdPutPath = '/api/User/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserIdPut$Response(params: ApiUserIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserIdPut(params: ApiUserIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiUserIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserIdDelete()` */
  static readonly ApiUserIdDeletePath = '/api/User/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdDelete$Response(params: ApiUserIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdDelete(params: ApiUserIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiUserIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

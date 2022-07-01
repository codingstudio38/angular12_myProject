import { Injectable  } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { dataType } from './interfacepage';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  apiUrl = 'http://127.0.0.1:8000/angularAPI/';
  constructor(private http: HttpClient) {

  } 
  API_users() {
    return this.http.get(this.apiUrl + 'viewangularData');
  }
 
  saveUsers(data: any) {
    return this.http.post(this.apiUrl + 'addangularData', data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }

  deleteUsers(data: number) {
    return this.http.delete(this.apiUrl + 'deleteangularData/' + data);
  }
  viewEditUsers(id: number) {
    return this.http.get(this.apiUrl + 'viewEditeangularData/' + id);
  }
  UpdateUsers(data: any) {
    return this.http.put(this.apiUrl + 'updateangularData/', data);
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Get client-side error\n${error.error.message}`;
    } else {
      errorMessage = `Get server-side error\nError Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
  usersBy_service() {
    return [
      { name: 'vk', age: 28, email: 'vk@gmail.com' },
      { name: 'Bidyut', age: 24, email: 'bidyut@gmail.com' },
      { name: 'Vidyut', age: 25, email: 'vidyut@gmail.com' },
      { name: 'bk', age: 29, email: 'bk@gmail.com' },
    ]
  }

  testInterface() {
    const data: dataType = {
      name: 'Bidyut',
      id: 100,
      indian: true,
      address: '67 odisha'
    }
    return data;
  }



}

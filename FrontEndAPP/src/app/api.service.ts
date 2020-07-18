import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Customers } from './cutomers';
import { OrdersByCustomer } from './OrdersByCustomer';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://localhost:44317/api/Customers';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }


  getCustomers(): Observable<Customers[]> {
    return this.http.get<Customers[]>(`https://localhost:44317/api/Customers`)
      .pipe(
        tap(customers => console.log('fetched customers')),
        catchError(this.handleError('getCustomers', []))
      );
  }
  
  getCustomerById(id: number): Observable<Customers> {   
    const url = `https://localhost:44317/api/Customers/${id}`;  
    return this.http.get<Customers>(url).pipe(
      tap(_ => console.log(`fetched customers id=${id}`)),
      catchError(this.handleError<Customers>(`getCustomerById id=${id}`))
    );
  }


  addCustomer(customers: Customers): Observable<Customers> {
    return this.http.post<Customers>(apiUrl, customers, httpOptions).pipe(
      tap((c: Customers) => console.log(`added customers w/ id=${c._id}`)),
      catchError(this.handleError<Customers>('addCustomer'))
    );
  }


  updateCustomers(id: string, customers: Customers): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, customers, httpOptions).pipe(
      tap(_ => console.log(`updated customers id=${id}`)),
      catchError(this.handleError<any>('updateCustomers'))
    );
  }


  deleteCustomers(id: string): Observable<Customers> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Customers>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted customers id=${id}`)),
      catchError(this.handleError<Customers>('deleteCustomers'))
    );
  }

  getOrdersByCustomers(id: string): Observable<OrdersByCustomer[]> {
    const apiurlgetOrdersByCustomer =`https://localhost:44317/api/SPgetOrdersByCustomer`;
     return this.http.get<OrdersByCustomer[]>(`${apiurlgetOrdersByCustomer}/${id}`)
       .pipe(
         tap(customers => console.log('fetched customers')),
         catchError(this.handleError('getCustomers', []))
       );
   }

}

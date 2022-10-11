import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  RouterState
} from '@angular/router';
import { catchError, concatMap, Observable, of, tap } from 'rxjs';
import { UnoService } from 'src/app/services/uno.service';

@Injectable({
  providedIn: 'root'
})
export class GetCharacterResolver implements Resolve<any> {

  

  constructor(private data$ : UnoService, private router :Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log('Resolver: ', route);
    console.log('R-state: ', state);
    const name : any = route.queryParams['name'];
    console.log(name);
    return this.data$.getCharacters().pipe(
      tap((res) => {
        console.log(res);
      }),
      concatMap((res : any)=> {
        console.log('ConcatMap: ',res);
        let temp = (res.results as any[]).find(item => {
          console.log("Item: ",item);
          return item.name.includes(name);
        })?.name;

        if(!temp){
          this.router.navigate(['404']);
          throw new Error('404');
          
        }

        console.log("Find: ", temp)
        return this.data$.getCharacter(name);
      }),
      tap((res) => {
        console.log(res);
      }),
      catchError((err : any) => {
        if(err.status === 404){
          this.router.navigate(['404'])
        }
        console.log(err);
        return err;
      })
    )
  }
}

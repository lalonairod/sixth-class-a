import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  public personaje$ !: Observable<any>

  constructor( private activedRoute : ActivatedRoute,private router : Router) { 
    this.personaje$ = this.activedRoute.data.pipe(
      tap(console.log)
    );

  }

  ngOnInit(): void {
    /*this.activedRoute.data.subscribe({
      next : (res) => {
        console.log('Componente 1:',res)
      }
    }
    ) */
  }

}

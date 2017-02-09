import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
// import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipesUrl = 'app/recipes';  // url to fake web API

  constructor (private http: Http) {}

  getRecipes (): Observable<Recipe[]> {
    return this.http.get(this.recipesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

/*  addHero (name: string): Observable<Hero> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.recipesUrl, { name }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }*/

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // in a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

/*
 private recipesUrl = 'app/heroes.json'; // URL to JSON file
 */

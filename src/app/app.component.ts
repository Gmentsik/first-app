import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {IntervalObservable} from "rxjs/observable/IntervalObservable";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  n: number = 0;
  constructor(private http: Http){
    IntervalObservable.create(1000).subscribe(updateApi3 => this.updateApi3());
  }


  title = 'app works!';
  name = "Gergely Mentsik2";
  objects = [{name:"object3",age:1488370897118},{name:"object4",age:1488370897118}];
  test = "hello";

  ngOnInit(): void {
    this.http.get("http://10.0.1.10:85/micro/res/test")
      .toPromise().then(r => r.json()).then(r => this.objects = r);
    this.updateApi3();
  }

  updateApi(): void{
    this.http.get("http://10.0.1.10:85/micro/res/test")
      .toPromise().then(r => r.json()).then(r => this.objects = r);
  }

  updateApi2(){
    return this.http.get("http://10.0.1.10:85/micro/res/test")
      .toPromise().then(r => r.json()).then(r => this.objects = r);
  }

  up(res:Response){
    this.objects = res.json();
  }

  updateApi3(){
    return this.http.get("http://10.0.1.10:85/micro/res/test").subscribe((res:Response) => this.up(res));
  }

}

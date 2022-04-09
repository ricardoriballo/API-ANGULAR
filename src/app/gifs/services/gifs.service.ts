import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  public results: any[] = [];


  constructor(private http: HttpClient){}

   searchGifs(query: string) {
    query = query.trim();
   
    this.http.get((`https://api.giphy.com/v1/gifs/search?api_key=NWCuHk0ajne6FF1nZpJWJVe37YFDwyHq&q=${query}&limit=10`))
    .subscribe((res: any) => {
      this.results = res.data;
    })
    // const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=NWCuHk0ajne6FF1nZpJWJVe37YFDwyHq&q=${query}&limit=10`);
    
    // const data = await resp.json();
    // console.log(data)
  }


}

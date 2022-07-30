import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private apiService: ApiService) {}
  title = 'demo-deploy';

  getPruebaApi() {
    console.log('llamo al api');
    this.apiService.getPrueba().subscribe((data: any) => {
      console.log('esto es lo que viene del servicio ');
      console.log(data);
    });
  }
}

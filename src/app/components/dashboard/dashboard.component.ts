import { Component } from '@angular/core';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-dashboard',
  //template: '<h3>My Dashboard</h3>',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent { /*implements OnInit*/

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }
}

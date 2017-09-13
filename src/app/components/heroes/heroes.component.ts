import { Component/*, OnInit */} from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html', //styles: [``],
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]  // Si ausencia no proboca error :(
})

/*implements OnInit, necesitaria import { OnInit }*/
export class HeroesComponent /*implements OnInit*/ {

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
      private router: Router,
      private heroService: HeroService
  ) { }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
	//alert("ngOnInit");
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
	console.log("HEROES:", this.getHeroes());
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

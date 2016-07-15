import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';


@Component({
	selector: 'my-app',
	template: `
<h2>My Heroes</h2>
<ul class="heroes">
<li *ngFor="let hero of heroes" (click)="onSelect(hero)"
[class.selected]="hero === selectedHero">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
</li>
</ul>
<my-hero-detail [hero]="selectedHero"></my-hero-detail>
`,
	directives: [HeroDetailComponent],
	providers: [HeroService]
})
export class AppComponent implements OnInit {
	ngOnInit() {
		this.getHeroes();
	}
	constructor(private heroService: HeroService) { }

	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;
	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero) { this.selectedHero = hero; }
}


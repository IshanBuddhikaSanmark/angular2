import { Component } from '@angular/core';
import {App2Component} from './app2.component';

@Component({
	selector: 'my-app',
	template: '<h1>My First Angular 2 App</h1><my-app2></my-app2>',
	directives: [
		App2Component
	]
})
export class AppComponent { }

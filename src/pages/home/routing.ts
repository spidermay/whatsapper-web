import { Routes } from '@angular/router';
import { PageComponent } from './component';

export const PathRoutes: Routes = [
		{

		path: '',
		children: [ {
			path: '',
			component: PageComponent
		}]
	}
];
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SalaComponent } from './components/sala/sala.component';
import { InicioComponent } from './components/Tinicio/inicio.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { Sala2Component } from './components/sala2/sala2.component';


const appRoutes: Routes = [
	{path: 'login', component: AppComponent},
	{path: 'principal', component: PrincipalComponent},
	{path: 'sala', component: SalaComponent},
	{path: 'sala2', component: Sala2Component},
	{path: 'inicio', component: InicioComponent},
	{path: 'ranking', component: RankingComponent},
	{ path: '',  redirectTo: '/inicio', pathMatch: 'full' }
];

export const appRoutingProviders: any[]=[];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);

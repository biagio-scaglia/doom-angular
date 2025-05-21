import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { Doom1Component } from './details/doom1/doom1.component';
import { Doom2Component } from './details/doom2/doom2.component';
import { Doom3Component } from './details/doom3/doom3.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent},
    {path: 'games', component:GamesComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'games/doom1', component: Doom1Component},
    {path: 'games/doom2', component: Doom2Component},
    {path: 'games/doom3', component: Doom3Component},



];

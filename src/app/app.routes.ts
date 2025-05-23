import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { MusicComponent } from './music/music.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'games', component: GamesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'games/:gameId', component: DetailsComponent },
    { path: 'music', component: MusicComponent },
    { path: '**', component: NotFoundComponent }, 

];

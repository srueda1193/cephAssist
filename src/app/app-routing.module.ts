import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

/**
 * Routing module udinf Lazy loading
 *
 * @author components
 * @version 1.0
 * @since 1.0.0
 */
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // {
  //   path: 'profiles',
  //   // canActivate: [CanActivateGuard],
  //   loadChildren: () => import('./modules/profiles/profiles.module').then(m => m.ProfilesModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

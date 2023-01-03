import { AgeAverageComponent } from './components/person/age-average/age-average.component';
import { ObesePercentageComponent } from './components/person/obese-percentage/obese-percentage.component';
import { CalculateImcComponent } from './components/person/calculate-imc/calculate-imc.component';
import { FindCandidatesComponent } from './components/person/find-candidates/find-candidates.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'candidatos-por-estado', component: FindCandidatesComponent},
      {path: 'calcular-imc-medio', component: CalculateImcComponent},
      {path: 'porcentagem-obesos', component: ObesePercentageComponent},
      {path: 'idade-media-por-tipo-sanguineo', component: AgeAverageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

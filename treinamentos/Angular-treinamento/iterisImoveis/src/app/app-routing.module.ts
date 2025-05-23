import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroImovelPageComponent } from './components/cadastro-imovel-page/cadastro-imovel-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ImoveisPageComponent } from './components/imoveis-page/imoveis-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
​
const routes: Routes = [{
  path: '',
  component: MenuTemplateComponent,
  children: [
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'sobre',
      component: SobrePageComponent
    },
    {
      path: 'imoveis',
      component: ImoveisPageComponent
    },
    {
      path: 'novo',
      component: CadastroImovelPageComponent
    }
  ]
}];
​
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component"
import { AuthComponent } from "./auth/auth.component"
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [{
  path: '', component: AuthComponent,

}, {
  path: 'app-component', component: AppComponent
}, {
  path : "test-component", component : TestComponent
}, {
  path : "register-component", component : RegisterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

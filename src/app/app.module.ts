import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioService } from './portfolio.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducacionComponent } from './educacion/educacion.component';
import { EducacionItemsList } from './educacion/educacion-items-list/educacion-items-list.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EducacionUpdateForm } from './educacion/educacion-update-form/educacion-update-form.component';
import { EducacionAddItemForm } from './educacion/educacion-add-item-form/educacion-add-item-form.component';
import { SkillsComponent } from './skills/skills.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { TrabajoItemsListComponent } from './trabajo/trabajo-items-list/trabajo-items-list.component';
import { TrabajoAddItemFormComponent } from './trabajo/trabajo-add-item-form/trabajo-add-item-form.component';
import { TrabajoUpdateFormComponent } from './trabajo/trabajo-update-form/trabajo-update-form.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectosAddItemFormComponent } from './proyectos/proyectos-add-item-form/proyectos-add-item-form.component';
import { ProyectosUpdateFormComponent } from './proyectos/proyectos-update-form/proyectos-update-form.component';
import { ProyectosItemsListComponent } from './proyectos/proyectos-items-list/proyectos-items-list.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { IdiomasAddItemFormComponent } from './idiomas/idiomas-add-item-form/idiomas-add-item-form.component';
import { IdiomasItemsListComponent } from './idiomas/idiomas-items-list/idiomas-items-list.component';
import { IdiomasUpdateFormComponent } from './idiomas/idiomas-update-form/idiomas-update-form.component';
import { SkillsUpdateFormComponent } from './skills/skills-update-form/skills-update-form.component';
import { SkillsItemsListComponent } from './skills/skills-items-list/skills-items-list.component';
import { SkillsAddItemFormComponent } from './skills/skills-add-item-form/skills-add-item-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderUpdateFormComponent } from './header/header-update-form/header-update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    EducacionItemsList,
    NavbarComponent,
    EducacionUpdateForm,
    EducacionAddItemForm,
    SkillsComponent,
    TrabajoComponent,
    TrabajoItemsListComponent,
    TrabajoAddItemFormComponent,
    TrabajoUpdateFormComponent,
    ProyectosComponent,
    ProyectosAddItemFormComponent,
    ProyectosUpdateFormComponent,
    ProyectosItemsListComponent,
    IdiomasComponent,
    IdiomasAddItemFormComponent,
    IdiomasItemsListComponent,
    IdiomasUpdateFormComponent,
    SkillsUpdateFormComponent,
    SkillsItemsListComponent,
    SkillsAddItemFormComponent,
    FooterComponent,
    HeaderComponent,
    HeaderUpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgbModule,
  ],
  providers: [PortfolioService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}


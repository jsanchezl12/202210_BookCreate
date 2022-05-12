import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { RouterModule } from '@angular/router';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthorRoutingModule,
    ReactiveFormsModule // nuevo modulo de forms
  ],
  //declarar nuevo componente
  declarations: [AuthorListComponent, AuthorDetailComponent, AuthorCreateComponent]
})
export class AuthorModule { }

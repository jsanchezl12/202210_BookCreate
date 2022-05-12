import { Component, OnInit } from '@angular/core'; // se agrega para el formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // se agrega para el formulario
import { ToastrService } from 'ngx-toastr';

import { Author } from "../author"
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  authorForm!: FormGroup; //form

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authorService: AuthorService
  ) { }

  createAuthor(author: Author){
    this.authorService.createAuthor(author).subscribe(author=>{
      console.info("The author was created: ", author)
      this.toastr.success("Confirmation", "Author created")
      this.authorForm.reset();
    })
  }

  cancelCreation(){
    this.authorForm.reset();
  }

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      image: ["", Validators.required],
      birthDate: ["", Validators.required],
      description: ["", [Validators.required, Validators.maxLength(100)]]
    })
  }
}

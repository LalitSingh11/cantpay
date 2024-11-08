import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  appservice = inject(AppService);
  form = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    amount: new FormControl<number>(0, Validators.required),
  });

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      this.appservice.onClick(this.form.value.amount!, this.form.value.name!);
    }
    this.form.reset();
  }
}

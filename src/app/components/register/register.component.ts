import { CommonModule } from "@angular/common";
import { UserService } from "./../../service/user.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../../interfaces/user";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { RouterOutlet, Router, RouterLink } from "@angular/router";
import { RegistrationService } from "../../service/registration.service";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent implements OnInit {
  user: User[] = [];
  registrationForm!: FormGroup;
  router: any;

  constructor(
    private userService: UserService,
    private registrationService: RegistrationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Initialize the registration form with form controls and validation
    this.registrationForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // If the form is valid, submit user details to the UserService
      const userDetails = this.registrationForm.value;
      this.userService.postUser(userDetails).subscribe({
        next: (response: any) => {
          // Handle successful registration
          this.registrationService.setRegistrationStatus(true);

          // Redirect to the account page after successful registration
          this.router.navigate(["/account"]);
        },
        error: (error: any) => {
          // Handle registration error
          console.error("Registration failed:", error);
        },
      });
    } else {
      // If the form is invalid, mark all form controls as touched
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    // Recursively mark all controls in the form group as touched
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  register() {
    // Trigger the registration process in the RegistrationService
    this.registrationService.registerUser();
  }
}

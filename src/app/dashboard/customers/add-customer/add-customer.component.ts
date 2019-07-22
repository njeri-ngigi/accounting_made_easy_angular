import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faImages, faCloudDownloadAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { validate as emailValidator} from 'email-validator';
import { ToastrService } from 'ngx-toastr';

import { ICustomerAdd } from 'src/app/models/customer.interface';
import { CustomersService } from 'src/app/services/customers.service';
import { titleCase } from 'src/app/utils/common';
import { imagePlaceholder } from 'src/app/utils/constants';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  imagePlaceholder = imagePlaceholder;
  faImages = faImages;
  faCloudDownloadAlt = faCloudDownloadAlt;
  faUserPlus = faUserPlus;
  customer: ICustomerAdd;
  shortName = true;
  specialCharacters = true;
  numbersOnly = true;
  invalidPhoneNumber = true;
  uniquePhoneNumber = true;
  invalidEmail = true;
  uniqueEmail = true;

  constructor(
    private service: CustomersService,
    private router: Router,
    private toastr: ToastrService
    ) {
    this.customer = {
      profilePicture: '',
      email: '',
      name: '',
      phoneNumber: ''
    };
   }

  ngOnInit() { }

  toggleCustomer(display, hide) {
    document.getElementById(display).style.display = 'flex';
    document.getElementById(hide).style.display = 'none';
  }

  resetValidityChecks() {
    this.shortName = true;
    this.specialCharacters = true;
    this.invalidPhoneNumber = true;
    this.uniquePhoneNumber = true;
    this.invalidEmail = true;
    this.uniqueEmail = true;
  }

  nameTest(name) {
    const specialCharacterTest = /^[A-z0-9 ]+$/.test(name);
    const firstLetterCheck = /^[A-z][A-z0-9 ]+$/.test(name);
    let errors = false;

    if (!specialCharacterTest) {
      this.specialCharacters = false;
      errors = true;
    } else if (name.length < 2) {
      this.shortName = false;
      errors = true;
    } else if (!firstLetterCheck) {
      this.numbersOnly = false;
      errors = true;
    }
    return errors;
  }

  validateInputs() {
    let name;
    let phoneNumber;
    let email;
    let errors = false;
    ({ name, phoneNumber, email } = this.customer);

    errors = this.nameTest(name.trim());
    phoneNumber = phoneNumber.trim().split(' ').join('');

    const phoneNumberTest = /^\d+$/.test(phoneNumber); // test phone number only contains numbers

    if (phoneNumber.length !== 10 || !phoneNumberTest) {
      this.invalidPhoneNumber = false;
      errors = true;
    }
    if (!emailValidator(email.trim())) {
      this.invalidEmail = false;
      errors = true;
    }
    return errors;
  }

  checkErrorInResponse(field) {
    switch (field) {
      case('email'):
        this.uniqueEmail = false;
        break;

      case('phone_number'):
        this.uniquePhoneNumber = false;
        break;
    }
  }

  async addCustomerManually(event) {
    event.preventDefault();
    this.resetValidityChecks();
    const errors = this.validateInputs();
    if (!errors) {
      this.service.addCustomer(this.customer).subscribe(() => {
        this.router.navigateByUrl('/dashboard/customers');
        this.toastr.success(`A new customer ${titleCase(this.customer.name)} added!`);
      }, (error) => {
        if (error.status === 409) {
          this.checkErrorInResponse(error.error.field);
        }
        this.toastr.error(error.error.error);
      });
    }

  }
}

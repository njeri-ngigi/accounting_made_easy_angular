export interface ICustomer {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  profile_picture: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICustomerAdd {
  name: string;
  email: string;
  phoneNumber: string;
  profilePicture: string;
}

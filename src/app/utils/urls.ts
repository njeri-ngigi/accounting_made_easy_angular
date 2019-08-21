import { environment } from '../../environments/environment';

const { baseUrl } = environment;

export const customerUrls = {
  customers: `${baseUrl}customers`,
  getById: id => `${baseUrl}customers/${id}`,
};

export const stockUrls = {
  stock: `${baseUrl}stock`
};

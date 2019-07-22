const baseUrl = 'http://localhost:3000/api/v1/am/';

export const  customerUrls = {
  customers: `${baseUrl}customers`,
  getById: id => `${baseUrl}customers/${id}`,
};

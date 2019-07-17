const baseUrl = 'http://localhost:3000/api/v1/am/';

export const  customerUrls = {
  getAll: `${baseUrl}customers`,
  getById: id => `${baseUrl}customers/${id}`
};

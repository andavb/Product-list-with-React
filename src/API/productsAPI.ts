import { Filter } from '../interfaces/Filter';

const baseUrl = 'http://localhost:3001';

function translateStatusToErrorMessage(status: number) {
  switch (status) {
    case 401:
      return 'You are unauthorized to view products(s).';
    case 403:
      return 'You do not have permission to view the products(s).';
    default:
      return 'There was an error retrieving the products(s). Please try again.';
  }
}

function checkStatus(response: any) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`Server http error: ${JSON.stringify(httpErrorInfo)}`);

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response: Response) {
  return response.json();
}

const productsAPI = {
  getProducts(limit = 4, filter?: Filter) {
    let getProductsUrl = `${baseUrl}/products/`;

    return fetch(getProductsUrl)
      .then(checkStatus)
      .then(parseJSON)
      .catch((error: TypeError) => {
        console.log('Log client error ' + error);
        throw new Error(
          'There was an error retrieving the products. Please try again.'
        );
      });
  },
};

export { productsAPI };

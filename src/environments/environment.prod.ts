export const environment = {
  production: true,
  baseUrl: 'http://93.127.199.17:8080/api',

  // Getter untuk URL register
  get registerUrl(): string {
    return `${this.baseUrl}/register`;
  },

  // Getter untuk URL login
  get loginUrl(): string {
    return `${this.baseUrl}/login`;
  },

  // Getter untuk URL profil
  get profilUrl(): string {
    return `${this.baseUrl}/user`
  },

  // Getter untuk URL produk
  get productsUrl(): string {
    return `${this.baseUrl}/product`;
  },

  getProductsByNameUrl(productName: string): string {
    return `${this.baseUrl}/products?name=${productName}`;
  },
  getProductPatchUrl(productId: string): string {
    return `${this.baseUrl}/product/${productId}`;
  }
};
export interface User {
  firstName: string,
  lastName: string,
  age?: number,  // ? makes them optional
  address?: {
    street?: string,
    city?: string,
    state?: string
  },
  image?: string,
  isActive?: boolean;
};
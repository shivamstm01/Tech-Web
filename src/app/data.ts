export interface signUp {
    fname:string;
    email:any;
    number:number;
    age:number;
    username:any;
    password:any;
    Address:any;
    state:string;
    City:string;
    PinCode:number;
    Collage:string

  }
  export interface login {
    username: any;
    password: any;
  }

  export type Product= {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }

  interface Rating {
    rate: number;
    count: number;
  }
import { Address } from "./adress.models";

export class User {

  constructor(public firstname: string, public lastname: string, public email: string, public adress :Address,
              public description: string, public dateBirth: string, public aliases? : string[]){


  }
}

export interface Breed {
    weight: {(imperial:string):string, (metric:string):string};
    height: {(imperial:string):string, (metric:string):string};
    id: number;
    country_code: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    origin: string;
  }
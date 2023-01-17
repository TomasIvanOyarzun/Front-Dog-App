import { Temperaments } from "../../../feactures/dog/DogSlice";

export interface form {
    name : string,
    minHeight : string,
    maxHeight : string,
    height : string,
    minWeight : string,
    maxWeight : string,
    weight : string,
    minLife_span : string,
    maxLife_span : string,
    life_span : string,
    image : string,
    temperament : Temperaments[]
}


export const errorInput = (input : form) => {
    
    let err  = {
        name : '',
        minHeight : '',
        maxHeight : '',
        height : '',
        minWeight : '',
        maxWeight : '',
        weight : '',
        minLife_span : '',
        maxLife_span : '',
        life_span : '',
        image : '',
        temperament : ''
    }
  
   if(input.name.length >= 25) {
    err.name = '*max 25 characters'
  
   } else if(input.name.length == 0) {
    err.name = '*name required'
   }
  
    
    if(Number(input.minHeight) < 0 ) {
      err.minHeight = '*negative number  is not accepted'
    } else if (Number(input.minHeight) > Number(input.maxHeight) ) {
        err.minHeight = '*cannot exceed the maximum height'
    } 
  
    if(Number(input.maxHeight) <  0 ) {
        err.maxHeight = '*negative number is not accepted'
      } else if ( Number(input.maxHeight) < Number(input.minHeight) ) {
          err.maxHeight = '*cannot be less than the minimum height'
      } 
    
    
      if(Number(input.minWeight) < 0 ) {
        err.minWeight = '*negative number  is not accepted'
      } else if (Number(input.minWeight) > Number(input.maxWeight) ) {
          err.minWeight = '*cannot exceed the maximum weight'
      } 
    
      if(Number(input.maxWeight) <  0 ) {
          err.maxWeight = '*negative number is not accepted'
        } else if ( Number(input.maxWeight) < Number(input.minWeight) ) {
            err.maxWeight = '*cannot be less than the minimum weight'
        } 
      

        if(Number(input.minLife_span) < 0 ) {
            err.minLife_span = '*negative number  is not accepted'
          } else if (Number(input.minLife_span) > Number(input.maxLife_span) ) {
            err.minLife_span = '*cannot be greater than maximum life'
          } 
        
          if(Number(input.maxLife_span) <  0 ) {
              err.maxLife_span = '*negative number is not accepted'
            } else if ( Number(input.maxLife_span) < Number(input.minLife_span) ) {
                err.maxLife_span = '*cannot be less than the minimum life'
            }
         

            if(input.temperament.length <= 0) {
                err.temperament = '*choose at least 1 temperament'
            } else if (input.temperament.length > 5) {
                 err.temperament = '*maximum 5 temperaments'
            }
   return err
  }
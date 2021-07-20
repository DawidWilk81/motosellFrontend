import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName:string): any {
    if(sName === ""){
      return value;
    }
    const PojazdyArray:any[]=[];
    for(let i=0; i<value.length; i++){
      let userName:string = value[i].Uzytkownik;
      if(userName.startsWith(sName)){
        PojazdyArray.push(value[i])
      }
    }
    return PojazdyArray;
  }

}

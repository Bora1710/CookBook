import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './newrecipe/newrecipe';

@Pipe({
  name: 'paginatorPipe',
})
export class PaginatorPipePipe implements PipeTransform {
  transform(
    value: Recipe[],
    currentPage: number,
    itemsPerPage: number
  ): Recipe[] {
    let startIndex = currentPage * itemsPerPage;
    let endIndex = (currentPage + 1) * itemsPerPage;
    return value.slice(startIndex, endIndex);
  }
}
// slice : currentPage * itemsPerPage : (currentPage + 1) * itemsPerPage

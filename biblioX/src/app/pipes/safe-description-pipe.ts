import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeDescription'
})
export class SafeDescriptionPipe implements PipeTransform {

  transform(value: string | undefined | null): string {
    return value && value.trim().length > 0 ? value : 'No description available.';
  }

}

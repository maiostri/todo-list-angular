import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validador = function palavrasSujas(
  palavras: string[]
): ValidatorFn {
  // control é o FormControl
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = palavras.some((w) => control.value.includes(w));
    return forbidden ? { palavrasSujas: { value: control.value } } : null;
  };
};

export const validatorEmail = (
  control: AbstractControl
): ValidationErrors | null => {
  const forbidden = control.value.includes('@');
  return forbidden ? { emailInvalido: { value: control.value } } : null;
};

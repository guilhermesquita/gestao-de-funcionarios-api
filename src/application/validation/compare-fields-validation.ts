import { Validation } from "application/contracts";
import { InvalidParamError } from "../../application/errors";

export class CompareFieldsValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) {}

  validate(input: any): Error | undefined {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}

import { FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GenderEnum } from "../dto/Gender";

export const GenderSelect = (myField: any, defaultValue: any) => {
  console.log("gender");
  console.log(defaultValue);
  console.log(myField);
  console.log("gender");
  return (
    <Select onValueChange={myField.onChange} defaultValue={myField.value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Choisissez un genre" />
        </SelectTrigger>
      </FormControl>
      <SelectContent defaultValue={defaultValue}>
        {GenderEnum.options.map((gender) => (
          <SelectItem key={gender} value={gender}>
            {gender}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

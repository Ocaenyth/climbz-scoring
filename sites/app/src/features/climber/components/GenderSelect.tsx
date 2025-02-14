import { FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Gender, GenderEnum } from "../dto/Gender";

export interface GenderSelectProps {
  field: any;
  defaultValue?: Gender;
}

export const GenderSelect = ({ field, defaultValue }: GenderSelectProps) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
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

import { FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCompetitionCategories } from "../hooks/useCompetitionCategories";

export interface CompetitionCategorySelectProps {
  field: any;
  defaultValue?: string;
}

export const CompetitionCategorySelect = ({
  field,
  defaultValue,
}: CompetitionCategorySelectProps) => {
  const { data } = useCompetitionCategories();
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Choisissez une catégorie" />
        </SelectTrigger>
      </FormControl>
      <SelectContent defaultValue={defaultValue}>
        {data &&
          data.map((competitionCategory) => (
            <SelectItem
              key={competitionCategory.id}
              value={competitionCategory.id}
            >
              {competitionCategory.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

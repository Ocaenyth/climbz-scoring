import { FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useWalls } from "../hooks/useWalls";

export interface WallSelectProps {
  field: any;
}

export const WallSelect = ({ field }: WallSelectProps) => {
  const { data } = useWalls();
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Choisissez un couloir" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {data &&
          data.map((wall) => (
            <SelectItem key={wall.id} value={wall.id}>
              {wall.number}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

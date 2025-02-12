import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useDeleteClimber } from "../hooks/useDeleteClimber";

export interface DeleteClimberButtonProps {
  id: string;
}

export const DeleteClimberButton = ({ id }: DeleteClimberButtonProps) => {
  const { mutate } = useDeleteClimber();
  return (
    <Button size="icon" variant="destructive" onClick={() => mutate(id)}>
      <Trash2 />
    </Button>
  );
};

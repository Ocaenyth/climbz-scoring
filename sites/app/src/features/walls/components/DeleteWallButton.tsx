import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useDeleteWall } from "../hooks/useDeleteWall";

export interface DeleteWallButtonProps {
  id: string;
}

export const DeleteWallButton = ({ id }: DeleteWallButtonProps) => {
  const { mutate } = useDeleteWall();
  return (
    <Button size="icon" variant="destructive" onClick={() => mutate(id)}>
      <Trash2 />
    </Button>
  );
};

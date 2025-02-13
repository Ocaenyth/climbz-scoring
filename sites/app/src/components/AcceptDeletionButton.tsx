import { toast } from "sonner";
import { Button } from "./ui/button";
import { DialogClose } from "./ui/dialog";

interface AcceptDeletionButtonProps {
  onClick: () => Promise<void>;
}

export const AcceptDeletionButton = ({
  onClick,
}: AcceptDeletionButtonProps) => {
  const handleOnClick = async () => {
    await toast
      .promise(onClick, {
        loading: "Suppression en cours...",
        success: "Supression réussie !",
        error: "Erreur lors de la suppression",
      })
      .unwrap();
  };
  return (
    <DialogClose asChild>
      <Button variant="destructive" onClick={handleOnClick}>
        Oui
      </Button>
    </DialogClose>
  );
};

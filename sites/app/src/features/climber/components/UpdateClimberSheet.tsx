import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Climber } from "../dto/Climber";
import { useUpdateClimber } from "../hooks/useUpdateClimber";
import { ClimberForm, ClimberFormValues } from "./ClimberForm";

export interface UpdateClimberSheetProps {
  climber: Climber;
}

export const UpdateClimberSheet = ({ climber }: UpdateClimberSheetProps) => {
  const { mutateAsync } = useUpdateClimber();
  const handleSubmit = async (values: ClimberFormValues) => {
    await toast
      .promise(
        mutateAsync(
          { ...values, id: climber.id },
          {
            onSuccess: () => {
              setOpen(false);
            },
          }
        ),
        {
          loading: "Modification en cours...",
          success: "Participant.e bien modifié.e !",
          error: "Une erreur est survenue en modifiant un.e participant.e",
        }
      )
      .unwrap();
  };
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon">
          <Pencil />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Modifier un.e participant.e</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <ClimberForm
          onSubmit={handleSubmit}
          defaultValues={climber}
        ></ClimberForm>
      </SheetContent>
    </Sheet>
  );
};

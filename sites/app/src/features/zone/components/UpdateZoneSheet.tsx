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
import { Zone } from "../dto/Zone";
import { useUpdateZone } from "../hooks/useUpdateZone";
import { ZoneForm, ZoneFormValues } from "./ZoneForm";

export interface UpdateZoneSheetProps {
  zone: Zone;
}

export const UpdateZoneSheet = ({ zone }: UpdateZoneSheetProps) => {
  const { mutateAsync } = useUpdateZone();
  const handleSubmit = async (values: ZoneFormValues) => {
    await toast
      .promise(
        mutateAsync(
          { ...values, id: zone.id },
          {
            onSuccess: () => {
              setOpen(false);
            },
          }
        ),
        {
          loading: "Modification en cours...",
          success: "Zone bien modifiée !",
          error: "Une erreur est survenue en modifiant une zone",
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
          <SheetTitle>Modifier une zone</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <ZoneForm onSubmit={handleSubmit} defaultValues={zone}></ZoneForm>
      </SheetContent>
    </Sheet>
  );
};

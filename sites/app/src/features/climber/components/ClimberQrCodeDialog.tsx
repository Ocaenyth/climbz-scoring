import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QrCodeIcon } from "lucide-react";
import QRCode from "react-qr-code";
import { Climber } from "../dto/Climber";

export interface ClimberQrCodeDialogProps {
  climber: Climber;
}

export const ClimberQrCodeDialog = ({ climber }: ClimberQrCodeDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"}>
          <QrCodeIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col p-8 relative max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex justify-center">
            QR code pour {climber.firstName} {climber.lastName}
          </DialogTitle>
        </DialogHeader>
        <div className="bg-white p-8">
          <QRCode
            value={`${window.location.origin}/climbers/${climber.id}`}
            size={450}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

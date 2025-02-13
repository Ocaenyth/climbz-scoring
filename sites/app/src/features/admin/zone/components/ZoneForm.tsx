import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { createZoneSchema } from "../dto/Zone";

export const zoneFormSchema = createZoneSchema;

export type ZoneFormValues = z.infer<typeof zoneFormSchema>;

export interface ZoneFormProps {
  onSubmit: SubmitHandler<ZoneFormValues>;
  defaultValues?: DefaultValues<ZoneFormValues>;
}

const resolver = zodResolver(zoneFormSchema);

export const ZoneForm = ({ onSubmit, defaultValues }: ZoneFormProps) => {
  const form = useForm<ZoneFormValues>({ defaultValues, resolver });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="numéro"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Enregistrer
        </Button>
      </form>
    </Form>
  );
};

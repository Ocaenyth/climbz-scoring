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
import { createWallSchema } from "../dto/Wall";

export const wallFormSchema = createWallSchema;

export type WallFormValues = z.infer<typeof wallFormSchema>;

export interface WallFormProps {
  onSubmit: SubmitHandler<WallFormValues>;
  defaultValues?: DefaultValues<WallFormValues>;
}

const resolver = zodResolver(wallFormSchema);

export const WallForm = ({ onSubmit, defaultValues }: WallFormProps) => {
  const form = useForm<WallFormValues>({ defaultValues, resolver });

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
                <Input placeholder="numéro" type="number" {...field} />
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

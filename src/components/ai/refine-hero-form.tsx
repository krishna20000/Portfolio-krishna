"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { refineHeroText, type RefineHeroTextInput, type RefineHeroTextOutput } from "@/ai/flows/refine-hero-text";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
  heroText: z.string().min(10, "Please enter at least 10 characters.").max(300, "Text cannot exceed 300 characters."),
});

type FormData = z.infer<typeof FormSchema>;

export function RefineHeroForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [refinedText, setRefinedText] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      heroText: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setRefinedText(null);
    try {
      const result: RefineHeroTextOutput = await refineHeroText({ heroText: data.heroText });
      setRefinedText(result.refinedText);
      toast({
        title: "Text Refined!",
        description: "AI has suggested an improved version.",
      });
    } catch (error) {
      console.error("Error refining text:", error);
      toast({
        title: "Error",
        description: "Failed to refine text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="h-6 w-6 text-accent" />
          AI Hero Text Refiner
        </CardTitle>
        <CardDescription>
          Enter your current hero text, and let AI suggest a more impactful version.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="heroText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Hero Text</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., I am Krishna Mehta, a very good front end developer"
                      className="resize-none"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Refine with AI
            </Button>
          </form>
        </Form>

        {refinedText && (
          <div className="mt-6 space-y-2">
            <h3 className="text-lg font-semibold font-headline">AI Suggestion:</h3>
            <p className="text-sm text-muted-foreground p-4 border rounded-md bg-secondary/50">
              {refinedText}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

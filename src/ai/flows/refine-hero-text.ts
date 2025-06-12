// src/ai/flows/refine-hero-text.ts
'use server';

/**
 * @fileOverview A flow to refine the hero section text using GenAI.
 *
 * - refineHeroText - A function that refines the given hero text.
 * - RefineHeroTextInput - The input type for the refineHeroText function.
 * - RefineHeroTextOutput - The return type for the refineHeroText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineHeroTextInputSchema = z.object({
  heroText: z
    .string()
    .describe('The original hero text that needs to be refined.'),
});
export type RefineHeroTextInput = z.infer<typeof RefineHeroTextInputSchema>;

const RefineHeroTextOutputSchema = z.object({
  refinedText: z
    .string()
    .describe('The refined hero text suggested by the AI.'),
});
export type RefineHeroTextOutput = z.infer<typeof RefineHeroTextOutputSchema>;

export async function refineHeroText(input: RefineHeroTextInput): Promise<RefineHeroTextOutput> {
  return refineHeroTextFlow(input);
}

const refineHeroTextPrompt = ai.definePrompt({
  name: 'refineHeroTextPrompt',
  input: {schema: RefineHeroTextInputSchema},
  output: {schema: RefineHeroTextOutputSchema},
  prompt: `You are an expert copywriter specializing in creating compelling hero section text for personal portfolio websites.

  Given the original hero text, suggest a refined version that is more engaging, highlights the individual's skills and experience effectively, and is tailored for a frontend developer named Krishna Mehta.

  Original Hero Text: {{{heroText}}}

  Refined Hero Text:`,
});

const refineHeroTextFlow = ai.defineFlow(
  {
    name: 'refineHeroTextFlow',
    inputSchema: RefineHeroTextInputSchema,
    outputSchema: RefineHeroTextOutputSchema,
  },
  async input => {
    const {output} = await refineHeroTextPrompt(input);
    return output!;
  }
);

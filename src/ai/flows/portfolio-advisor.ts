'use server';
/**
 * @fileOverview AI-powered tool that suggests improvements for project descriptions.
 *
 * - improveProjectDescription - A function that handles the project description improvement process.
 * - ImproveProjectDescriptionInput - The input type for the improveProjectDescription function.
 * - ImproveProjectDescriptionOutput - The return type for the improveProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveProjectDescriptionInputSchema = z.object({
  projectDescription: z.string().describe('The project description to improve.'),
});
export type ImproveProjectDescriptionInput = z.infer<typeof ImproveProjectDescriptionInputSchema>;

const ImproveProjectDescriptionOutputSchema = z.object({
  improvedDescription: z.string().describe('The improved project description.'),
  suggestions: z.array(z.string()).describe('Specific suggestions for improvement.'),
});
export type ImproveProjectDescriptionOutput = z.infer<typeof ImproveProjectDescriptionOutputSchema>;

export async function improveProjectDescription(input: ImproveProjectDescriptionInput): Promise<ImproveProjectDescriptionOutput> {
  return improveProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveProjectDescriptionPrompt',
  input: {schema: ImproveProjectDescriptionInputSchema},
  output: {schema: ImproveProjectDescriptionOutputSchema},
  prompt: `You are a portfolio advisor that specializes in improving project descriptions.

  Given the following project description, provide an improved description and specific suggestions for improvement.

  Project Description: {{{projectDescription}}}
  \n  Format the suggestions in a numbered list.
  `,
});

const improveProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'improveProjectDescriptionFlow',
    inputSchema: ImproveProjectDescriptionInputSchema,
    outputSchema: ImproveProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

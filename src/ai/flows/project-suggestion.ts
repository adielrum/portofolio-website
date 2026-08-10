'use server';

/**
 * @fileOverview An AI agent that suggests projects based on current trends and technologies.
 *
 * - suggestNewProjects - A function that suggests new projects to showcase.
 * - SuggestNewProjectsInput - The input type for the suggestNewProjects function.
 * - SuggestNewProjectsOutput - The return type for the suggestNewProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestNewProjectsInputSchema = z.object({
  userSkills: z
    .string()
    .describe('A comma separated list of skills that the user possesses.'),
  userInterests: z
    .string()
    .describe('A comma separated list of interests that the user has.'),
});
export type SuggestNewProjectsInput = z.infer<typeof SuggestNewProjectsInputSchema>;

const SuggestNewProjectsOutputSchema = z.object({
  suggestedProjects: z
    .array(z.string())
    .describe('An array of suggested projects based on current trends and user skills and interests.'),
});
export type SuggestNewProjectsOutput = z.infer<typeof SuggestNewProjectsOutputSchema>;

export async function suggestNewProjects(input: SuggestNewProjectsInput): Promise<SuggestNewProjectsOutput> {
  if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
    return {
      suggestedProjects: [
        "Please configure GEMINI_API_KEY in .env.local to get live AI project suggestions.",
      ],
    };
  }
  try {
    return await suggestNewProjectsFlow(input);
  } catch (error: any) {
    console.error('Genkit Suggestion Error:', error);
    return {
      suggestedProjects: [
        "Could not connect to Gemini API. Please check your GEMINI_API_KEY in .env.local.",
      ],
    };
  }
}

const prompt = ai.definePrompt({
  name: 'suggestNewProjectsPrompt',
  input: {schema: SuggestNewProjectsInputSchema},
  output: {schema: SuggestNewProjectsOutputSchema},
  prompt: `You are a portfolio advisor who specializes in providing guidance to data scientists, web developers, and app developers.

You will suggest new projects to the user based on their skills and interests, and also based on current trends and technologies.

User Skills: {{{userSkills}}}
User Interests: {{{userInterests}}}

Suggest 3 new projects the user can showcase in their portfolio:

{{#each suggestedProjects}}- {{{this}}}
{{/each}}`,
});

const suggestNewProjectsFlow = ai.defineFlow(
  {
    name: 'suggestNewProjectsFlow',
    inputSchema: SuggestNewProjectsInputSchema,
    outputSchema: SuggestNewProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

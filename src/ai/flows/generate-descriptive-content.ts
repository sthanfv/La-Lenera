'use server';
/**
 * @fileOverview AI-powered content generation for describing different types of firewood.
 *
 * This module defines a Genkit flow that leverages a language model to create
 * engaging and personalized descriptions for various types of firewood, highlighting
 * their unique characteristics and benefits to users.
 *
 * @module src/ai/flows/generate-descriptive-content
 *
 * @interface GenerateDescriptiveContentInput
 *   @property {string} woodType - The type of wood (e.g., oak, mesquite, apple).
 *   @property {string} burningCharacteristics - Key attributes like burn time, smoke level, aroma.
 *
 * @interface GenerateDescriptiveContentOutput
 *   @property {string} description - The generated description of the firewood.
 *
 * @function generateDescriptiveContent - The main function to trigger the content generation flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDescriptiveContentInputSchema = z.object({
  woodType: z
    .string()
    .describe('The type of wood (e.g., oak, mesquite, apple).'),
  burningCharacteristics:
    z.string().describe('Key attributes like burn time, smoke level, aroma.'),
});

export type GenerateDescriptiveContentInput = z.infer<
  typeof GenerateDescriptiveContentInputSchema
>;

const GenerateDescriptiveContentOutputSchema = z.object({
  description: z.string().describe('The generated description of the firewood.'),
});

export type GenerateDescriptiveContentOutput = z.infer<
  typeof GenerateDescriptiveContentOutputSchema
>;

export async function generateDescriptiveContent(
  input: GenerateDescriptiveContentInput
): Promise<GenerateDescriptiveContentOutput> {
  return generateDescriptiveContentFlow(input);
}

const generateDescriptiveContentPrompt = ai.definePrompt({
  name: 'generateDescriptiveContentPrompt',
  input: {schema: GenerateDescriptiveContentInputSchema},
  output: {schema: GenerateDescriptiveContentOutputSchema},
  prompt: `Eres un experto en leña y marketing. Crea una descripción
  atractiva y persuasiva para el siguiente tipo de leña, resaltando sus
  características únicas y beneficios para los usuarios.

  Tipo de leña: {{{woodType}}}
  Características de quemado: {{{burningCharacteristics}}}

  Descripción:`,
});

const generateDescriptiveContentFlow = ai.defineFlow(
  {
    name: 'generateDescriptiveContentFlow',
    inputSchema: GenerateDescriptiveContentInputSchema,
    outputSchema: GenerateDescriptiveContentOutputSchema,
  },
  async input => {
    const {output} = await generateDescriptiveContentPrompt(input);
    return output!;
  }
);

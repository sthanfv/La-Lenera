
"use server";

import { generateDescriptiveContent, type GenerateDescriptiveContentInput } from "@/ai/flows/generate-descriptive-content";
import { z } from "zod";

const inputSchema = z.object({
  woodType: z.string(),
  burningCharacteristics: z.string(),
});

export async function generateDescriptionAction(input: GenerateDescriptiveContentInput) {
  const parsedInput = inputSchema.safeParse(input);
  if (!parsedInput.success) {
    return { error: "Entrada inválida." };
  }

  try {
    const result = await generateDescriptiveContent(parsedInput.data);
    return { description: result.description };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo generar la descripción. Inténtelo de nuevo." };
  }
}

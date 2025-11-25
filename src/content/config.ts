import { defineCollection, z } from "astro:content";

const sectionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    template: z.enum(["hero", "content", "cta"]).default("content"),
    arabicText: z.string().optional(),
    ctaButtonText: z.string().optional(),
    ctaButtonLink: z.string().optional(),
  }),
});

export const collections = {
  sections: sectionsCollection,
};

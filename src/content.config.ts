import { defineCollection, z } from 'astro:content';

const issueContentType = z.enum(['issue', 'letter', 'notebook']);
const sourceType = z.enum(['sermon', 'reflection', 'letter', 'notebook', 'other']);
const issueStatus = z.enum(['draft', 'scheduled', 'published']);
const briefStatus = z.enum(['seed', 'drafted', 'ready']);

const issues = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    socialTitle: z.string().optional(),
    description: z.string(),
    socialDescription: z.string().optional(),
    publishDate: z.coerce.date(),
    issueNumber: z.number().int().positive(),
    status: issueStatus.default('draft'),
    contentType: issueContentType.default('issue'),
    label: z.string(),
    series: z.string().optional(),
    audience: z.string(),
    readTime: z.string(),
    author: z.string().default('Samuel Umoren'),
    sourceType: sourceType.default('other'),
    sourceTitle: z.string().optional(),
    sourceSpeaker: z.string().optional(),
    sourceDate: z.coerce.date().optional(),
    featuredQuote: z.string(),
    featuredVerse: z.string(),
    themes: z.array(z.string()).default([]),
    scriptureReferences: z.array(z.string()).default([]),
    shareCardLine: z.string().optional(),
    designMood: z.string().optional(),
    palette: z.array(z.string()).default([]),
    isFeatured: z.boolean().default(false),
    template: z.string().optional(),
  }),
});

const issueBriefs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: briefStatus.default('seed'),
    sourceType: sourceType.default('other'),
    sourceTitle: z.string(),
    sourceSpeaker: z.string().optional(),
    sourceDate: z.coerce.date().optional(),
    series: z.string().optional(),
    audience: z.string().optional(),
    coreThesis: z.string(),
    slugSuggestion: z.string().optional(),
    designMood: z.string().optional(),
    palette: z.array(z.string()).default([]),
    mainTensions: z.array(z.string()).default([]),
    scriptureReferences: z.array(z.string()).default([]),
    strongLines: z.array(z.string()).default([]),
    sectionAngles: z.array(z.string()).default([]),
    applications: z.array(z.string()).default([]),
    questionsForSamuel: z.array(z.string()).default([]),
    shareCardLine: z.string().optional(),
  }),
});

export const collections = { issues, issueBriefs };

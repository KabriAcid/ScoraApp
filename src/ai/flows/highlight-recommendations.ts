'use server';

/**
 * @fileOverview AI-curated soccer match highlight recommendations.
 *
 * - getHighlightRecommendations - A function that returns the AI-curated highlight recommendations.
 * - HighlightRecommendationsInput - The input type for the getHighlightRecommendations function.
 * - HighlightRecommendationsOutput - The return type for the getHighlightRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HighlightRecommendationsInputSchema = z.object({
  matchSummary: z.string().describe('Real-time match data including goals, penalties, and key plays.'),
  userPreferences: z.string().optional().describe('Optional user preferences for highlight types.'),
});
export type HighlightRecommendationsInput = z.infer<typeof HighlightRecommendationsInputSchema>;

const HighlightRecommendationsOutputSchema = z.object({
  highlightRecommendations: z.array(
    z.object({
      moment: z.string().describe('Description of the highlight moment.'),
      reason: z.string().describe('Reason why this moment is a highlight.'),
      timestamp: z.string().optional().describe('Optional timestamp of the highlight in the match.'),
    })
  ).describe('A list of AI-curated highlight recommendations.'),
});
export type HighlightRecommendationsOutput = z.infer<typeof HighlightRecommendationsOutputSchema>;

export async function getHighlightRecommendations(
  input: HighlightRecommendationsInput
): Promise<HighlightRecommendationsOutput> {
  return highlightRecommendationsFlow(input);
}

const highlightRecommendationsPrompt = ai.definePrompt({
  name: 'highlightRecommendationsPrompt',
  input: {schema: HighlightRecommendationsInputSchema},
  output: {schema: HighlightRecommendationsOutputSchema},
  prompt: `You are an AI expert in curating soccer match highlights. Based on the real-time match data provided, 
you will identify and recommend the most exciting moments for users to quickly catch up on key plays and goals.

Match Summary:
{{matchSummary}}

User Preferences (Optional):
{{userPreferences}}

Recommend the most exciting highlights from the match, providing a description of the moment, a reason for its importance,
and, if available, a timestamp.

Ensure the highlights are engaging and represent the most impactful events of the match.

Output in the following format:

{
  "highlightRecommendations": [
    {
      "moment": "Description of the highlight moment",
      "reason": "Reason why this moment is a highlight",
      "timestamp": "Optional timestamp of the highlight in the match"
    }
  ]
}
`,
});

const highlightRecommendationsFlow = ai.defineFlow(
  {
    name: 'highlightRecommendationsFlow',
    inputSchema: HighlightRecommendationsInputSchema,
    outputSchema: HighlightRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await highlightRecommendationsPrompt(input);
    return output!;
  }
);

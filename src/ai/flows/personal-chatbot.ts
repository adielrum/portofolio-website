'use server';
/**
 * @fileOverview A personal chatbot to answer questions about Adiel Rum.
 *
 * - personalChatbot - A function that answers questions.
 * - PersonalChatbotInput - The input type for the personalChatbot function.
 * - PersonalChatbotOutput - The return type for the personalChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalChatbotInputSchema = z.object({
  question: z.string().describe("The user's question about Adiel Rum."),
});
export type PersonalChatbotInput = z.infer<typeof PersonalChatbotInputSchema>;

const PersonalChatbotOutputSchema = z.object({
  answer: z.string().describe("The AI's answer to the user's question."),
});
export type PersonalChatbotOutput = z.infer<typeof PersonalChatbotOutputSchema>;

export async function personalChatbot(input: PersonalChatbotInput): Promise<PersonalChatbotOutput> {
  if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
    return {
      answer: "Hi! To enable live AI chatbot responses, please set GEMINI_API_KEY in .env.local file in the project root. In the meantime, feel free to explore my background, projects, and CV details on this page!",
    };
  }
  try {
    return await personalChatbotFlow(input);
  } catch (error: any) {
    console.error('Genkit Chatbot Error:', error);
    return {
      answer: "I am currently unable to connect to the Gemini API. Please verify your GEMINI_API_KEY in .env.local.",
    };
  }
}

const prompt = ai.definePrompt({
  name: 'personalChatbotPrompt',
  input: {schema: PersonalChatbotInputSchema},
  output: {schema: PersonalChatbotOutputSchema},
  prompt: `You are Adiel Rum's personal AI assistant. Your goal is to answer questions about Adiel based on the grounded information provided below from his official CV. Be friendly, concise, and professional. Answer from Adiel's perspective, using "I" and "me". If you don't know the answer, say that you don't have that information but Adiel would be happy to answer if they contact him through the contact form.

Here is authentic information about me, Adiel Rum:

**Executive Summary & Education:**
- Undergraduate in Mathematics (BS) with Minors in Computer Science at Institut Teknologi Bandung (ITB) (2023 - 2027 Projected).
- Cumulative GPA: 3.96 / 4.0 (102 / 144 Credits).
- Awarded Dean's List for 5 consecutive semesters (1st, 2nd, 3rd, 4th, 5th semester).
- BSI Scholarship Prestasi Awardee.
- Relevant Coursework: Machine Learning, Data Analysis, Deep Learning, Probability Theory, Mathematical Statistics, Algorithm Strategies, Operations Research.

**Work & Organizational Experience:**
1. Pusat Pemodelan Matematika dan Simulasi (PPMS ITB) - Research Assistant (Daewoong Open Collaboration Project Team) (Apr 2026 - Present):
   - Synthesized insights from 20+ papers for microneedle drug delivery optimization. Formulated mathematical models with 2 novel parameters.
   - Optimized model using Pymoo framework in Python, improving baseline optimization results by 30%.
   - Accelerated computational runtime by over 50x (from 2 hours to 15 minutes) using Numba for scientific computing.

2. Otoritas Jasa Keuangan (OJK) - Data Analyst Intern (Dept of Banking Supervision Quality Control and Development) (Jan 2026 - Feb 2026):
   - Executed CRISP-DM clustering analysis on business models of 105 Indonesian banks across 600+ records.
   - Developed predictive ML and deep learning models for bank profitability forecasting.
   - Prepared strategic presentation materials and documented weekly meeting minutes for stakeholders.

3. Laboratorium Analisis Data, Simulasi Matematika dan Komputasi (ITB) - Laboratory Assistant (Sep 2025 - Present):
   - Guided 40 students through 10 data analysis lab modules in R (linear regression, time series, geospatial analysis).
   - Streamlined submission workflows and grading tracking using Microsoft Excel.

4. Himpunan Mahasiswa Matematika ITB (HIMATIKA ITB) - Head of Data Science Competition (MCF 2026) (Jun 2025 - Present):
   - Directed 10 committee members for a national data science competition attracting 250+ participants nationwide.
   - Formulated problem statements and rubrics with 2 industry practitioners and academic lecturers.

5. Kelompok Studi Ekonomi dan Pasar Modal ITB (KSEP ITB) - Staff Developer (2024 - Present):
   - Built full-stack web applications and features using Next.js, TypeScript, React.js, and Tailwind CSS.

**Awards & Achievements:**
- Finalist of National Science Olympiad (OSN / KSN) in Informatics 2022 (Mendikbud Ristek RI).
- Finalist of Bina Nusantara Programming Contest for High School Students (BNPCHS) 2022.
- Dean's List (1st, 2nd, 3rd, 4th, 5th semester at ITB).
- BSI Scholarship Prestasi Awardee.

**My Skills:**
- Data Analysis & ML: Python, R, Power BI, Pymoo, Numba, CRISP-DM, Machine Learning, Deep Learning, Time Series, Linear Regression.
- Web Development: JavaScript, TypeScript, Next.js, React.js, Tailwind CSS, Prisma.
- Soft Skills & Tools: Scientific Writing, Public Speaking, Teaching, Team Work, Excel, Git, Jupyter.

**Contact/Socials:**
- Email: adiel.rum@gmail.com
- GitHub: https://github.com/adielrum
- LinkedIn: https://www.linkedin.com/in/adielrum/

Now, answer the following question: {{{question}}}
`,
});

const personalChatbotFlow = ai.defineFlow(
  {
    name: 'personalChatbotFlow',
    inputSchema: PersonalChatbotInputSchema,
    outputSchema: PersonalChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

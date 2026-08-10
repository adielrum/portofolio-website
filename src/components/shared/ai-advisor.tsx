'use client';

import { useState } from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { improveProjectDescription, ImproveProjectDescriptionOutput } from '@/ai/flows/portfolio-advisor';
import { suggestNewProjects, SuggestNewProjectsOutput } from '@/ai/flows/project-suggestion';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function AiAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  // State for Improve Description
  const [description, setDescription] = useState('');
  const [isImproving, setIsImproving] = useState(false);
  const [improvementResult, setImprovementResult] = useState<ImproveProjectDescriptionOutput | null>(null);

  // State for Suggest Projects
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [suggestionResult, setSuggestionResult] = useState<SuggestNewProjectsOutput | null>(null);

  const handleImproveDescription = async () => {
    if (!description) return;
    setIsImproving(true);
    setImprovementResult(null);
    try {
      const result = await improveProjectDescription({ projectDescription: description });
      setImprovementResult(result);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Could not get suggestions. Please try again.',
      });
    } finally {
      setIsImproving(false);
    }
  };

  const handleSuggestProjects = async () => {
    if (!skills || !interests) return;
    setIsSuggesting(true);
    setSuggestionResult(null);
    try {
      const result = await suggestNewProjects({ userSkills: skills, userInterests: interests });
      setSuggestionResult(result);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Could not get suggestions. Please try again.',
      });
    } finally {
      setIsSuggesting(false);
    }
  };

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-[#241E1A] text-[#FAF8F5] hover:bg-[#3D332D] transition-transform hover:scale-105 z-50 border border-[#E2D8CC]"
        size="icon"
        onClick={() => setIsOpen(true)}
      >
        <Wand2 className="h-6 w-6 text-[#FAF8F5]" />
        <span className="sr-only">AI Portfolio Advisor</span>
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl bg-[#FAF8F5] border border-[#E2D8CC] text-[#241E1A] shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#241E1A]">AI Portfolio Advisor</DialogTitle>
            <DialogDescription className="text-[#63574D]">
              Get AI-powered help to improve your portfolio.
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="improve" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#EFE8DE] border border-[#E2D8CC]">
              <TabsTrigger value="improve" className="data-[state=active]:bg-[#241E1A] data-[state=active]:text-[#FAF8F5] text-[#63574D]">Improve Description</TabsTrigger>
              <TabsTrigger value="suggest" className="data-[state=active]:bg-[#241E1A] data-[state=active]:text-[#FAF8F5] text-[#63574D]">Suggest Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="improve" className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="description" className="text-[#4A3F35] font-medium">Project Description</Label>
                <Textarea
                  id="description"
                  placeholder="Paste your project description here..."
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-[#F6F2EC] border-[#E2D8CC] focus:border-[#241E1A] text-[#241E1A] placeholder:text-[#9E9085]"
                />
              </div>
              <Button onClick={handleImproveDescription} disabled={isImproving || !description} className="bg-[#241E1A] text-[#FAF8F5] hover:bg-[#3D332D] w-full shadow-sm">
                {isImproving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Get Suggestions
              </Button>
              {isImproving && <p className="text-sm text-[#63574D] text-center">AI is thinking...</p>}
              {improvementResult && (
                <Card className="bg-[#EFE8DE]/60 border-[#E2D8CC]">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#241E1A] mb-2">Improved Description:</h4>
                      <p className="text-sm text-[#4A3F35] leading-relaxed">{improvementResult.improvedDescription}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#241E1A] mb-2">Suggestions:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[#4A3F35]">
                        {improvementResult.suggestions.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="suggest" className="space-y-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="skills" className="text-[#4A3F35] font-medium">Your Skills</Label>
                  <Input
                    id="skills"
                    placeholder="e.g., React, Python, SQL"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="bg-[#F6F2EC] border-[#E2D8CC] focus:border-[#241E1A] text-[#241E1A] placeholder:text-[#9E9085]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interests" className="text-[#4A3F35] font-medium">Your Interests</Label>
                  <Input
                    id="interests"
                    placeholder="e.g., Machine Learning, UI/UX"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    className="bg-[#F6F2EC] border-[#E2D8CC] focus:border-[#241E1A] text-[#241E1A] placeholder:text-[#9E9085]"
                  />
                </div>
              </div>
              <Button onClick={handleSuggestProjects} disabled={isSuggesting || !skills || !interests} className="bg-[#241E1A] text-[#FAF8F5] hover:bg-[#3D332D] w-full shadow-sm">
                {isSuggesting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Suggest New Projects
              </Button>
              {isSuggesting && <p className="text-sm text-[#63574D] text-center">AI is thinking...</p>}
              {suggestionResult && (
                <Card className="bg-[#EFE8DE]/60 border-[#E2D8CC]">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#241E1A] mb-2">Suggested Projects:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[#4A3F35]">
                        {suggestionResult.suggestedProjects.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)} className="border-[#E2D8CC] text-[#241E1A] hover:bg-[#241E1A] hover:text-[#FAF8F5]">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

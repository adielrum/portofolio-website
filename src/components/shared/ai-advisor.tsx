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
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-white text-black hover:bg-gray-200 transition-transform hover:scale-105 z-50"
        size="icon"
        onClick={() => setIsOpen(true)}
      >
        <Wand2 className="h-6 w-6" />
        <span className="sr-only">AI Portfolio Advisor</span>
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl bg-black border border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">AI Portfolio Advisor</DialogTitle>
            <DialogDescription className="text-gray-400">
              Get AI-powered help to improve your portfolio.
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="improve" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/10">
              <TabsTrigger value="improve" className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-300">Improve Description</TabsTrigger>
              <TabsTrigger value="suggest" className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-300">Suggest Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="improve" className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-300">Project Description</Label>
                <Textarea
                  id="description"
                  placeholder="Paste your project description here..."
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-black border-white/20 focus:border-white text-white placeholder:text-gray-600"
                />
              </div>
              <Button onClick={handleImproveDescription} disabled={isImproving || !description} className="bg-white text-black hover:bg-gray-200 w-full">
                {isImproving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Get Suggestions
              </Button>
              {isImproving && <p className="text-sm text-gray-400 text-center">AI is thinking...</p>}
              {improvementResult && (
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Improved Description:</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{improvementResult.improvedDescription}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Suggestions:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
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
                  <Label htmlFor="skills" className="text-gray-300">Your Skills</Label>
                  <Input
                    id="skills"
                    placeholder="e.g., React, Python, SQL"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="bg-black border-white/20 focus:border-white text-white placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interests" className="text-gray-300">Your Interests</Label>
                  <Input
                    id="interests"
                    placeholder="e.g., Machine Learning, UI/UX"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    className="bg-black border-white/20 focus:border-white text-white placeholder:text-gray-600"
                  />
                </div>
              </div>
              <Button onClick={handleSuggestProjects} disabled={isSuggesting || !skills || !interests} className="bg-white text-black hover:bg-gray-200 w-full">
                {isSuggesting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Suggest New Projects
              </Button>
              {isSuggesting && <p className="text-sm text-gray-400 text-center">AI is thinking...</p>}
              {suggestionResult && (
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Suggested Projects:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                        {suggestionResult.suggestedProjects.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)} className="border-white/20 text-white hover:bg-white hover:text-black">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

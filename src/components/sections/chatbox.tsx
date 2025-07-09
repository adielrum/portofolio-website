'use client';

import { useState, useRef, useEffect } from 'react';
import { CornerDownLeft, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { personalChatbot } from '@/ai/flows/personal-chatbot';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function Chatbox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const result = await personalChatbot({ question: currentInput });
      const assistantMessage: Message = { role: 'assistant', content: result.answer };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling chatbot:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with the AI assistant. Please try again.',
      });
      setMessages(prev => prev.slice(0, -1));
      setInput(currentInput);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chatbot" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-2xl">
          <CardHeader className="text-center">
             <div className="mx-auto bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-2 rounded-full w-fit mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold">Ask Me Anything</CardTitle>
            <CardDescription className="text-lg text-gray-300">
              Have a question about my skills or projects? Ask my AI assistant!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96 pr-4" ref={scrollAreaRef}>
              <div className="space-y-6 p-4">
                {messages.length === 0 && (
                   <div className="flex h-full items-center justify-center text-gray-400 pt-24">
                     Your conversation will appear here.
                   </div>
                )}
                {messages.map((message, index) => (
                  <div key={index} className={`flex items-start gap-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
                     {message.role === 'assistant' && (
                       <Avatar className="border-2 border-pink-400/50">
                          <AvatarImage src="https://placehold.co/40x40.png" alt="AI Assistant" data-ai-hint="robot avatar" />
                          <AvatarFallback>AI</AvatarFallback>
                       </Avatar>
                     )}
                     <div className={`rounded-lg p-3 max-w-sm lg:max-w-md shadow-md ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-white/10'
                      }`}>
                       <p className="text-sm">{message.content}</p>
                     </div>
                     {message.role === 'user' && (
                       <Avatar className="border-2 border-purple-400/50">
                          <AvatarImage src="https://placehold.co/40x40.png" alt="User" data-ai-hint="person avatar" />
                          <AvatarFallback>U</AvatarFallback>
                       </Avatar>
                     )}
                  </div>
                ))}
                 {isLoading && (
                  <div className="flex items-start gap-4">
                    <Avatar className="border-2 border-pink-400/50">
                      <AvatarImage src="https://placehold.co/40x40.png" alt="AI Assistant" data-ai-hint="robot avatar" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg p-3 bg-white/10 flex items-center justify-center">
                      <Loader2 className="h-5 w-5 animate-spin text-white" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-2">
              <Input
                type="text"
                placeholder="e.g., 'What are your strongest skills?'"
                value={input}
                onChange={handleInputChange}
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading || !input.trim()} size="icon" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white">
                <CornerDownLeft className="h-4 w-4" />
                <span className="sr-only">Submit</span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

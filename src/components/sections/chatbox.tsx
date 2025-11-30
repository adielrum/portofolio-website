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
import { motion } from 'framer-motion';

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
    <section id="chatbot" className="w-full py-20 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-3xl mx-auto shadow-2xl bg-black border border-white/20">
            <CardHeader className="text-center border-b border-white/10 pb-6">
              <div className="mx-auto bg-white/10 p-3 rounded-full w-fit mb-4 border border-white/20">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-white">ASK ME ANYTHING</CardTitle>
              <CardDescription className="text-lg text-gray-400">
                Have a question about my skills or projects? Ask my AI assistant!
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ScrollArea className="h-96 pr-4" ref={scrollAreaRef}>
                <div className="space-y-6 p-4">
                  {messages.length === 0 && (
                    <div className="flex h-full items-center justify-center text-gray-500 pt-24 italic">
                      Start a conversation...
                    </div>
                  )}
                  {messages.map((message, index) => (
                    <div key={index} className={`flex items-start gap-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
                      {message.role === 'assistant' && (
                        <Avatar className="border border-white/20">
                          <AvatarImage src="https://placehold.co/40x40/000000/ffffff.png?text=AI" alt="AI Assistant" />
                          <AvatarFallback className="bg-black text-white">AI</AvatarFallback>
                        </Avatar>
                      )}
                      <div className={`rounded-lg p-4 max-w-sm lg:max-w-md shadow-sm text-sm leading-relaxed ${message.role === 'user'
                          ? 'bg-white text-black'
                          : 'bg-white/10 text-gray-200 border border-white/10'
                        }`}>
                        <p>{message.content}</p>
                      </div>
                      {message.role === 'user' && (
                        <Avatar className="border border-white/20">
                          <AvatarImage src="https://placehold.co/40x40/ffffff/000000.png?text=U" alt="User" />
                          <AvatarFallback className="bg-white text-black">U</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-start gap-4">
                      <Avatar className="border border-white/20">
                        <AvatarImage src="https://placehold.co/40x40/000000/ffffff.png?text=AI" alt="AI Assistant" />
                        <AvatarFallback className="bg-black text-white">AI</AvatarFallback>
                      </Avatar>
                      <div className="rounded-lg p-4 bg-white/10 flex items-center justify-center border border-white/10">
                        <Loader2 className="h-5 w-5 animate-spin text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-2 border-t border-white/10 pt-6">
                <Input
                  type="text"
                  placeholder="e.g., 'What are your strongest skills?'"
                  value={input}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="flex-1 bg-black border-white/20 focus:border-white text-white placeholder:text-gray-600"
                />
                <Button type="submit" disabled={isLoading || !input.trim()} size="icon" className="bg-white text-black hover:bg-gray-200 transition-colors">
                  <CornerDownLeft className="h-4 w-4" />
                  <span className="sr-only">Submit</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

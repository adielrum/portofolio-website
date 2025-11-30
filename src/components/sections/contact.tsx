'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="w-full py-20 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">GET IN TOUCH</h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          {...field}
                          className="bg-black border-white/20 focus:border-white transition-colors text-white placeholder:text-gray-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          {...field}
                          className="bg-black border-white/20 focus:border-white transition-colors text-white placeholder:text-gray-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message here..."
                          {...field}
                          rows={6}
                          className="bg-black border-white/20 focus:border-white transition-colors text-white placeholder:text-gray-600 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-white text-black hover:bg-gray-200 transition-colors" disabled={form.formState.isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

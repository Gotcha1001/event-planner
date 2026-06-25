// app/events/new/event-form.tsx
"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createEventAction } from "@/lib/actions/events";

type EventFormValues = {
  title: string;
  description: string;
  location: string;
  eventDate: string;
};

export function EventForm() {
  const form = useForm<EventFormValues>({
    defaultValues: {
      title: "",
      description: "",
      location: "",
      eventDate: "",
    },
  });

  return (
    <Form {...form}>
      <form action={createEventAction}>
        {" "}
        {/* ← native <form> gets the action */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} required placeholder="Team Dinner..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Optional detail about the event"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Optional location" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date and time</FormLabel>
              <FormControl>
                <Input {...field} type="datetime-local" id="eventDate" />
              </FormControl>
              <FormMessage>Optional, you can set this later.</FormMessage>
            </FormItem>
          )}
        />
        <div className="flex items-center gap-3 mt-3">
          <Button type="submit">Create Event</Button>
          <Button type="button" variant={"outline"} asChild>
            <Link href={"/dashboard"}>Cancel</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}

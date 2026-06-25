// import Link from "next/link";
// import { Button } from "./ui/button";
// import { prisma } from "@/lib/prisma";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Badge } from "./ui/badge";
// import type { RsvpStatus as PrismaRsvpStatus } from "@/app/generated/prisma/enums";
// import { notFound } from "next/navigation";
// import { Form, FormField } from "./form";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { submitOrUpdateRsvpAction } from "@/lib/actions/events";

// export async function InviteRsvpContent({
//   token,
//   submitted,
// }: {
//   token: string;
//   submitted: boolean;
// }) {
//   const row = await prisma.eventInvite.findFirst({
//     where: { token },
//     include: {
//       event: {
//         select: {
//           id: true,
//           title: true,
//           description: true,
//           location: true,
//           eventDate: true,
//         },
//       },
//     },
//   });

//   if (!row) {
//     notFound();
//   }

//   const e = row.event;
//   const event = {
//     title: e.title,
//     description: e.description,
//     location: e.location,
//     eventDate: e.eventDate ? e.eventDate.toISOString() : null,
//   };

//   const submitRsvpForToken = submitOrUpdateRsvpAction.bind(null, token);

//   return (
//     <div className="flex flex-1 flex-col gap-6">
//       <Card>
//         <CardHeader className="space-y-3">
//           <Badge variant={"secondary"} className="w-fit">
//             RSVP
//           </Badge>
//           <CardTitle>{event.title}</CardTitle>
//           <p className="text-sm text-muted-foreground">
//             {event.eventDate
//               ? new Date(event.eventDate).toLocaleString()
//               : "No date selected"}
//             {event.location ? ` - ${event.location}` : ""}
//           </p>
//           {event.description ? (
//             <p className="text-sm text-muted-foreground">{event.description}</p>
//           ) : null}
//         </CardHeader>
//         <CardContent>
//           {submitted ? (
//             <p className="mb-4 rounded-md border border-accent/50 bg-muted-foreground">
//               Thanks. Your RSVP has been recorded (or updated).
//             </p>
//           ) : null}
//           <Form>
//             <form action={submitRsvpForToken}>
//               <FormField>
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   required
//                   placeholder="Your name..."
//                 />
//               </FormField>
//               <FormField>
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   placeholder="you@example.com"
//                 />
//               </FormField>
//               <FormField>
//                 <Label htmlFor="status">Attendance</Label>
//                 <select
//                   name="status"
//                   id="status"
//                   required
//                   defaultValue="going"
//                   className="flex h-10 w-full rounded-md border border-border"
//                 >
//                   <option value="going">Going</option>
//                   <option value="maybe">Maybe</option>
//                   <option value="going">Not going</option>
//                 </select>
//               </FormField>
//               <Button type="submit">Submit RSVP</Button>
//             </form>
//           </Form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import Link from "next/link";
import { Button } from "./ui/button";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import type { RsvpStatus as PrismaRsvpStatus } from "@/app/generated/prisma/client";
import { notFound } from "next/navigation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { submitOrUpdateRsvpAction } from "@/lib/actions/events";

export async function InviteRsvpContent({
  token,
  submitted,
}: {
  token: string;
  submitted: boolean;
}) {
  const row = await prisma.eventInvite.findFirst({
    where: { token },
    include: {
      event: {
        select: {
          id: true,
          title: true,
          description: true,
          location: true,
          eventDate: true,
        },
      },
    },
  });

  if (!row) {
    notFound();
  }

  const e = row.event;
  const event = {
    title: e.title,
    description: e.description,
    location: e.location,
    eventDate: e.eventDate ? e.eventDate.toISOString() : null,
  };

  const submitRsvpForToken = submitOrUpdateRsvpAction.bind(null, token);

  return (
    <div className="flex flex-1 flex-col gap-6">
      <Card>
        <CardHeader className="space-y-3">
          <Badge variant={"secondary"} className="w-fit">
            RSVP
          </Badge>
          <CardTitle>{event.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {event.eventDate
              ? new Date(event.eventDate).toLocaleString()
              : "No date selected"}
            {event.location ? ` - ${event.location}` : ""}
          </p>
          {event.description ? (
            <p className="text-sm text-muted-foreground">{event.description}</p>
          ) : null}
        </CardHeader>
        <CardContent>
          {submitted ? (
            <p className="mb-4 rounded-md border border-accent/50 bg-muted-foreground">
              Thanks. Your RSVP has been recorded (or updated).
            </p>
          ) : null}
          <form action={submitRsvpForToken} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Attendance</Label>
              <select
                name="status"
                id="status"
                required
                defaultValue="going"
                className="flex h-10 w-full rounded-md border border-border"
              >
                <option value="going">Going</option>
                <option value="maybe">Maybe</option>
                <option value="going">Not going</option>
              </select>
            </div>
            <Button type="submit">Submit RSVP</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

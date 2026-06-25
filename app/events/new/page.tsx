// import { Form, FormField } from "@/components/form";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// export default async function NewEventPage() {
//   return (
//     <div className="mx-auto w-full max-w-2xl">
//       <Card>
//         <CardHeader>
//           <CardTitle>Create Event</CardTitle>
//         </CardHeader>
//         <CardContent>
//           {/* <Form>
//             <FormField>
//               <Label>Title</Label>
//               <Input
//                 id="title"
//                 name="title"
//                 required
//                 placeholder="Team Dinner"
//               />
//             </FormField>
//           </Form> */}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// app/events/new/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EventForm } from "./event-form";

export default function NewEventPage() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
        </CardHeader>
        <CardContent>
          <EventForm />
        </CardContent>
      </Card>
    </div>
  );
}

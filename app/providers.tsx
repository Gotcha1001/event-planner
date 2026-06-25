// "use client";

// import { NeonAuthUIProvider } from "@neondatabase/auth/react";
// import { useSearchParams } from "next/navigation";
// import { authClient } from "@/lib/auth/client";

// export function Providers({ children }: { children: React.ReactNode }) {
//   const searchParams = useSearchParams();
//   const redirectTo = searchParams.get("redirect") || "/dashboard";

//   return (
//     <NeonAuthUIProvider
//       authClient={authClient}
//       defaultTheme="dark"
//       redirectTo={redirectTo}
//     >
//       {children}
//     </NeonAuthUIProvider>
//   );
// }

// app/providers.tsx — back to simple/static
"use client";
import { NeonAuthUIProvider } from "@neondatabase/auth/react";
import { authClient } from "@/lib/auth/client";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme="dark">
      {children}
    </NeonAuthUIProvider>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProServices Dashboard",
  description: "Manage your professional services, clients, and bookings",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

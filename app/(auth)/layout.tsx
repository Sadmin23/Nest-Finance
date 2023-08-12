import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Auth Page.',
};

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}

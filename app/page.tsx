'use client';
import { PrimaryButton } from '@/components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        alt="brand-image"
        src={'/brand_assets/next.svg'}
        width={400}
        height={100}
        className="relative"
      ></Image>
      <h1 className="mt-4 mb-8 text-[18px]">Hello from next-ts-starter</h1>

      <PrimaryButton
        label="Auth Page"
        icon={'gg:check-o'}
        left={true}
        onPress={() => router.push('/login')}
      />
    </main>
  );
};

export default Home;

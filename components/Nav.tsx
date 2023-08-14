'use client';
import { useRouter } from 'next/navigation';
import { LinkButton } from './Button';
import { Image } from 'next/image';

const Nav = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="fixed flex py-4 px-4">
      <LinkButton
        label="Nav"
        styles={'text-white font-inter font-medium text-md leading-6'}
        onPress={() => router.push('/')}
      />
      <LinkButton
        label="Home"
        styles={'text-white font-inter font-medium text-md leading-6'}
        onPress={() => router.push('/login')}
      />
      <LinkButton
        label="Services"
        styles={'text-white font-inter font-medium text-md leading-6'}
        onPress={() => router.push('/register')}
      />
      <LinkButton
        label="Teams"
        styles={'text-white font-inter font-medium text-md leading-6'}
        onPress={() => router.push('/courses')}
      />
      <LinkButton
        label="Testimonials"
        onPress={() => router.push('/courses/python')}
      />
      <div className="right-0">
        <LinkButton
          label="Login"
          styles={'text-white font-inter font-medium text-md leading-6'}
          onPress={() => router.push('/login')}
        />
        <LinkButton
          label="Register"
          styles={'text-white font-inter font-medium text-md leading-6'}
          onPress={() => router.push('/register')}
        />
      </div>
    </div>
  );
};

export default Nav;

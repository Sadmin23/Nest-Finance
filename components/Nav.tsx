'use client';
import { useRouter } from 'next/navigation';
import { LinkButton } from './Button';

const Nav = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="top-0 fixed flex items-center justify-between left-0 right-0 py-4 shadow-md px-10">
      <LinkButton
        label="Nav"
        styles={'shadow-none text-gray-1 hover:text-green'}
        onPress={() => router.push('/')}
      />
      <div className="">
        <LinkButton
          label="Login"
          styles={'shadow-none text-gray-1 hover:text-green'}
          onPress={() => router.push('/login')}
        />
        <LinkButton
          label="Signup"
          styles={'shadow-none text-gray-1 hover:text-green'}
          onPress={() => router.push('/register')}
        />
        <LinkButton
          label="Courses"
          styles={'shadow-none text-gray-1 hover:text-green'}
          onPress={() => router.push('/courses')}
        />
        <LinkButton
          label="Course"
          styles={'shadow-none text-gray-1 hover:text-green'}
          onPress={() => router.push('/courses/python')}
        />
      </div>
    </div>
  );
};

export default Nav;

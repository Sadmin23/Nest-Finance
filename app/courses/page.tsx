'use client';

import { useRouter } from 'next/navigation';
import { PrimaryButton } from '../../components/Button';
import { getCourses } from '@/query/course/course';
import { useQuery } from 'react-query';
import Progress from '@/components/Progress';

export default function CoursesPage() {
  const router = useRouter();

  const coursesQuery = useQuery('courses', getCourses, {
    cacheTime: 0,
    staleTime: Infinity,
    refetchOnMount: true,
  });

  console.log(coursesQuery);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Courses Page with API Call</h1>

      <div className="rounded-md px-10 text-brand text-[18px] mt-10 flex items-center justify-center w-[70%]">
        {coursesQuery.isLoading ? (
          <p>Loding...</p>
        ) : (
          <p>{coursesQuery?.data?.value}</p>
        )}
      </div>
    </div>
  );
}

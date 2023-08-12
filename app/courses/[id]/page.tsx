'use client';
import { Metadata } from 'next';
import { useParams } from 'next/navigation';

export default function CoursePage() {
  const params = useParams();
  return (
    <div className="flex capitalize h-screen w-screen flex-col items-center justify-center">
      <h1>{params.id} Course Page</h1>
    </div>
  );
}

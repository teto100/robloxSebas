import { notFound } from 'next/navigation';
import { getGuideById, getGuides } from '@/lib/guides';
import GuideClient from '@/components/GuideClient';

export async function generateStaticParams() {
  const guides = getGuides();
  return guides.map((guide) => ({
    id: guide.id,
  }));
}

export default function GuidePage({ params }: { params: { id: string } }) {
  const guide = getGuideById(params.id);

  if (!guide) {
    notFound();
  }

  return <GuideClient guide={guide} />;
}

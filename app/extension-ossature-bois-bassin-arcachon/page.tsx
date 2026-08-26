import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import PageZone from '@/components/PageZone';
import { getZone } from '@/lib/data/zones';

const zone = getZone('extension-ossature-bois-bassin-arcachon')!;

export const metadata: Metadata = buildMetadata({
  title: zone.title,
  description: zone.description,
  keywords: zone.keywords,
  path: `/${zone.slug}`,
  ogImage: zone.cover,
  ogTitle: zone.h1,
  ville: zone.communes[0],
});

export default function Page() {
  return <PageZone zone={zone} />;
}

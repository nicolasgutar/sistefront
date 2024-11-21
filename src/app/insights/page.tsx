'use client';

import dynamic from 'next/dynamic';

const DynamicInsightsContent = dynamic(() => import('./InsightsContent'), { ssr: false });

export default function InsightsPage() {
    return <DynamicInsightsContent />;
}

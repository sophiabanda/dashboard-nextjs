import React, { Suspense } from 'react';
import { Card } from '/Users/sophiabanda/Projects/nextjs-dashboard/app/ui/dashboard/cards';
import RevenueChart from '/Users/sophiabanda/Projects/nextjs-dashboard/app/ui/dashboard/revenue-chart';
import LatestInvoices from '/Users/sophiabanda/Projects/nextjs-dashboard/app/ui/dashboard/latest-invoices';
import { lusitana } from '/Users/sophiabanda/Projects/nextjs-dashboard/app/ui/fonts';
import { fetchCardData } from '/Users/sophiabanda/Projects/nextjs-dashboard/app/lib/data';
import CardWrapper from '/Users/sophiabanda/Projects/nextjs-dashboard/app/ui/dashboard/cards';

import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '/Users/sophiabanda/Projects/nextjs-dashboard/app/ui/skeletons';

export default async function Page() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

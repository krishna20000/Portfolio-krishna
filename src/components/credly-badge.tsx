"use client";

import Script from 'next/script';
import { Card } from './ui/card';

export function CredlyBadge() {
  return (
    <Card className="p-4 flex justify-center items-center bg-card/50">
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="17d2a1bd-68cf-4c8f-9a3c-7b7eb2039e78"
        data-share-badge-host="https://www.credly.com"
      >
      </div>
      <Script
        type="text/javascript"
        async
        src="//cdn.credly.com/assets/utilities/embed.js"
        strategy="lazyOnload"
      />
    </Card>
  );
}

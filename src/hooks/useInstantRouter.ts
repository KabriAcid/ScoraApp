'use client';

import { useRouter as useNextRouter } from 'next/navigation';
import { useTransition } from 'react';

export function useInstantRouter() {
  const router = useNextRouter();
  const [isPending, startTransition] = useTransition();

  const push = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  const replace = (href: string) => {
    startTransition(() => {
      router.replace(href);
    });
  };

  return {
    push,
    replace,
    back: router.back,
    forward: router.forward,
    refresh: router.refresh,
    prefetch: router.prefetch,
    isPending,
  };
}

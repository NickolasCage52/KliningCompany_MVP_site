'use client';

import * as React from 'react';
import Link from 'next/link';
import { site } from '@/data/site';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  open: boolean;
  onClose: () => void;
  phoneDisplay: string;
};

/**
 * Drawer for tablet/mobile: nav tree + phone + primary CTA.
 * Renders from right, overlay behind. Accessible: focus trap and Esc can be handled by parent.
 */
export function MobileNavDrawer({ open, onClose, phoneDisplay }: Props) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/30 transition-opacity xl:hidden top-16 lg:top-[7rem]',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        aria-hidden
        onClick={onClose}
      />
      <div
        id="mobile-nav-drawer"
        className={cn(
          'fixed right-0 top-0 z-50 flex w-80 max-w-[85vw] flex-col border-l border-slate-200 bg-white shadow-xl transition-transform duration-200 ease-out xl:hidden pt-16 lg:pt-[7rem]',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ height: '100dvh' }}
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
      >
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-6">
          <p className="font-semibold text-slate-900">Частным клиентам</p>
          <ul className="space-y-1">
            {site.nav.individuals.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-slate-600 hover:text-primary-600"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-slate-900 pt-2">Юридическим лицам</p>
          <ul className="space-y-1">
            {site.nav.business.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-slate-600 hover:text-primary-600"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <hr className="border-slate-200" />
          {site.nav.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-600 hover:text-primary-600"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${site.phoneRaw}`} className="font-medium text-primary-600">
            {phoneDisplay}
          </a>
          <Button asChild className="mt-4">
            <Link href="/?open=quiz#rasschet" onClick={onClose}>
              {site.cta.calculate}
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

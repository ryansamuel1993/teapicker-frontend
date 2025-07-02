'use client';

import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import en from 'i18n/en-US.json';

const NextIntlProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextIntlClientProvider locale="en-US" timeZone="Europe/Vienna" messages={en}>
      {children}
    </NextIntlClientProvider>
  );
};

export default NextIntlProvider;

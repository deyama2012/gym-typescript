import type { JSX } from 'react';

export const SelectedPage = {
  Home: 'home',
  Benefits: 'benefits',
  OurClasses: 'ourclasses',
  ContactUs: 'contactus',
};

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

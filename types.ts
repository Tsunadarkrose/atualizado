import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}
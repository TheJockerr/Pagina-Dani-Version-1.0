// src/components/ui/Tabs/Tabs.tsx
import React from 'react';
import styles from './Tabs.module.css';

export interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  count?: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: 'default' | 'pills';
  children?: React.ReactNode;
}

export function Tabs({ tabs, activeTab, onChange, variant = 'default', children }: TabsProps) {
  return (
    <div className={styles.tabs}>
      <div className={[styles.tabList, styles[variant]].join(' ')} role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            className={[styles.tab, styles[variant], activeTab === tab.id && styles.active].filter(Boolean).join(' ')}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => onChange(tab.id)}
          >
            {tab.icon}
            {tab.label}
            {tab.count !== undefined && (
              <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', marginLeft: '2px' }}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
}

export default Tabs;

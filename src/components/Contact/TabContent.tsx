import React from 'react';
import type { ContactTabType, ContactMethodData } from '../../types/contactSection.types';
import { QuickContactTab } from './ContactQuickTab';
import { ContactFormTab } from '../Form/FormTab';

interface TabContentProps {
  readonly activeTab: ContactTabType;
  readonly contactMethods: readonly ContactMethodData[];
}

export const TabContent: React.FC<TabContentProps> = ({ activeTab, contactMethods }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'quick':
        return <QuickContactTab contactMethods={contactMethods} />;
      case 'form':
        return <ContactFormTab />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {renderTabContent()}
    </div>
  );
};

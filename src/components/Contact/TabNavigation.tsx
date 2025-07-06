import React from 'react';
import type { ContactTabType } from '../../types/contactSection.types';
import { contactSectionStyles } from '../../styles/contactSection.styles';
import { CONTACT_SECTION_CONSTANTS } from '../../constants/contactSection.constants';

interface TabNavigationProps {
  readonly tabs: readonly ContactTabType[];
  readonly activeTab: ContactTabType;
  readonly onTabChange: (tab: ContactTabType) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => (
  <div className={contactSectionStyles.tabContainer}>
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`${contactSectionStyles.tabButton.base} ${
          activeTab === tab
            ? contactSectionStyles.tabButton.active
            : contactSectionStyles.tabButton.inactive
        }`}
        onClick={() => onTabChange(tab)}
      >
        {tab === 'quick' 
          ? CONTACT_SECTION_CONSTANTS.TEXTS.QUICK_CONTACT_TAB 
          : CONTACT_SECTION_CONSTANTS.TEXTS.FORM_TAB
        }
      </button>
    ))}
  </div>
);

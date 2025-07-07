import type { ContactTabType } from '../types/contactSection.types';

export interface TabStrategy {
  readonly id: ContactTabType;
  readonly label: string;
  isActive(currentTab: ContactTabType): boolean;
  activate(): ContactTabType;
}

export class QuickContactTabStrategy implements TabStrategy {
  readonly id: ContactTabType = 'quick';
  readonly label = 'Quick Contact';

  isActive(currentTab: ContactTabType): boolean {
    return currentTab === this.id;
  }

  activate(): ContactTabType {
    return this.id;
  }
}

export class ContactFormTabStrategy implements TabStrategy {
  readonly id: ContactTabType = 'form';
  readonly label = 'Send Message';

  isActive(currentTab: ContactTabType): boolean {
    return currentTab === this.id;
  }

  activate(): ContactTabType {
    return this.id;
  }
}

export class TabStrategyManager {
  private readonly strategies: Map<ContactTabType, TabStrategy>;

  constructor() {
    this.strategies = new Map<ContactTabType, TabStrategy>([
      ['quick', new QuickContactTabStrategy()],
      ['form', new ContactFormTabStrategy()],
    ]);
  }

  getStrategy(tabType: ContactTabType): TabStrategy {
    const strategy = this.strategies.get(tabType);
    if (!strategy) {
      throw new Error(`No strategy found for tab type: ${tabType}`);
    }
    return strategy;
  }

  getAllStrategies(): TabStrategy[] {
    return Array.from(this.strategies.values());
  }

  isValidTab(tabType: string): tabType is ContactTabType {
    return this.strategies.has(tabType as ContactTabType);
  }
}

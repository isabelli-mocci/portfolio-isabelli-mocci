import type { NavigationLink } from '../types/navigation.types';

export interface NavigationState {
  readonly activeItemId: string | undefined;
  readonly isNavigating: boolean;
  readonly lastNavigatedItem: NavigationLink | undefined;
}

export interface NavigationActions {
  readonly setActiveItem: (itemId: string) => void;
  readonly clearActiveItem: () => void;
  readonly setNavigating: (isNavigating: boolean) => void;
  readonly recordNavigation: (link: NavigationLink) => void;
}

class NavigationService {
  private listeners: Set<(state: NavigationState) => void> = new Set();
  private state: NavigationState = {
    activeItemId: undefined,
    isNavigating: false,
    lastNavigatedItem: undefined,
  };

  public subscribe(listener: (state: NavigationState) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  public getState(): NavigationState {
    return { ...this.state };
  }

  public setActiveItem(itemId: string): void {
    this.updateState({
      activeItemId: itemId,
    });
  }

  public clearActiveItem(): void {
    this.updateState({
      activeItemId: undefined,
    });
  }

  public setNavigating(isNavigating: boolean): void {
    this.updateState({
      isNavigating,
    });
  }

  public recordNavigation(link: NavigationLink): void {
    this.updateState({
      lastNavigatedItem: link,
      activeItemId: link.id,
    });
  }

  private updateState(partialState: Partial<NavigationState>): void {
    this.state = {
      ...this.state,
      ...partialState,
    };
    this.notifyListeners();
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => {
      listener(this.getState());
    });
  }
}

export const navigationService = new NavigationService();

interface ScrollOptions {
  behavior?: ScrollBehavior;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface ScrollTarget {
  selector: string;
  fallbackSelector?: string;
}

class ScrollService {
  private static instance: ScrollService;

  private constructor() {}

  static getInstance(): ScrollService {
    if (!ScrollService.instance) {
      ScrollService.instance = new ScrollService();
    }
    return ScrollService.instance;
  }

  scrollToTarget(target: ScrollTarget, options: ScrollOptions = {}): boolean {
    const { behavior = 'smooth', onSuccess, onError } = options;
    
    try {
      const element = this.findElement(target);
      
      if (!element) {
        const error = new Error(`Element not found: ${target.selector}`);
        onError?.(error);
        return false;
      }

      element.scrollIntoView({ behavior });
      onSuccess?.();
      return true;
    } catch (error) {
      onError?.(error as Error);
      return false;
    }
  }

  createScrollHandler(target: ScrollTarget, options: ScrollOptions = {}) {
    return () => this.scrollToTarget(target, options);
  }

  private findElement(target: ScrollTarget): Element | null {
    let element = document.querySelector(target.selector);
    
    if (!element && target.fallbackSelector) {
      element = document.querySelector(target.fallbackSelector);
    }
    
    return element;
  }

  isValidSelector(selector: string): boolean {
    if (typeof selector !== 'string' || !selector.trim()) {
      return false;
    }
    
    try {
      document.querySelector(selector);
      return true;
    } catch {
      return false;
    }
  }
}

export const scrollService = ScrollService.getInstance();

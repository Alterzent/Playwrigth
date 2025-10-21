export class StringUtils {
  public static formatProductName(productName: string): string {
    return productName.toLowerCase().replace(/\s+/g, '-');
  }

  public static generateTimestamp(): string {
    return new Date().toISOString().replace(/[:.]/g, '-');
  }

  public static sanitizeFilename(filename: string): string {
    return filename.replace(/[^a-zA-Z0-9-_]/g, '_');
  }
}

export class ValidationUtils {
  public static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  public static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  public static isNotEmpty(value: string | null | undefined): boolean {
    return value !== null && value !== undefined && value.trim().length > 0;
  }
}

export class WaitUtils {
  public static async sleep(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  public static async waitForCondition(
    condition: () => Promise<boolean>,
    timeout: number = 10000,
    interval: number = 100
  ): Promise<void> {
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
      if (await condition()) {
        return;
      }
      await this.sleep(interval);
    }

    throw new Error(`Condition not met within ${timeout}ms`);
  }
}

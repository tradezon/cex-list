import mainnet from '../data/ethereum-mainnet.json';

export function cex(addr: string, chainId = 1): string|null {
  switch (chainId) {
    case 1:
      return (mainnet as Record<string, string>)[addr] || null;
    default:
      throw new Error(`Chain id ${chainId} is not supported`);
  }
}

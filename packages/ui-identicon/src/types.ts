// Copyright 2018 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Prefix } from '@polkadot/util-crypto/address/types';

export type BaseProps = {
  className?: string,
  style?: {
    [index: string]: any
  }
};

export type Props = BaseProps & {
  address: string,
  publicKey: string,
  size: number
};

export type IdentityProps = BaseProps & {
  isHighlight?: boolean,
  onCopy?: (value: string) => void,
  prefix?: Prefix,
  size?: number,
  theme?: 'beachball' | 'jdenticon' | 'polkadot' | 'substrate',
  value?: string | Uint8Array | null
};

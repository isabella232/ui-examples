// [object Object]
// SPDX-License-Identifier: Apache-2.0

import { useSubscription } from '@apollo/client';
import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

import {
  CONTRACT_EVENTS_GQL,
  REEF_TRANSFERS_GQL,
  TOKEN_HOLDERS_GQL,
  TOKEN_HOLDERS_SUBS_ADDR_GQL,
  TOKEN_HOLDERS_NATIVE_ACCOUNT_GQL
} from '../gql';
import { of } from 'rxjs';

interface TokenHolders {
  accountId: string;
  contractId?: string;
  perPage: number;
  offset: number;
}

export const TokenHolders = function ({ contractId, offset, perPage }: TokenHolders): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: holders, loading } = useSubscription(
    TOKEN_HOLDERS_GQL,
    // eslint-disable-next-line sort-keys
    { variables: { offset, perPage, contractId} }
  );
  useEffect(() => {
    console.log('HOLDERs=', holders, loading);
  }, [holders, loading]);

  // eslint-disable-next-line react/react-in-jsx-scope
  return (<div>
    <h5>Token holders for {contractId}</h5>
    {holders?.token_holder.map((h, i) => {
      return (<div key={i}>account: {h.holder_evm_address} <br />
        balance: {h.balance}
        <br />
        <br />
      </div>);
    })}
  </div>);
};

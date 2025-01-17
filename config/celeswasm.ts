import { Chain, AssetList } from '@chain-registry/types';

import { assets } from 'chain-registry';

// export const chainName = 'cosmwasmtestnet';
// export const stakingDenom = 'umlg';
// export const feeDenom = 'uand';

export const chainName = 'celeswasm';
export const stakingDenom = 'uwasm';
export const feeDenom = 'uwasm';

export const CnftsContractAddress =
  'wasm1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrss5maay';

export const celeswasm: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'celeswasm',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Celeswasm Localnet',
  chain_id: 'mocha',
  bech32_prefix: 'wasm',
  daemon_name: 'wasmd',
  node_home: '$HOME/.wasmd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uwasm',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uwasm',
      },
    ],
  },

 
  // codebase: {
  //   git_repo: 'https://github.com/osmosis-labs/osmosis',
  //   recommended_version: 'v11.0.0',
  //   compatible_versions: ['v11.0.0'],
  //   cosmos_sdk_version: '0.45',
  //   tendermint_version: '0.34',
  //   cosmwasm_version: '0.24',
  //   cosmwasm_enabled: true,
  //   genesis: {
  //     genesis_url:
  //       'https://github.com/osmosis-labs/networks/raw/main/osmo-test-4/genesis.tar.bz2',
  //   },
  // },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mocha.pops.one',
      },
    ],
    rest: [
      {
        address: 'http://localhost:26659',
      },
    ],
    // grpc: [
    //   {
    //     address: 'http://localhost:26659',
    //   },
    // ],
  },
  // logo_URIs: {
  //   png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png',
  // },
  // keywords: ['dex', 'testnet'],
};

export const celeswasmAssets: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'celeswasm',
  assets: [
    {
      description: 'The native token of Celeswasm',
      denom_units: [
        {
          denom: 'uwasm',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'wasm',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'uwasm',
      name: 'Celeswasm',
      display: 'wasm',
      symbol: 'WASM',
      // logo_URIs: {
      //   png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
      //   svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
      // },
      // coingecko_id: 'osmosis',
      // keywords: ['dex', 'staking'],
    },
    // {
    //   denom_units: [
    //     {
    //       denom: 'uion',
    //       exponent: 0,
    //     },
    //     {
    //       denom: 'ion',
    //       exponent: 6,
    //     },
    //   ],
    //   base: 'uion',
    //   name: 'Ion',
    //   display: 'ion',
    //   symbol: 'ION',
    //   logo_URIs: {
    //     png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
    //     svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
    //   },
    //   coingecko_id: 'ion',
    //   keywords: ['memecoin'],
    // },
  ],
};

// import { Chain, AssetList } from '@chain-registry/types';

// export const celeswasm: Chain = {
//   $schema: '../../chain.schema.json',
//   chain_name: 'celeswasm',
//   status: 'live',
//   network_type: 'devnet',
//   pretty_name: 'Celeswasm Devnet',
//   chain_id: 'celeswasm',
//   bech32_prefix: 'wasm',
//   daemon_name: 'wasmd',
//   node_home: '$HOME/.wasmd',
//   key_algos: ['secp256k1'],
//   slip44: 118,
//   fees: {
//     fee_tokens: [
//       {
//         denom: 'uwasm',
//         fixed_min_gas_price: 0,
//         low_gas_price: 0,
//         average_gas_price: 0.025,
//         high_gas_price: 0.04,
//       },
//     ],
//   },
//   staking: {
//     staking_tokens: [
//       {
//         denom: 'uwasm',
//       },
//     ],
//   },
//   // codebase: {
//   //   git_repo: 'https://github.com/osmosis-labs/osmosis',
//   //   recommended_version: 'v11.0.0',
//   //   compatible_versions: ['v11.0.0'],
//   //   cosmos_sdk_version: '0.45',
//   //   tendermint_version: '0.34',
//   //   cosmwasm_version: '0.24',
//   //   cosmwasm_enabled: true,
//   //   genesis: {
//   //     genesis_url:
//   //       'https://github.com/osmosis-labs/networks/raw/main/osmo-test-4/genesis.tar.bz2',
//   //   },
//   // },
//   apis: {
//     rpc: [
//       {
//         address: 'https://rpc.limani.celestia-devops.dev',
//       },
//     ],
//     rest: [
//       {
//         address: 'https://limani.celestia-devops.dev',
//       },
//     ],
//     grpc: [],
//   },
//   // logo_URIs: {
//   //   png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png',
//   // },
//   // keywords: ['dex', 'testnet'],
//   keywords: ['dev', 'devnet'],
// };

// export const celeswasmAssets: AssetList = {
//   // $schema: '../../assetlist.schema.json',
//   chain_name: 'celeswasm',
//   assets: [
//     {
//       denom_units: [
//         {
//           denom: 'uwasm',
//           exponent: 0,
//           aliases: [],
//         },
//         {
//           denom: 'wasm',
//           exponent: 6,
//           aliases: [],
//         },
//       ],
//       base: 'uwasm',
//       name: 'Celeswasm',
//       display: 'wasm',
//       symbol: 'UWASM',
//     },
//     {
//       denom_units: [
//         {
//           denom: 'uwasm',
//           exponent: 0,
//           aliases: [],
//         },
//         {
//           denom: 'wasm',
//           exponent: 6,
//           aliases: [],
//         },
//       ],
//       base: 'uwasm',
//       name: 'Celeswasm',
//       display: 'wasm',
//       symbol: 'UWASM',
//     },
//   ],
// };

import {
  LENDER_CONTRACT_ADDRESS,
  UNIPOOL_GENERAL_CONTRACT_ADDRESS,
  UNIPOOL_LINK_CONTRACT_ADDRESS,
  LEVERAGED_LIQUIDITY_POOL_LINK_ADDRESS,
  LLP_LINK_WITH_2XLINK_ADDRESS
} from '../web3/address';

import LENDER_ABI from '../web3/lenderAbi';
import UNIPOOL_GENERAL_ABI from '../web3/unipoolGeneralAbi';
import UNIPOOL_LINK_ABI from '../web3/unipoolLinkAbi';
import LINK_LLP_ABI from '../web3/llpLinkAbi';
import LINK_LLP_2X_ABI from '../web3/llpLink_2xLongETHAbi';

const contractProvider = name => {
  switch (name) {
    case 'Lender': {
      return {
        contractAbi: LENDER_ABI,
        contractAddress: LENDER_CONTRACT_ADDRESS,
        gas: 7000000
      };
    }
    case 'DAI Unipool': {
      return {
        contractAbi: UNIPOOL_GENERAL_ABI,
        contractAddress: UNIPOOL_GENERAL_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'LINK Unipool': {
      return {
        contractAbi: UNIPOOL_LINK_ABI,
        contractAddress: UNIPOOL_LINK_CONTRACT_ADDRESS,
        gas: 1000000
      };
    }
    case 'LINK LLP': {
      return {
        contractAbi: LINK_LLP_ABI,
        contractAddress: LEVERAGED_LIQUIDITY_POOL_LINK_ADDRESS,
        gas: 5000000
      };
    }
    case '2x LINK LLP': {
      return {
        contractAbi: LINK_LLP_2X_ABI,
        contractAddress: LLP_LINK_WITH_2XLINK_ADDRESS,
        gas: 5000000
      };
    }
    default:
      return null;
  }
};

export default contractProvider;

import {
  UNIPOOL_DAI_CONTRACT_ADDRESS,
  UNIPOOL_LINK_CONTRACT_ADDRESS,
  LEVERAGED_LIQUIDITY_POOL_LINK_ADDRESS,
  UNIPOOL_GDAO_CONTRACT_ADDRESS,
} from '../web3/address';

import UNIPOOL_DAI_ABI from '../web3/unipoolDaiAbi';
import UNIPOOL_LINK_ABI from '../web3/unipoolLinkAbi';
import LINK_LLP_ABI from '../web3/llpLinkAbi';
import UNIPOOL_GDAO_ABI from '../web3/unipoolGDAOAbi';

const contractProvider = name => {
  switch (name) {
    case 'DAI Unipool': {
      return {
        contractAbi: UNIPOOL_DAI_ABI,
        contractAddress: UNIPOOL_DAI_CONTRACT_ADDRESS,
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
    case 'GDAO Unipool': {
      return {
        contractAbi: UNIPOOL_GDAO_ABI,
        contractAddress: UNIPOOL_GDAO_CONTRACT_ADDRESS,
        gas: 5000000
      };
    } 
    default:
      return null;
  }
};

export default contractProvider;

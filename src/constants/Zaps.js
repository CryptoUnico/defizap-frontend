const Zaps = {
  unipoollink: {
    id: 'unipoollink',
    name: 'LINK Unipool',
    text: 'Uni LINK',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'LINKUnipool.DeFiZap.eth',
    illustration: 'unipool_link_illustration.svg',
    tokenAddress: '0xF173214C720f58E03e194085B1DB28B50aCDeeaD',
    tokenInfo: {
      address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      name: 'LINK',
      decimals: 18
      // icon: 'dai_logo.svg'
    },
    gasLimitRequirement: '1500000',
    paused: false,
    new: true,
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      }
    ],
    oneClickAccessTo: [{ text: '🦄 Pooling Rewards', color: '#66098e' }],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'LINK Pool token',
        percent: 100,
        color: '#AF2CE4'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/pooling-with-defizap'
    },
    whatThisMeans: {
      text: [
        '50% converted to LINK',
        '50% leftover input + acquired tokens are added to the LINK/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
      ]
    },
  }
};

export default Zaps;

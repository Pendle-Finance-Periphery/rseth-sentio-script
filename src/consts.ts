import { EthChainId } from '@sentio/sdk/eth'


export const CONFIG = {
    BLOCKCHAIN: EthChainId.ARBITRUM,
}

export const MISC_CONSTS = {
    ONE_E18: BigInt("1000000000000000000"),
    ONE_DAY_IN_MINUTE: 60 * 24,
    ZERO_ADDRESS: "0x0000000000000000000000000000000000000000",
    MULTICALL_BATCH: 256,
    EZETH_POINT_RATE: BigInt("1004450000000000000"),
}


export const PENDLE_POOL_ADDRESSES = {
    SY: "0xf176fb51f4eb826136a54fdc71c50fcd2202e272",
    YT: "0xda53c73a28dff704fe757b8b4f6f6359707533da",
    LP: "0x6ae79089b2cf4be441480801bb741a531d94312b",
    START_BLOCK: 197160721,
    TREASURY: "0xcbcb48e22622a3778b6f14c2f5d258ba026b05e6",
    EQB_STAKING: "0xaab4b380b88f4a08acf8d8f74183a717b552fd6c",
    PENPIE_RECEIPT_TOKEN: "0x12ed306b2b46272157434fb17e2e721d65d9fbb3",
    // STAKEDAO_RECEIPT_TOKEN: "0xbbfe1d391b80c759073711520b3aaca796437585",
    MULTICALL: "0xca11bde05977b3631167028862be2a173976ca11",
    LIQUID_LOCKERS: [
        {
            // Penpie
            address: "0x6db96bbeb081d2a85e0954c252f2c1dc108b3f81",
            receiptToken: "0xe3b327c43b5002eb7280eef52823698b6cda06cf",
        },
        {
            // EQB
            address: '0x64627901dadb46ed7f275fd4fc87d086cff1e6e3',
            receiptToken: "0x8181c89fe053b344b95e03014cee39a30e07a6b2",
        },
        // {   // STAKEDAO
        //     address: '0xd8fa8dc5adec503acc5e026a98f32ca5c1fa289a',
        //     receiptToken: '0xbbfe1d391b80c759073711520b3aaca796437585',
        // }
    ]
}
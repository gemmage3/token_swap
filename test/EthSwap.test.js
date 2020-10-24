const Token = artifacts.require('Token')
const EthSwap = artifacts.require('EthSwap')


require('chai')
  .use(require('chai-as-promised'))
  .should()

function tokens(n) {
  return web3.utils.toWei(n, 'ether');
}


contract('EthSwap', ([deployer, investor]) => {
  let token, ethSwap

  before(async () => {
    token = await Token.new()
    ethSwap = await EthSwap.new(token.address)
    // Transfer all tokens to EthSwap (1 million)
    await token.transfer(ethSwap.address,'1000000000000000000000000')
  })

   describe('EthSwap deployment', async () => {
    it('contract has a name', async () => {
      let token = await Token.new()
      const name = await token.name()
      assert.equal(name, 'Dapp Token')
    })
  })

  describe('EthSwap deployment', async () => {
    it('contract has a name', async () => {
      const name = await ethSwap.name()
      assert.equal(name, 'EthSwap Instant Exchange')
    })


  it('contract has tokens', async () => {
      let balance = await token.balanceOf(ethSwap.address)
      assert.equal(balance.toString(),'1000000000000000000000000')
    })
  })
})


const Block = require('./block');
const {GENESIS_DATA} = require('./config');

describe('Block', () => {
  const timestamp = 'a-date';
  const lastHash = 'foo-hash';
  const hash = 'bar-hash';
  const data = ['blockchain', 'data'];

  // 아래와 같이 key의 값이 local에 있으면 좀 더 간단하게 표시할 수 있다.
  // const block = new Block({
  //   timestamp: timestamp,
  //   lastHash: lastHash,
  //   data: data,
  //   hash: hash
  // });
  const block = new Block({timestamp, lastHash, hash, data});
  
  it('has a timestamp, lastHash, hash, and data property', () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  describe('genesis()', () => {
    const genesisBlock = Block.genesis();
    
    it('returns a Block instance', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });
    
    it('returns the genesis data', () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });
});

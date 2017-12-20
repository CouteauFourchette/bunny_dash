function springAndJump() {
  const numberOfJumps = Math.ceil(Math.random() * 6);
  this.setNextSpawn(numberOfJumps * 100);
  const springs = [this.generateItem('spring', 0)];
  const spikes = [...Array(numberOfJumps * 4).keys()].map(pos => this.generateItem('spike', pos + 2));
  const blocks = [...Array(numberOfJumps).keys()].map(pos => this.generateItem('block_mid', (pos * 4) + 3));
  return [].concat(springs, spikes, blocks);
}

function springTrap() {
  this.setNextSpawn(250);
  const springs = [this.generateItem('spring', 0)];
  const spikes = [4].map(pos => this.generateItem('spike', pos));
  return [].concat(springs, spikes);
}

function jumpAndJump() {
  this.setNextSpawn(300);
  const lowBlock = [this.generateItem('block_low', 0)];
  const midBlock = [this.generateItem('block_mid', 3)];
  const highBlocks = [6, 10, 14].map(pos => this.generateItem('block_high', pos));
  const spikes = [...Array(15).keys()].map(pos => this.generateItem('spike', pos + 1));
  return [].concat(lowBlock, midBlock, highBlocks, spikes);
}

function easySpikeJump() {
  this.setNextSpawn(300);
  const blocks = [1, 2, 3, 7, 8, 9, 10, 14].map(pos => this.generateItem('block_low', pos));
  const spikes = [4, 5, 6, 11, 12, 13].map(pos => this.generateItem('spike', pos));
  return [].concat(blocks, spikes);
}

function alternateJump() {
  const numberOfBlocks = Math.ceil(Math.random() * 5);
  this.setNextSpawn(100 * numberOfBlocks);
  const lowBlocks = [...Array(numberOfBlocks * 4).keys()].map(pos => this.generateItem('block_low', pos));
  const midBlocks = [...Array(numberOfBlocks - 1).keys()].map(pos => this.generateItem('block_mid', (pos * 4) + 3));
  return [].concat(lowBlocks, midBlocks);
}

function springOverSpikes() {
  this.setNextSpawn(300);
  const spring = [this.generateItem('spring', 0)];
  const spikes = [1, 2, 3, 5, 6, 7].map(pos => this.generateItem('spike', pos));
  const block = [this.generateItem('block_low', 4)];
  return [].concat(spring, spikes, block);
}

const Clusters = [springAndJump,
  springTrap,
  jumpAndJump,
  easySpikeJump,
  alternateJump,
  springOverSpikes];

export default Clusters;

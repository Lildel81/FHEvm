import { expect } from 'chai';
import { ethers } from 'hardhat';

import type { HTTPZTestSuite1 } from '../../types/contracts/tests/HTTPZTestSuite1';
import type { HTTPZTestSuite2 } from '../../types/contracts/tests/HTTPZTestSuite2';
import type { HTTPZTestSuite3 } from '../../types/contracts/tests/HTTPZTestSuite3';
import type { HTTPZTestSuite4 } from '../../types/contracts/tests/HTTPZTestSuite4';
import type { HTTPZTestSuite5 } from '../../types/contracts/tests/HTTPZTestSuite5';
import type { HTTPZTestSuite6 } from '../../types/contracts/tests/HTTPZTestSuite6';
import type { HTTPZTestSuite7 } from '../../types/contracts/tests/HTTPZTestSuite7';
import {
  createInstances,
  decrypt8,
  decrypt16,
  decrypt32,
  decrypt64,
  decrypt128,
  decrypt256,
  decryptBool,
} from '../instance';
import { getSigners, initSigners } from '../signers';

async function deployHTTPZTestFixture1(): Promise<HTTPZTestSuite1> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('HTTPZTestSuite1');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployHTTPZTestFixture2(): Promise<HTTPZTestSuite2> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('HTTPZTestSuite2');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployHTTPZTestFixture3(): Promise<HTTPZTestSuite3> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('HTTPZTestSuite3');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployHTTPZTestFixture4(): Promise<HTTPZTestSuite4> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('HTTPZTestSuite4');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployHTTPZTestFixture5(): Promise<HTTPZTestSuite5> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('HTTPZTestSuite5');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployHTTPZTestFixture6(): Promise<HTTPZTestSuite6> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('HTTPZTestSuite6');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployHTTPZTestFixture7(): Promise<HTTPZTestSuite7> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('HTTPZTestSuite7');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

describe('HTTPZ operations 5', function () {
  before(async function () {
    await initSigners(1);
    this.signers = await getSigners();

    const contract1 = await deployHTTPZTestFixture1();
    this.contract1Address = await contract1.getAddress();
    this.contract1 = contract1;

    const contract2 = await deployHTTPZTestFixture2();
    this.contract2Address = await contract2.getAddress();
    this.contract2 = contract2;

    const contract3 = await deployHTTPZTestFixture3();
    this.contract3Address = await contract3.getAddress();
    this.contract3 = contract3;

    const contract4 = await deployHTTPZTestFixture4();
    this.contract4Address = await contract4.getAddress();
    this.contract4 = contract4;

    const contract5 = await deployHTTPZTestFixture5();
    this.contract5Address = await contract5.getAddress();
    this.contract5 = contract5;

    const contract6 = await deployHTTPZTestFixture6();
    this.contract6Address = await contract6.getAddress();
    this.contract6 = contract6;

    const contract7 = await deployHTTPZTestFixture7();
    this.contract7Address = await contract7.getAddress();
    this.contract7 = contract7;

    const instances = await createInstances(this.signers);
    this.instances = instances;
  });

  it('test operator "mul" overload (euint32, euint128) => euint128 test 1 (2, 1073741825)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2n);
    input.add128(1073741825n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2147483650n);
  });

  it('test operator "mul" overload (euint32, euint128) => euint128 test 2 (57320, 57320)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(57320n);
    input.add128(57320n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(3285582400n);
  });

  it('test operator "mul" overload (euint32, euint128) => euint128 test 3 (57320, 57320)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(57320n);
    input.add128(57320n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(3285582400n);
  });

  it('test operator "mul" overload (euint32, euint128) => euint128 test 4 (57320, 57320)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(57320n);
    input.add128(57320n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(3285582400n);
  });

  it('test operator "and" overload (euint32, euint128) => euint128 test 1 (2933954098, 340282366920938463463372164306026154159)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2933954098n);
    input.add128(340282366920938463463372164306026154159n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(637567010n);
  });

  it('test operator "and" overload (euint32, euint128) => euint128 test 2 (2933954094, 2933954098)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2933954094n);
    input.add128(2933954098n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2933954082n);
  });

  it('test operator "and" overload (euint32, euint128) => euint128 test 3 (2933954098, 2933954098)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2933954098n);
    input.add128(2933954098n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2933954098n);
  });

  it('test operator "and" overload (euint32, euint128) => euint128 test 4 (2933954098, 2933954094)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2933954098n);
    input.add128(2933954094n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2933954082n);
  });

  it('test operator "or" overload (euint32, euint128) => euint128 test 1 (2122465806, 340282366920938463463370288476976202237)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2122465806n);
    input.add128(340282366920938463463370288476976202237n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(340282366920938463463370288477076866047n);
  });

  it('test operator "or" overload (euint32, euint128) => euint128 test 2 (2122465802, 2122465806)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2122465802n);
    input.add128(2122465806n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2122465806n);
  });

  it('test operator "or" overload (euint32, euint128) => euint128 test 3 (2122465806, 2122465806)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2122465806n);
    input.add128(2122465806n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2122465806n);
  });

  it('test operator "or" overload (euint32, euint128) => euint128 test 4 (2122465806, 2122465802)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2122465806n);
    input.add128(2122465802n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2122465806n);
  });

  it('test operator "xor" overload (euint32, euint128) => euint128 test 1 (32291342, 340282366920938463463370832707535724947)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(32291342n);
    input.add128(340282366920938463463370832707535724947n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(340282366920938463463370832707537066909n);
  });

  it('test operator "xor" overload (euint32, euint128) => euint128 test 2 (32291338, 32291342)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(32291338n);
    input.add128(32291342n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint32, euint128) => euint128 test 3 (32291342, 32291342)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(32291342n);
    input.add128(32291342n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, euint128) => euint128 test 4 (32291342, 32291338)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(32291342n);
    input.add128(32291338n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint32, euint128) => ebool test 1 (1847664558, 340282366920938463463373985572947905853)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1847664558n);
    input.add128(340282366920938463463373985572947905853n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint128) => ebool test 2 (1847664554, 1847664558)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1847664554n);
    input.add128(1847664558n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint128) => ebool test 3 (1847664558, 1847664558)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1847664558n);
    input.add128(1847664558n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, euint128) => ebool test 4 (1847664558, 1847664554)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1847664558n);
    input.add128(1847664554n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint128) => ebool test 1 (2849640775, 340282366920938463463374583317569026307)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2849640775n);
    input.add128(340282366920938463463374583317569026307n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint128) => ebool test 2 (2849640771, 2849640775)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2849640771n);
    input.add128(2849640775n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint128) => ebool test 3 (2849640775, 2849640775)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2849640775n);
    input.add128(2849640775n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint128) => ebool test 4 (2849640775, 2849640771)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2849640775n);
    input.add128(2849640771n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint128) => ebool test 1 (4004688625, 340282366920938463463373206795759350973)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4004688625n);
    input.add128(340282366920938463463373206795759350973n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint128) => ebool test 2 (4004688621, 4004688625)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4004688621n);
    input.add128(4004688625n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint128) => ebool test 3 (4004688625, 4004688625)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4004688625n);
    input.add128(4004688625n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint128) => ebool test 4 (4004688625, 4004688621)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4004688625n);
    input.add128(4004688621n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint128) => ebool test 1 (3149216311, 340282366920938463463372722800253660203)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3149216311n);
    input.add128(340282366920938463463372722800253660203n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint128) => ebool test 2 (3149216307, 3149216311)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3149216307n);
    input.add128(3149216311n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint128) => ebool test 3 (3149216311, 3149216311)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3149216311n);
    input.add128(3149216311n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint128) => ebool test 4 (3149216311, 3149216307)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3149216311n);
    input.add128(3149216307n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint128) => ebool test 1 (1297673973, 340282366920938463463373614636111441501)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1297673973n);
    input.add128(340282366920938463463373614636111441501n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint128) => ebool test 2 (1297673969, 1297673973)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1297673969n);
    input.add128(1297673973n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint128) => ebool test 3 (1297673973, 1297673973)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1297673973n);
    input.add128(1297673973n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint128) => ebool test 4 (1297673973, 1297673969)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1297673973n);
    input.add128(1297673969n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint128) => ebool test 1 (276132703, 340282366920938463463374557266219244727)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(276132703n);
    input.add128(340282366920938463463374557266219244727n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint128) => ebool test 2 (276132699, 276132703)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(276132699n);
    input.add128(276132703n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint128) => ebool test 3 (276132703, 276132703)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(276132703n);
    input.add128(276132703n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint128) => ebool test 4 (276132703, 276132699)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(276132703n);
    input.add128(276132699n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, euint128) => euint128 test 1 (2086834875, 340282366920938463463372387595115204361)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2086834875n);
    input.add128(340282366920938463463372387595115204361n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2086834875n);
  });

  it('test operator "min" overload (euint32, euint128) => euint128 test 2 (2086834871, 2086834875)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2086834871n);
    input.add128(2086834875n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2086834871n);
  });

  it('test operator "min" overload (euint32, euint128) => euint128 test 3 (2086834875, 2086834875)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2086834875n);
    input.add128(2086834875n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2086834875n);
  });

  it('test operator "min" overload (euint32, euint128) => euint128 test 4 (2086834875, 2086834871)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2086834875n);
    input.add128(2086834871n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2086834871n);
  });

  it('test operator "max" overload (euint32, euint128) => euint128 test 1 (4106488931, 340282366920938463463373024934913002677)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4106488931n);
    input.add128(340282366920938463463373024934913002677n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(340282366920938463463373024934913002677n);
  });

  it('test operator "max" overload (euint32, euint128) => euint128 test 2 (4106488927, 4106488931)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4106488927n);
    input.add128(4106488931n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(4106488931n);
  });

  it('test operator "max" overload (euint32, euint128) => euint128 test 3 (4106488931, 4106488931)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4106488931n);
    input.add128(4106488931n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(4106488931n);
  });

  it('test operator "max" overload (euint32, euint128) => euint128 test 4 (4106488931, 4106488927)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4106488931n);
    input.add128(4106488927n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(4106488931n);
  });

  it('test operator "and" overload (euint32, euint256) => euint256 test 1 (3791007723, 115792089237316195423570985008687907853269984665640564039457576244286725845447)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3791007723n);
    input.add256(115792089237316195423570985008687907853269984665640564039457576244286725845447n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(3221234115n);
  });

  it('test operator "and" overload (euint32, euint256) => euint256 test 2 (3791007719, 3791007723)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3791007719n);
    input.add256(3791007723n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(3791007715n);
  });

  it('test operator "and" overload (euint32, euint256) => euint256 test 3 (3791007723, 3791007723)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3791007723n);
    input.add256(3791007723n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(3791007723n);
  });

  it('test operator "and" overload (euint32, euint256) => euint256 test 4 (3791007723, 3791007719)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3791007723n);
    input.add256(3791007719n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(3791007715n);
  });

  it('test operator "or" overload (euint32, euint256) => euint256 test 1 (3038783133, 115792089237316195423570985008687907853269984665640564039457580102786732216197)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3038783133n);
    input.add256(115792089237316195423570985008687907853269984665640564039457580102786732216197n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457580102787086643101n);
  });

  it('test operator "or" overload (euint32, euint256) => euint256 test 2 (3038783129, 3038783133)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3038783129n);
    input.add256(3038783133n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(3038783133n);
  });

  it('test operator "or" overload (euint32, euint256) => euint256 test 3 (3038783133, 3038783133)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3038783133n);
    input.add256(3038783133n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(3038783133n);
  });

  it('test operator "or" overload (euint32, euint256) => euint256 test 4 (3038783133, 3038783129)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3038783133n);
    input.add256(3038783129n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(3038783133n);
  });

  it('test operator "xor" overload (euint32, euint256) => euint256 test 1 (4149270212, 115792089237316195423570985008687907853269984665640564039457582146730562908055)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4149270212n);
    input.add256(115792089237316195423570985008687907853269984665640564039457582146730562908055n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457582146729274227027n);
  });

  it('test operator "xor" overload (euint32, euint256) => euint256 test 2 (4149270208, 4149270212)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4149270208n);
    input.add256(4149270212n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint32, euint256) => euint256 test 3 (4149270212, 4149270212)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4149270212n);
    input.add256(4149270212n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, euint256) => euint256 test 4 (4149270212, 4149270208)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4149270212n);
    input.add256(4149270208n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract3.resEuint256());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint32, euint256) => ebool test 1 (78290186, 115792089237316195423570985008687907853269984665640564039457581585820353322835)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(78290186n);
    input.add256(115792089237316195423570985008687907853269984665640564039457581585820353322835n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint256) => ebool test 2 (78290182, 78290186)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(78290182n);
    input.add256(78290186n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint256) => ebool test 3 (78290186, 78290186)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(78290186n);
    input.add256(78290186n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, euint256) => ebool test 4 (78290186, 78290182)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(78290186n);
    input.add256(78290182n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint256) => ebool test 1 (2182507945, 115792089237316195423570985008687907853269984665640564039457583115227379630333)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2182507945n);
    input.add256(115792089237316195423570985008687907853269984665640564039457583115227379630333n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint256) => ebool test 2 (2182507941, 2182507945)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2182507941n);
    input.add256(2182507945n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint256) => ebool test 3 (2182507945, 2182507945)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2182507945n);
    input.add256(2182507945n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint256) => ebool test 4 (2182507945, 2182507941)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2182507945n);
    input.add256(2182507941n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "add" overload (euint64, euint8) => euint64 test 1 (129, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(129n);
    input.add8(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(131n);
  });

  it('test operator "add" overload (euint64, euint8) => euint64 test 2 (68, 72)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(68n);
    input.add8(72n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(140n);
  });

  it('test operator "add" overload (euint64, euint8) => euint64 test 3 (72, 72)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(72n);
    input.add8(72n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(144n);
  });

  it('test operator "add" overload (euint64, euint8) => euint64 test 4 (72, 68)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(72n);
    input.add8(68n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(140n);
  });

  it('test operator "sub" overload (euint64, euint8) => euint64 test 1 (114, 114)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(114n);
    input.add8(114n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, euint8) => euint64 test 2 (114, 110)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(114n);
    input.add8(110n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, euint8) => euint64 test 1 (65, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(65n);
    input.add8(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(130n);
  });

  it('test operator "mul" overload (euint64, euint8) => euint64 test 2 (11, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(11n);
    input.add8(11n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(121n);
  });

  it('test operator "mul" overload (euint64, euint8) => euint64 test 3 (11, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(11n);
    input.add8(11n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(121n);
  });

  it('test operator "mul" overload (euint64, euint8) => euint64 test 4 (11, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(11n);
    input.add8(11n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(121n);
  });

  it('test operator "and" overload (euint64, euint8) => euint64 test 1 (18445162136396751129, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18445162136396751129n);
    input.add8(115n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(17n);
  });

  it('test operator "and" overload (euint64, euint8) => euint64 test 2 (111, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(111n);
    input.add8(115n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(99n);
  });

  it('test operator "and" overload (euint64, euint8) => euint64 test 3 (115, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(115n);
    input.add8(115n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(115n);
  });

  it('test operator "and" overload (euint64, euint8) => euint64 test 4 (115, 111)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(115n);
    input.add8(111n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(99n);
  });

  it('test operator "or" overload (euint64, euint8) => euint64 test 1 (18440000756432857801, 171)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18440000756432857801n);
    input.add8(171n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18440000756432857835n);
  });

  it('test operator "or" overload (euint64, euint8) => euint64 test 2 (167, 171)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(167n);
    input.add8(171n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(175n);
  });

  it('test operator "or" overload (euint64, euint8) => euint64 test 3 (171, 171)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(171n);
    input.add8(171n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(171n);
  });

  it('test operator "or" overload (euint64, euint8) => euint64 test 4 (171, 167)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(171n);
    input.add8(167n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(175n);
  });

  it('test operator "xor" overload (euint64, euint8) => euint64 test 1 (18442700674129439801, 216)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18442700674129439801n);
    input.add8(216n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18442700674129439969n);
  });

  it('test operator "xor" overload (euint64, euint8) => euint64 test 2 (212, 216)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(212n);
    input.add8(216n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint64, euint8) => euint64 test 3 (216, 216)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(216n);
    input.add8(216n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, euint8) => euint64 test 4 (216, 212)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(216n);
    input.add8(212n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint64, euint8) => ebool test 1 (18444198554001553309, 182)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18444198554001553309n);
    input.add8(182n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint8) => ebool test 2 (178, 182)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(178n);
    input.add8(182n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint8) => ebool test 3 (182, 182)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(182n);
    input.add8(182n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, euint8) => ebool test 4 (182, 178)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(182n);
    input.add8(178n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint8) => ebool test 1 (18438232539897806087, 105)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18438232539897806087n);
    input.add8(105n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint8) => ebool test 2 (101, 105)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(101n);
    input.add8(105n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint8) => ebool test 3 (105, 105)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(105n);
    input.add8(105n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint8) => ebool test 4 (105, 101)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(105n);
    input.add8(101n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint8) => ebool test 1 (18443812272771693997, 127)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18443812272771693997n);
    input.add8(127n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint8) => ebool test 2 (123, 127)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(123n);
    input.add8(127n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint8) => ebool test 3 (127, 127)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(127n);
    input.add8(127n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint8) => ebool test 4 (127, 123)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(127n);
    input.add8(123n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint8) => ebool test 1 (18444507249044725247, 77)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18444507249044725247n);
    input.add8(77n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint8) => ebool test 2 (73, 77)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(73n);
    input.add8(77n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint8) => ebool test 3 (77, 77)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(77n);
    input.add8(77n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint8) => ebool test 4 (77, 73)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(77n);
    input.add8(73n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint8) => ebool test 1 (18446530045118684221, 122)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18446530045118684221n);
    input.add8(122n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint64, euint8) => ebool test 2 (118, 122)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(118n);
    input.add8(122n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint8) => ebool test 3 (122, 122)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(122n);
    input.add8(122n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint8) => ebool test 4 (122, 118)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(122n);
    input.add8(118n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint8) => ebool test 1 (18444080851842653825, 212)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18444080851842653825n);
    input.add8(212n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint8) => ebool test 2 (208, 212)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(208n);
    input.add8(212n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, euint8) => ebool test 3 (212, 212)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(212n);
    input.add8(212n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint8) => ebool test 4 (212, 208)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(212n);
    input.add8(208n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, euint8) => euint64 test 1 (18441483460154255577, 102)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18441483460154255577n);
    input.add8(102n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(102n);
  });

  it('test operator "min" overload (euint64, euint8) => euint64 test 2 (98, 102)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(98n);
    input.add8(102n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(98n);
  });

  it('test operator "min" overload (euint64, euint8) => euint64 test 3 (102, 102)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(102n);
    input.add8(102n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(102n);
  });

  it('test operator "min" overload (euint64, euint8) => euint64 test 4 (102, 98)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(102n);
    input.add8(98n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(98n);
  });

  it('test operator "max" overload (euint64, euint8) => euint64 test 1 (18444372410600098775, 200)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18444372410600098775n);
    input.add8(200n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18444372410600098775n);
  });

  it('test operator "max" overload (euint64, euint8) => euint64 test 2 (196, 200)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(196n);
    input.add8(200n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(200n);
  });

  it('test operator "max" overload (euint64, euint8) => euint64 test 3 (200, 200)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(200n);
    input.add8(200n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(200n);
  });

  it('test operator "max" overload (euint64, euint8) => euint64 test 4 (200, 196)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(200n);
    input.add8(196n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(200n);
  });

  it('test operator "add" overload (euint64, euint16) => euint64 test 1 (65518, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(65518n);
    input.add16(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(65520n);
  });

  it('test operator "add" overload (euint64, euint16) => euint64 test 2 (13281, 13285)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(13281n);
    input.add16(13285n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(26566n);
  });

  it('test operator "add" overload (euint64, euint16) => euint64 test 3 (13285, 13285)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(13285n);
    input.add16(13285n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(26570n);
  });

  it('test operator "add" overload (euint64, euint16) => euint64 test 4 (13285, 13281)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(13285n);
    input.add16(13281n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(26566n);
  });

  it('test operator "sub" overload (euint64, euint16) => euint64 test 1 (38863, 38863)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(38863n);
    input.add16(38863n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, euint16) => euint64 test 2 (38863, 38859)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(38863n);
    input.add16(38859n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, euint16) => euint64 test 1 (32760, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(32760n);
    input.add16(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(65520n);
  });

  it('test operator "mul" overload (euint64, euint16) => euint64 test 2 (148, 148)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(148n);
    input.add16(148n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(21904n);
  });

  it('test operator "mul" overload (euint64, euint16) => euint64 test 3 (148, 148)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(148n);
    input.add16(148n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(21904n);
  });

  it('test operator "mul" overload (euint64, euint16) => euint64 test 4 (148, 148)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(148n);
    input.add16(148n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(21904n);
  });

  it('test operator "and" overload (euint64, euint16) => euint64 test 1 (18441680537921014315, 53530)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18441680537921014315n);
    input.add16(53530n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(16394n);
  });

  it('test operator "and" overload (euint64, euint16) => euint64 test 2 (53526, 53530)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(53526n);
    input.add16(53530n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(53522n);
  });

  it('test operator "and" overload (euint64, euint16) => euint64 test 3 (53530, 53530)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(53530n);
    input.add16(53530n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(53530n);
  });

  it('test operator "and" overload (euint64, euint16) => euint64 test 4 (53530, 53526)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(53530n);
    input.add16(53526n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(53522n);
  });

  it('test operator "or" overload (euint64, euint16) => euint64 test 1 (18442618989953709165, 10589)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18442618989953709165n);
    input.add16(10589n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18442618989953711485n);
  });

  it('test operator "or" overload (euint64, euint16) => euint64 test 2 (10585, 10589)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(10585n);
    input.add16(10589n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(10589n);
  });

  it('test operator "or" overload (euint64, euint16) => euint64 test 3 (10589, 10589)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(10589n);
    input.add16(10589n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(10589n);
  });

  it('test operator "or" overload (euint64, euint16) => euint64 test 4 (10589, 10585)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(10589n);
    input.add16(10585n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(10589n);
  });

  it('test operator "xor" overload (euint64, euint16) => euint64 test 1 (18444040642943953865, 59855)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18444040642943953865n);
    input.add16(59855n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18444040642943926790n);
  });

  it('test operator "xor" overload (euint64, euint16) => euint64 test 2 (59851, 59855)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(59851n);
    input.add16(59855n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint64, euint16) => euint64 test 3 (59855, 59855)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(59855n);
    input.add16(59855n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, euint16) => euint64 test 4 (59855, 59851)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(59855n);
    input.add16(59851n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint64, euint16) => ebool test 1 (18443264610765433261, 48420)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18443264610765433261n);
    input.add16(48420n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint16) => ebool test 2 (48416, 48420)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(48416n);
    input.add16(48420n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint16) => ebool test 3 (48420, 48420)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(48420n);
    input.add16(48420n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, euint16) => ebool test 4 (48420, 48416)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(48420n);
    input.add16(48416n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint16) => ebool test 1 (18440819193375593917, 55476)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18440819193375593917n);
    input.add16(55476n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint16) => ebool test 2 (55472, 55476)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(55472n);
    input.add16(55476n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint16) => ebool test 3 (55476, 55476)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(55476n);
    input.add16(55476n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint16) => ebool test 4 (55476, 55472)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(55476n);
    input.add16(55472n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint16) => ebool test 1 (18438680946094595485, 46998)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18438680946094595485n);
    input.add16(46998n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint16) => ebool test 2 (46994, 46998)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(46994n);
    input.add16(46998n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint16) => ebool test 3 (46998, 46998)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(46998n);
    input.add16(46998n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint16) => ebool test 4 (46998, 46994)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(46998n);
    input.add16(46994n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint16) => ebool test 1 (18443701977520984567, 14229)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18443701977520984567n);
    input.add16(14229n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint16) => ebool test 2 (14225, 14229)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(14225n);
    input.add16(14229n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint16) => ebool test 3 (14229, 14229)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(14229n);
    input.add16(14229n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint16) => ebool test 4 (14229, 14225)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(14229n);
    input.add16(14225n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint16) => ebool test 1 (18441557006191557349, 7647)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18441557006191557349n);
    input.add16(7647n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint64, euint16) => ebool test 2 (7643, 7647)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(7643n);
    input.add16(7647n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint16) => ebool test 3 (7647, 7647)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(7647n);
    input.add16(7647n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint16) => ebool test 4 (7647, 7643)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(7647n);
    input.add16(7643n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint16) => ebool test 1 (18443367764219740573, 50046)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18443367764219740573n);
    input.add16(50046n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint16) => ebool test 2 (50042, 50046)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(50042n);
    input.add16(50046n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, euint16) => ebool test 3 (50046, 50046)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(50046n);
    input.add16(50046n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint16) => ebool test 4 (50046, 50042)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(50046n);
    input.add16(50042n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, euint16) => euint64 test 1 (18441536399440170819, 29178)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18441536399440170819n);
    input.add16(29178n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(29178n);
  });

  it('test operator "min" overload (euint64, euint16) => euint64 test 2 (29174, 29178)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(29174n);
    input.add16(29178n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(29174n);
  });

  it('test operator "min" overload (euint64, euint16) => euint64 test 3 (29178, 29178)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(29178n);
    input.add16(29178n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(29178n);
  });

  it('test operator "min" overload (euint64, euint16) => euint64 test 4 (29178, 29174)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(29178n);
    input.add16(29174n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(29174n);
  });

  it('test operator "max" overload (euint64, euint16) => euint64 test 1 (18438191336186635833, 37490)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18438191336186635833n);
    input.add16(37490n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18438191336186635833n);
  });

  it('test operator "max" overload (euint64, euint16) => euint64 test 2 (37486, 37490)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(37486n);
    input.add16(37490n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(37490n);
  });

  it('test operator "max" overload (euint64, euint16) => euint64 test 3 (37490, 37490)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(37490n);
    input.add16(37490n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(37490n);
  });

  it('test operator "max" overload (euint64, euint16) => euint64 test 4 (37490, 37486)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(37490n);
    input.add16(37486n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(37490n);
  });

  it('test operator "add" overload (euint64, euint32) => euint64 test 1 (4294188613, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(4294188613n);
    input.add32(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4294188615n);
  });

  it('test operator "add" overload (euint64, euint32) => euint64 test 2 (1523568933, 1523568935)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1523568933n);
    input.add32(1523568935n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(3047137868n);
  });

  it('test operator "add" overload (euint64, euint32) => euint64 test 3 (1523568935, 1523568935)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1523568935n);
    input.add32(1523568935n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(3047137870n);
  });

  it('test operator "add" overload (euint64, euint32) => euint64 test 4 (1523568935, 1523568933)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1523568935n);
    input.add32(1523568933n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(3047137868n);
  });

  it('test operator "sub" overload (euint64, euint32) => euint64 test 1 (1571271458, 1571271458)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1571271458n);
    input.add32(1571271458n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, euint32) => euint64 test 2 (1571271458, 1571271454)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1571271458n);
    input.add32(1571271454n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, euint32) => euint64 test 1 (2147385863, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(2147385863n);
    input.add32(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4294771726n);
  });

  it('test operator "mul" overload (euint64, euint32) => euint64 test 2 (38571, 38571)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(38571n);
    input.add32(38571n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1487722041n);
  });

  it('test operator "mul" overload (euint64, euint32) => euint64 test 3 (38571, 38571)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(38571n);
    input.add32(38571n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1487722041n);
  });

  it('test operator "mul" overload (euint64, euint32) => euint64 test 4 (38571, 38571)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(38571n);
    input.add32(38571n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1487722041n);
  });

  it('test operator "and" overload (euint64, euint32) => euint64 test 1 (18441790488019113933, 3522791655)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18441790488019113933n);
    input.add32(3522791655n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1351123141n);
  });

  it('test operator "and" overload (euint64, euint32) => euint64 test 2 (3522791651, 3522791655)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(3522791651n);
    input.add32(3522791655n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(3522791651n);
  });

  it('test operator "and" overload (euint64, euint32) => euint64 test 3 (3522791655, 3522791655)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(3522791655n);
    input.add32(3522791655n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(3522791655n);
  });

  it('test operator "and" overload (euint64, euint32) => euint64 test 4 (3522791655, 3522791651)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(3522791655n);
    input.add32(3522791651n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(3522791651n);
  });

  it('test operator "or" overload (euint64, euint32) => euint64 test 1 (18439410302748752271, 1914953450)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18439410302748752271n);
    input.add32(1914953450n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18439410303019515887n);
  });

  it('test operator "or" overload (euint64, euint32) => euint64 test 2 (1914953446, 1914953450)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1914953446n);
    input.add32(1914953450n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1914953454n);
  });

  it('test operator "or" overload (euint64, euint32) => euint64 test 3 (1914953450, 1914953450)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1914953450n);
    input.add32(1914953450n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1914953450n);
  });

  it('test operator "or" overload (euint64, euint32) => euint64 test 4 (1914953450, 1914953446)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1914953450n);
    input.add32(1914953446n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1914953454n);
  });

  it('test operator "xor" overload (euint64, euint32) => euint64 test 1 (18446154036160170295, 1549517494)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18446154036160170295n);
    input.add32(1549517494n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18446154037296155521n);
  });

  it('test operator "xor" overload (euint64, euint32) => euint64 test 2 (1549517490, 1549517494)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1549517490n);
    input.add32(1549517494n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint64, euint32) => euint64 test 3 (1549517494, 1549517494)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1549517494n);
    input.add32(1549517494n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, euint32) => euint64 test 4 (1549517494, 1549517490)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1549517494n);
    input.add32(1549517490n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint64, euint32) => ebool test 1 (18438800248497516513, 58980369)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18438800248497516513n);
    input.add32(58980369n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint32) => ebool test 2 (58980365, 58980369)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(58980365n);
    input.add32(58980369n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint32) => ebool test 3 (58980369, 58980369)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(58980369n);
    input.add32(58980369n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, euint32) => ebool test 4 (58980369, 58980365)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(58980369n);
    input.add32(58980365n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });
});

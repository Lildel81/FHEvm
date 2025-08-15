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

describe('HTTPZ operations 7', function () {
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

  it('test operator "min" overload (euint128, euint8) => euint128 test 1 (340282366920938463463369202552064430629, 203)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369202552064430629n);
    input.add8(203n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(203n);
  });

  it('test operator "min" overload (euint128, euint8) => euint128 test 2 (199, 203)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(199n);
    input.add8(203n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(199n);
  });

  it('test operator "min" overload (euint128, euint8) => euint128 test 3 (203, 203)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(203n);
    input.add8(203n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(203n);
  });

  it('test operator "min" overload (euint128, euint8) => euint128 test 4 (203, 199)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(203n);
    input.add8(199n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(199n);
  });

  it('test operator "max" overload (euint128, euint8) => euint128 test 1 (340282366920938463463368494599892998193, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368494599892998193n);
    input.add8(5n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463368494599892998193n);
  });

  it('test operator "max" overload (euint128, euint8) => euint128 test 2 (1, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(1n);
    input.add8(5n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(5n);
  });

  it('test operator "max" overload (euint128, euint8) => euint128 test 3 (5, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(5n);
    input.add8(5n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(5n);
  });

  it('test operator "max" overload (euint128, euint8) => euint128 test 4 (5, 1)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(5n);
    input.add8(1n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(5n);
  });

  it('test operator "add" overload (euint128, euint16) => euint128 test 1 (32769, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(32769n);
    input.add16(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(32771n);
  });

  it('test operator "add" overload (euint128, euint16) => euint128 test 2 (18515, 18517)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18515n);
    input.add16(18517n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(37032n);
  });

  it('test operator "add" overload (euint128, euint16) => euint128 test 3 (18517, 18517)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18517n);
    input.add16(18517n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(37034n);
  });

  it('test operator "add" overload (euint128, euint16) => euint128 test 4 (18517, 18515)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18517n);
    input.add16(18515n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(37032n);
  });

  it('test operator "sub" overload (euint128, euint16) => euint128 test 1 (38209, 38209)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(38209n);
    input.add16(38209n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint128, euint16) => euint128 test 2 (38209, 38205)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(38209n);
    input.add16(38205n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint128, euint16) => euint128 test 1 (16385, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(16385n);
    input.add16(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(32770n);
  });

  it('test operator "mul" overload (euint128, euint16) => euint128 test 2 (181, 181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(181n);
    input.add16(181n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(32761n);
  });

  it('test operator "mul" overload (euint128, euint16) => euint128 test 3 (181, 181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(181n);
    input.add16(181n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(32761n);
  });

  it('test operator "mul" overload (euint128, euint16) => euint128 test 4 (181, 181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(181n);
    input.add16(181n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(32761n);
  });

  it('test operator "and" overload (euint128, euint16) => euint128 test 1 (340282366920938463463372671788568077093, 25727)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463372671788568077093n);
    input.add16(25727n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(24613n);
  });

  it('test operator "and" overload (euint128, euint16) => euint128 test 2 (25723, 25727)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(25723n);
    input.add16(25727n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(25723n);
  });

  it('test operator "and" overload (euint128, euint16) => euint128 test 3 (25727, 25727)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(25727n);
    input.add16(25727n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(25727n);
  });

  it('test operator "and" overload (euint128, euint16) => euint128 test 4 (25727, 25723)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(25727n);
    input.add16(25723n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(25723n);
  });

  it('test operator "or" overload (euint128, euint16) => euint128 test 1 (340282366920938463463365688548664770889, 40105)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463365688548664770889n);
    input.add16(40105n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463365688548664778217n);
  });

  it('test operator "or" overload (euint128, euint16) => euint128 test 2 (40101, 40105)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(40101n);
    input.add16(40105n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(40109n);
  });

  it('test operator "or" overload (euint128, euint16) => euint128 test 3 (40105, 40105)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(40105n);
    input.add16(40105n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(40105n);
  });

  it('test operator "or" overload (euint128, euint16) => euint128 test 4 (40105, 40101)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(40105n);
    input.add16(40101n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(40109n);
  });

  it('test operator "xor" overload (euint128, euint16) => euint128 test 1 (340282366920938463463373470793496781525, 30672)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373470793496781525n);
    input.add16(30672n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463373470793496761605n);
  });

  it('test operator "xor" overload (euint128, euint16) => euint128 test 2 (30668, 30672)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(30668n);
    input.add16(30672n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(28n);
  });

  it('test operator "xor" overload (euint128, euint16) => euint128 test 3 (30672, 30672)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(30672n);
    input.add16(30672n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint128, euint16) => euint128 test 4 (30672, 30668)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(30672n);
    input.add16(30668n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(28n);
  });

  it('test operator "eq" overload (euint128, euint16) => ebool test 1 (340282366920938463463366098404120026603, 50575)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366098404120026603n);
    input.add16(50575n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint16) => ebool test 2 (50571, 50575)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(50571n);
    input.add16(50575n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint16) => ebool test 3 (50575, 50575)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(50575n);
    input.add16(50575n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint128, euint16) => ebool test 4 (50575, 50571)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(50575n);
    input.add16(50571n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint16) => ebool test 1 (340282366920938463463370595700749874243, 43145)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370595700749874243n);
    input.add16(43145n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint16) => ebool test 2 (43141, 43145)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(43141n);
    input.add16(43145n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint16) => ebool test 3 (43145, 43145)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(43145n);
    input.add16(43145n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint16) => ebool test 4 (43145, 43141)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(43145n);
    input.add16(43141n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint16) => ebool test 1 (340282366920938463463371712119056180545, 20678)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371712119056180545n);
    input.add16(20678n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint16) => ebool test 2 (20674, 20678)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(20674n);
    input.add16(20678n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint128, euint16) => ebool test 3 (20678, 20678)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(20678n);
    input.add16(20678n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint16) => ebool test 4 (20678, 20674)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(20678n);
    input.add16(20674n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint16) => ebool test 1 (340282366920938463463370699613592401943, 10614)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370699613592401943n);
    input.add16(10614n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint16) => ebool test 2 (10610, 10614)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(10610n);
    input.add16(10614n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint16) => ebool test 3 (10614, 10614)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(10614n);
    input.add16(10614n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint16) => ebool test 4 (10614, 10610)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(10614n);
    input.add16(10610n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint16) => ebool test 1 (340282366920938463463368942282475607903, 61735)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368942282475607903n);
    input.add16(61735n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint128, euint16) => ebool test 2 (61731, 61735)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(61731n);
    input.add16(61735n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint16) => ebool test 3 (61735, 61735)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(61735n);
    input.add16(61735n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint16) => ebool test 4 (61735, 61731)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(61735n);
    input.add16(61731n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint16) => ebool test 1 (340282366920938463463373898732847863747, 33716)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373898732847863747n);
    input.add16(33716n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint16) => ebool test 2 (33712, 33716)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(33712n);
    input.add16(33716n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint128, euint16) => ebool test 3 (33716, 33716)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(33716n);
    input.add16(33716n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint16) => ebool test 4 (33716, 33712)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(33716n);
    input.add16(33712n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint128, euint16) => euint128 test 1 (340282366920938463463370859988219874765, 44337)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370859988219874765n);
    input.add16(44337n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(44337n);
  });

  it('test operator "min" overload (euint128, euint16) => euint128 test 2 (44333, 44337)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(44333n);
    input.add16(44337n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(44333n);
  });

  it('test operator "min" overload (euint128, euint16) => euint128 test 3 (44337, 44337)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(44337n);
    input.add16(44337n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(44337n);
  });

  it('test operator "min" overload (euint128, euint16) => euint128 test 4 (44337, 44333)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(44337n);
    input.add16(44333n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(44333n);
  });

  it('test operator "max" overload (euint128, euint16) => euint128 test 1 (340282366920938463463370583528298269695, 22923)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370583528298269695n);
    input.add16(22923n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463370583528298269695n);
  });

  it('test operator "max" overload (euint128, euint16) => euint128 test 2 (22919, 22923)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(22919n);
    input.add16(22923n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(22923n);
  });

  it('test operator "max" overload (euint128, euint16) => euint128 test 3 (22923, 22923)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(22923n);
    input.add16(22923n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(22923n);
  });

  it('test operator "max" overload (euint128, euint16) => euint128 test 4 (22923, 22919)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(22923n);
    input.add16(22919n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(22923n);
  });

  it('test operator "add" overload (euint128, euint32) => euint128 test 1 (2147483649, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(2147483649n);
    input.add32(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(2147483651n);
  });

  it('test operator "add" overload (euint128, euint32) => euint128 test 2 (245111235, 245111239)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(245111235n);
    input.add32(245111239n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(490222474n);
  });

  it('test operator "add" overload (euint128, euint32) => euint128 test 3 (245111239, 245111239)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(245111239n);
    input.add32(245111239n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(490222478n);
  });

  it('test operator "add" overload (euint128, euint32) => euint128 test 4 (245111239, 245111235)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(245111239n);
    input.add32(245111235n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(490222474n);
  });

  it('test operator "sub" overload (euint128, euint32) => euint128 test 1 (2953262607, 2953262607)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(2953262607n);
    input.add32(2953262607n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint128, euint32) => euint128 test 2 (2953262607, 2953262603)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(2953262607n);
    input.add32(2953262603n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint128, euint32) => euint128 test 1 (1073741825, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(1073741825n);
    input.add32(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(2147483650n);
  });

  it('test operator "mul" overload (euint128, euint32) => euint128 test 2 (37743, 37743)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(37743n);
    input.add32(37743n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(1424534049n);
  });

  it('test operator "mul" overload (euint128, euint32) => euint128 test 3 (37743, 37743)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(37743n);
    input.add32(37743n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(1424534049n);
  });

  it('test operator "mul" overload (euint128, euint32) => euint128 test 4 (37743, 37743)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(37743n);
    input.add32(37743n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(1424534049n);
  });

  it('test operator "and" overload (euint128, euint32) => euint128 test 1 (340282366920938463463369304039192894083, 1690131667)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369304039192894083n);
    input.add32(1690131667n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(540088451n);
  });

  it('test operator "and" overload (euint128, euint32) => euint128 test 2 (1690131663, 1690131667)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(1690131663n);
    input.add32(1690131667n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(1690131651n);
  });

  it('test operator "and" overload (euint128, euint32) => euint128 test 3 (1690131667, 1690131667)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(1690131667n);
    input.add32(1690131667n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(1690131667n);
  });

  it('test operator "and" overload (euint128, euint32) => euint128 test 4 (1690131667, 1690131663)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(1690131667n);
    input.add32(1690131663n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(1690131651n);
  });

  it('test operator "or" overload (euint128, euint32) => euint128 test 1 (340282366920938463463371401090752655489, 3515825620)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371401090752655489n);
    input.add32(3515825620n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463371401092111744469n);
  });

  it('test operator "or" overload (euint128, euint32) => euint128 test 2 (3515825616, 3515825620)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3515825616n);
    input.add32(3515825620n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(3515825620n);
  });

  it('test operator "or" overload (euint128, euint32) => euint128 test 3 (3515825620, 3515825620)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3515825620n);
    input.add32(3515825620n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(3515825620n);
  });

  it('test operator "or" overload (euint128, euint32) => euint128 test 4 (3515825620, 3515825616)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3515825620n);
    input.add32(3515825616n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(3515825620n);
  });

  it('test operator "xor" overload (euint128, euint32) => euint128 test 1 (340282366920938463463367133090788686115, 3453249827)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463367133090788686115n);
    input.add32(3453249827n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463367133092066643968n);
  });

  it('test operator "xor" overload (euint128, euint32) => euint128 test 2 (3453249823, 3453249827)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3453249823n);
    input.add32(3453249827n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(60n);
  });

  it('test operator "xor" overload (euint128, euint32) => euint128 test 3 (3453249827, 3453249827)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3453249827n);
    input.add32(3453249827n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint128, euint32) => euint128 test 4 (3453249827, 3453249823)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3453249827n);
    input.add32(3453249823n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(60n);
  });

  it('test operator "eq" overload (euint128, euint32) => ebool test 1 (340282366920938463463374230947010104573, 3457769981)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463374230947010104573n);
    input.add32(3457769981n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint32) => ebool test 2 (3457769977, 3457769981)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3457769977n);
    input.add32(3457769981n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint32) => ebool test 3 (3457769981, 3457769981)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3457769981n);
    input.add32(3457769981n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint128, euint32) => ebool test 4 (3457769981, 3457769977)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3457769981n);
    input.add32(3457769977n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint32) => ebool test 1 (340282366920938463463371022787367605195, 3932413874)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371022787367605195n);
    input.add32(3932413874n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint32) => ebool test 2 (3932413870, 3932413874)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3932413870n);
    input.add32(3932413874n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint32) => ebool test 3 (3932413874, 3932413874)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3932413874n);
    input.add32(3932413874n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint32) => ebool test 4 (3932413874, 3932413870)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3932413874n);
    input.add32(3932413870n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint32) => ebool test 1 (340282366920938463463372686825691178491, 822761810)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463372686825691178491n);
    input.add32(822761810n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint32) => ebool test 2 (822761806, 822761810)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(822761806n);
    input.add32(822761810n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint128, euint32) => ebool test 3 (822761810, 822761810)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(822761810n);
    input.add32(822761810n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint32) => ebool test 4 (822761810, 822761806)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(822761810n);
    input.add32(822761806n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint32) => ebool test 1 (340282366920938463463373660054712633715, 443476908)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373660054712633715n);
    input.add32(443476908n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint32) => ebool test 2 (443476904, 443476908)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(443476904n);
    input.add32(443476908n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint32) => ebool test 3 (443476908, 443476908)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(443476908n);
    input.add32(443476908n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint32) => ebool test 4 (443476908, 443476904)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(443476908n);
    input.add32(443476904n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint32) => ebool test 1 (340282366920938463463373484128503757073, 962554961)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373484128503757073n);
    input.add32(962554961n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint128, euint32) => ebool test 2 (962554957, 962554961)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(962554957n);
    input.add32(962554961n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint32) => ebool test 3 (962554961, 962554961)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(962554961n);
    input.add32(962554961n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint32) => ebool test 4 (962554961, 962554957)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(962554961n);
    input.add32(962554957n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint32) => ebool test 1 (340282366920938463463373192144211381983, 3156706256)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373192144211381983n);
    input.add32(3156706256n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint32) => ebool test 2 (3156706252, 3156706256)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3156706252n);
    input.add32(3156706256n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint128, euint32) => ebool test 3 (3156706256, 3156706256)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3156706256n);
    input.add32(3156706256n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint32) => ebool test 4 (3156706256, 3156706252)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(3156706256n);
    input.add32(3156706252n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint128, euint32) => euint128 test 1 (340282366920938463463370021405569143885, 4016515200)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370021405569143885n);
    input.add32(4016515200n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4016515200n);
  });

  it('test operator "min" overload (euint128, euint32) => euint128 test 2 (4016515196, 4016515200)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(4016515196n);
    input.add32(4016515200n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4016515196n);
  });

  it('test operator "min" overload (euint128, euint32) => euint128 test 3 (4016515200, 4016515200)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(4016515200n);
    input.add32(4016515200n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4016515200n);
  });

  it('test operator "min" overload (euint128, euint32) => euint128 test 4 (4016515200, 4016515196)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(4016515200n);
    input.add32(4016515196n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4016515196n);
  });

  it('test operator "max" overload (euint128, euint32) => euint128 test 1 (340282366920938463463373675448769348885, 729547055)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373675448769348885n);
    input.add32(729547055n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463373675448769348885n);
  });

  it('test operator "max" overload (euint128, euint32) => euint128 test 2 (729547051, 729547055)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(729547051n);
    input.add32(729547055n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(729547055n);
  });

  it('test operator "max" overload (euint128, euint32) => euint128 test 3 (729547055, 729547055)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(729547055n);
    input.add32(729547055n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(729547055n);
  });

  it('test operator "max" overload (euint128, euint32) => euint128 test 4 (729547055, 729547051)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(729547055n);
    input.add32(729547051n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(729547055n);
  });

  it('test operator "add" overload (euint128, euint64) => euint128 test 1 (9223372036854775809, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9223372036854775809n);
    input.add64(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(9223372036854775811n);
  });

  it('test operator "add" overload (euint128, euint64) => euint128 test 2 (9221479412360104608, 9221479412360104610)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9221479412360104608n);
    input.add64(9221479412360104610n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442958824720209218n);
  });

  it('test operator "add" overload (euint128, euint64) => euint128 test 3 (9221479412360104610, 9221479412360104610)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9221479412360104610n);
    input.add64(9221479412360104610n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442958824720209220n);
  });

  it('test operator "add" overload (euint128, euint64) => euint128 test 4 (9221479412360104610, 9221479412360104608)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9221479412360104610n);
    input.add64(9221479412360104608n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442958824720209218n);
  });

  it('test operator "sub" overload (euint128, euint64) => euint128 test 1 (18437900509862743341, 18437900509862743341)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18437900509862743341n);
    input.add64(18437900509862743341n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint128, euint64) => euint128 test 2 (18437900509862743341, 18437900509862743337)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18437900509862743341n);
    input.add64(18437900509862743337n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint128, euint64) => euint128 test 1 (4611686018427387905, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(4611686018427387905n);
    input.add64(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(9223372036854775810n);
  });

  it('test operator "mul" overload (euint128, euint64) => euint128 test 2 (4292957101, 4292957101)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(4292957101n);
    input.add64(4292957101n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18429480671026324201n);
  });

  it('test operator "mul" overload (euint128, euint64) => euint128 test 3 (4292957101, 4292957101)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(4292957101n);
    input.add64(4292957101n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18429480671026324201n);
  });

  it('test operator "mul" overload (euint128, euint64) => euint128 test 4 (4292957101, 4292957101)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(4292957101n);
    input.add64(4292957101n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18429480671026324201n);
  });

  it('test operator "and" overload (euint128, euint64) => euint128 test 1 (340282366920938463463370992164071908397, 18444679303853810135)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370992164071908397n);
    input.add64(18444679303853810135n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442277901571235845n);
  });

  it('test operator "and" overload (euint128, euint64) => euint128 test 2 (18444679303853810131, 18444679303853810135)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444679303853810131n);
    input.add64(18444679303853810135n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18444679303853810131n);
  });

  it('test operator "and" overload (euint128, euint64) => euint128 test 3 (18444679303853810135, 18444679303853810135)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444679303853810135n);
    input.add64(18444679303853810135n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18444679303853810135n);
  });

  it('test operator "and" overload (euint128, euint64) => euint128 test 4 (18444679303853810135, 18444679303853810131)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444679303853810135n);
    input.add64(18444679303853810131n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18444679303853810131n);
  });

  it('test operator "or" overload (euint128, euint64) => euint128 test 1 (340282366920938463463367154404385847151, 18440662443700076857)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463367154404385847151n);
    input.add64(18440662443700076857n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463370075017205217151n);
  });

  it('test operator "or" overload (euint128, euint64) => euint128 test 2 (18440662443700076853, 18440662443700076857)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18440662443700076853n);
    input.add64(18440662443700076857n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440662443700076861n);
  });

  it('test operator "or" overload (euint128, euint64) => euint128 test 3 (18440662443700076857, 18440662443700076857)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18440662443700076857n);
    input.add64(18440662443700076857n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440662443700076857n);
  });

  it('test operator "or" overload (euint128, euint64) => euint128 test 4 (18440662443700076857, 18440662443700076853)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18440662443700076857n);
    input.add64(18440662443700076853n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440662443700076861n);
  });

  it('test operator "xor" overload (euint128, euint64) => euint128 test 1 (340282366920938463463366893994516680869, 18445597729986871711)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366893994516680869n);
    input.add64(18445597729986871711n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463444936718564817015098n);
  });

  it('test operator "xor" overload (euint128, euint64) => euint128 test 2 (18445597729986871707, 18445597729986871711)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18445597729986871707n);
    input.add64(18445597729986871711n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint128, euint64) => euint128 test 3 (18445597729986871711, 18445597729986871711)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18445597729986871711n);
    input.add64(18445597729986871711n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint128, euint64) => euint128 test 4 (18445597729986871711, 18445597729986871707)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18445597729986871711n);
    input.add64(18445597729986871707n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint128, euint64) => ebool test 1 (340282366920938463463372330016249746765, 18446020174798392801)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463372330016249746765n);
    input.add64(18446020174798392801n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint64) => ebool test 2 (18446020174798392797, 18446020174798392801)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18446020174798392797n);
    input.add64(18446020174798392801n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint64) => ebool test 3 (18446020174798392801, 18446020174798392801)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18446020174798392801n);
    input.add64(18446020174798392801n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint128, euint64) => ebool test 4 (18446020174798392801, 18446020174798392797)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18446020174798392801n);
    input.add64(18446020174798392797n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint64) => ebool test 1 (340282366920938463463366191857147789455, 18442099131545691719)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366191857147789455n);
    input.add64(18442099131545691719n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint64) => ebool test 2 (18442099131545691715, 18442099131545691719)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442099131545691715n);
    input.add64(18442099131545691719n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint64) => ebool test 3 (18442099131545691719, 18442099131545691719)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442099131545691719n);
    input.add64(18442099131545691719n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint64) => ebool test 4 (18442099131545691719, 18442099131545691715)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442099131545691719n);
    input.add64(18442099131545691715n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint64) => ebool test 1 (340282366920938463463374158912675176269, 18441037673455335001)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463374158912675176269n);
    input.add64(18441037673455335001n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint64) => ebool test 2 (18441037673455334997, 18441037673455335001)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18441037673455334997n);
    input.add64(18441037673455335001n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint128, euint64) => ebool test 3 (18441037673455335001, 18441037673455335001)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18441037673455335001n);
    input.add64(18441037673455335001n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint64) => ebool test 4 (18441037673455335001, 18441037673455334997)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18441037673455335001n);
    input.add64(18441037673455334997n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint64) => ebool test 1 (340282366920938463463367859480602776189, 18443033613666913173)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463367859480602776189n);
    input.add64(18443033613666913173n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint64) => ebool test 2 (18443033613666913169, 18443033613666913173)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18443033613666913169n);
    input.add64(18443033613666913173n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint64) => ebool test 3 (18443033613666913173, 18443033613666913173)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18443033613666913173n);
    input.add64(18443033613666913173n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint64) => ebool test 4 (18443033613666913173, 18443033613666913169)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18443033613666913173n);
    input.add64(18443033613666913169n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint64) => ebool test 1 (340282366920938463463367337968665335141, 18443959025490538681)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463367337968665335141n);
    input.add64(18443959025490538681n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint128, euint64) => ebool test 2 (18443959025490538677, 18443959025490538681)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18443959025490538677n);
    input.add64(18443959025490538681n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint64) => ebool test 3 (18443959025490538681, 18443959025490538681)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18443959025490538681n);
    input.add64(18443959025490538681n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint64) => ebool test 4 (18443959025490538681, 18443959025490538677)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18443959025490538681n);
    input.add64(18443959025490538677n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint64) => ebool test 1 (340282366920938463463368790489330580941, 18445857930689833657)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368790489330580941n);
    input.add64(18445857930689833657n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint64) => ebool test 2 (18445857930689833653, 18445857930689833657)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18445857930689833653n);
    input.add64(18445857930689833657n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint128, euint64) => ebool test 3 (18445857930689833657, 18445857930689833657)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18445857930689833657n);
    input.add64(18445857930689833657n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint64) => ebool test 4 (18445857930689833657, 18445857930689833653)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18445857930689833657n);
    input.add64(18445857930689833653n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint128, euint64) => euint128 test 1 (340282366920938463463365869782066366385, 18444446963427315051)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463365869782066366385n);
    input.add64(18444446963427315051n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18444446963427315051n);
  });

  it('test operator "min" overload (euint128, euint64) => euint128 test 2 (18444446963427315047, 18444446963427315051)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444446963427315047n);
    input.add64(18444446963427315051n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18444446963427315047n);
  });

  it('test operator "min" overload (euint128, euint64) => euint128 test 3 (18444446963427315051, 18444446963427315051)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444446963427315051n);
    input.add64(18444446963427315051n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18444446963427315051n);
  });

  it('test operator "min" overload (euint128, euint64) => euint128 test 4 (18444446963427315051, 18444446963427315047)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444446963427315051n);
    input.add64(18444446963427315047n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18444446963427315047n);
  });

  it('test operator "max" overload (euint128, euint64) => euint128 test 1 (340282366920938463463369555727467455201, 18440919997130349313)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369555727467455201n);
    input.add64(18440919997130349313n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463369555727467455201n);
  });

  it('test operator "max" overload (euint128, euint64) => euint128 test 2 (18440919997130349309, 18440919997130349313)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18440919997130349309n);
    input.add64(18440919997130349313n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440919997130349313n);
  });

  it('test operator "max" overload (euint128, euint64) => euint128 test 3 (18440919997130349313, 18440919997130349313)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18440919997130349313n);
    input.add64(18440919997130349313n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440919997130349313n);
  });

  it('test operator "max" overload (euint128, euint64) => euint128 test 4 (18440919997130349313, 18440919997130349309)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18440919997130349313n);
    input.add64(18440919997130349309n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440919997130349313n);
  });

  it('test operator "add" overload (euint128, euint128) => euint128 test 1 (170141183460469231731686498927577061645, 170141183460469231731686616570305142197)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(170141183460469231731686498927577061645n);
    input.add128(170141183460469231731686616570305142197n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463373115497882203842n);
  });

  it('test operator "add" overload (euint128, euint128) => euint128 test 2 (170141183460469231731686498927577061643, 170141183460469231731686498927577061645)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(170141183460469231731686498927577061643n);
    input.add128(170141183460469231731686498927577061645n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463372997855154123288n);
  });

  it('test operator "add" overload (euint128, euint128) => euint128 test 3 (170141183460469231731686498927577061645, 170141183460469231731686498927577061645)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(170141183460469231731686498927577061645n);
    input.add128(170141183460469231731686498927577061645n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463372997855154123290n);
  });

  it('test operator "add" overload (euint128, euint128) => euint128 test 4 (170141183460469231731686498927577061645, 170141183460469231731686498927577061643)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(170141183460469231731686498927577061645n);
    input.add128(170141183460469231731686498927577061643n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463372997855154123288n);
  });

  it('test operator "sub" overload (euint128, euint128) => euint128 test 1 (340282366920938463463370251022964097737, 340282366920938463463370251022964097737)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370251022964097737n);
    input.add128(340282366920938463463370251022964097737n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint128, euint128) => euint128 test 2 (340282366920938463463370251022964097737, 340282366920938463463370251022964097733)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370251022964097737n);
    input.add128(340282366920938463463370251022964097733n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint128, euint128) => euint128 test 1 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9223372036854775809n);
    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (euint128, euint128) => euint128 test 2 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9223372036854775809n);
    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (euint128, euint128) => euint128 test 3 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9223372036854775809n);
    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (euint128, euint128) => euint128 test 4 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9223372036854775809n);
    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "and" overload (euint128, euint128) => euint128 test 1 (340282366920938463463366702543668180347, 340282366920938463463367850389392865923)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366702543668180347n);
    input.add128(340282366920938463463367850389392865923n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463366702498562453507n);
  });

  it('test operator "and" overload (euint128, euint128) => euint128 test 2 (340282366920938463463366702543668180343, 340282366920938463463366702543668180347)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366702543668180343n);
    input.add128(340282366920938463463366702543668180347n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463366702543668180339n);
  });

  it('test operator "and" overload (euint128, euint128) => euint128 test 3 (340282366920938463463366702543668180347, 340282366920938463463366702543668180347)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366702543668180347n);
    input.add128(340282366920938463463366702543668180347n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463366702543668180347n);
  });

  it('test operator "and" overload (euint128, euint128) => euint128 test 4 (340282366920938463463366702543668180347, 340282366920938463463366702543668180343)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366702543668180347n);
    input.add128(340282366920938463463366702543668180343n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463366702543668180339n);
  });

  it('test operator "or" overload (euint128, euint128) => euint128 test 1 (340282366920938463463372434004090032337, 340282366920938463463368046858304055877)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463372434004090032337n);
    input.add128(340282366920938463463368046858304055877n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463372627724565576405n);
  });

  it('test operator "or" overload (euint128, euint128) => euint128 test 2 (340282366920938463463368046858304055873, 340282366920938463463368046858304055877)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368046858304055873n);
    input.add128(340282366920938463463368046858304055877n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463368046858304055877n);
  });

  it('test operator "or" overload (euint128, euint128) => euint128 test 3 (340282366920938463463368046858304055877, 340282366920938463463368046858304055877)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368046858304055877n);
    input.add128(340282366920938463463368046858304055877n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463368046858304055877n);
  });

  it('test operator "or" overload (euint128, euint128) => euint128 test 4 (340282366920938463463368046858304055877, 340282366920938463463368046858304055873)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368046858304055877n);
    input.add128(340282366920938463463368046858304055873n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463368046858304055877n);
  });

  it('test operator "xor" overload (euint128, euint128) => euint128 test 1 (340282366920938463463368132514882627669, 340282366920938463463372219142342133969)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368132514882627669n);
    input.add128(340282366920938463463372219142342133969n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(8862913690787972n);
  });

  it('test operator "xor" overload (euint128, euint128) => euint128 test 2 (340282366920938463463368132514882627665, 340282366920938463463368132514882627669)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368132514882627665n);
    input.add128(340282366920938463463368132514882627669n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint128, euint128) => euint128 test 3 (340282366920938463463368132514882627669, 340282366920938463463368132514882627669)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368132514882627669n);
    input.add128(340282366920938463463368132514882627669n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint128, euint128) => euint128 test 4 (340282366920938463463368132514882627669, 340282366920938463463368132514882627665)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368132514882627669n);
    input.add128(340282366920938463463368132514882627665n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint128, euint128) => ebool test 1 (340282366920938463463372425718933040579, 340282366920938463463370698255322937869)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463372425718933040579n);
    input.add128(340282366920938463463370698255322937869n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint128) => ebool test 2 (340282366920938463463370698255322937865, 340282366920938463463370698255322937869)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463370698255322937865n);
    input.add128(340282366920938463463370698255322937869n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint128) => ebool test 3 (340282366920938463463370698255322937869, 340282366920938463463370698255322937869)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463370698255322937869n);
    input.add128(340282366920938463463370698255322937869n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint128, euint128) => ebool test 4 (340282366920938463463370698255322937869, 340282366920938463463370698255322937865)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463370698255322937869n);
    input.add128(340282366920938463463370698255322937865n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint128) => ebool test 1 (340282366920938463463372210047398309239, 340282366920938463463369657061805294835)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463372210047398309239n);
    input.add128(340282366920938463463369657061805294835n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint128) => ebool test 2 (340282366920938463463369657061805294831, 340282366920938463463369657061805294835)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463369657061805294831n);
    input.add128(340282366920938463463369657061805294835n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint128) => ebool test 3 (340282366920938463463369657061805294835, 340282366920938463463369657061805294835)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463369657061805294835n);
    input.add128(340282366920938463463369657061805294835n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint128) => ebool test 4 (340282366920938463463369657061805294835, 340282366920938463463369657061805294831)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463369657061805294835n);
    input.add128(340282366920938463463369657061805294831n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });
});

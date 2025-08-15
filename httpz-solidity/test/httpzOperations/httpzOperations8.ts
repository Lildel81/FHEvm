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

describe('HTTPZ operations 8', function () {
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

  it('test operator "ge" overload (euint128, euint128) => ebool test 1 (340282366920938463463366316125961985617, 340282366920938463463368601936959255845)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366316125961985617n);
    input.add128(340282366920938463463368601936959255845n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint128, euint128) => ebool test 2 (340282366920938463463366316125961985613, 340282366920938463463366316125961985617)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366316125961985613n);
    input.add128(340282366920938463463366316125961985617n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint128, euint128) => ebool test 3 (340282366920938463463366316125961985617, 340282366920938463463366316125961985617)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366316125961985617n);
    input.add128(340282366920938463463366316125961985617n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint128) => ebool test 4 (340282366920938463463366316125961985617, 340282366920938463463366316125961985613)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366316125961985617n);
    input.add128(340282366920938463463366316125961985613n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint128) => ebool test 1 (340282366920938463463367044144682587417, 340282366920938463463368699784680888601)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463367044144682587417n);
    input.add128(340282366920938463463368699784680888601n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint128) => ebool test 2 (340282366920938463463367044144682587413, 340282366920938463463367044144682587417)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463367044144682587413n);
    input.add128(340282366920938463463367044144682587417n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint128) => ebool test 3 (340282366920938463463367044144682587417, 340282366920938463463367044144682587417)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463367044144682587417n);
    input.add128(340282366920938463463367044144682587417n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint128) => ebool test 4 (340282366920938463463367044144682587417, 340282366920938463463367044144682587413)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463367044144682587417n);
    input.add128(340282366920938463463367044144682587413n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint128) => ebool test 1 (340282366920938463463368913390550672375, 340282366920938463463366151594516572569)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368913390550672375n);
    input.add128(340282366920938463463366151594516572569n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint128, euint128) => ebool test 2 (340282366920938463463366151594516572565, 340282366920938463463366151594516572569)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366151594516572565n);
    input.add128(340282366920938463463366151594516572569n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint128) => ebool test 3 (340282366920938463463366151594516572569, 340282366920938463463366151594516572569)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366151594516572569n);
    input.add128(340282366920938463463366151594516572569n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint128) => ebool test 4 (340282366920938463463366151594516572569, 340282366920938463463366151594516572565)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366151594516572569n);
    input.add128(340282366920938463463366151594516572565n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint128) => ebool test 1 (340282366920938463463368003525454631277, 340282366920938463463369491493066748101)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368003525454631277n);
    input.add128(340282366920938463463369491493066748101n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint128, euint128) => ebool test 2 (340282366920938463463368003525454631273, 340282366920938463463368003525454631277)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368003525454631273n);
    input.add128(340282366920938463463368003525454631277n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint128, euint128) => ebool test 3 (340282366920938463463368003525454631277, 340282366920938463463368003525454631277)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368003525454631277n);
    input.add128(340282366920938463463368003525454631277n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint128) => ebool test 4 (340282366920938463463368003525454631277, 340282366920938463463368003525454631273)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463368003525454631277n);
    input.add128(340282366920938463463368003525454631273n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint128, euint128) => euint128 test 1 (340282366920938463463371771835397822927, 340282366920938463463366853511697412489)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463371771835397822927n);
    input.add128(340282366920938463463366853511697412489n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463366853511697412489n);
  });

  it('test operator "min" overload (euint128, euint128) => euint128 test 2 (340282366920938463463366853511697412485, 340282366920938463463366853511697412489)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366853511697412485n);
    input.add128(340282366920938463463366853511697412489n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463366853511697412485n);
  });

  it('test operator "min" overload (euint128, euint128) => euint128 test 3 (340282366920938463463366853511697412489, 340282366920938463463366853511697412489)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366853511697412489n);
    input.add128(340282366920938463463366853511697412489n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463366853511697412489n);
  });

  it('test operator "min" overload (euint128, euint128) => euint128 test 4 (340282366920938463463366853511697412489, 340282366920938463463366853511697412485)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366853511697412489n);
    input.add128(340282366920938463463366853511697412485n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463366853511697412485n);
  });

  it('test operator "max" overload (euint128, euint128) => euint128 test 1 (340282366920938463463370800706396524493, 340282366920938463463370283529599143245)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463370800706396524493n);
    input.add128(340282366920938463463370283529599143245n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463370800706396524493n);
  });

  it('test operator "max" overload (euint128, euint128) => euint128 test 2 (340282366920938463463370283529599143241, 340282366920938463463370283529599143245)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463370283529599143241n);
    input.add128(340282366920938463463370283529599143245n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463370283529599143245n);
  });

  it('test operator "max" overload (euint128, euint128) => euint128 test 3 (340282366920938463463370283529599143245, 340282366920938463463370283529599143245)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463370283529599143245n);
    input.add128(340282366920938463463370283529599143245n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463370283529599143245n);
  });

  it('test operator "max" overload (euint128, euint128) => euint128 test 4 (340282366920938463463370283529599143245, 340282366920938463463370283529599143241)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463370283529599143245n);
    input.add128(340282366920938463463370283529599143241n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract5.resEuint128());
    expect(res).to.equal(340282366920938463463370283529599143245n);
  });

  it('test operator "and" overload (euint128, euint256) => euint256 test 1 (340282366920938463463373752454607270447, 115792089237316195423570985008687907853269984665640564039457578883908005164633)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463373752454607270447n);
    input.add256(115792089237316195423570985008687907853269984665640564039457578883908005164633n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463369191401067803145n);
  });

  it('test operator "and" overload (euint128, euint256) => euint256 test 2 (340282366920938463463373752454607270443, 340282366920938463463373752454607270447)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463373752454607270443n);
    input.add256(340282366920938463463373752454607270447n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463373752454607270443n);
  });

  it('test operator "and" overload (euint128, euint256) => euint256 test 3 (340282366920938463463373752454607270447, 340282366920938463463373752454607270447)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463373752454607270447n);
    input.add256(340282366920938463463373752454607270447n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463373752454607270447n);
  });

  it('test operator "and" overload (euint128, euint256) => euint256 test 4 (340282366920938463463373752454607270447, 340282366920938463463373752454607270443)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463373752454607270447n);
    input.add256(340282366920938463463373752454607270443n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463373752454607270443n);
  });

  it('test operator "or" overload (euint128, euint256) => euint256 test 1 (340282366920938463463371314074906014317, 115792089237316195423570985008687907853269984665640564039457576789313722350049)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463371314074906014317n);
    input.add256(115792089237316195423570985008687907853269984665640564039457576789313722350049n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457581297332872117229n);
  });

  it('test operator "or" overload (euint128, euint256) => euint256 test 2 (340282366920938463463371314074906014313, 340282366920938463463371314074906014317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463371314074906014313n);
    input.add256(340282366920938463463371314074906014317n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463371314074906014317n);
  });

  it('test operator "or" overload (euint128, euint256) => euint256 test 3 (340282366920938463463371314074906014317, 340282366920938463463371314074906014317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463371314074906014317n);
    input.add256(340282366920938463463371314074906014317n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463371314074906014317n);
  });

  it('test operator "or" overload (euint128, euint256) => euint256 test 4 (340282366920938463463371314074906014317, 340282366920938463463371314074906014313)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463371314074906014317n);
    input.add256(340282366920938463463371314074906014313n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463371314074906014317n);
  });

  it('test operator "xor" overload (euint128, euint256) => euint256 test 1 (340282366920938463463366721487838695113, 115792089237316195423570985008687907853269984665640564039457582409616040728967)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366721487838695113n);
    input.add256(115792089237316195423570985008687907853269984665640564039457582409616040728967n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907852929702298719625575994216623851523659598n);
  });

  it('test operator "xor" overload (euint128, euint256) => euint256 test 2 (340282366920938463463366721487838695109, 340282366920938463463366721487838695113)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366721487838695109n);
    input.add256(340282366920938463463366721487838695113n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint128, euint256) => euint256 test 3 (340282366920938463463366721487838695113, 340282366920938463463366721487838695113)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366721487838695113n);
    input.add256(340282366920938463463366721487838695113n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint128, euint256) => euint256 test 4 (340282366920938463463366721487838695113, 340282366920938463463366721487838695109)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463366721487838695113n);
    input.add256(340282366920938463463366721487838695109n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint128, euint256) => ebool test 1 (340282366920938463463372364340931292703, 115792089237316195423570985008687907853269984665640564039457579810101218533545)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463372364340931292703n);
    input.add256(115792089237316195423570985008687907853269984665640564039457579810101218533545n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint256) => ebool test 2 (340282366920938463463372364340931292699, 340282366920938463463372364340931292703)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463372364340931292699n);
    input.add256(340282366920938463463372364340931292703n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint256) => ebool test 3 (340282366920938463463372364340931292703, 340282366920938463463372364340931292703)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463372364340931292703n);
    input.add256(340282366920938463463372364340931292703n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint128, euint256) => ebool test 4 (340282366920938463463372364340931292703, 340282366920938463463372364340931292699)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463372364340931292703n);
    input.add256(340282366920938463463372364340931292699n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint256) => ebool test 1 (340282366920938463463372572501786217437, 115792089237316195423570985008687907853269984665640564039457583990895532982691)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463372572501786217437n);
    input.add256(115792089237316195423570985008687907853269984665640564039457583990895532982691n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint256) => ebool test 2 (340282366920938463463372572501786217433, 340282366920938463463372572501786217437)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463372572501786217433n);
    input.add256(340282366920938463463372572501786217437n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint256) => ebool test 3 (340282366920938463463372572501786217437, 340282366920938463463372572501786217437)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463372572501786217437n);
    input.add256(340282366920938463463372572501786217437n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint256) => ebool test 4 (340282366920938463463372572501786217437, 340282366920938463463372572501786217433)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add128(340282366920938463463372572501786217437n);
    input.add256(340282366920938463463372572501786217433n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "and" overload (euint256, euint8) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457580895918534226613, 194)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580895918534226613n);
    input.add8(194n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(128n);
  });

  it('test operator "and" overload (euint256, euint8) => euint256 test 2 (190, 194)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(190n);
    input.add8(194n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(130n);
  });

  it('test operator "and" overload (euint256, euint8) => euint256 test 3 (194, 194)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(194n);
    input.add8(194n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(194n);
  });

  it('test operator "and" overload (euint256, euint8) => euint256 test 4 (194, 190)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(194n);
    input.add8(190n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(130n);
  });

  it('test operator "or" overload (euint256, euint8) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457578219181758894977, 158)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457578219181758894977n);
    input.add8(158n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457578219181758895007n);
  });

  it('test operator "or" overload (euint256, euint8) => euint256 test 2 (154, 158)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(154n);
    input.add8(158n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(158n);
  });

  it('test operator "or" overload (euint256, euint8) => euint256 test 3 (158, 158)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(158n);
    input.add8(158n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(158n);
  });

  it('test operator "or" overload (euint256, euint8) => euint256 test 4 (158, 154)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(158n);
    input.add8(154n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(158n);
  });

  it('test operator "xor" overload (euint256, euint8) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457576663139898674437, 100)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457576663139898674437n);
    input.add8(100n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457576663139898674529n);
  });

  it('test operator "xor" overload (euint256, euint8) => euint256 test 2 (96, 100)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(96n);
    input.add8(100n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint256, euint8) => euint256 test 3 (100, 100)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(100n);
    input.add8(100n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint256, euint8) => euint256 test 4 (100, 96)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(100n);
    input.add8(96n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint256, euint8) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457581106234185090957, 84)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457581106234185090957n);
    input.add8(84n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint8) => ebool test 2 (80, 84)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(80n);
    input.add8(84n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint8) => ebool test 3 (84, 84)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(84n);
    input.add8(84n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint8) => ebool test 4 (84, 80)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(84n);
    input.add8(80n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint8) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457575546994213706463, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575546994213706463n);
    input.add8(115n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint8) => ebool test 2 (111, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(111n);
    input.add8(115n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint8) => ebool test 3 (115, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115n);
    input.add8(115n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint8) => ebool test 4 (115, 111)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115n);
    input.add8(111n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "and" overload (euint256, euint16) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457583290062555683811, 21727)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457583290062555683811n);
    input.add16(21727n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(4291n);
  });

  it('test operator "and" overload (euint256, euint16) => euint256 test 2 (21723, 21727)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(21723n);
    input.add16(21727n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(21723n);
  });

  it('test operator "and" overload (euint256, euint16) => euint256 test 3 (21727, 21727)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(21727n);
    input.add16(21727n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(21727n);
  });

  it('test operator "and" overload (euint256, euint16) => euint256 test 4 (21727, 21723)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(21727n);
    input.add16(21723n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(21723n);
  });

  it('test operator "or" overload (euint256, euint16) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457576181438925760457, 49834)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457576181438925760457n);
    input.add16(49834n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457576181438925760491n);
  });

  it('test operator "or" overload (euint256, euint16) => euint256 test 2 (49830, 49834)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(49830n);
    input.add16(49834n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(49838n);
  });

  it('test operator "or" overload (euint256, euint16) => euint256 test 3 (49834, 49834)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(49834n);
    input.add16(49834n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(49834n);
  });

  it('test operator "or" overload (euint256, euint16) => euint256 test 4 (49834, 49830)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(49834n);
    input.add16(49830n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(49838n);
  });

  it('test operator "xor" overload (euint256, euint16) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457575814614860405747, 63608)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575814614860405747n);
    input.add16(63608n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457575814614860391307n);
  });

  it('test operator "xor" overload (euint256, euint16) => euint256 test 2 (63604, 63608)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(63604n);
    input.add16(63608n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint256, euint16) => euint256 test 3 (63608, 63608)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(63608n);
    input.add16(63608n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint256, euint16) => euint256 test 4 (63608, 63604)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(63608n);
    input.add16(63604n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint256, euint16) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457579566315112376895, 22998)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457579566315112376895n);
    input.add16(22998n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint16) => ebool test 2 (22994, 22998)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(22994n);
    input.add16(22998n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint16) => ebool test 3 (22998, 22998)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(22998n);
    input.add16(22998n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint16) => ebool test 4 (22998, 22994)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(22998n);
    input.add16(22994n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint16) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457582866229899845539, 59702)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582866229899845539n);
    input.add16(59702n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint16) => ebool test 2 (59698, 59702)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(59698n);
    input.add16(59702n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint16) => ebool test 3 (59702, 59702)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(59702n);
    input.add16(59702n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint16) => ebool test 4 (59702, 59698)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(59702n);
    input.add16(59698n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "and" overload (euint256, euint32) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457575376660940489597, 2966253179)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575376660940489597n);
    input.add32(2966253179n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(2957771385n);
  });

  it('test operator "and" overload (euint256, euint32) => euint256 test 2 (2966253175, 2966253179)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2966253175n);
    input.add32(2966253179n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(2966253171n);
  });

  it('test operator "and" overload (euint256, euint32) => euint256 test 3 (2966253179, 2966253179)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2966253179n);
    input.add32(2966253179n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(2966253179n);
  });

  it('test operator "and" overload (euint256, euint32) => euint256 test 4 (2966253179, 2966253175)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2966253179n);
    input.add32(2966253175n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(2966253171n);
  });

  it('test operator "or" overload (euint256, euint32) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457579262556881633001, 2064679809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457579262556881633001n);
    input.add32(2064679809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457579262558375886825n);
  });

  it('test operator "or" overload (euint256, euint32) => euint256 test 2 (2064679805, 2064679809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2064679805n);
    input.add32(2064679809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(2064679933n);
  });

  it('test operator "or" overload (euint256, euint32) => euint256 test 3 (2064679809, 2064679809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2064679809n);
    input.add32(2064679809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(2064679809n);
  });

  it('test operator "or" overload (euint256, euint32) => euint256 test 4 (2064679809, 2064679805)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2064679809n);
    input.add32(2064679805n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(2064679933n);
  });

  it('test operator "xor" overload (euint256, euint32) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457575090520491105145, 2223865085)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575090520491105145n);
    input.add32(2223865085n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457575090518419335044n);
  });

  it('test operator "xor" overload (euint256, euint32) => euint256 test 2 (2223865081, 2223865085)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2223865081n);
    input.add32(2223865085n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint256, euint32) => euint256 test 3 (2223865085, 2223865085)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2223865085n);
    input.add32(2223865085n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint256, euint32) => euint256 test 4 (2223865085, 2223865081)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2223865085n);
    input.add32(2223865081n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint256, euint32) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457576249471302026641, 2582753223)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457576249471302026641n);
    input.add32(2582753223n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint32) => ebool test 2 (2582753219, 2582753223)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2582753219n);
    input.add32(2582753223n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint32) => ebool test 3 (2582753223, 2582753223)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2582753223n);
    input.add32(2582753223n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint32) => ebool test 4 (2582753223, 2582753219)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2582753223n);
    input.add32(2582753219n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint32) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457584003141191958595, 490528280)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457584003141191958595n);
    input.add32(490528280n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint32) => ebool test 2 (490528276, 490528280)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(490528276n);
    input.add32(490528280n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint32) => ebool test 3 (490528280, 490528280)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(490528280n);
    input.add32(490528280n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint32) => ebool test 4 (490528280, 490528276)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(490528280n);
    input.add32(490528276n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "and" overload (euint256, euint64) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457578509407790489031, 18443073029085294521)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457578509407790489031n);
    input.add64(18443073029085294521n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(18437865656099949953n);
  });

  it('test operator "and" overload (euint256, euint64) => euint256 test 2 (18443073029085294517, 18443073029085294521)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18443073029085294517n);
    input.add64(18443073029085294521n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(18443073029085294513n);
  });

  it('test operator "and" overload (euint256, euint64) => euint256 test 3 (18443073029085294521, 18443073029085294521)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18443073029085294521n);
    input.add64(18443073029085294521n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(18443073029085294521n);
  });

  it('test operator "and" overload (euint256, euint64) => euint256 test 4 (18443073029085294521, 18443073029085294517)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18443073029085294521n);
    input.add64(18443073029085294517n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(18443073029085294513n);
  });

  it('test operator "or" overload (euint256, euint64) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457578506990293221077, 18441417659750452729)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457578506990293221077n);
    input.add64(18441417659750452729n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457578791793937350653n);
  });

  it('test operator "or" overload (euint256, euint64) => euint256 test 2 (18441417659750452725, 18441417659750452729)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18441417659750452725n);
    input.add64(18441417659750452729n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(18441417659750452733n);
  });

  it('test operator "or" overload (euint256, euint64) => euint256 test 3 (18441417659750452729, 18441417659750452729)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18441417659750452729n);
    input.add64(18441417659750452729n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(18441417659750452729n);
  });

  it('test operator "or" overload (euint256, euint64) => euint256 test 4 (18441417659750452729, 18441417659750452725)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18441417659750452729n);
    input.add64(18441417659750452725n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(18441417659750452733n);
  });

  it('test operator "xor" overload (euint256, euint64) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457576934057638146009, 18439292475766107501)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457576934057638146009n);
    input.add64(18439292475766107501n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039439138205648634692276n);
  });

  it('test operator "xor" overload (euint256, euint64) => euint256 test 2 (18439292475766107497, 18439292475766107501)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18439292475766107497n);
    input.add64(18439292475766107501n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint256, euint64) => euint256 test 3 (18439292475766107501, 18439292475766107501)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18439292475766107501n);
    input.add64(18439292475766107501n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint256, euint64) => euint256 test 4 (18439292475766107501, 18439292475766107497)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18439292475766107501n);
    input.add64(18439292475766107497n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint256, euint64) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457576720811276620705, 18439314764396135003)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457576720811276620705n);
    input.add64(18439314764396135003n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint64) => ebool test 2 (18439314764396134999, 18439314764396135003)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18439314764396134999n);
    input.add64(18439314764396135003n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint64) => ebool test 3 (18439314764396135003, 18439314764396135003)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18439314764396135003n);
    input.add64(18439314764396135003n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint64) => ebool test 4 (18439314764396135003, 18439314764396134999)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18439314764396135003n);
    input.add64(18439314764396134999n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint64) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457579447263034360831, 18443337145648011097)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457579447263034360831n);
    input.add64(18443337145648011097n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint64) => ebool test 2 (18443337145648011093, 18443337145648011097)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18443337145648011093n);
    input.add64(18443337145648011097n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint64) => ebool test 3 (18443337145648011097, 18443337145648011097)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18443337145648011097n);
    input.add64(18443337145648011097n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint64) => ebool test 4 (18443337145648011097, 18443337145648011093)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18443337145648011097n);
    input.add64(18443337145648011093n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "and" overload (euint256, euint128) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457580686385497644515, 340282366920938463463374164101776659755)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580686385497644515n);
    input.add128(340282366920938463463374164101776659755n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463371264925299119395n);
  });

  it('test operator "and" overload (euint256, euint128) => euint256 test 2 (340282366920938463463374164101776659751, 340282366920938463463374164101776659755)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463374164101776659751n);
    input.add128(340282366920938463463374164101776659755n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463374164101776659747n);
  });

  it('test operator "and" overload (euint256, euint128) => euint256 test 3 (340282366920938463463374164101776659755, 340282366920938463463374164101776659755)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463374164101776659755n);
    input.add128(340282366920938463463374164101776659755n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463374164101776659755n);
  });

  it('test operator "and" overload (euint256, euint128) => euint256 test 4 (340282366920938463463374164101776659755, 340282366920938463463374164101776659751)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463374164101776659755n);
    input.add128(340282366920938463463374164101776659751n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463374164101776659747n);
  });

  it('test operator "or" overload (euint256, euint128) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457577238314747462527, 340282366920938463463371266259629054135)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457577238314747462527n);
    input.add128(340282366920938463463371266259629054135n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457581742089134906367n);
  });

  it('test operator "or" overload (euint256, euint128) => euint256 test 2 (340282366920938463463371266259629054131, 340282366920938463463371266259629054135)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463371266259629054131n);
    input.add128(340282366920938463463371266259629054135n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463371266259629054135n);
  });

  it('test operator "or" overload (euint256, euint128) => euint256 test 3 (340282366920938463463371266259629054135, 340282366920938463463371266259629054135)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463371266259629054135n);
    input.add128(340282366920938463463371266259629054135n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463371266259629054135n);
  });

  it('test operator "or" overload (euint256, euint128) => euint256 test 4 (340282366920938463463371266259629054135, 340282366920938463463371266259629054131)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463371266259629054135n);
    input.add128(340282366920938463463371266259629054131n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(340282366920938463463371266259629054135n);
  });

  it('test operator "xor" overload (euint256, euint128) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457577798195009925611, 340282366920938463463374571967809222745)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457577798195009925611n);
    input.add128(340282366920938463463374571967809222745n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907852929702298719625575994215645663149148594n);
  });

  it('test operator "xor" overload (euint256, euint128) => euint256 test 2 (340282366920938463463374571967809222741, 340282366920938463463374571967809222745)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463374571967809222741n);
    input.add128(340282366920938463463374571967809222745n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint256, euint128) => euint256 test 3 (340282366920938463463374571967809222745, 340282366920938463463374571967809222745)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463374571967809222745n);
    input.add128(340282366920938463463374571967809222745n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint256, euint128) => euint256 test 4 (340282366920938463463374571967809222745, 340282366920938463463374571967809222741)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463374571967809222745n);
    input.add128(340282366920938463463374571967809222741n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint256, euint128) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457582467791309535211, 340282366920938463463372947321850231471)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582467791309535211n);
    input.add128(340282366920938463463372947321850231471n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint128) => ebool test 2 (340282366920938463463372947321850231467, 340282366920938463463372947321850231471)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463372947321850231467n);
    input.add128(340282366920938463463372947321850231471n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint128) => ebool test 3 (340282366920938463463372947321850231471, 340282366920938463463372947321850231471)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463372947321850231471n);
    input.add128(340282366920938463463372947321850231471n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint128) => ebool test 4 (340282366920938463463372947321850231471, 340282366920938463463372947321850231467)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463372947321850231471n);
    input.add128(340282366920938463463372947321850231467n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint128) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457577878911786785225, 340282366920938463463370044308930043819)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457577878911786785225n);
    input.add128(340282366920938463463370044308930043819n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint128) => ebool test 2 (340282366920938463463370044308930043815, 340282366920938463463370044308930043819)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463370044308930043815n);
    input.add128(340282366920938463463370044308930043819n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint128) => ebool test 3 (340282366920938463463370044308930043819, 340282366920938463463370044308930043819)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463370044308930043819n);
    input.add128(340282366920938463463370044308930043819n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint128) => ebool test 4 (340282366920938463463370044308930043819, 340282366920938463463370044308930043815)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463370044308930043819n);
    input.add128(340282366920938463463370044308930043815n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "and" overload (euint256, euint256) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457582101460475944925, 115792089237316195423570985008687907853269984665640564039457582679734091624845)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582101460475944925n);
    input.add256(115792089237316195423570985008687907853269984665640564039457582679734091624845n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457582046414987956621n);
  });

  it('test operator "and" overload (euint256, euint256) => euint256 test 2 (115792089237316195423570985008687907853269984665640564039457582101460475944921, 115792089237316195423570985008687907853269984665640564039457582101460475944925)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582101460475944921n);
    input.add256(115792089237316195423570985008687907853269984665640564039457582101460475944925n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457582101460475944921n);
  });

  it('test operator "and" overload (euint256, euint256) => euint256 test 3 (115792089237316195423570985008687907853269984665640564039457582101460475944925, 115792089237316195423570985008687907853269984665640564039457582101460475944925)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582101460475944925n);
    input.add256(115792089237316195423570985008687907853269984665640564039457582101460475944925n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457582101460475944925n);
  });

  it('test operator "and" overload (euint256, euint256) => euint256 test 4 (115792089237316195423570985008687907853269984665640564039457582101460475944925, 115792089237316195423570985008687907853269984665640564039457582101460475944921)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582101460475944925n);
    input.add256(115792089237316195423570985008687907853269984665640564039457582101460475944921n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457582101460475944921n);
  });

  it('test operator "or" overload (euint256, euint256) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457578952992100542531, 115792089237316195423570985008687907853269984665640564039457577487573591056359)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457578952992100542531n);
    input.add256(115792089237316195423570985008687907853269984665640564039457577487573591056359n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457579187497387032551n);
  });

  it('test operator "or" overload (euint256, euint256) => euint256 test 2 (115792089237316195423570985008687907853269984665640564039457577487573591056355, 115792089237316195423570985008687907853269984665640564039457577487573591056359)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457577487573591056355n);
    input.add256(115792089237316195423570985008687907853269984665640564039457577487573591056359n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457577487573591056359n);
  });

  it('test operator "or" overload (euint256, euint256) => euint256 test 3 (115792089237316195423570985008687907853269984665640564039457577487573591056359, 115792089237316195423570985008687907853269984665640564039457577487573591056359)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457577487573591056359n);
    input.add256(115792089237316195423570985008687907853269984665640564039457577487573591056359n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457577487573591056359n);
  });

  it('test operator "or" overload (euint256, euint256) => euint256 test 4 (115792089237316195423570985008687907853269984665640564039457577487573591056359, 115792089237316195423570985008687907853269984665640564039457577487573591056355)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457577487573591056359n);
    input.add256(115792089237316195423570985008687907853269984665640564039457577487573591056355n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457577487573591056359n);
  });

  it('test operator "xor" overload (euint256, euint256) => euint256 test 1 (115792089237316195423570985008687907853269984665640564039457582754593811973375, 115792089237316195423570985008687907853269984665640564039457580158011484295667)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582754593811973375n);
    input.add256(115792089237316195423570985008687907853269984665640564039457580158011484295667n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(2778002954229004n);
  });

  it('test operator "xor" overload (euint256, euint256) => euint256 test 2 (115792089237316195423570985008687907853269984665640564039457580158011484295663, 115792089237316195423570985008687907853269984665640564039457580158011484295667)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580158011484295663n);
    input.add256(115792089237316195423570985008687907853269984665640564039457580158011484295667n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(28n);
  });

  it('test operator "xor" overload (euint256, euint256) => euint256 test 3 (115792089237316195423570985008687907853269984665640564039457580158011484295667, 115792089237316195423570985008687907853269984665640564039457580158011484295667)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580158011484295667n);
    input.add256(115792089237316195423570985008687907853269984665640564039457580158011484295667n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint256, euint256) => euint256 test 4 (115792089237316195423570985008687907853269984665640564039457580158011484295667, 115792089237316195423570985008687907853269984665640564039457580158011484295663)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580158011484295667n);
    input.add256(115792089237316195423570985008687907853269984665640564039457580158011484295663n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract5.resEuint256());
    expect(res).to.equal(28n);
  });

  it('test operator "eq" overload (euint256, euint256) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457577950431207706183, 115792089237316195423570985008687907853269984665640564039457578582321357074857)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457577950431207706183n);
    input.add256(115792089237316195423570985008687907853269984665640564039457578582321357074857n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint256) => ebool test 2 (115792089237316195423570985008687907853269984665640564039457577950431207706179, 115792089237316195423570985008687907853269984665640564039457577950431207706183)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457577950431207706179n);
    input.add256(115792089237316195423570985008687907853269984665640564039457577950431207706183n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint256) => ebool test 3 (115792089237316195423570985008687907853269984665640564039457577950431207706183, 115792089237316195423570985008687907853269984665640564039457577950431207706183)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457577950431207706183n);
    input.add256(115792089237316195423570985008687907853269984665640564039457577950431207706183n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint256) => ebool test 4 (115792089237316195423570985008687907853269984665640564039457577950431207706183, 115792089237316195423570985008687907853269984665640564039457577950431207706179)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457577950431207706183n);
    input.add256(115792089237316195423570985008687907853269984665640564039457577950431207706179n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint256) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457580780936209039167, 115792089237316195423570985008687907853269984665640564039457578050955141567393)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580780936209039167n);
    input.add256(115792089237316195423570985008687907853269984665640564039457578050955141567393n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint256) => ebool test 2 (115792089237316195423570985008687907853269984665640564039457578050955141567389, 115792089237316195423570985008687907853269984665640564039457578050955141567393)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457578050955141567389n);
    input.add256(115792089237316195423570985008687907853269984665640564039457578050955141567393n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint256) => ebool test 3 (115792089237316195423570985008687907853269984665640564039457578050955141567393, 115792089237316195423570985008687907853269984665640564039457578050955141567393)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457578050955141567393n);
    input.add256(115792089237316195423570985008687907853269984665640564039457578050955141567393n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint256) => ebool test 4 (115792089237316195423570985008687907853269984665640564039457578050955141567393, 115792089237316195423570985008687907853269984665640564039457578050955141567389)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457578050955141567393n);
    input.add256(115792089237316195423570985008687907853269984665640564039457578050955141567389n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 1 (128, 7)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(128n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint8_uint8(encryptedAmount.handles[0], 7n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(135n);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 2 (119, 123)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(119n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint8_uint8(encryptedAmount.handles[0], 123n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(242n);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 3 (123, 123)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(123n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint8_uint8(encryptedAmount.handles[0], 123n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(246n);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 4 (123, 119)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(123n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint8_uint8(encryptedAmount.handles[0], 119n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(242n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 1 (181, 7)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(7n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint8_euint8(181n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(188n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 2 (119, 123)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(123n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint8_euint8(119n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(242n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 3 (123, 123)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(123n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint8_euint8(123n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(246n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 4 (123, 119)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(119n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint8_euint8(123n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(242n);
  });

  it('test operator "sub" overload (euint8, uint8) => euint8 test 1 (63, 63)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(63n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_euint8_uint8(encryptedAmount.handles[0], 63n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint8, uint8) => euint8 test 2 (63, 59)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(63n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_euint8_uint8(encryptedAmount.handles[0], 59n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(4n);
  });

  it('test operator "sub" overload (uint8, euint8) => euint8 test 1 (63, 63)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(63n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_uint8_euint8(63n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint8, euint8) => euint8 test 2 (63, 59)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(59n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_uint8_euint8(63n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 1 (10, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(10n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint8_uint8(encryptedAmount.handles[0], 9n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(90n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 2 (9, 10)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(9n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint8_uint8(encryptedAmount.handles[0], 10n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(90n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 3 (10, 10)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(10n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint8_uint8(encryptedAmount.handles[0], 10n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(100n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 4 (10, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(10n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint8_uint8(encryptedAmount.handles[0], 9n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(90n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 1 (9, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(9n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint8_euint8(9n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(81n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 2 (9, 10)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(10n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint8_euint8(9n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(90n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 3 (10, 10)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(10n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint8_euint8(10n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(100n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 4 (10, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(9n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint8_euint8(10n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(90n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 1 (84, 31)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(84n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint8_uint8(encryptedAmount.handles[0], 31n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(2n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 2 (58, 62)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(58n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint8_uint8(encryptedAmount.handles[0], 62n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 3 (62, 62)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(62n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint8_uint8(encryptedAmount.handles[0], 62n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 4 (62, 58)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(62n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint8_uint8(encryptedAmount.handles[0], 58n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 1 (123, 124)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(123n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint8_uint8(encryptedAmount.handles[0], 124n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(123n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 2 (20, 24)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(20n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint8_uint8(encryptedAmount.handles[0], 24n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(20n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 3 (24, 24)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(24n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint8_uint8(encryptedAmount.handles[0], 24n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 4 (24, 20)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(24n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint8_uint8(encryptedAmount.handles[0], 20n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(4n);
  });

  it('test operator "and" overload (euint8, uint8) => euint8 test 1 (112, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(112n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint8_uint8(encryptedAmount.handles[0], 5n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint8, uint8) => euint8 test 2 (47, 51)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(47n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint8_uint8(encryptedAmount.handles[0], 51n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(35n);
  });

  it('test operator "and" overload (euint8, uint8) => euint8 test 3 (51, 51)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(51n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint8_uint8(encryptedAmount.handles[0], 51n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(51n);
  });

  it('test operator "and" overload (euint8, uint8) => euint8 test 4 (51, 47)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(51n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint8_uint8(encryptedAmount.handles[0], 47n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(35n);
  });

  it('test operator "and" overload (uint8, euint8) => euint8 test 1 (152, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(5n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint8_euint8(152n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (uint8, euint8) => euint8 test 2 (47, 51)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(51n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint8_euint8(47n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(35n);
  });

  it('test operator "and" overload (uint8, euint8) => euint8 test 3 (51, 51)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(51n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint8_euint8(51n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(51n);
  });

  it('test operator "and" overload (uint8, euint8) => euint8 test 4 (51, 47)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(47n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint8_euint8(51n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(35n);
  });

  it('test operator "or" overload (euint8, uint8) => euint8 test 1 (11, 53)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(11n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint8_uint8(encryptedAmount.handles[0], 53n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(63n);
  });

  it('test operator "or" overload (euint8, uint8) => euint8 test 2 (7, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(7n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint8_uint8(encryptedAmount.handles[0], 11n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(15n);
  });

  it('test operator "or" overload (euint8, uint8) => euint8 test 3 (11, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(11n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint8_uint8(encryptedAmount.handles[0], 11n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(11n);
  });

  it('test operator "or" overload (euint8, uint8) => euint8 test 4 (11, 7)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(11n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint8_uint8(encryptedAmount.handles[0], 7n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(15n);
  });
});

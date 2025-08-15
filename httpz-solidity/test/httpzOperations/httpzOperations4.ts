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

describe('HTTPZ operations 4', function () {
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

  it('test operator "eq" overload (euint32, euint8) => ebool test 1 (2430283149, 209)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(2430283149n);
    input.add8(209n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint8) => ebool test 2 (205, 209)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(205n);
    input.add8(209n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint8) => ebool test 3 (209, 209)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(209n);
    input.add8(209n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, euint8) => ebool test 4 (209, 205)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(209n);
    input.add8(205n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint8) => ebool test 1 (2686083348, 63)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(2686083348n);
    input.add8(63n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint8) => ebool test 2 (59, 63)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(59n);
    input.add8(63n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint8) => ebool test 3 (63, 63)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(63n);
    input.add8(63n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint8) => ebool test 4 (63, 59)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(63n);
    input.add8(59n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint8) => ebool test 1 (263670972, 228)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(263670972n);
    input.add8(228n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint8) => ebool test 2 (224, 228)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(224n);
    input.add8(228n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint8) => ebool test 3 (228, 228)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(228n);
    input.add8(228n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint8) => ebool test 4 (228, 224)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(228n);
    input.add8(224n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint8) => ebool test 1 (3862878334, 248)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(3862878334n);
    input.add8(248n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint8) => ebool test 2 (244, 248)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(244n);
    input.add8(248n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint8) => ebool test 3 (248, 248)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(248n);
    input.add8(248n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint8) => ebool test 4 (248, 244)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(248n);
    input.add8(244n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint8) => ebool test 1 (2896488640, 67)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(2896488640n);
    input.add8(67n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint32, euint8) => ebool test 2 (63, 67)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(63n);
    input.add8(67n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint8) => ebool test 3 (67, 67)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(67n);
    input.add8(67n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint8) => ebool test 4 (67, 63)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(67n);
    input.add8(63n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint8) => ebool test 1 (1252022775, 149)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1252022775n);
    input.add8(149n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint8) => ebool test 2 (145, 149)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(145n);
    input.add8(149n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint8) => ebool test 3 (149, 149)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(149n);
    input.add8(149n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint8) => ebool test 4 (149, 145)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(149n);
    input.add8(145n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, euint8) => euint32 test 1 (3121312597, 25)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(3121312597n);
    input.add8(25n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(25n);
  });

  it('test operator "min" overload (euint32, euint8) => euint32 test 2 (21, 25)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(21n);
    input.add8(25n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(21n);
  });

  it('test operator "min" overload (euint32, euint8) => euint32 test 3 (25, 25)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(25n);
    input.add8(25n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(25n);
  });

  it('test operator "min" overload (euint32, euint8) => euint32 test 4 (25, 21)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(25n);
    input.add8(21n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(21n);
  });

  it('test operator "max" overload (euint32, euint8) => euint32 test 1 (541426758, 147)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(541426758n);
    input.add8(147n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(541426758n);
  });

  it('test operator "max" overload (euint32, euint8) => euint32 test 2 (143, 147)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(143n);
    input.add8(147n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(147n);
  });

  it('test operator "max" overload (euint32, euint8) => euint32 test 3 (147, 147)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(147n);
    input.add8(147n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(147n);
  });

  it('test operator "max" overload (euint32, euint8) => euint32 test 4 (147, 143)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(147n);
    input.add8(143n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(147n);
  });

  it('test operator "add" overload (euint32, euint16) => euint32 test 1 (48188, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(48188n);
    input.add16(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(48190n);
  });

  it('test operator "add" overload (euint32, euint16) => euint32 test 2 (1430, 1434)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1430n);
    input.add16(1434n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(2864n);
  });

  it('test operator "add" overload (euint32, euint16) => euint32 test 3 (1434, 1434)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1434n);
    input.add16(1434n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(2868n);
  });

  it('test operator "add" overload (euint32, euint16) => euint32 test 4 (1434, 1430)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1434n);
    input.add16(1430n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(2864n);
  });

  it('test operator "sub" overload (euint32, euint16) => euint32 test 1 (25921, 25921)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(25921n);
    input.add16(25921n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, euint16) => euint32 test 2 (25921, 25917)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(25921n);
    input.add16(25917n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint32, euint16) => euint32 test 1 (17891, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(17891n);
    input.add16(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(35782n);
  });

  it('test operator "mul" overload (euint32, euint16) => euint32 test 2 (204, 204)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(204n);
    input.add16(204n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(41616n);
  });

  it('test operator "mul" overload (euint32, euint16) => euint32 test 3 (204, 204)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(204n);
    input.add16(204n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(41616n);
  });

  it('test operator "mul" overload (euint32, euint16) => euint32 test 4 (204, 204)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(204n);
    input.add16(204n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(41616n);
  });

  it('test operator "and" overload (euint32, euint16) => euint32 test 1 (932677633, 12953)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(932677633n);
    input.add16(12953n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(1n);
  });

  it('test operator "and" overload (euint32, euint16) => euint32 test 2 (12949, 12953)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(12949n);
    input.add16(12953n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(12945n);
  });

  it('test operator "and" overload (euint32, euint16) => euint32 test 3 (12953, 12953)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(12953n);
    input.add16(12953n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(12953n);
  });

  it('test operator "and" overload (euint32, euint16) => euint32 test 4 (12953, 12949)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(12953n);
    input.add16(12949n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(12945n);
  });

  it('test operator "or" overload (euint32, euint16) => euint32 test 1 (470109511, 18385)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(470109511n);
    input.add16(18385n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(470110167n);
  });

  it('test operator "or" overload (euint32, euint16) => euint32 test 2 (18381, 18385)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(18381n);
    input.add16(18385n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(18397n);
  });

  it('test operator "or" overload (euint32, euint16) => euint32 test 3 (18385, 18385)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(18385n);
    input.add16(18385n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(18385n);
  });

  it('test operator "or" overload (euint32, euint16) => euint32 test 4 (18385, 18381)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(18385n);
    input.add16(18381n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(18397n);
  });

  it('test operator "xor" overload (euint32, euint16) => euint32 test 1 (2466084540, 19013)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(2466084540n);
    input.add16(19013n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(2466069753n);
  });

  it('test operator "xor" overload (euint32, euint16) => euint32 test 2 (19009, 19013)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(19009n);
    input.add16(19013n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint32, euint16) => euint32 test 3 (19013, 19013)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(19013n);
    input.add16(19013n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, euint16) => euint32 test 4 (19013, 19009)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(19013n);
    input.add16(19009n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint32, euint16) => ebool test 1 (4276076414, 56034)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(4276076414n);
    input.add16(56034n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint16) => ebool test 2 (56030, 56034)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(56030n);
    input.add16(56034n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint16) => ebool test 3 (56034, 56034)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(56034n);
    input.add16(56034n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, euint16) => ebool test 4 (56034, 56030)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(56034n);
    input.add16(56030n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint16) => ebool test 1 (2822804591, 21387)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(2822804591n);
    input.add16(21387n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint16) => ebool test 2 (21383, 21387)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(21383n);
    input.add16(21387n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint16) => ebool test 3 (21387, 21387)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(21387n);
    input.add16(21387n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint16) => ebool test 4 (21387, 21383)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(21387n);
    input.add16(21383n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint16) => ebool test 1 (3988094476, 47009)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(3988094476n);
    input.add16(47009n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint16) => ebool test 2 (47005, 47009)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(47005n);
    input.add16(47009n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint16) => ebool test 3 (47009, 47009)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(47009n);
    input.add16(47009n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint16) => ebool test 4 (47009, 47005)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(47009n);
    input.add16(47005n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint16) => ebool test 1 (2754761077, 59949)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(2754761077n);
    input.add16(59949n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint16) => ebool test 2 (59945, 59949)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(59945n);
    input.add16(59949n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint16) => ebool test 3 (59949, 59949)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(59949n);
    input.add16(59949n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint16) => ebool test 4 (59949, 59945)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(59949n);
    input.add16(59945n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint16) => ebool test 1 (1425400695, 55407)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1425400695n);
    input.add16(55407n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint32, euint16) => ebool test 2 (55403, 55407)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(55403n);
    input.add16(55407n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint16) => ebool test 3 (55407, 55407)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(55407n);
    input.add16(55407n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint16) => ebool test 4 (55407, 55403)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(55407n);
    input.add16(55403n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint16) => ebool test 1 (14619583, 25046)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(14619583n);
    input.add16(25046n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint16) => ebool test 2 (25042, 25046)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(25042n);
    input.add16(25046n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint16) => ebool test 3 (25046, 25046)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(25046n);
    input.add16(25046n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint16) => ebool test 4 (25046, 25042)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(25046n);
    input.add16(25042n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, euint16) => euint32 test 1 (1400163389, 60745)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1400163389n);
    input.add16(60745n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(60745n);
  });

  it('test operator "min" overload (euint32, euint16) => euint32 test 2 (60741, 60745)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(60741n);
    input.add16(60745n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(60741n);
  });

  it('test operator "min" overload (euint32, euint16) => euint32 test 3 (60745, 60745)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(60745n);
    input.add16(60745n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(60745n);
  });

  it('test operator "min" overload (euint32, euint16) => euint32 test 4 (60745, 60741)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(60745n);
    input.add16(60741n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(60741n);
  });

  it('test operator "max" overload (euint32, euint16) => euint32 test 1 (2631636576, 21551)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(2631636576n);
    input.add16(21551n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(2631636576n);
  });

  it('test operator "max" overload (euint32, euint16) => euint32 test 2 (21547, 21551)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(21547n);
    input.add16(21551n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(21551n);
  });

  it('test operator "max" overload (euint32, euint16) => euint32 test 3 (21551, 21551)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(21551n);
    input.add16(21551n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(21551n);
  });

  it('test operator "max" overload (euint32, euint16) => euint32 test 4 (21551, 21547)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(21551n);
    input.add16(21547n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint32_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(21551n);
  });

  it('test operator "add" overload (euint32, euint32) => euint32 test 1 (1242018350, 1428933180)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1242018350n);
    input.add32(1428933180n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(2670951530n);
  });

  it('test operator "add" overload (euint32, euint32) => euint32 test 2 (1242018348, 1242018350)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1242018348n);
    input.add32(1242018350n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(2484036698n);
  });

  it('test operator "add" overload (euint32, euint32) => euint32 test 3 (1242018350, 1242018350)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1242018350n);
    input.add32(1242018350n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(2484036700n);
  });

  it('test operator "add" overload (euint32, euint32) => euint32 test 4 (1242018350, 1242018348)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1242018350n);
    input.add32(1242018348n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(2484036698n);
  });

  it('test operator "sub" overload (euint32, euint32) => euint32 test 1 (1161954074, 1161954074)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1161954074n);
    input.add32(1161954074n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, euint32) => euint32 test 2 (1161954074, 1161954070)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1161954074n);
    input.add32(1161954070n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint32, euint32) => euint32 test 1 (46317, 62920)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(46317n);
    input.add32(62920n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(2914265640n);
  });

  it('test operator "mul" overload (euint32, euint32) => euint32 test 2 (46317, 46317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(46317n);
    input.add32(46317n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(2145264489n);
  });

  it('test operator "mul" overload (euint32, euint32) => euint32 test 3 (46317, 46317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(46317n);
    input.add32(46317n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(2145264489n);
  });

  it('test operator "mul" overload (euint32, euint32) => euint32 test 4 (46317, 46317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(46317n);
    input.add32(46317n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(2145264489n);
  });

  it('test operator "and" overload (euint32, euint32) => euint32 test 1 (2952207702, 646910328)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2952207702n);
    input.add32(646910328n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(646386000n);
  });

  it('test operator "and" overload (euint32, euint32) => euint32 test 2 (646910324, 646910328)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(646910324n);
    input.add32(646910328n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(646910320n);
  });

  it('test operator "and" overload (euint32, euint32) => euint32 test 3 (646910328, 646910328)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(646910328n);
    input.add32(646910328n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(646910328n);
  });

  it('test operator "and" overload (euint32, euint32) => euint32 test 4 (646910328, 646910324)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(646910328n);
    input.add32(646910324n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(646910320n);
  });

  it('test operator "or" overload (euint32, euint32) => euint32 test 1 (3558284063, 2115832284)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3558284063n);
    input.add32(2115832284n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(4263451615n);
  });

  it('test operator "or" overload (euint32, euint32) => euint32 test 2 (2115832280, 2115832284)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2115832280n);
    input.add32(2115832284n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(2115832284n);
  });

  it('test operator "or" overload (euint32, euint32) => euint32 test 3 (2115832284, 2115832284)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2115832284n);
    input.add32(2115832284n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(2115832284n);
  });

  it('test operator "or" overload (euint32, euint32) => euint32 test 4 (2115832284, 2115832280)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2115832284n);
    input.add32(2115832280n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(2115832284n);
  });

  it('test operator "xor" overload (euint32, euint32) => euint32 test 1 (186403240, 1488301108)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(186403240n);
    input.add32(1488301108n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(1403643292n);
  });

  it('test operator "xor" overload (euint32, euint32) => euint32 test 2 (186403236, 186403240)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(186403236n);
    input.add32(186403240n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint32, euint32) => euint32 test 3 (186403240, 186403240)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(186403240n);
    input.add32(186403240n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, euint32) => euint32 test 4 (186403240, 186403236)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(186403240n);
    input.add32(186403236n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint32, euint32) => ebool test 1 (450839166, 337072041)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(450839166n);
    input.add32(337072041n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint32) => ebool test 2 (337072037, 337072041)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(337072037n);
    input.add32(337072041n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint32) => ebool test 3 (337072041, 337072041)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(337072041n);
    input.add32(337072041n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, euint32) => ebool test 4 (337072041, 337072037)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(337072041n);
    input.add32(337072037n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint32) => ebool test 1 (2259379451, 4064473678)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2259379451n);
    input.add32(4064473678n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint32) => ebool test 2 (2259379447, 2259379451)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2259379447n);
    input.add32(2259379451n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint32) => ebool test 3 (2259379451, 2259379451)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2259379451n);
    input.add32(2259379451n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint32) => ebool test 4 (2259379451, 2259379447)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2259379451n);
    input.add32(2259379447n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint32) => ebool test 1 (3307007294, 2282677237)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3307007294n);
    input.add32(2282677237n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint32) => ebool test 2 (2282677233, 2282677237)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2282677233n);
    input.add32(2282677237n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint32) => ebool test 3 (2282677237, 2282677237)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2282677237n);
    input.add32(2282677237n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint32) => ebool test 4 (2282677237, 2282677233)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2282677237n);
    input.add32(2282677233n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint32) => ebool test 1 (1773019727, 1286260639)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1773019727n);
    input.add32(1286260639n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint32) => ebool test 2 (1286260635, 1286260639)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1286260635n);
    input.add32(1286260639n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint32) => ebool test 3 (1286260639, 1286260639)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1286260639n);
    input.add32(1286260639n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint32) => ebool test 4 (1286260639, 1286260635)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1286260639n);
    input.add32(1286260635n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint32) => ebool test 1 (3199171172, 4008587536)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3199171172n);
    input.add32(4008587536n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint32) => ebool test 2 (3199171168, 3199171172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3199171168n);
    input.add32(3199171172n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint32) => ebool test 3 (3199171172, 3199171172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3199171172n);
    input.add32(3199171172n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint32) => ebool test 4 (3199171172, 3199171168)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3199171172n);
    input.add32(3199171168n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint32) => ebool test 1 (3795916038, 2223119886)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3795916038n);
    input.add32(2223119886n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint32) => ebool test 2 (2223119882, 2223119886)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2223119882n);
    input.add32(2223119886n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint32) => ebool test 3 (2223119886, 2223119886)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2223119886n);
    input.add32(2223119886n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint32) => ebool test 4 (2223119886, 2223119882)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2223119886n);
    input.add32(2223119882n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, euint32) => euint32 test 1 (61479804, 4045684799)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(61479804n);
    input.add32(4045684799n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(61479804n);
  });

  it('test operator "min" overload (euint32, euint32) => euint32 test 2 (61479800, 61479804)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(61479800n);
    input.add32(61479804n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(61479800n);
  });

  it('test operator "min" overload (euint32, euint32) => euint32 test 3 (61479804, 61479804)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(61479804n);
    input.add32(61479804n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(61479804n);
  });

  it('test operator "min" overload (euint32, euint32) => euint32 test 4 (61479804, 61479800)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(61479804n);
    input.add32(61479800n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(61479800n);
  });

  it('test operator "max" overload (euint32, euint32) => euint32 test 1 (352738236, 329674406)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(352738236n);
    input.add32(329674406n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(352738236n);
  });

  it('test operator "max" overload (euint32, euint32) => euint32 test 2 (329674402, 329674406)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(329674402n);
    input.add32(329674406n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(329674406n);
  });

  it('test operator "max" overload (euint32, euint32) => euint32 test 3 (329674406, 329674406)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(329674406n);
    input.add32(329674406n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(329674406n);
  });

  it('test operator "max" overload (euint32, euint32) => euint32 test 4 (329674406, 329674402)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(329674406n);
    input.add32(329674402n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract3.resEuint32());
    expect(res).to.equal(329674406n);
  });

  it('test operator "add" overload (euint32, euint64) => euint64 test 1 (2, 4293256184)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2n);
    input.add64(4293256184n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4293256186n);
  });

  it('test operator "add" overload (euint32, euint64) => euint64 test 2 (1284723282, 1284723284)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1284723282n);
    input.add64(1284723284n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2569446566n);
  });

  it('test operator "add" overload (euint32, euint64) => euint64 test 3 (1284723284, 1284723284)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1284723284n);
    input.add64(1284723284n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2569446568n);
  });

  it('test operator "add" overload (euint32, euint64) => euint64 test 4 (1284723284, 1284723282)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1284723284n);
    input.add64(1284723282n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2569446566n);
  });

  it('test operator "sub" overload (euint32, euint64) => euint64 test 1 (3251165508, 3251165508)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3251165508n);
    input.add64(3251165508n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, euint64) => euint64 test 2 (3251165508, 3251165504)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3251165508n);
    input.add64(3251165504n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint32, euint64) => euint64 test 1 (2, 2146549821)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2n);
    input.add64(2146549821n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4293099642n);
  });

  it('test operator "mul" overload (euint32, euint64) => euint64 test 2 (58826, 58826)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(58826n);
    input.add64(58826n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(3460498276n);
  });

  it('test operator "mul" overload (euint32, euint64) => euint64 test 3 (58826, 58826)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(58826n);
    input.add64(58826n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(3460498276n);
  });

  it('test operator "mul" overload (euint32, euint64) => euint64 test 4 (58826, 58826)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(58826n);
    input.add64(58826n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(3460498276n);
  });

  it('test operator "and" overload (euint32, euint64) => euint64 test 1 (2053950749, 18444929389029341077)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2053950749n);
    input.add64(18444929389029341077n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1212187925n);
  });

  it('test operator "and" overload (euint32, euint64) => euint64 test 2 (2053950745, 2053950749)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2053950745n);
    input.add64(2053950749n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2053950745n);
  });

  it('test operator "and" overload (euint32, euint64) => euint64 test 3 (2053950749, 2053950749)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2053950749n);
    input.add64(2053950749n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2053950749n);
  });

  it('test operator "and" overload (euint32, euint64) => euint64 test 4 (2053950749, 2053950745)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2053950749n);
    input.add64(2053950745n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.and_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2053950745n);
  });

  it('test operator "or" overload (euint32, euint64) => euint64 test 1 (1689582187, 18438755573705076785)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1689582187n);
    input.add64(18438755573705076785n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18438755573705341563n);
  });

  it('test operator "or" overload (euint32, euint64) => euint64 test 2 (1689582183, 1689582187)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1689582183n);
    input.add64(1689582187n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1689582191n);
  });

  it('test operator "or" overload (euint32, euint64) => euint64 test 3 (1689582187, 1689582187)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1689582187n);
    input.add64(1689582187n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1689582187n);
  });

  it('test operator "or" overload (euint32, euint64) => euint64 test 4 (1689582187, 1689582183)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1689582187n);
    input.add64(1689582183n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.or_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1689582191n);
  });

  it('test operator "xor" overload (euint32, euint64) => euint64 test 1 (2308172212, 18442755904465975479)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2308172212n);
    input.add64(18442755904465975479n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18442755902193619203n);
  });

  it('test operator "xor" overload (euint32, euint64) => euint64 test 2 (2308172208, 2308172212)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2308172208n);
    input.add64(2308172212n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint32, euint64) => euint64 test 3 (2308172212, 2308172212)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2308172212n);
    input.add64(2308172212n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, euint64) => euint64 test 4 (2308172212, 2308172208)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2308172212n);
    input.add64(2308172208n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.xor_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint32, euint64) => ebool test 1 (4013007303, 18440828060244372737)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4013007303n);
    input.add64(18440828060244372737n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint64) => ebool test 2 (4013007299, 4013007303)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4013007299n);
    input.add64(4013007303n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint64) => ebool test 3 (4013007303, 4013007303)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4013007303n);
    input.add64(4013007303n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, euint64) => ebool test 4 (4013007303, 4013007299)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4013007303n);
    input.add64(4013007299n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.eq_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint64) => ebool test 1 (3134078157, 18443944503565673405)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3134078157n);
    input.add64(18443944503565673405n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint64) => ebool test 2 (3134078153, 3134078157)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3134078153n);
    input.add64(3134078157n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint64) => ebool test 3 (3134078157, 3134078157)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3134078157n);
    input.add64(3134078157n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint64) => ebool test 4 (3134078157, 3134078153)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3134078157n);
    input.add64(3134078153n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint64) => ebool test 1 (2960971506, 18439089005496223095)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2960971506n);
    input.add64(18439089005496223095n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint64) => ebool test 2 (2960971502, 2960971506)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2960971502n);
    input.add64(2960971506n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint64) => ebool test 3 (2960971506, 2960971506)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2960971506n);
    input.add64(2960971506n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint64) => ebool test 4 (2960971506, 2960971502)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2960971506n);
    input.add64(2960971502n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint64) => ebool test 1 (4046456675, 18440620000044957517)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4046456675n);
    input.add64(18440620000044957517n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint64) => ebool test 2 (4046456671, 4046456675)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4046456671n);
    input.add64(4046456675n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint64) => ebool test 3 (4046456675, 4046456675)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4046456675n);
    input.add64(4046456675n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint64) => ebool test 4 (4046456675, 4046456671)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(4046456675n);
    input.add64(4046456671n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint64) => ebool test 1 (1740377919, 18440577486764946919)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1740377919n);
    input.add64(18440577486764946919n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint64) => ebool test 2 (1740377915, 1740377919)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1740377915n);
    input.add64(1740377919n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint64) => ebool test 3 (1740377919, 1740377919)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1740377919n);
    input.add64(1740377919n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint64) => ebool test 4 (1740377919, 1740377915)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1740377919n);
    input.add64(1740377915n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint64) => ebool test 1 (3114462703, 18441166410922600223)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3114462703n);
    input.add64(18441166410922600223n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint64) => ebool test 2 (3114462699, 3114462703)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3114462699n);
    input.add64(3114462703n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint64) => ebool test 3 (3114462703, 3114462703)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3114462703n);
    input.add64(3114462703n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint64) => ebool test 4 (3114462703, 3114462699)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(3114462703n);
    input.add64(3114462699n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, euint64) => euint64 test 1 (2653187476, 18444485728015156755)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2653187476n);
    input.add64(18444485728015156755n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2653187476n);
  });

  it('test operator "min" overload (euint32, euint64) => euint64 test 2 (2653187472, 2653187476)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2653187472n);
    input.add64(2653187476n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2653187472n);
  });

  it('test operator "min" overload (euint32, euint64) => euint64 test 3 (2653187476, 2653187476)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2653187476n);
    input.add64(2653187476n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2653187476n);
  });

  it('test operator "min" overload (euint32, euint64) => euint64 test 4 (2653187476, 2653187472)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2653187476n);
    input.add64(2653187472n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2653187472n);
  });

  it('test operator "max" overload (euint32, euint64) => euint64 test 1 (380267933, 18445181803477848355)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(380267933n);
    input.add64(18445181803477848355n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18445181803477848355n);
  });

  it('test operator "max" overload (euint32, euint64) => euint64 test 2 (380267929, 380267933)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(380267929n);
    input.add64(380267933n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(380267933n);
  });

  it('test operator "max" overload (euint32, euint64) => euint64 test 3 (380267933, 380267933)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(380267933n);
    input.add64(380267933n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(380267933n);
  });

  it('test operator "max" overload (euint32, euint64) => euint64 test 4 (380267933, 380267929)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(380267933n);
    input.add64(380267929n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint32_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(380267933n);
  });

  it('test operator "add" overload (euint32, euint128) => euint128 test 1 (2, 2147483649)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2n);
    input.add128(2147483649n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(2147483651n);
  });

  it('test operator "add" overload (euint32, euint128) => euint128 test 2 (1694371234, 1694371238)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1694371234n);
    input.add128(1694371238n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(3388742472n);
  });

  it('test operator "add" overload (euint32, euint128) => euint128 test 3 (1694371238, 1694371238)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1694371238n);
    input.add128(1694371238n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(3388742476n);
  });

  it('test operator "add" overload (euint32, euint128) => euint128 test 4 (1694371238, 1694371234)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(1694371238n);
    input.add128(1694371234n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(3388742472n);
  });

  it('test operator "sub" overload (euint32, euint128) => euint128 test 1 (2747121994, 2747121994)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2747121994n);
    input.add128(2747121994n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, euint128) => euint128 test 2 (2747121994, 2747121990)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add32(2747121994n);
    input.add128(2747121990n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint32_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract3.resEuint128());
    expect(res).to.equal(4n);
  });
});

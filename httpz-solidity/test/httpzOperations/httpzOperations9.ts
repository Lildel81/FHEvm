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

describe('HTTPZ operations 9', function () {
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

  it('test operator "or" overload (uint8, euint8) => euint8 test 1 (182, 53)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(53n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint8_euint8(182n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(183n);
  });

  it('test operator "or" overload (uint8, euint8) => euint8 test 2 (7, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(11n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint8_euint8(7n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(15n);
  });

  it('test operator "or" overload (uint8, euint8) => euint8 test 3 (11, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(11n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint8_euint8(11n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(11n);
  });

  it('test operator "or" overload (uint8, euint8) => euint8 test 4 (11, 7)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(7n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint8_euint8(11n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(15n);
  });

  it('test operator "xor" overload (euint8, uint8) => euint8 test 1 (176, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(176n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint8_uint8(encryptedAmount.handles[0], 115n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(195n);
  });

  it('test operator "xor" overload (euint8, uint8) => euint8 test 2 (151, 155)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(151n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint8_uint8(encryptedAmount.handles[0], 155n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint8, uint8) => euint8 test 3 (155, 155)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(155n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint8_uint8(encryptedAmount.handles[0], 155n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint8, uint8) => euint8 test 4 (155, 151)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(155n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint8_uint8(encryptedAmount.handles[0], 151n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (uint8, euint8) => euint8 test 1 (181, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(115n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint8_euint8(181n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(198n);
  });

  it('test operator "xor" overload (uint8, euint8) => euint8 test 2 (151, 155)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(155n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint8_euint8(151n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (uint8, euint8) => euint8 test 3 (155, 155)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(155n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint8_euint8(155n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (uint8, euint8) => euint8 test 4 (155, 151)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(151n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint8_euint8(155n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 1 (189, 89)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(189n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint8_uint8(encryptedAmount.handles[0], 89n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 2 (184, 188)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(184n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint8_uint8(encryptedAmount.handles[0], 188n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 3 (188, 188)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(188n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint8_uint8(encryptedAmount.handles[0], 188n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 4 (188, 184)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(188n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint8_uint8(encryptedAmount.handles[0], 184n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 1 (62, 89)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(89n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint8_euint8(62n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 2 (184, 188)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(188n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint8_euint8(184n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 3 (188, 188)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(188n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint8_euint8(188n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 4 (188, 184)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(184n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint8_euint8(188n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 1 (104, 90)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(104n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint8_uint8(encryptedAmount.handles[0], 90n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 2 (100, 104)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(100n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint8_uint8(encryptedAmount.handles[0], 104n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 3 (104, 104)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(104n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint8_uint8(encryptedAmount.handles[0], 104n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 4 (104, 100)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(104n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint8_uint8(encryptedAmount.handles[0], 100n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 1 (165, 90)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(90n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint8_euint8(165n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 2 (100, 104)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(104n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint8_euint8(100n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 3 (104, 104)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(104n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint8_euint8(104n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 4 (104, 100)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(100n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint8_euint8(104n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 1 (119, 92)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(119n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint8_uint8(encryptedAmount.handles[0], 92n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 2 (111, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(111n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint8_uint8(encryptedAmount.handles[0], 115n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 3 (115, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(115n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint8_uint8(encryptedAmount.handles[0], 115n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 4 (115, 111)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(115n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint8_uint8(encryptedAmount.handles[0], 111n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 1 (123, 92)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(92n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint8_euint8(123n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 2 (111, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(115n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint8_euint8(111n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 3 (115, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(115n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint8_euint8(115n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 4 (115, 111)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(111n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint8_euint8(115n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 1 (72, 85)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(72n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint8_uint8(encryptedAmount.handles[0], 85n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 2 (1, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(1n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint8_uint8(encryptedAmount.handles[0], 5n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 3 (5, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(5n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint8_uint8(encryptedAmount.handles[0], 5n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 4 (5, 1)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(5n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint8_uint8(encryptedAmount.handles[0], 1n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 1 (195, 85)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(85n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint8_euint8(195n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 2 (1, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(5n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint8_euint8(1n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 3 (5, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(5n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint8_euint8(5n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 4 (5, 1)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(1n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint8_euint8(5n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 1 (50, 198)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(50n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint8_uint8(encryptedAmount.handles[0], 198n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 2 (46, 50)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(46n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint8_uint8(encryptedAmount.handles[0], 50n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 3 (50, 50)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(50n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint8_uint8(encryptedAmount.handles[0], 50n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 4 (50, 46)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(50n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint8_uint8(encryptedAmount.handles[0], 46n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 1 (42, 198)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(198n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint8_euint8(42n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 2 (46, 50)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(50n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint8_euint8(46n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 3 (50, 50)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(50n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint8_euint8(50n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 4 (50, 46)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(46n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint8_euint8(50n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 1 (60, 44)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(60n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint8_uint8(encryptedAmount.handles[0], 44n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 2 (56, 60)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(56n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint8_uint8(encryptedAmount.handles[0], 60n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 3 (60, 60)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(60n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint8_uint8(encryptedAmount.handles[0], 60n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 4 (60, 56)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(60n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint8_uint8(encryptedAmount.handles[0], 56n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 1 (50, 44)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(44n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint8_euint8(50n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 2 (56, 60)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(60n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint8_euint8(56n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 3 (60, 60)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(60n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint8_euint8(60n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 4 (60, 56)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(56n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint8_euint8(60n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 1 (96, 75)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(96n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint8_uint8(encryptedAmount.handles[0], 75n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(75n);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 2 (92, 96)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(92n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint8_uint8(encryptedAmount.handles[0], 96n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(92n);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 3 (96, 96)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(96n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint8_uint8(encryptedAmount.handles[0], 96n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(96n);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 4 (96, 92)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(96n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint8_uint8(encryptedAmount.handles[0], 92n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(92n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 1 (95, 75)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(75n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint8_euint8(95n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(75n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 2 (92, 96)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(96n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint8_euint8(92n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(92n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 3 (96, 96)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(96n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint8_euint8(96n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(96n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 4 (96, 92)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(92n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint8_euint8(96n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(92n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 1 (194, 10)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(194n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint8_uint8(encryptedAmount.handles[0], 10n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(194n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 2 (181, 185)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(181n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint8_uint8(encryptedAmount.handles[0], 185n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(185n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 3 (185, 185)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(185n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint8_uint8(encryptedAmount.handles[0], 185n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(185n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 4 (185, 181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(185n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint8_uint8(encryptedAmount.handles[0], 181n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(185n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 1 (14, 10)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(10n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint8_euint8(14n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(14n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 2 (181, 185)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(185n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint8_euint8(181n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(185n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 3 (185, 185)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(185n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint8_euint8(185n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(185n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 4 (185, 181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(181n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint8_euint8(185n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(185n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 1 (9951, 34700)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(9951n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint16_uint16(encryptedAmount.handles[0], 34700n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(44651n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 2 (9947, 9951)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(9947n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint16_uint16(encryptedAmount.handles[0], 9951n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(19898n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 3 (9951, 9951)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(9951n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint16_uint16(encryptedAmount.handles[0], 9951n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(19902n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 4 (9951, 9947)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(9951n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint16_uint16(encryptedAmount.handles[0], 9947n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(19898n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 1 (26210, 17351)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(17351n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint16_euint16(26210n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(43561n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 2 (9947, 9951)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(9951n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint16_euint16(9947n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(19898n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 3 (9951, 9951)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(9951n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint16_euint16(9951n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(19902n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 4 (9951, 9947)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(9947n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint16_euint16(9951n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(19898n);
  });

  it('test operator "sub" overload (euint16, uint16) => euint16 test 1 (37110, 37110)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(37110n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_euint16_uint16(encryptedAmount.handles[0], 37110n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, uint16) => euint16 test 2 (37110, 37106)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(37110n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_euint16_uint16(encryptedAmount.handles[0], 37106n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(4n);
  });

  it('test operator "sub" overload (uint16, euint16) => euint16 test 1 (37110, 37110)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(37110n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_uint16_euint16(37110n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint16, euint16) => euint16 test 2 (37110, 37106)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(37106n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_uint16_euint16(37110n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 1 (157, 165)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(157n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint16_uint16(encryptedAmount.handles[0], 165n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(25905n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 2 (162, 162)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(162n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint16_uint16(encryptedAmount.handles[0], 162n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(26244n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 3 (162, 162)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(162n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint16_uint16(encryptedAmount.handles[0], 162n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(26244n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 4 (162, 162)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(162n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint16_uint16(encryptedAmount.handles[0], 162n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(26244n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 1 (103, 165)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(165n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint16_euint16(103n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(16995n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 2 (162, 162)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(162n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint16_euint16(162n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(26244n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 3 (162, 162)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(162n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint16_euint16(162n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(26244n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 4 (162, 162)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(162n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint16_euint16(162n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(26244n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 1 (6215, 52850)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(6215n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint16_uint16(encryptedAmount.handles[0], 52850n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 2 (6211, 6215)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(6211n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint16_uint16(encryptedAmount.handles[0], 6215n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 3 (6215, 6215)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(6215n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint16_uint16(encryptedAmount.handles[0], 6215n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 4 (6215, 6211)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(6215n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint16_uint16(encryptedAmount.handles[0], 6211n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 1 (21779, 1557)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(21779n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint16_uint16(encryptedAmount.handles[0], 1557n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(1538n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 2 (20616, 20620)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(20616n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint16_uint16(encryptedAmount.handles[0], 20620n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(20616n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 3 (20620, 20620)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(20620n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint16_uint16(encryptedAmount.handles[0], 20620n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 4 (20620, 20616)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(20620n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint16_uint16(encryptedAmount.handles[0], 20616n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(4n);
  });

  it('test operator "and" overload (euint16, uint16) => euint16 test 1 (21099, 54695)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(21099n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint16_uint16(encryptedAmount.handles[0], 54695n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(20515n);
  });

  it('test operator "and" overload (euint16, uint16) => euint16 test 2 (21095, 21099)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(21095n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint16_uint16(encryptedAmount.handles[0], 21099n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(21091n);
  });

  it('test operator "and" overload (euint16, uint16) => euint16 test 3 (21099, 21099)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(21099n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint16_uint16(encryptedAmount.handles[0], 21099n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(21099n);
  });

  it('test operator "and" overload (euint16, uint16) => euint16 test 4 (21099, 21095)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(21099n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint16_uint16(encryptedAmount.handles[0], 21095n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(21091n);
  });

  it('test operator "and" overload (uint16, euint16) => euint16 test 1 (45969, 54695)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(54695n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint16_euint16(45969n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(37249n);
  });

  it('test operator "and" overload (uint16, euint16) => euint16 test 2 (21095, 21099)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(21099n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint16_euint16(21095n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(21091n);
  });

  it('test operator "and" overload (uint16, euint16) => euint16 test 3 (21099, 21099)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(21099n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint16_euint16(21099n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(21099n);
  });

  it('test operator "and" overload (uint16, euint16) => euint16 test 4 (21099, 21095)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(21095n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint16_euint16(21099n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(21091n);
  });

  it('test operator "or" overload (euint16, uint16) => euint16 test 1 (53408, 33339)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(53408n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint16_uint16(encryptedAmount.handles[0], 33339n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(53947n);
  });

  it('test operator "or" overload (euint16, uint16) => euint16 test 2 (33449, 33453)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(33449n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint16_uint16(encryptedAmount.handles[0], 33453n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(33453n);
  });

  it('test operator "or" overload (euint16, uint16) => euint16 test 3 (33453, 33453)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(33453n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint16_uint16(encryptedAmount.handles[0], 33453n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(33453n);
  });

  it('test operator "or" overload (euint16, uint16) => euint16 test 4 (33453, 33449)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(33453n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint16_uint16(encryptedAmount.handles[0], 33449n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(33453n);
  });

  it('test operator "or" overload (uint16, euint16) => euint16 test 1 (52246, 33339)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(33339n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint16_euint16(52246n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(52799n);
  });

  it('test operator "or" overload (uint16, euint16) => euint16 test 2 (33449, 33453)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(33453n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint16_euint16(33449n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(33453n);
  });

  it('test operator "or" overload (uint16, euint16) => euint16 test 3 (33453, 33453)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(33453n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint16_euint16(33453n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(33453n);
  });

  it('test operator "or" overload (uint16, euint16) => euint16 test 4 (33453, 33449)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(33449n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint16_euint16(33453n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(33453n);
  });

  it('test operator "xor" overload (euint16, uint16) => euint16 test 1 (15052, 18795)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15052n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint16_uint16(encryptedAmount.handles[0], 18795n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(29607n);
  });

  it('test operator "xor" overload (euint16, uint16) => euint16 test 2 (15048, 15052)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15048n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint16_uint16(encryptedAmount.handles[0], 15052n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint16, uint16) => euint16 test 3 (15052, 15052)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15052n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint16_uint16(encryptedAmount.handles[0], 15052n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, uint16) => euint16 test 4 (15052, 15048)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15052n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint16_uint16(encryptedAmount.handles[0], 15048n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (uint16, euint16) => euint16 test 1 (63229, 18795)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(18795n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint16_euint16(63229n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(49046n);
  });

  it('test operator "xor" overload (uint16, euint16) => euint16 test 2 (15048, 15052)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(15052n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint16_euint16(15048n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (uint16, euint16) => euint16 test 3 (15052, 15052)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(15052n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint16_euint16(15052n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (uint16, euint16) => euint16 test 4 (15052, 15048)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(15048n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint16_euint16(15052n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 1 (59955, 20162)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(59955n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint16_uint16(encryptedAmount.handles[0], 20162n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 2 (44253, 44257)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(44253n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint16_uint16(encryptedAmount.handles[0], 44257n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 3 (44257, 44257)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(44257n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint16_uint16(encryptedAmount.handles[0], 44257n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 4 (44257, 44253)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(44257n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint16_uint16(encryptedAmount.handles[0], 44253n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 1 (9376, 20162)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(20162n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint16_euint16(9376n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 2 (44253, 44257)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(44257n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint16_euint16(44253n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 3 (44257, 44257)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(44257n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint16_euint16(44257n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 4 (44257, 44253)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(44253n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint16_euint16(44257n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 1 (16119, 15342)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(16119n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint16_uint16(encryptedAmount.handles[0], 15342n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 2 (8052, 8056)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(8052n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint16_uint16(encryptedAmount.handles[0], 8056n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 3 (8056, 8056)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(8056n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint16_uint16(encryptedAmount.handles[0], 8056n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 4 (8056, 8052)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(8056n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint16_uint16(encryptedAmount.handles[0], 8052n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 1 (5885, 15342)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(15342n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint16_euint16(5885n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 2 (8052, 8056)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(8056n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint16_euint16(8052n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 3 (8056, 8056)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(8056n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint16_euint16(8056n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 4 (8056, 8052)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(8052n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint16_euint16(8056n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 1 (56381, 18528)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(56381n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint16_uint16(encryptedAmount.handles[0], 18528n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 2 (44168, 44172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(44168n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint16_uint16(encryptedAmount.handles[0], 44172n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 3 (44172, 44172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(44172n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint16_uint16(encryptedAmount.handles[0], 44172n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 4 (44172, 44168)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(44172n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint16_uint16(encryptedAmount.handles[0], 44168n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 1 (2054, 18528)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(18528n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint16_euint16(2054n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 2 (44168, 44172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(44172n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint16_euint16(44168n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 3 (44172, 44172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(44172n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint16_euint16(44172n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 4 (44172, 44168)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(44168n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint16_euint16(44172n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 1 (25003, 12740)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(25003n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint16_uint16(encryptedAmount.handles[0], 12740n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 2 (24999, 25003)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(24999n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint16_uint16(encryptedAmount.handles[0], 25003n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 3 (25003, 25003)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(25003n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint16_uint16(encryptedAmount.handles[0], 25003n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 4 (25003, 24999)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(25003n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint16_uint16(encryptedAmount.handles[0], 24999n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 1 (58911, 12740)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(12740n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint16_euint16(58911n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 2 (24999, 25003)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(25003n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint16_euint16(24999n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 3 (25003, 25003)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(25003n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint16_euint16(25003n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 4 (25003, 24999)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(24999n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint16_euint16(25003n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 1 (3371, 12584)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(3371n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint16_uint16(encryptedAmount.handles[0], 12584n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 2 (3367, 3371)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(3367n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint16_uint16(encryptedAmount.handles[0], 3371n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 3 (3371, 3371)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(3371n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint16_uint16(encryptedAmount.handles[0], 3371n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 4 (3371, 3367)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(3371n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint16_uint16(encryptedAmount.handles[0], 3367n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 1 (57991, 12584)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(12584n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint16_euint16(57991n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 2 (3367, 3371)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(3371n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint16_euint16(3367n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 3 (3371, 3371)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(3371n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint16_euint16(3371n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 4 (3371, 3367)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(3367n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint16_euint16(3371n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 1 (1885, 9111)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(1885n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint16_uint16(encryptedAmount.handles[0], 9111n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 2 (1881, 1885)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(1881n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint16_uint16(encryptedAmount.handles[0], 1885n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 3 (1885, 1885)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(1885n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint16_uint16(encryptedAmount.handles[0], 1885n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 4 (1885, 1881)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(1885n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint16_uint16(encryptedAmount.handles[0], 1881n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 1 (48859, 9111)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(9111n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint16_euint16(48859n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 2 (1881, 1885)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(1885n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint16_euint16(1881n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 3 (1885, 1885)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(1885n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint16_euint16(1885n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 4 (1885, 1881)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(1881n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint16_euint16(1885n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 1 (45769, 47341)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(45769n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint16_uint16(encryptedAmount.handles[0], 47341n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(45769n);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 2 (11796, 11800)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(11796n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint16_uint16(encryptedAmount.handles[0], 11800n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(11796n);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 3 (11800, 11800)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(11800n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint16_uint16(encryptedAmount.handles[0], 11800n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(11800n);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 4 (11800, 11796)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(11800n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint16_uint16(encryptedAmount.handles[0], 11796n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(11796n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 1 (7648, 47341)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(47341n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint16_euint16(7648n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(7648n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 2 (11796, 11800)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(11800n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint16_euint16(11796n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(11796n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 3 (11800, 11800)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(11800n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint16_euint16(11800n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(11800n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 4 (11800, 11796)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(11796n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint16_euint16(11800n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(11796n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 1 (31121, 63511)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(31121n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint16_uint16(encryptedAmount.handles[0], 63511n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(63511n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 2 (31117, 31121)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(31117n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint16_uint16(encryptedAmount.handles[0], 31121n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(31121n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 3 (31121, 31121)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(31121n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint16_uint16(encryptedAmount.handles[0], 31121n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(31121n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 4 (31121, 31117)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add16(31121n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint16_uint16(encryptedAmount.handles[0], 31117n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(31121n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 1 (60504, 63511)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(63511n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint16_euint16(60504n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(63511n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 2 (31117, 31121)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(31121n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint16_euint16(31117n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(31121n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 3 (31121, 31121)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(31121n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint16_euint16(31121n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(31121n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 4 (31121, 31117)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add16(31117n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint16_euint16(31121n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract6.resEuint16());
    expect(res).to.equal(31121n);
  });

  it('test operator "add" overload (euint32, uint32) => euint32 test 1 (1242018350, 1763003117)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1242018350n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint32_uint32(
      encryptedAmount.handles[0],
      1763003117n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(3005021467n);
  });

  it('test operator "add" overload (euint32, uint32) => euint32 test 2 (1242018348, 1242018350)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1242018348n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint32_uint32(
      encryptedAmount.handles[0],
      1242018350n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2484036698n);
  });

  it('test operator "add" overload (euint32, uint32) => euint32 test 3 (1242018350, 1242018350)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1242018350n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint32_uint32(
      encryptedAmount.handles[0],
      1242018350n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2484036700n);
  });

  it('test operator "add" overload (euint32, uint32) => euint32 test 4 (1242018350, 1242018348)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1242018350n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint32_uint32(
      encryptedAmount.handles[0],
      1242018348n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2484036698n);
  });

  it('test operator "add" overload (uint32, euint32) => euint32 test 1 (434056900, 3526006233)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(3526006233n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint32_euint32(
      434056900n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(3960063133n);
  });

  it('test operator "add" overload (uint32, euint32) => euint32 test 2 (1242018348, 1242018350)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(1242018350n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint32_euint32(
      1242018348n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2484036698n);
  });

  it('test operator "add" overload (uint32, euint32) => euint32 test 3 (1242018350, 1242018350)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(1242018350n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint32_euint32(
      1242018350n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2484036700n);
  });

  it('test operator "add" overload (uint32, euint32) => euint32 test 4 (1242018350, 1242018348)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(1242018348n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint32_euint32(
      1242018350n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2484036698n);
  });

  it('test operator "sub" overload (euint32, uint32) => euint32 test 1 (1161954074, 1161954074)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1161954074n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_euint32_uint32(
      encryptedAmount.handles[0],
      1161954074n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, uint32) => euint32 test 2 (1161954074, 1161954070)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1161954074n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_euint32_uint32(
      encryptedAmount.handles[0],
      1161954070n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(4n);
  });
});

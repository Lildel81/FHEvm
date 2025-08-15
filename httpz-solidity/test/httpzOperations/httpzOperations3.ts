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

describe('HTTPZ operations 3', function () {
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

  it('test operator "sub" overload (euint16, euint32) => euint32 test 1 (21435, 21435)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(21435n);
    input.add32(21435n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, euint32) => euint32 test 2 (21435, 21431)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(21435n);
    input.add32(21431n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 1 (2, 24313)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2n);
    input.add32(24313n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(48626n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 2 (173, 173)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(173n);
    input.add32(173n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(29929n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 3 (173, 173)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(173n);
    input.add32(173n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(29929n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 4 (173, 173)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(173n);
    input.add32(173n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(29929n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 1 (40341, 3317331415)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(40341n);
    input.add32(3317331415n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(5525n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 2 (40337, 40341)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(40337n);
    input.add32(40341n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(40337n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 3 (40341, 40341)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(40341n);
    input.add32(40341n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(40341n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 4 (40341, 40337)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(40341n);
    input.add32(40337n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(40337n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 1 (40432, 3286663972)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(40432n);
    input.add32(3286663972n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(3286671348n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 2 (40428, 40432)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(40428n);
    input.add32(40432n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(40444n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 3 (40432, 40432)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(40432n);
    input.add32(40432n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(40432n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 4 (40432, 40428)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(40432n);
    input.add32(40428n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(40444n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 1 (50535, 3876238761)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(50535n);
    input.add32(3876238761n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(3876221134n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 2 (50531, 50535)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(50531n);
    input.add32(50535n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 3 (50535, 50535)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(50535n);
    input.add32(50535n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 4 (50535, 50531)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(50535n);
    input.add32(50531n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 1 (1139, 2642923387)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1139n);
    input.add32(2642923387n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 2 (1135, 1139)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1135n);
    input.add32(1139n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 3 (1139, 1139)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1139n);
    input.add32(1139n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 4 (1139, 1135)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1139n);
    input.add32(1135n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 1 (1119, 2942996859)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1119n);
    input.add32(2942996859n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 2 (1115, 1119)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1115n);
    input.add32(1119n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 3 (1119, 1119)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1119n);
    input.add32(1119n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 4 (1119, 1115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1119n);
    input.add32(1115n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 1 (19905, 2427194283)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19905n);
    input.add32(2427194283n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 2 (19901, 19905)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19901n);
    input.add32(19905n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 3 (19905, 19905)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19905n);
    input.add32(19905n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 4 (19905, 19901)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19905n);
    input.add32(19901n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 1 (7982, 3034176156)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(7982n);
    input.add32(3034176156n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 2 (7978, 7982)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(7978n);
    input.add32(7982n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 3 (7982, 7982)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(7982n);
    input.add32(7982n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 4 (7982, 7978)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(7982n);
    input.add32(7978n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 1 (6568, 3189750410)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6568n);
    input.add32(3189750410n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 2 (6564, 6568)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6564n);
    input.add32(6568n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 3 (6568, 6568)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6568n);
    input.add32(6568n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 4 (6568, 6564)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6568n);
    input.add32(6564n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 1 (55212, 2466627061)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(55212n);
    input.add32(2466627061n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 2 (55208, 55212)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(55208n);
    input.add32(55212n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 3 (55212, 55212)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(55212n);
    input.add32(55212n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 4 (55212, 55208)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(55212n);
    input.add32(55208n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 1 (34520, 865193298)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(34520n);
    input.add32(865193298n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(34520n);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 2 (34516, 34520)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(34516n);
    input.add32(34520n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(34516n);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 3 (34520, 34520)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(34520n);
    input.add32(34520n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(34520n);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 4 (34520, 34516)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(34520n);
    input.add32(34516n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(34516n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 1 (36234, 1608426620)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(36234n);
    input.add32(1608426620n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(1608426620n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 2 (36230, 36234)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(36230n);
    input.add32(36234n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(36234n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 3 (36234, 36234)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(36234n);
    input.add32(36234n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(36234n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 4 (36234, 36230)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(36234n);
    input.add32(36230n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(36234n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 1 (2, 65513)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2n);
    input.add64(65513n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(65515n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 2 (30648, 30650)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(30648n);
    input.add64(30650n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(61298n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 3 (30650, 30650)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(30650n);
    input.add64(30650n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(61300n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 4 (30650, 30648)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(30650n);
    input.add64(30648n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(61298n);
  });

  it('test operator "sub" overload (euint16, euint64) => euint64 test 1 (27872, 27872)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(27872n);
    input.add64(27872n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, euint64) => euint64 test 2 (27872, 27868)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(27872n);
    input.add64(27868n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 1 (2, 32754)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2n);
    input.add64(32754n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(65508n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 2 (216, 216)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(216n);
    input.add64(216n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(46656n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 3 (216, 216)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(216n);
    input.add64(216n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(46656n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 4 (216, 216)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(216n);
    input.add64(216n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(46656n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 1 (8991, 18444079973489395259)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(8991n);
    input.add64(18444079973489395259n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(539n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 2 (8987, 8991)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(8987n);
    input.add64(8991n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(8987n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 3 (8991, 8991)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(8991n);
    input.add64(8991n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(8991n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 4 (8991, 8987)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(8991n);
    input.add64(8987n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(8987n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 1 (5669, 18439011280313309221)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(5669n);
    input.add64(18439011280313309221n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(18439011280313310757n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 2 (5665, 5669)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(5665n);
    input.add64(5669n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(5669n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 3 (5669, 5669)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(5669n);
    input.add64(5669n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(5669n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 4 (5669, 5665)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(5669n);
    input.add64(5665n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(5669n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 1 (54595, 18438793836027239887)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(54595n);
    input.add64(18438793836027239887n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(18438793836027185292n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 2 (54591, 54595)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(54591n);
    input.add64(54595n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(124n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 3 (54595, 54595)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(54595n);
    input.add64(54595n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 4 (54595, 54591)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(54595n);
    input.add64(54591n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(124n);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 1 (17074, 18443748637310335975)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17074n);
    input.add64(18443748637310335975n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 2 (17070, 17074)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17070n);
    input.add64(17074n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 3 (17074, 17074)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17074n);
    input.add64(17074n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 4 (17074, 17070)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17074n);
    input.add64(17070n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 1 (19965, 18441509649466983603)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19965n);
    input.add64(18441509649466983603n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 2 (19961, 19965)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19961n);
    input.add64(19965n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 3 (19965, 19965)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19965n);
    input.add64(19965n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 4 (19965, 19961)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19965n);
    input.add64(19961n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 1 (58963, 18441320327885202339)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(58963n);
    input.add64(18441320327885202339n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 2 (58959, 58963)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(58959n);
    input.add64(58963n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 3 (58963, 58963)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(58963n);
    input.add64(58963n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 4 (58963, 58959)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(58963n);
    input.add64(58959n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 1 (17743, 18438885694258313347)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17743n);
    input.add64(18438885694258313347n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 2 (17739, 17743)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17739n);
    input.add64(17743n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 3 (17743, 17743)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17743n);
    input.add64(17743n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 4 (17743, 17739)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17743n);
    input.add64(17739n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 1 (12925, 18439582673929618103)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(12925n);
    input.add64(18439582673929618103n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 2 (12921, 12925)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(12921n);
    input.add64(12925n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 3 (12925, 12925)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(12925n);
    input.add64(12925n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 4 (12925, 12921)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(12925n);
    input.add64(12921n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 1 (29815, 18442320627186340787)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(29815n);
    input.add64(18442320627186340787n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 2 (29811, 29815)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(29811n);
    input.add64(29815n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 3 (29815, 29815)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(29815n);
    input.add64(29815n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 4 (29815, 29811)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(29815n);
    input.add64(29811n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 1 (26735, 18438441019646110189)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(26735n);
    input.add64(18438441019646110189n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(26735n);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 2 (26731, 26735)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(26731n);
    input.add64(26735n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(26731n);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 3 (26735, 26735)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(26735n);
    input.add64(26735n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(26735n);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 4 (26735, 26731)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(26735n);
    input.add64(26731n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(26731n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 1 (3840, 18443398222185600805)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(3840n);
    input.add64(18443398222185600805n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(18443398222185600805n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 2 (3836, 3840)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(3836n);
    input.add64(3840n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(3840n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 3 (3840, 3840)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(3840n);
    input.add64(3840n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(3840n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 4 (3840, 3836)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(3840n);
    input.add64(3836n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(3840n);
  });

  it('test operator "add" overload (euint16, euint128) => euint128 test 1 (2, 32769)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2n);
    input.add128(32769n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(32771n);
  });

  it('test operator "add" overload (euint16, euint128) => euint128 test 2 (26268, 26270)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(26268n);
    input.add128(26270n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(52538n);
  });

  it('test operator "add" overload (euint16, euint128) => euint128 test 3 (26270, 26270)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(26270n);
    input.add128(26270n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(52540n);
  });

  it('test operator "add" overload (euint16, euint128) => euint128 test 4 (26270, 26268)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(26270n);
    input.add128(26268n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(52538n);
  });

  it('test operator "sub" overload (euint16, euint128) => euint128 test 1 (37160, 37160)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(37160n);
    input.add128(37160n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, euint128) => euint128 test 2 (37160, 37156)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(37160n);
    input.add128(37156n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, euint128) => euint128 test 1 (2, 16385)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2n);
    input.add128(16385n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(32770n);
  });

  it('test operator "mul" overload (euint16, euint128) => euint128 test 2 (167, 167)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(167n);
    input.add128(167n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(27889n);
  });

  it('test operator "mul" overload (euint16, euint128) => euint128 test 3 (167, 167)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(167n);
    input.add128(167n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(27889n);
  });

  it('test operator "mul" overload (euint16, euint128) => euint128 test 4 (167, 167)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(167n);
    input.add128(167n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(27889n);
  });

  it('test operator "and" overload (euint16, euint128) => euint128 test 1 (49352, 340282366920938463463365740547448707757)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(49352n);
    input.add128(340282366920938463463365740547448707757n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(136n);
  });

  it('test operator "and" overload (euint16, euint128) => euint128 test 2 (49348, 49352)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(49348n);
    input.add128(49352n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(49344n);
  });

  it('test operator "and" overload (euint16, euint128) => euint128 test 3 (49352, 49352)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(49352n);
    input.add128(49352n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(49352n);
  });

  it('test operator "and" overload (euint16, euint128) => euint128 test 4 (49352, 49348)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(49352n);
    input.add128(49348n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(49344n);
  });

  it('test operator "or" overload (euint16, euint128) => euint128 test 1 (61750, 340282366920938463463367238793657041223)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(61750n);
    input.add128(340282366920938463463367238793657041223n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(340282366920938463463367238793657053559n);
  });

  it('test operator "or" overload (euint16, euint128) => euint128 test 2 (61746, 61750)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(61746n);
    input.add128(61750n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(61750n);
  });

  it('test operator "or" overload (euint16, euint128) => euint128 test 3 (61750, 61750)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(61750n);
    input.add128(61750n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(61750n);
  });

  it('test operator "or" overload (euint16, euint128) => euint128 test 4 (61750, 61746)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(61750n);
    input.add128(61746n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(61750n);
  });

  it('test operator "xor" overload (euint16, euint128) => euint128 test 1 (19775, 340282366920938463463367124865877831559)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19775n);
    input.add128(340282366920938463463367124865877831559n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(340282366920938463463367124865877811896n);
  });

  it('test operator "xor" overload (euint16, euint128) => euint128 test 2 (19771, 19775)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19771n);
    input.add128(19775n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint16, euint128) => euint128 test 3 (19775, 19775)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19775n);
    input.add128(19775n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint128) => euint128 test 4 (19775, 19771)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(19775n);
    input.add128(19771n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint16, euint128) => ebool test 1 (22597, 340282366920938463463369401252391965559)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(22597n);
    input.add128(340282366920938463463369401252391965559n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint128) => ebool test 2 (22593, 22597)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(22593n);
    input.add128(22597n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint128) => ebool test 3 (22597, 22597)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(22597n);
    input.add128(22597n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint128) => ebool test 4 (22597, 22593)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(22597n);
    input.add128(22593n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint128) => ebool test 1 (65160, 340282366920938463463370698663658875807)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(65160n);
    input.add128(340282366920938463463370698663658875807n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint128) => ebool test 2 (65156, 65160)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(65156n);
    input.add128(65160n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint128) => ebool test 3 (65160, 65160)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(65160n);
    input.add128(65160n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint128) => ebool test 4 (65160, 65156)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(65160n);
    input.add128(65156n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint128) => ebool test 1 (13325, 340282366920938463463369203360268766081)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(13325n);
    input.add128(340282366920938463463369203360268766081n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint128) => ebool test 2 (13321, 13325)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(13321n);
    input.add128(13325n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint128) => ebool test 3 (13325, 13325)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(13325n);
    input.add128(13325n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint128) => ebool test 4 (13325, 13321)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(13325n);
    input.add128(13321n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint128) => ebool test 1 (435, 340282366920938463463373222768645270541)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(435n);
    input.add128(340282366920938463463373222768645270541n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint128) => ebool test 2 (431, 435)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(431n);
    input.add128(435n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint128) => ebool test 3 (435, 435)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(435n);
    input.add128(435n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint128) => ebool test 4 (435, 431)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(435n);
    input.add128(431n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint128) => ebool test 1 (54579, 340282366920938463463366499571791450853)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(54579n);
    input.add128(340282366920938463463366499571791450853n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint128) => ebool test 2 (54575, 54579)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(54575n);
    input.add128(54579n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint128) => ebool test 3 (54579, 54579)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(54579n);
    input.add128(54579n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint128) => ebool test 4 (54579, 54575)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(54579n);
    input.add128(54575n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint128) => ebool test 1 (24979, 340282366920938463463372921720672400789)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(24979n);
    input.add128(340282366920938463463372921720672400789n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint128) => ebool test 2 (24975, 24979)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(24975n);
    input.add128(24979n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint128) => ebool test 3 (24979, 24979)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(24979n);
    input.add128(24979n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint128) => ebool test 4 (24979, 24975)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(24979n);
    input.add128(24975n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint128) => euint128 test 1 (17690, 340282366920938463463368617537253596947)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17690n);
    input.add128(340282366920938463463368617537253596947n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(17690n);
  });

  it('test operator "min" overload (euint16, euint128) => euint128 test 2 (17686, 17690)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17686n);
    input.add128(17690n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(17686n);
  });

  it('test operator "min" overload (euint16, euint128) => euint128 test 3 (17690, 17690)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17690n);
    input.add128(17690n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(17690n);
  });

  it('test operator "min" overload (euint16, euint128) => euint128 test 4 (17690, 17686)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17690n);
    input.add128(17686n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(17686n);
  });

  it('test operator "max" overload (euint16, euint128) => euint128 test 1 (55697, 340282366920938463463373323001137837831)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(55697n);
    input.add128(340282366920938463463373323001137837831n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(340282366920938463463373323001137837831n);
  });

  it('test operator "max" overload (euint16, euint128) => euint128 test 2 (55693, 55697)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(55693n);
    input.add128(55697n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(55697n);
  });

  it('test operator "max" overload (euint16, euint128) => euint128 test 3 (55697, 55697)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(55697n);
    input.add128(55697n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(55697n);
  });

  it('test operator "max" overload (euint16, euint128) => euint128 test 4 (55697, 55693)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(55697n);
    input.add128(55693n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(55697n);
  });

  it('test operator "and" overload (euint16, euint256) => euint256 test 1 (37530, 115792089237316195423570985008687907853269984665640564039457582287359290894361)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(37530n);
    input.add256(115792089237316195423570985008687907853269984665640564039457582287359290894361n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(32792n);
  });

  it('test operator "and" overload (euint16, euint256) => euint256 test 2 (37526, 37530)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(37526n);
    input.add256(37530n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(37522n);
  });

  it('test operator "and" overload (euint16, euint256) => euint256 test 3 (37530, 37530)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(37530n);
    input.add256(37530n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(37530n);
  });

  it('test operator "and" overload (euint16, euint256) => euint256 test 4 (37530, 37526)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(37530n);
    input.add256(37526n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(37522n);
  });

  it('test operator "or" overload (euint16, euint256) => euint256 test 1 (14450, 115792089237316195423570985008687907853269984665640564039457577340056214423799)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(14450n);
    input.add256(115792089237316195423570985008687907853269984665640564039457577340056214423799n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457577340056214436087n);
  });

  it('test operator "or" overload (euint16, euint256) => euint256 test 2 (14446, 14450)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(14446n);
    input.add256(14450n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(14462n);
  });

  it('test operator "or" overload (euint16, euint256) => euint256 test 3 (14450, 14450)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(14450n);
    input.add256(14450n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(14450n);
  });

  it('test operator "or" overload (euint16, euint256) => euint256 test 4 (14450, 14446)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(14450n);
    input.add256(14446n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(14462n);
  });

  it('test operator "xor" overload (euint16, euint256) => euint256 test 1 (45401, 115792089237316195423570985008687907853269984665640564039457578334243903033075)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(45401n);
    input.add256(115792089237316195423570985008687907853269984665640564039457578334243903033075n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457578334243903012778n);
  });

  it('test operator "xor" overload (euint16, euint256) => euint256 test 2 (45397, 45401)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(45397n);
    input.add256(45401n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint16, euint256) => euint256 test 3 (45401, 45401)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(45401n);
    input.add256(45401n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint256) => euint256 test 4 (45401, 45397)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(45401n);
    input.add256(45397n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract2.resEuint256());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint16, euint256) => ebool test 1 (63683, 115792089237316195423570985008687907853269984665640564039457581147793720845615)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(63683n);
    input.add256(115792089237316195423570985008687907853269984665640564039457581147793720845615n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint256) => ebool test 2 (63679, 63683)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(63679n);
    input.add256(63683n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint256) => ebool test 3 (63683, 63683)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(63683n);
    input.add256(63683n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint256) => ebool test 4 (63683, 63679)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(63683n);
    input.add256(63679n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint256) => ebool test 1 (49607, 115792089237316195423570985008687907853269984665640564039457583165278827461301)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(49607n);
    input.add256(115792089237316195423570985008687907853269984665640564039457583165278827461301n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint256) => ebool test 2 (49603, 49607)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(49603n);
    input.add256(49607n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint256) => ebool test 3 (49607, 49607)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(49607n);
    input.add256(49607n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint256) => ebool test 4 (49607, 49603)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(49607n);
    input.add256(49603n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "add" overload (euint32, euint8) => euint32 test 1 (238, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(238n);
    input.add8(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(240n);
  });

  it('test operator "add" overload (euint32, euint8) => euint32 test 2 (1, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1n);
    input.add8(5n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(6n);
  });

  it('test operator "add" overload (euint32, euint8) => euint32 test 3 (5, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(5n);
    input.add8(5n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint32, euint8) => euint32 test 4 (5, 1)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(5n);
    input.add8(1n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(6n);
  });

  it('test operator "sub" overload (euint32, euint8) => euint32 test 1 (184, 184)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(184n);
    input.add8(184n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, euint8) => euint32 test 2 (184, 180)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(184n);
    input.add8(180n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint32, euint8) => euint32 test 1 (65, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(65n);
    input.add8(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(130n);
  });

  it('test operator "mul" overload (euint32, euint8) => euint32 test 2 (12, 12)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(12n);
    input.add8(12n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(144n);
  });

  it('test operator "mul" overload (euint32, euint8) => euint32 test 3 (12, 12)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(12n);
    input.add8(12n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(144n);
  });

  it('test operator "mul" overload (euint32, euint8) => euint32 test 4 (12, 12)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(12n);
    input.add8(12n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(144n);
  });

  it('test operator "and" overload (euint32, euint8) => euint32 test 1 (3521031448, 230)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(3521031448n);
    input.add8(230n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint32, euint8) => euint32 test 2 (226, 230)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(226n);
    input.add8(230n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(226n);
  });

  it('test operator "and" overload (euint32, euint8) => euint32 test 3 (230, 230)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(230n);
    input.add8(230n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(230n);
  });

  it('test operator "and" overload (euint32, euint8) => euint32 test 4 (230, 226)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(230n);
    input.add8(226n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(226n);
  });

  it('test operator "or" overload (euint32, euint8) => euint32 test 1 (1038033552, 193)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(1038033552n);
    input.add8(193n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(1038033617n);
  });

  it('test operator "or" overload (euint32, euint8) => euint32 test 2 (189, 193)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(189n);
    input.add8(193n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(253n);
  });

  it('test operator "or" overload (euint32, euint8) => euint32 test 3 (193, 193)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(193n);
    input.add8(193n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(193n);
  });

  it('test operator "or" overload (euint32, euint8) => euint32 test 4 (193, 189)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(193n);
    input.add8(189n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(253n);
  });

  it('test operator "xor" overload (euint32, euint8) => euint32 test 1 (703902604, 229)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(703902604n);
    input.add8(229n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(703902569n);
  });

  it('test operator "xor" overload (euint32, euint8) => euint32 test 2 (225, 229)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(225n);
    input.add8(229n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint32, euint8) => euint32 test 3 (229, 229)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(229n);
    input.add8(229n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, euint8) => euint32 test 4 (229, 225)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add32(229n);
    input.add8(225n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint32_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(4n);
  });
});

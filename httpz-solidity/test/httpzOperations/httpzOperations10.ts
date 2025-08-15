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

describe('HTTPZ operations 10', function () {
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

  it('test operator "sub" overload (uint32, euint32) => euint32 test 1 (1161954074, 1161954074)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(1161954074n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_uint32_euint32(
      1161954074n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint32, euint32) => euint32 test 2 (1161954074, 1161954070)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(1161954070n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_uint32_euint32(
      1161954074n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint32, uint32) => euint32 test 1 (46317, 61305)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(46317n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint32_uint32(encryptedAmount.handles[0], 61305n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2839463685n);
  });

  it('test operator "mul" overload (euint32, uint32) => euint32 test 2 (46317, 46317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(46317n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint32_uint32(encryptedAmount.handles[0], 46317n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2145264489n);
  });

  it('test operator "mul" overload (euint32, uint32) => euint32 test 3 (46317, 46317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(46317n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint32_uint32(encryptedAmount.handles[0], 46317n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2145264489n);
  });

  it('test operator "mul" overload (euint32, uint32) => euint32 test 4 (46317, 46317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(46317n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint32_uint32(encryptedAmount.handles[0], 46317n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2145264489n);
  });

  it('test operator "mul" overload (uint32, euint32) => euint32 test 1 (64411, 61305)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(61305n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint32_euint32(64411n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(3948716355n);
  });

  it('test operator "mul" overload (uint32, euint32) => euint32 test 2 (46317, 46317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(46317n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint32_euint32(46317n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2145264489n);
  });

  it('test operator "mul" overload (uint32, euint32) => euint32 test 3 (46317, 46317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(46317n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint32_euint32(46317n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2145264489n);
  });

  it('test operator "mul" overload (uint32, euint32) => euint32 test 4 (46317, 46317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(46317n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint32_euint32(46317n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2145264489n);
  });

  it('test operator "div" overload (euint32, uint32) => euint32 test 1 (224780798, 3759519321)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(224780798n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint32_uint32(
      encryptedAmount.handles[0],
      3759519321n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint32, uint32) => euint32 test 2 (224780794, 224780798)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(224780794n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint32_uint32(
      encryptedAmount.handles[0],
      224780798n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint32, uint32) => euint32 test 3 (224780798, 224780798)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(224780798n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint32_uint32(
      encryptedAmount.handles[0],
      224780798n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint32, uint32) => euint32 test 4 (224780798, 224780794)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(224780798n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint32_uint32(
      encryptedAmount.handles[0],
      224780794n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint32, uint32) => euint32 test 1 (1541867054, 2568790555)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1541867054n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint32_uint32(
      encryptedAmount.handles[0],
      2568790555n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(1541867054n);
  });

  it('test operator "rem" overload (euint32, uint32) => euint32 test 2 (1541867050, 1541867054)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1541867050n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint32_uint32(
      encryptedAmount.handles[0],
      1541867054n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(1541867050n);
  });

  it('test operator "rem" overload (euint32, uint32) => euint32 test 3 (1541867054, 1541867054)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1541867054n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint32_uint32(
      encryptedAmount.handles[0],
      1541867054n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint32, uint32) => euint32 test 4 (1541867054, 1541867050)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1541867054n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint32_uint32(
      encryptedAmount.handles[0],
      1541867050n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "and" overload (euint32, uint32) => euint32 test 1 (2952207702, 1930696181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2952207702n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint32_uint32(
      encryptedAmount.handles[0],
      1930696181n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(588518740n);
  });

  it('test operator "and" overload (euint32, uint32) => euint32 test 2 (646910324, 646910328)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(646910324n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint32_uint32(
      encryptedAmount.handles[0],
      646910328n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(646910320n);
  });

  it('test operator "and" overload (euint32, uint32) => euint32 test 3 (646910328, 646910328)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(646910328n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint32_uint32(
      encryptedAmount.handles[0],
      646910328n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(646910328n);
  });

  it('test operator "and" overload (euint32, uint32) => euint32 test 4 (646910328, 646910324)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(646910328n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint32_uint32(
      encryptedAmount.handles[0],
      646910324n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(646910320n);
  });

  it('test operator "and" overload (uint32, euint32) => euint32 test 1 (2265318309, 1930696181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(1930696181n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint32_euint32(
      2265318309n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(50594213n);
  });

  it('test operator "and" overload (uint32, euint32) => euint32 test 2 (646910324, 646910328)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(646910328n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint32_euint32(
      646910324n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(646910320n);
  });

  it('test operator "and" overload (uint32, euint32) => euint32 test 3 (646910328, 646910328)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(646910328n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint32_euint32(
      646910328n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(646910328n);
  });

  it('test operator "and" overload (uint32, euint32) => euint32 test 4 (646910328, 646910324)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(646910324n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint32_euint32(
      646910328n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(646910320n);
  });

  it('test operator "or" overload (euint32, uint32) => euint32 test 1 (3558284063, 2986917424)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(3558284063n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint32_uint32(
      encryptedAmount.handles[0],
      2986917424n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(4129275711n);
  });

  it('test operator "or" overload (euint32, uint32) => euint32 test 2 (2115832280, 2115832284)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2115832280n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint32_uint32(
      encryptedAmount.handles[0],
      2115832284n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2115832284n);
  });

  it('test operator "or" overload (euint32, uint32) => euint32 test 3 (2115832284, 2115832284)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2115832284n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint32_uint32(
      encryptedAmount.handles[0],
      2115832284n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2115832284n);
  });

  it('test operator "or" overload (euint32, uint32) => euint32 test 4 (2115832284, 2115832280)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2115832284n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint32_uint32(
      encryptedAmount.handles[0],
      2115832280n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2115832284n);
  });

  it('test operator "or" overload (uint32, euint32) => euint32 test 1 (3817306719, 2986917424)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2986917424n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint32_euint32(
      3817306719n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(4086300287n);
  });

  it('test operator "or" overload (uint32, euint32) => euint32 test 2 (2115832280, 2115832284)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2115832284n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint32_euint32(
      2115832280n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2115832284n);
  });

  it('test operator "or" overload (uint32, euint32) => euint32 test 3 (2115832284, 2115832284)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2115832284n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint32_euint32(
      2115832284n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2115832284n);
  });

  it('test operator "or" overload (uint32, euint32) => euint32 test 4 (2115832284, 2115832280)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2115832280n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint32_euint32(
      2115832284n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2115832284n);
  });

  it('test operator "xor" overload (euint32, uint32) => euint32 test 1 (186403240, 2804856297)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(186403240n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint32_uint32(
      encryptedAmount.handles[0],
      2804856297n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2889022529n);
  });

  it('test operator "xor" overload (euint32, uint32) => euint32 test 2 (186403236, 186403240)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(186403236n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint32_uint32(
      encryptedAmount.handles[0],
      186403240n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint32, uint32) => euint32 test 3 (186403240, 186403240)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(186403240n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint32_uint32(
      encryptedAmount.handles[0],
      186403240n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, uint32) => euint32 test 4 (186403240, 186403236)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(186403240n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint32_uint32(
      encryptedAmount.handles[0],
      186403236n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (uint32, euint32) => euint32 test 1 (4103014934, 2804856297)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2804856297n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint32_euint32(
      4103014934n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(1403109375n);
  });

  it('test operator "xor" overload (uint32, euint32) => euint32 test 2 (186403236, 186403240)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(186403240n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint32_euint32(
      186403236n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (uint32, euint32) => euint32 test 3 (186403240, 186403240)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(186403240n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint32_euint32(
      186403240n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (uint32, euint32) => euint32 test 4 (186403240, 186403236)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(186403236n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint32_euint32(
      186403240n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint32, uint32) => ebool test 1 (450839166, 2936996675)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(450839166n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint32_uint32(
      encryptedAmount.handles[0],
      2936996675n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, uint32) => ebool test 2 (337072037, 337072041)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(337072037n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint32_uint32(
      encryptedAmount.handles[0],
      337072041n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, uint32) => ebool test 3 (337072041, 337072041)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(337072041n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint32_uint32(
      encryptedAmount.handles[0],
      337072041n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, uint32) => ebool test 4 (337072041, 337072037)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(337072041n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint32_uint32(
      encryptedAmount.handles[0],
      337072037n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint32, euint32) => ebool test 1 (2739233329, 2936996675)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2936996675n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint32_euint32(
      2739233329n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint32, euint32) => ebool test 2 (337072037, 337072041)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(337072041n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint32_euint32(
      337072037n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint32, euint32) => ebool test 3 (337072041, 337072041)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(337072041n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint32_euint32(
      337072041n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint32, euint32) => ebool test 4 (337072041, 337072037)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(337072037n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint32_euint32(
      337072041n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, uint32) => ebool test 1 (2259379451, 4129895173)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2259379451n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint32_uint32(
      encryptedAmount.handles[0],
      4129895173n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, uint32) => ebool test 2 (2259379447, 2259379451)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2259379447n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint32_uint32(
      encryptedAmount.handles[0],
      2259379451n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, uint32) => ebool test 3 (2259379451, 2259379451)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2259379451n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint32_uint32(
      encryptedAmount.handles[0],
      2259379451n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, uint32) => ebool test 4 (2259379451, 2259379447)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2259379451n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint32_uint32(
      encryptedAmount.handles[0],
      2259379447n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint32, euint32) => ebool test 1 (714311774, 4129895173)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(4129895173n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint32_euint32(
      714311774n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint32, euint32) => ebool test 2 (2259379447, 2259379451)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2259379451n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint32_euint32(
      2259379447n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint32, euint32) => ebool test 3 (2259379451, 2259379451)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2259379451n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint32_euint32(
      2259379451n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint32, euint32) => ebool test 4 (2259379451, 2259379447)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2259379447n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint32_euint32(
      2259379451n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, uint32) => ebool test 1 (3307007294, 1993452152)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(3307007294n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint32_uint32(
      encryptedAmount.handles[0],
      1993452152n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, uint32) => ebool test 2 (2282677233, 2282677237)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2282677233n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint32_uint32(
      encryptedAmount.handles[0],
      2282677237n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, uint32) => ebool test 3 (2282677237, 2282677237)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2282677237n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint32_uint32(
      encryptedAmount.handles[0],
      2282677237n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, uint32) => ebool test 4 (2282677237, 2282677233)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2282677237n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint32_uint32(
      encryptedAmount.handles[0],
      2282677233n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint32, euint32) => ebool test 1 (3216361603, 1993452152)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(1993452152n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint32_euint32(
      3216361603n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint32, euint32) => ebool test 2 (2282677233, 2282677237)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2282677237n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint32_euint32(
      2282677233n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint32, euint32) => ebool test 3 (2282677237, 2282677237)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2282677237n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint32_euint32(
      2282677237n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint32, euint32) => ebool test 4 (2282677237, 2282677233)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2282677233n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint32_euint32(
      2282677237n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, uint32) => ebool test 1 (1773019727, 318423152)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1773019727n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint32_uint32(
      encryptedAmount.handles[0],
      318423152n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, uint32) => ebool test 2 (1286260635, 1286260639)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1286260635n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint32_uint32(
      encryptedAmount.handles[0],
      1286260639n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, uint32) => ebool test 3 (1286260639, 1286260639)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1286260639n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint32_uint32(
      encryptedAmount.handles[0],
      1286260639n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, uint32) => ebool test 4 (1286260639, 1286260635)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(1286260639n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint32_uint32(
      encryptedAmount.handles[0],
      1286260635n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint32, euint32) => ebool test 1 (1381225496, 318423152)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(318423152n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint32_euint32(
      1381225496n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint32, euint32) => ebool test 2 (1286260635, 1286260639)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(1286260639n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint32_euint32(
      1286260635n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint32, euint32) => ebool test 3 (1286260639, 1286260639)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(1286260639n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint32_euint32(
      1286260639n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint32, euint32) => ebool test 4 (1286260639, 1286260635)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(1286260635n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint32_euint32(
      1286260639n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, uint32) => ebool test 1 (3199171172, 2446200455)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(3199171172n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint32_uint32(
      encryptedAmount.handles[0],
      2446200455n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint32, uint32) => ebool test 2 (3199171168, 3199171172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(3199171168n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint32_uint32(
      encryptedAmount.handles[0],
      3199171172n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, uint32) => ebool test 3 (3199171172, 3199171172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(3199171172n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint32_uint32(
      encryptedAmount.handles[0],
      3199171172n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, uint32) => ebool test 4 (3199171172, 3199171168)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(3199171172n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint32_uint32(
      encryptedAmount.handles[0],
      3199171168n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint32, euint32) => ebool test 1 (1774383886, 2446200455)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2446200455n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint32_euint32(
      1774383886n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint32, euint32) => ebool test 2 (3199171168, 3199171172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(3199171172n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint32_euint32(
      3199171168n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint32, euint32) => ebool test 3 (3199171172, 3199171172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(3199171172n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint32_euint32(
      3199171172n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint32, euint32) => ebool test 4 (3199171172, 3199171168)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(3199171168n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint32_euint32(
      3199171172n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, uint32) => ebool test 1 (3795916038, 756243096)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(3795916038n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint32_uint32(
      encryptedAmount.handles[0],
      756243096n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, uint32) => ebool test 2 (2223119882, 2223119886)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2223119882n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint32_uint32(
      encryptedAmount.handles[0],
      2223119886n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, uint32) => ebool test 3 (2223119886, 2223119886)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2223119886n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint32_uint32(
      encryptedAmount.handles[0],
      2223119886n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, uint32) => ebool test 4 (2223119886, 2223119882)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(2223119886n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint32_uint32(
      encryptedAmount.handles[0],
      2223119882n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint32, euint32) => ebool test 1 (1669019030, 756243096)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(756243096n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint32_euint32(
      1669019030n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint32, euint32) => ebool test 2 (2223119882, 2223119886)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2223119886n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint32_euint32(
      2223119882n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint32, euint32) => ebool test 3 (2223119886, 2223119886)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2223119886n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint32_euint32(
      2223119886n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint32, euint32) => ebool test 4 (2223119886, 2223119882)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(2223119882n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint32_euint32(
      2223119886n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, uint32) => euint32 test 1 (61479804, 3662089809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(61479804n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint32_uint32(
      encryptedAmount.handles[0],
      3662089809n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(61479804n);
  });

  it('test operator "min" overload (euint32, uint32) => euint32 test 2 (61479800, 61479804)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(61479800n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint32_uint32(
      encryptedAmount.handles[0],
      61479804n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(61479800n);
  });

  it('test operator "min" overload (euint32, uint32) => euint32 test 3 (61479804, 61479804)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(61479804n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint32_uint32(
      encryptedAmount.handles[0],
      61479804n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(61479804n);
  });

  it('test operator "min" overload (euint32, uint32) => euint32 test 4 (61479804, 61479800)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(61479804n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint32_uint32(
      encryptedAmount.handles[0],
      61479800n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(61479800n);
  });

  it('test operator "min" overload (uint32, euint32) => euint32 test 1 (2375557966, 3662089809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(3662089809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint32_euint32(
      2375557966n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2375557966n);
  });

  it('test operator "min" overload (uint32, euint32) => euint32 test 2 (61479800, 61479804)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(61479804n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint32_euint32(
      61479800n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(61479800n);
  });

  it('test operator "min" overload (uint32, euint32) => euint32 test 3 (61479804, 61479804)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(61479804n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint32_euint32(
      61479804n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(61479804n);
  });

  it('test operator "min" overload (uint32, euint32) => euint32 test 4 (61479804, 61479800)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(61479800n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint32_euint32(
      61479804n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(61479800n);
  });

  it('test operator "max" overload (euint32, uint32) => euint32 test 1 (352738236, 1792744153)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(352738236n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint32_uint32(
      encryptedAmount.handles[0],
      1792744153n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(1792744153n);
  });

  it('test operator "max" overload (euint32, uint32) => euint32 test 2 (329674402, 329674406)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(329674402n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint32_uint32(
      encryptedAmount.handles[0],
      329674406n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(329674406n);
  });

  it('test operator "max" overload (euint32, uint32) => euint32 test 3 (329674406, 329674406)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(329674406n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint32_uint32(
      encryptedAmount.handles[0],
      329674406n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(329674406n);
  });

  it('test operator "max" overload (euint32, uint32) => euint32 test 4 (329674406, 329674402)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add32(329674406n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint32_uint32(
      encryptedAmount.handles[0],
      329674402n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(329674406n);
  });

  it('test operator "max" overload (uint32, euint32) => euint32 test 1 (2988279703, 1792744153)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(1792744153n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint32_euint32(
      2988279703n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(2988279703n);
  });

  it('test operator "max" overload (uint32, euint32) => euint32 test 2 (329674402, 329674406)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(329674406n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint32_euint32(
      329674402n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(329674406n);
  });

  it('test operator "max" overload (uint32, euint32) => euint32 test 3 (329674406, 329674406)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(329674406n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint32_euint32(
      329674406n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(329674406n);
  });

  it('test operator "max" overload (uint32, euint32) => euint32 test 4 (329674406, 329674402)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add32(329674402n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint32_euint32(
      329674406n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract6.resEuint32());
    expect(res).to.equal(329674406n);
  });

  it('test operator "add" overload (euint64, uint64) => euint64 test 1 (9223113329441300250, 9219675359269315351)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(9223113329441300250n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint64_uint64(
      encryptedAmount.handles[0],
      9219675359269315351n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442788688710615601n);
  });

  it('test operator "add" overload (euint64, uint64) => euint64 test 2 (9221996424842141504, 9221996424842141506)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(9221996424842141504n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint64_uint64(
      encryptedAmount.handles[0],
      9221996424842141506n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443992849684283010n);
  });

  it('test operator "add" overload (euint64, uint64) => euint64 test 3 (9221996424842141506, 9221996424842141506)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(9221996424842141506n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint64_uint64(
      encryptedAmount.handles[0],
      9221996424842141506n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443992849684283012n);
  });

  it('test operator "add" overload (euint64, uint64) => euint64 test 4 (9221996424842141506, 9221996424842141504)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(9221996424842141506n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint64_uint64(
      encryptedAmount.handles[0],
      9221996424842141504n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443992849684283010n);
  });

  it('test operator "add" overload (uint64, euint64) => euint64 test 1 (9222860957487488320, 9219675359269315351)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(9219675359269315351n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint64_euint64(
      9222860957487488320n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442536316756803671n);
  });

  it('test operator "add" overload (uint64, euint64) => euint64 test 2 (9221996424842141504, 9221996424842141506)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(9221996424842141506n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint64_euint64(
      9221996424842141504n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443992849684283010n);
  });

  it('test operator "add" overload (uint64, euint64) => euint64 test 3 (9221996424842141506, 9221996424842141506)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(9221996424842141506n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint64_euint64(
      9221996424842141506n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443992849684283012n);
  });

  it('test operator "add" overload (uint64, euint64) => euint64 test 4 (9221996424842141506, 9221996424842141504)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(9221996424842141504n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint64_euint64(
      9221996424842141506n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443992849684283010n);
  });

  it('test operator "sub" overload (euint64, uint64) => euint64 test 1 (18442178218324738503, 18442178218324738503)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442178218324738503n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_euint64_uint64(
      encryptedAmount.handles[0],
      18442178218324738503n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, uint64) => euint64 test 2 (18442178218324738503, 18442178218324738499)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442178218324738503n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_euint64_uint64(
      encryptedAmount.handles[0],
      18442178218324738499n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "sub" overload (uint64, euint64) => euint64 test 1 (18442178218324738503, 18442178218324738503)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442178218324738503n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_uint64_euint64(
      18442178218324738503n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint64, euint64) => euint64 test 2 (18442178218324738503, 18442178218324738499)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442178218324738499n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_uint64_euint64(
      18442178218324738503n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, uint64) => euint64 test 1 (4294775341, 4294414494)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(4294775341n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint64_uint64(
      encryptedAmount.handles[0],
      4294414494n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443545472864192454n);
  });

  it('test operator "mul" overload (euint64, uint64) => euint64 test 2 (4293239201, 4293239201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(4293239201n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint64_uint64(
      encryptedAmount.handles[0],
      4293239201n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18431902837003118401n);
  });

  it('test operator "mul" overload (euint64, uint64) => euint64 test 3 (4293239201, 4293239201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(4293239201n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint64_uint64(
      encryptedAmount.handles[0],
      4293239201n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18431902837003118401n);
  });

  it('test operator "mul" overload (euint64, uint64) => euint64 test 4 (4293239201, 4293239201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(4293239201n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint64_uint64(
      encryptedAmount.handles[0],
      4293239201n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18431902837003118401n);
  });

  it('test operator "mul" overload (uint64, euint64) => euint64 test 1 (4293605571, 4294414494)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(4294414494n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint64_euint64(
      4293605571n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18438521995621546074n);
  });

  it('test operator "mul" overload (uint64, euint64) => euint64 test 2 (4293239201, 4293239201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(4293239201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint64_euint64(
      4293239201n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18431902837003118401n);
  });

  it('test operator "mul" overload (uint64, euint64) => euint64 test 3 (4293239201, 4293239201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(4293239201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint64_euint64(
      4293239201n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18431902837003118401n);
  });

  it('test operator "mul" overload (uint64, euint64) => euint64 test 4 (4293239201, 4293239201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(4293239201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint64_euint64(
      4293239201n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18431902837003118401n);
  });

  it('test operator "div" overload (euint64, uint64) => euint64 test 1 (18441607044218491019, 18438509265961979383)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18441607044218491019n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint64_uint64(
      encryptedAmount.handles[0],
      18438509265961979383n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint64, uint64) => euint64 test 2 (18441607044218491015, 18441607044218491019)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18441607044218491015n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint64_uint64(
      encryptedAmount.handles[0],
      18441607044218491019n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint64, uint64) => euint64 test 3 (18441607044218491019, 18441607044218491019)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18441607044218491019n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint64_uint64(
      encryptedAmount.handles[0],
      18441607044218491019n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint64, uint64) => euint64 test 4 (18441607044218491019, 18441607044218491015)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18441607044218491019n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint64_uint64(
      encryptedAmount.handles[0],
      18441607044218491015n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint64, uint64) => euint64 test 1 (18439732766046563129, 18443022778184757745)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439732766046563129n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint64_uint64(
      encryptedAmount.handles[0],
      18443022778184757745n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18439732766046563129n);
  });

  it('test operator "rem" overload (euint64, uint64) => euint64 test 2 (18439732766046563125, 18439732766046563129)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439732766046563125n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint64_uint64(
      encryptedAmount.handles[0],
      18439732766046563129n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18439732766046563125n);
  });

  it('test operator "rem" overload (euint64, uint64) => euint64 test 3 (18439732766046563129, 18439732766046563129)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439732766046563129n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint64_uint64(
      encryptedAmount.handles[0],
      18439732766046563129n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint64, uint64) => euint64 test 4 (18439732766046563129, 18439732766046563125)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439732766046563129n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint64_uint64(
      encryptedAmount.handles[0],
      18439732766046563125n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "and" overload (euint64, uint64) => euint64 test 1 (18442666764815067039, 18442473800289471539)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442666764815067039n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint64_uint64(
      encryptedAmount.handles[0],
      18442473800289471539n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442381439366349843n);
  });

  it('test operator "and" overload (euint64, uint64) => euint64 test 2 (18442666764815067035, 18442666764815067039)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442666764815067035n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint64_uint64(
      encryptedAmount.handles[0],
      18442666764815067039n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442666764815067035n);
  });

  it('test operator "and" overload (euint64, uint64) => euint64 test 3 (18442666764815067039, 18442666764815067039)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442666764815067039n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint64_uint64(
      encryptedAmount.handles[0],
      18442666764815067039n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442666764815067039n);
  });

  it('test operator "and" overload (euint64, uint64) => euint64 test 4 (18442666764815067039, 18442666764815067035)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442666764815067039n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint64_uint64(
      encryptedAmount.handles[0],
      18442666764815067035n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442666764815067035n);
  });

  it('test operator "and" overload (uint64, euint64) => euint64 test 1 (18446323535807229363, 18442473800289471539)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442473800289471539n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint64_euint64(
      18446323535807229363n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442381234684529715n);
  });

  it('test operator "and" overload (uint64, euint64) => euint64 test 2 (18442666764815067035, 18442666764815067039)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442666764815067039n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint64_euint64(
      18442666764815067035n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442666764815067035n);
  });

  it('test operator "and" overload (uint64, euint64) => euint64 test 3 (18442666764815067039, 18442666764815067039)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442666764815067039n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint64_euint64(
      18442666764815067039n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442666764815067039n);
  });

  it('test operator "and" overload (uint64, euint64) => euint64 test 4 (18442666764815067039, 18442666764815067035)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442666764815067035n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint64_euint64(
      18442666764815067039n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442666764815067035n);
  });

  it('test operator "or" overload (euint64, uint64) => euint64 test 1 (18445735974819154337, 18440007194022626547)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18445735974819154337n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint64_uint64(
      encryptedAmount.handles[0],
      18440007194022626547n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18445754478884670963n);
  });

  it('test operator "or" overload (euint64, uint64) => euint64 test 2 (18442193332453285179, 18442193332453285183)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442193332453285179n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint64_uint64(
      encryptedAmount.handles[0],
      18442193332453285183n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442193332453285183n);
  });

  it('test operator "or" overload (euint64, uint64) => euint64 test 3 (18442193332453285183, 18442193332453285183)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442193332453285183n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint64_uint64(
      encryptedAmount.handles[0],
      18442193332453285183n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442193332453285183n);
  });

  it('test operator "or" overload (euint64, uint64) => euint64 test 4 (18442193332453285183, 18442193332453285179)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442193332453285183n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint64_uint64(
      encryptedAmount.handles[0],
      18442193332453285179n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442193332453285183n);
  });

  it('test operator "or" overload (uint64, euint64) => euint64 test 1 (18440157411164125677, 18440007194022626547)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18440007194022626547n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint64_euint64(
      18440157411164125677n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18440157964699303423n);
  });

  it('test operator "or" overload (uint64, euint64) => euint64 test 2 (18442193332453285179, 18442193332453285183)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442193332453285183n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint64_euint64(
      18442193332453285179n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442193332453285183n);
  });

  it('test operator "or" overload (uint64, euint64) => euint64 test 3 (18442193332453285183, 18442193332453285183)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442193332453285183n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint64_euint64(
      18442193332453285183n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442193332453285183n);
  });

  it('test operator "or" overload (uint64, euint64) => euint64 test 4 (18442193332453285183, 18442193332453285179)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442193332453285179n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint64_euint64(
      18442193332453285183n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18442193332453285183n);
  });

  it('test operator "xor" overload (euint64, uint64) => euint64 test 1 (18445248156355964325, 18446609526845210903)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18445248156355964325n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint64_uint64(
      encryptedAmount.handles[0],
      18446609526845210903n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(1454489675803826n);
  });

  it('test operator "xor" overload (euint64, uint64) => euint64 test 2 (18441065997926380369, 18441065997926380373)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18441065997926380369n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint64_uint64(
      encryptedAmount.handles[0],
      18441065997926380373n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint64, uint64) => euint64 test 3 (18441065997926380373, 18441065997926380373)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18441065997926380373n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint64_uint64(
      encryptedAmount.handles[0],
      18441065997926380373n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, uint64) => euint64 test 4 (18441065997926380373, 18441065997926380369)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18441065997926380373n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint64_uint64(
      encryptedAmount.handles[0],
      18441065997926380369n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (uint64, euint64) => euint64 test 1 (18444056692343397265, 18446609526845210903)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18446609526845210903n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint64_euint64(
      18444056692343397265n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(2804261888547462n);
  });

  it('test operator "xor" overload (uint64, euint64) => euint64 test 2 (18441065997926380369, 18441065997926380373)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18441065997926380373n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint64_euint64(
      18441065997926380369n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (uint64, euint64) => euint64 test 3 (18441065997926380373, 18441065997926380373)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18441065997926380373n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint64_euint64(
      18441065997926380373n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (uint64, euint64) => euint64 test 4 (18441065997926380373, 18441065997926380369)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18441065997926380369n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint64_euint64(
      18441065997926380373n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint64, uint64) => ebool test 1 (18444409936822960975, 18446391792627553165)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18444409936822960975n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint64_uint64(
      encryptedAmount.handles[0],
      18446391792627553165n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, uint64) => ebool test 2 (18444409936822960971, 18444409936822960975)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18444409936822960971n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint64_uint64(
      encryptedAmount.handles[0],
      18444409936822960975n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, uint64) => ebool test 3 (18444409936822960975, 18444409936822960975)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18444409936822960975n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint64_uint64(
      encryptedAmount.handles[0],
      18444409936822960975n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, uint64) => ebool test 4 (18444409936822960975, 18444409936822960971)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18444409936822960975n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint64_uint64(
      encryptedAmount.handles[0],
      18444409936822960971n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint64, euint64) => ebool test 1 (18440132513080837245, 18446391792627553165)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18446391792627553165n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint64_euint64(
      18440132513080837245n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint64, euint64) => ebool test 2 (18444409936822960971, 18444409936822960975)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18444409936822960975n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint64_euint64(
      18444409936822960971n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint64, euint64) => ebool test 3 (18444409936822960975, 18444409936822960975)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18444409936822960975n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint64_euint64(
      18444409936822960975n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint64, euint64) => ebool test 4 (18444409936822960975, 18444409936822960971)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18444409936822960971n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint64_euint64(
      18444409936822960975n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, uint64) => ebool test 1 (18444961483213353507, 18438977385410861697)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18444961483213353507n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint64_uint64(
      encryptedAmount.handles[0],
      18438977385410861697n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, uint64) => ebool test 2 (18439621987364527243, 18439621987364527247)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439621987364527243n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint64_uint64(
      encryptedAmount.handles[0],
      18439621987364527247n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, uint64) => ebool test 3 (18439621987364527247, 18439621987364527247)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439621987364527247n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint64_uint64(
      encryptedAmount.handles[0],
      18439621987364527247n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, uint64) => ebool test 4 (18439621987364527247, 18439621987364527243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439621987364527247n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint64_uint64(
      encryptedAmount.handles[0],
      18439621987364527243n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint64, euint64) => ebool test 1 (18444785626464182737, 18438977385410861697)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18438977385410861697n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint64_euint64(
      18444785626464182737n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint64, euint64) => ebool test 2 (18439621987364527243, 18439621987364527247)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439621987364527247n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint64_euint64(
      18439621987364527243n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint64, euint64) => ebool test 3 (18439621987364527247, 18439621987364527247)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439621987364527247n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint64_euint64(
      18439621987364527247n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint64, euint64) => ebool test 4 (18439621987364527247, 18439621987364527243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439621987364527243n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint64_euint64(
      18439621987364527247n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, uint64) => ebool test 1 (18442415265994539497, 18443570938708606667)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442415265994539497n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint64_uint64(
      encryptedAmount.handles[0],
      18443570938708606667n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, uint64) => ebool test 2 (18442415265994539493, 18442415265994539497)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442415265994539493n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint64_uint64(
      encryptedAmount.handles[0],
      18442415265994539497n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, uint64) => ebool test 3 (18442415265994539497, 18442415265994539497)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442415265994539497n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint64_uint64(
      encryptedAmount.handles[0],
      18442415265994539497n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, uint64) => ebool test 4 (18442415265994539497, 18442415265994539493)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442415265994539497n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint64_uint64(
      encryptedAmount.handles[0],
      18442415265994539493n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 1 (18442937723010941675, 18443570938708606667)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18443570938708606667n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint64_euint64(
      18442937723010941675n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 2 (18442415265994539493, 18442415265994539497)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442415265994539497n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint64_euint64(
      18442415265994539493n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 3 (18442415265994539497, 18442415265994539497)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442415265994539497n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint64_euint64(
      18442415265994539497n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 4 (18442415265994539497, 18442415265994539493)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442415265994539493n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint64_euint64(
      18442415265994539497n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 1 (18440066032184287541, 18438129092017621751)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18440066032184287541n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint64_uint64(
      encryptedAmount.handles[0],
      18438129092017621751n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 2 (18440066032184287537, 18440066032184287541)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18440066032184287537n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint64_uint64(
      encryptedAmount.handles[0],
      18440066032184287541n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 3 (18440066032184287541, 18440066032184287541)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18440066032184287541n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint64_uint64(
      encryptedAmount.handles[0],
      18440066032184287541n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 4 (18440066032184287541, 18440066032184287537)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18440066032184287541n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint64_uint64(
      encryptedAmount.handles[0],
      18440066032184287537n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 1 (18438046966097721579, 18438129092017621751)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18438129092017621751n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint64_euint64(
      18438046966097721579n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 2 (18440066032184287537, 18440066032184287541)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18440066032184287541n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint64_euint64(
      18440066032184287537n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 3 (18440066032184287541, 18440066032184287541)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18440066032184287541n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint64_euint64(
      18440066032184287541n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 4 (18440066032184287541, 18440066032184287537)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18440066032184287537n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint64_euint64(
      18440066032184287541n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 1 (18442232465591365073, 18445972817487151877)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442232465591365073n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint64_uint64(
      encryptedAmount.handles[0],
      18445972817487151877n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 2 (18439936555266211177, 18439936555266211181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439936555266211177n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint64_uint64(
      encryptedAmount.handles[0],
      18439936555266211181n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 3 (18439936555266211181, 18439936555266211181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439936555266211181n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint64_uint64(
      encryptedAmount.handles[0],
      18439936555266211181n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 4 (18439936555266211181, 18439936555266211177)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439936555266211181n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint64_uint64(
      encryptedAmount.handles[0],
      18439936555266211177n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 1 (18438250172279525787, 18445972817487151877)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18445972817487151877n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint64_euint64(
      18438250172279525787n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 2 (18439936555266211177, 18439936555266211181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439936555266211181n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint64_euint64(
      18439936555266211177n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 3 (18439936555266211181, 18439936555266211181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439936555266211181n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint64_euint64(
      18439936555266211181n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 4 (18439936555266211181, 18439936555266211177)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439936555266211177n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint64_euint64(
      18439936555266211181n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 1 (18446579815032364931, 18446480072062037377)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18446579815032364931n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint64_uint64(
      encryptedAmount.handles[0],
      18446480072062037377n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 2 (18440462847260222573, 18440462847260222577)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18440462847260222573n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint64_uint64(
      encryptedAmount.handles[0],
      18440462847260222577n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 3 (18440462847260222577, 18440462847260222577)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18440462847260222577n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint64_uint64(
      encryptedAmount.handles[0],
      18440462847260222577n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 4 (18440462847260222577, 18440462847260222573)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18440462847260222577n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint64_uint64(
      encryptedAmount.handles[0],
      18440462847260222573n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });
});

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

describe('HTTPZ operations 6', function () {
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

  it('test operator "ne" overload (euint64, euint32) => ebool test 1 (18439784681261456857, 3449847902)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18439784681261456857n);
    input.add32(3449847902n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint32) => ebool test 2 (3449847898, 3449847902)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(3449847898n);
    input.add32(3449847902n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint32) => ebool test 3 (3449847902, 3449847902)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(3449847902n);
    input.add32(3449847902n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint32) => ebool test 4 (3449847902, 3449847898)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(3449847902n);
    input.add32(3449847898n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ne_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint32) => ebool test 1 (18444251488451180597, 2596134696)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18444251488451180597n);
    input.add32(2596134696n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint32) => ebool test 2 (2596134692, 2596134696)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(2596134692n);
    input.add32(2596134696n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint32) => ebool test 3 (2596134696, 2596134696)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(2596134696n);
    input.add32(2596134696n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint32) => ebool test 4 (2596134696, 2596134692)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(2596134696n);
    input.add32(2596134692n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.ge_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint32) => ebool test 1 (18445645826407864077, 1610602769)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18445645826407864077n);
    input.add32(1610602769n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint32) => ebool test 2 (1610602765, 1610602769)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1610602765n);
    input.add32(1610602769n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint32) => ebool test 3 (1610602769, 1610602769)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1610602769n);
    input.add32(1610602769n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint32) => ebool test 4 (1610602769, 1610602765)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1610602769n);
    input.add32(1610602765n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.gt_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint32) => ebool test 1 (18445406634486022147, 616999874)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18445406634486022147n);
    input.add32(616999874n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint64, euint32) => ebool test 2 (616999870, 616999874)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(616999870n);
    input.add32(616999874n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint32) => ebool test 3 (616999874, 616999874)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(616999874n);
    input.add32(616999874n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint32) => ebool test 4 (616999874, 616999870)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(616999874n);
    input.add32(616999870n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.le_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint32) => ebool test 1 (18441114807191824217, 3032578607)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18441114807191824217n);
    input.add32(3032578607n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint32) => ebool test 2 (3032578603, 3032578607)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(3032578603n);
    input.add32(3032578607n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, euint32) => ebool test 3 (3032578607, 3032578607)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(3032578607n);
    input.add32(3032578607n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint32) => ebool test 4 (3032578607, 3032578603)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(3032578607n);
    input.add32(3032578603n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.lt_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract3.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, euint32) => euint64 test 1 (18443940776113408019, 2777243848)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18443940776113408019n);
    input.add32(2777243848n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2777243848n);
  });

  it('test operator "min" overload (euint64, euint32) => euint64 test 2 (2777243844, 2777243848)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(2777243844n);
    input.add32(2777243848n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2777243844n);
  });

  it('test operator "min" overload (euint64, euint32) => euint64 test 3 (2777243848, 2777243848)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(2777243848n);
    input.add32(2777243848n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2777243848n);
  });

  it('test operator "min" overload (euint64, euint32) => euint64 test 4 (2777243848, 2777243844)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(2777243848n);
    input.add32(2777243844n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.min_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(2777243844n);
  });

  it('test operator "max" overload (euint64, euint32) => euint64 test 1 (18444629656333177455, 1728368749)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18444629656333177455n);
    input.add32(1728368749n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18444629656333177455n);
  });

  it('test operator "max" overload (euint64, euint32) => euint64 test 2 (1728368745, 1728368749)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1728368745n);
    input.add32(1728368749n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1728368749n);
  });

  it('test operator "max" overload (euint64, euint32) => euint64 test 3 (1728368749, 1728368749)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1728368749n);
    input.add32(1728368749n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1728368749n);
  });

  it('test operator "max" overload (euint64, euint32) => euint64 test 4 (1728368749, 1728368745)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(1728368749n);
    input.add32(1728368745n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.max_euint64_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(1728368749n);
  });

  it('test operator "add" overload (euint64, euint64) => euint64 test 1 (9223113329441300250, 9221996424842141506)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(9223113329441300250n);
    input.add64(9221996424842141506n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18445109754283441756n);
  });

  it('test operator "add" overload (euint64, euint64) => euint64 test 2 (9221996424842141504, 9221996424842141506)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(9221996424842141504n);
    input.add64(9221996424842141506n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18443992849684283010n);
  });

  it('test operator "add" overload (euint64, euint64) => euint64 test 3 (9221996424842141506, 9221996424842141506)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(9221996424842141506n);
    input.add64(9221996424842141506n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18443992849684283012n);
  });

  it('test operator "add" overload (euint64, euint64) => euint64 test 4 (9221996424842141506, 9221996424842141504)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(9221996424842141506n);
    input.add64(9221996424842141504n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.add_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18443992849684283010n);
  });

  it('test operator "sub" overload (euint64, euint64) => euint64 test 1 (18442178218324738503, 18442178218324738503)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18442178218324738503n);
    input.add64(18442178218324738503n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, euint64) => euint64 test 2 (18442178218324738503, 18442178218324738499)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(18442178218324738503n);
    input.add64(18442178218324738499n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.sub_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, euint64) => euint64 test 1 (4294775341, 4293239201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(4294775341n);
    input.add64(4293239201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18438497853469342541n);
  });

  it('test operator "mul" overload (euint64, euint64) => euint64 test 2 (4293239201, 4293239201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(4293239201n);
    input.add64(4293239201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18431902837003118401n);
  });

  it('test operator "mul" overload (euint64, euint64) => euint64 test 3 (4293239201, 4293239201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(4293239201n);
    input.add64(4293239201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18431902837003118401n);
  });

  it('test operator "mul" overload (euint64, euint64) => euint64 test 4 (4293239201, 4293239201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract3Address, this.signers.alice.address);
    input.add64(4293239201n);
    input.add64(4293239201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract3.mul_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract3.resEuint64());
    expect(res).to.equal(18431902837003118401n);
  });

  it('test operator "and" overload (euint64, euint64) => euint64 test 1 (18442666764815067039, 18446619149894795591)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442666764815067039n);
    input.add64(18446619149894795591n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18442665029588500743n);
  });

  it('test operator "and" overload (euint64, euint64) => euint64 test 2 (18442666764815067035, 18442666764815067039)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442666764815067035n);
    input.add64(18442666764815067039n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18442666764815067035n);
  });

  it('test operator "and" overload (euint64, euint64) => euint64 test 3 (18442666764815067039, 18442666764815067039)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442666764815067039n);
    input.add64(18442666764815067039n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18442666764815067039n);
  });

  it('test operator "and" overload (euint64, euint64) => euint64 test 4 (18442666764815067039, 18442666764815067035)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442666764815067039n);
    input.add64(18442666764815067035n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18442666764815067035n);
  });

  it('test operator "or" overload (euint64, euint64) => euint64 test 1 (18445735974819154337, 18442193332453285183)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445735974819154337n);
    input.add64(18442193332453285183n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18446743249075690943n);
  });

  it('test operator "or" overload (euint64, euint64) => euint64 test 2 (18442193332453285179, 18442193332453285183)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442193332453285179n);
    input.add64(18442193332453285183n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18442193332453285183n);
  });

  it('test operator "or" overload (euint64, euint64) => euint64 test 3 (18442193332453285183, 18442193332453285183)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442193332453285183n);
    input.add64(18442193332453285183n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18442193332453285183n);
  });

  it('test operator "or" overload (euint64, euint64) => euint64 test 4 (18442193332453285183, 18442193332453285179)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442193332453285183n);
    input.add64(18442193332453285179n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18442193332453285183n);
  });

  it('test operator "xor" overload (euint64, euint64) => euint64 test 1 (18445248156355964325, 18441065997926380373)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445248156355964325n);
    input.add64(18441065997926380373n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(4922141714226928n);
  });

  it('test operator "xor" overload (euint64, euint64) => euint64 test 2 (18441065997926380369, 18441065997926380373)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441065997926380369n);
    input.add64(18441065997926380373n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint64, euint64) => euint64 test 3 (18441065997926380373, 18441065997926380373)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441065997926380373n);
    input.add64(18441065997926380373n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, euint64) => euint64 test 4 (18441065997926380373, 18441065997926380369)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441065997926380373n);
    input.add64(18441065997926380369n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint64, euint64) => ebool test 1 (18444409936822960975, 18445782048659522875)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18444409936822960975n);
    input.add64(18445782048659522875n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint64) => ebool test 2 (18444409936822960971, 18444409936822960975)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18444409936822960971n);
    input.add64(18444409936822960975n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint64) => ebool test 3 (18444409936822960975, 18444409936822960975)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18444409936822960975n);
    input.add64(18444409936822960975n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, euint64) => ebool test 4 (18444409936822960975, 18444409936822960971)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18444409936822960975n);
    input.add64(18444409936822960971n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint64) => ebool test 1 (18444961483213353507, 18439621987364527247)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18444961483213353507n);
    input.add64(18439621987364527247n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint64) => ebool test 2 (18439621987364527243, 18439621987364527247)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439621987364527243n);
    input.add64(18439621987364527247n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint64) => ebool test 3 (18439621987364527247, 18439621987364527247)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439621987364527247n);
    input.add64(18439621987364527247n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint64) => ebool test 4 (18439621987364527247, 18439621987364527243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439621987364527247n);
    input.add64(18439621987364527243n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint64) => ebool test 1 (18442415265994539497, 18443256606984163353)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442415265994539497n);
    input.add64(18443256606984163353n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint64) => ebool test 2 (18442415265994539493, 18442415265994539497)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442415265994539493n);
    input.add64(18442415265994539497n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint64) => ebool test 3 (18442415265994539497, 18442415265994539497)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442415265994539497n);
    input.add64(18442415265994539497n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint64) => ebool test 4 (18442415265994539497, 18442415265994539493)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442415265994539497n);
    input.add64(18442415265994539493n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint64) => ebool test 1 (18440066032184287541, 18440941022640938243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440066032184287541n);
    input.add64(18440941022640938243n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint64) => ebool test 2 (18440066032184287537, 18440066032184287541)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440066032184287537n);
    input.add64(18440066032184287541n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint64) => ebool test 3 (18440066032184287541, 18440066032184287541)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440066032184287541n);
    input.add64(18440066032184287541n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint64) => ebool test 4 (18440066032184287541, 18440066032184287537)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440066032184287541n);
    input.add64(18440066032184287537n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint64) => ebool test 1 (18442232465591365073, 18439936555266211181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442232465591365073n);
    input.add64(18439936555266211181n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint64, euint64) => ebool test 2 (18439936555266211177, 18439936555266211181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439936555266211177n);
    input.add64(18439936555266211181n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint64) => ebool test 3 (18439936555266211181, 18439936555266211181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439936555266211181n);
    input.add64(18439936555266211181n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint64) => ebool test 4 (18439936555266211181, 18439936555266211177)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439936555266211181n);
    input.add64(18439936555266211177n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint64) => ebool test 1 (18446579815032364931, 18440462847260222577)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18446579815032364931n);
    input.add64(18440462847260222577n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint64) => ebool test 2 (18440462847260222573, 18440462847260222577)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440462847260222573n);
    input.add64(18440462847260222577n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, euint64) => ebool test 3 (18440462847260222577, 18440462847260222577)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440462847260222577n);
    input.add64(18440462847260222577n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint64) => ebool test 4 (18440462847260222577, 18440462847260222573)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440462847260222577n);
    input.add64(18440462847260222573n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, euint64) => euint64 test 1 (18444072938663818635, 18441771134430816103)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18444072938663818635n);
    input.add64(18441771134430816103n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18441771134430816103n);
  });

  it('test operator "min" overload (euint64, euint64) => euint64 test 2 (18441771134430816099, 18441771134430816103)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441771134430816099n);
    input.add64(18441771134430816103n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18441771134430816099n);
  });

  it('test operator "min" overload (euint64, euint64) => euint64 test 3 (18441771134430816103, 18441771134430816103)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441771134430816103n);
    input.add64(18441771134430816103n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18441771134430816103n);
  });

  it('test operator "min" overload (euint64, euint64) => euint64 test 4 (18441771134430816103, 18441771134430816099)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441771134430816103n);
    input.add64(18441771134430816099n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18441771134430816099n);
  });

  it('test operator "max" overload (euint64, euint64) => euint64 test 1 (18441422161262918217, 18443114674508030923)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441422161262918217n);
    input.add64(18443114674508030923n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18443114674508030923n);
  });

  it('test operator "max" overload (euint64, euint64) => euint64 test 2 (18441422161262918213, 18441422161262918217)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441422161262918213n);
    input.add64(18441422161262918217n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18441422161262918217n);
  });

  it('test operator "max" overload (euint64, euint64) => euint64 test 3 (18441422161262918217, 18441422161262918217)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441422161262918217n);
    input.add64(18441422161262918217n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18441422161262918217n);
  });

  it('test operator "max" overload (euint64, euint64) => euint64 test 4 (18441422161262918217, 18441422161262918213)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441422161262918217n);
    input.add64(18441422161262918213n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint64_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract4.resEuint64());
    expect(res).to.equal(18441422161262918217n);
  });

  it('test operator "add" overload (euint64, euint128) => euint128 test 1 (2, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(2n);
    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(9223372036854775811n);
  });

  it('test operator "add" overload (euint64, euint128) => euint128 test 2 (9221094206153767130, 9221094206153767132)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(9221094206153767130n);
    input.add128(9221094206153767132n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442188412307534262n);
  });

  it('test operator "add" overload (euint64, euint128) => euint128 test 3 (9221094206153767132, 9221094206153767132)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(9221094206153767132n);
    input.add128(9221094206153767132n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442188412307534264n);
  });

  it('test operator "add" overload (euint64, euint128) => euint128 test 4 (9221094206153767132, 9221094206153767130)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(9221094206153767132n);
    input.add128(9221094206153767130n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442188412307534262n);
  });

  it('test operator "sub" overload (euint64, euint128) => euint128 test 1 (18441945830904620671, 18441945830904620671)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441945830904620671n);
    input.add128(18441945830904620671n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, euint128) => euint128 test 2 (18441945830904620671, 18441945830904620667)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441945830904620671n);
    input.add128(18441945830904620667n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, euint128) => euint128 test 1 (2, 4611686018427387905)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(2n);
    input.add128(4611686018427387905n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(9223372036854775810n);
  });

  it('test operator "mul" overload (euint64, euint128) => euint128 test 2 (4293283397, 4293283397)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(4293283397n);
    input.add128(4293283397n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18432282326955859609n);
  });

  it('test operator "mul" overload (euint64, euint128) => euint128 test 3 (4293283397, 4293283397)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(4293283397n);
    input.add128(4293283397n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18432282326955859609n);
  });

  it('test operator "mul" overload (euint64, euint128) => euint128 test 4 (4293283397, 4293283397)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(4293283397n);
    input.add128(4293283397n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18432282326955859609n);
  });

  it('test operator "and" overload (euint64, euint128) => euint128 test 1 (18445091279712484027, 340282366920938463463371400229908953335)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445091279712484027n);
    input.add128(340282366920938463463371400229908953335n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442240474625390771n);
  });

  it('test operator "and" overload (euint64, euint128) => euint128 test 2 (18445091279712484023, 18445091279712484027)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445091279712484023n);
    input.add128(18445091279712484027n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18445091279712484019n);
  });

  it('test operator "and" overload (euint64, euint128) => euint128 test 3 (18445091279712484027, 18445091279712484027)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445091279712484027n);
    input.add128(18445091279712484027n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18445091279712484027n);
  });

  it('test operator "and" overload (euint64, euint128) => euint128 test 4 (18445091279712484027, 18445091279712484023)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445091279712484027n);
    input.add128(18445091279712484023n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18445091279712484019n);
  });

  it('test operator "or" overload (euint64, euint128) => euint128 test 1 (18446243533882049709, 340282366920938463463374089272167629895)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18446243533882049709n);
    input.add128(340282366920938463463374089272167629895n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463374107149639795951n);
  });

  it('test operator "or" overload (euint64, euint128) => euint128 test 2 (18446243533882049705, 18446243533882049709)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18446243533882049705n);
    input.add128(18446243533882049709n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18446243533882049709n);
  });

  it('test operator "or" overload (euint64, euint128) => euint128 test 3 (18446243533882049709, 18446243533882049709)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18446243533882049709n);
    input.add128(18446243533882049709n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18446243533882049709n);
  });

  it('test operator "or" overload (euint64, euint128) => euint128 test 4 (18446243533882049709, 18446243533882049705)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18446243533882049709n);
    input.add128(18446243533882049705n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18446243533882049709n);
  });

  it('test operator "xor" overload (euint64, euint128) => euint128 test 1 (18444348983000678205, 340282366920938463463369429291843056077)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18444348983000678205n);
    input.add128(340282366920938463463369429291843056077n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463444935435897110679280n);
  });

  it('test operator "xor" overload (euint64, euint128) => euint128 test 2 (18444348983000678201, 18444348983000678205)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18444348983000678201n);
    input.add128(18444348983000678205n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint64, euint128) => euint128 test 3 (18444348983000678205, 18444348983000678205)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18444348983000678205n);
    input.add128(18444348983000678205n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, euint128) => euint128 test 4 (18444348983000678205, 18444348983000678201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18444348983000678205n);
    input.add128(18444348983000678201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint64, euint128) => ebool test 1 (18445484634066620927, 340282366920938463463368923612467007995)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445484634066620927n);
    input.add128(340282366920938463463368923612467007995n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint128) => ebool test 2 (18445484634066620923, 18445484634066620927)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445484634066620923n);
    input.add128(18445484634066620927n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint128) => ebool test 3 (18445484634066620927, 18445484634066620927)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445484634066620927n);
    input.add128(18445484634066620927n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, euint128) => ebool test 4 (18445484634066620927, 18445484634066620923)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445484634066620927n);
    input.add128(18445484634066620923n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint128) => ebool test 1 (18441938070385987631, 340282366920938463463370918940866170845)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441938070385987631n);
    input.add128(340282366920938463463370918940866170845n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint128) => ebool test 2 (18441938070385987627, 18441938070385987631)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441938070385987627n);
    input.add128(18441938070385987631n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint128) => ebool test 3 (18441938070385987631, 18441938070385987631)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441938070385987631n);
    input.add128(18441938070385987631n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint128) => ebool test 4 (18441938070385987631, 18441938070385987627)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18441938070385987631n);
    input.add128(18441938070385987627n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint128) => ebool test 1 (18439130094273697351, 340282366920938463463373733846507383539)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439130094273697351n);
    input.add128(340282366920938463463373733846507383539n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint128) => ebool test 2 (18439130094273697347, 18439130094273697351)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439130094273697347n);
    input.add128(18439130094273697351n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint128) => ebool test 3 (18439130094273697351, 18439130094273697351)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439130094273697351n);
    input.add128(18439130094273697351n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint128) => ebool test 4 (18439130094273697351, 18439130094273697347)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439130094273697351n);
    input.add128(18439130094273697347n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint128) => ebool test 1 (18443523973148038793, 340282366920938463463374139218450636995)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18443523973148038793n);
    input.add128(340282366920938463463374139218450636995n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint128) => ebool test 2 (18443523973148038789, 18443523973148038793)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18443523973148038789n);
    input.add128(18443523973148038793n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint128) => ebool test 3 (18443523973148038793, 18443523973148038793)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18443523973148038793n);
    input.add128(18443523973148038793n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint128) => ebool test 4 (18443523973148038793, 18443523973148038789)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18443523973148038793n);
    input.add128(18443523973148038789n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint128) => ebool test 1 (18445087202248134335, 340282366920938463463366767903121892551)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445087202248134335n);
    input.add128(340282366920938463463366767903121892551n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint128) => ebool test 2 (18445087202248134331, 18445087202248134335)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445087202248134331n);
    input.add128(18445087202248134335n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint128) => ebool test 3 (18445087202248134335, 18445087202248134335)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445087202248134335n);
    input.add128(18445087202248134335n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint128) => ebool test 4 (18445087202248134335, 18445087202248134331)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18445087202248134335n);
    input.add128(18445087202248134331n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint128) => ebool test 1 (18442872914042631267, 340282366920938463463373118565993100587)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442872914042631267n);
    input.add128(340282366920938463463373118565993100587n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, euint128) => ebool test 2 (18442872914042631263, 18442872914042631267)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442872914042631263n);
    input.add128(18442872914042631267n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, euint128) => ebool test 3 (18442872914042631267, 18442872914042631267)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442872914042631267n);
    input.add128(18442872914042631267n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint128) => ebool test 4 (18442872914042631267, 18442872914042631263)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442872914042631267n);
    input.add128(18442872914042631263n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, euint128) => euint128 test 1 (18440000441157837373, 340282366920938463463371334318422654917)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440000441157837373n);
    input.add128(340282366920938463463371334318422654917n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440000441157837373n);
  });

  it('test operator "min" overload (euint64, euint128) => euint128 test 2 (18440000441157837369, 18440000441157837373)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440000441157837369n);
    input.add128(18440000441157837373n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440000441157837369n);
  });

  it('test operator "min" overload (euint64, euint128) => euint128 test 3 (18440000441157837373, 18440000441157837373)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440000441157837373n);
    input.add128(18440000441157837373n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440000441157837373n);
  });

  it('test operator "min" overload (euint64, euint128) => euint128 test 4 (18440000441157837373, 18440000441157837369)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440000441157837373n);
    input.add128(18440000441157837369n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440000441157837369n);
  });

  it('test operator "max" overload (euint64, euint128) => euint128 test 1 (18440011562813133543, 340282366920938463463372246211720378921)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440011562813133543n);
    input.add128(340282366920938463463372246211720378921n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463372246211720378921n);
  });

  it('test operator "max" overload (euint64, euint128) => euint128 test 2 (18440011562813133539, 18440011562813133543)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440011562813133539n);
    input.add128(18440011562813133543n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440011562813133543n);
  });

  it('test operator "max" overload (euint64, euint128) => euint128 test 3 (18440011562813133543, 18440011562813133543)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440011562813133543n);
    input.add128(18440011562813133543n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440011562813133543n);
  });

  it('test operator "max" overload (euint64, euint128) => euint128 test 4 (18440011562813133543, 18440011562813133539)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18440011562813133543n);
    input.add128(18440011562813133539n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint64_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18440011562813133543n);
  });

  it('test operator "and" overload (euint64, euint256) => euint256 test 1 (18442530068685749715, 115792089237316195423570985008687907853269984665640564039457580453689943262465)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442530068685749715n);
    input.add256(115792089237316195423570985008687907853269984665640564039457580453689943262465n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(18442530068375799041n);
  });

  it('test operator "and" overload (euint64, euint256) => euint256 test 2 (18442530068685749711, 18442530068685749715)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442530068685749711n);
    input.add256(18442530068685749715n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(18442530068685749699n);
  });

  it('test operator "and" overload (euint64, euint256) => euint256 test 3 (18442530068685749715, 18442530068685749715)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442530068685749715n);
    input.add256(18442530068685749715n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(18442530068685749715n);
  });

  it('test operator "and" overload (euint64, euint256) => euint256 test 4 (18442530068685749715, 18442530068685749711)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18442530068685749715n);
    input.add256(18442530068685749711n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(18442530068685749699n);
  });

  it('test operator "or" overload (euint64, euint256) => euint256 test 1 (18439896695655910873, 115792089237316195423570985008687907853269984665640564039457582245402440356535)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439896695655910873n);
    input.add256(115792089237316195423570985008687907853269984665640564039457582245402440356535n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039457583934630509928447n);
  });

  it('test operator "or" overload (euint64, euint256) => euint256 test 2 (18439896695655910869, 18439896695655910873)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439896695655910869n);
    input.add256(18439896695655910873n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(18439896695655910877n);
  });

  it('test operator "or" overload (euint64, euint256) => euint256 test 3 (18439896695655910873, 18439896695655910873)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439896695655910873n);
    input.add256(18439896695655910873n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(18439896695655910873n);
  });

  it('test operator "or" overload (euint64, euint256) => euint256 test 4 (18439896695655910873, 18439896695655910869)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18439896695655910873n);
    input.add256(18439896695655910869n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(18439896695655910877n);
  });

  it('test operator "xor" overload (euint64, euint256) => euint256 test 1 (18443797062473821243, 115792089237316195423570985008687907853269984665640564039457575468311756112823)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18443797062473821243n);
    input.add256(115792089237316195423570985008687907853269984665640564039457575468311756112823n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(115792089237316195423570985008687907853269984665640564039439142944957611814796n);
  });

  it('test operator "xor" overload (euint64, euint256) => euint256 test 2 (18443797062473821239, 18443797062473821243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18443797062473821239n);
    input.add256(18443797062473821243n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint64, euint256) => euint256 test 3 (18443797062473821243, 18443797062473821243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18443797062473821243n);
    input.add256(18443797062473821243n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, euint256) => euint256 test 4 (18443797062473821243, 18443797062473821239)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18443797062473821243n);
    input.add256(18443797062473821239n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt256(await this.contract4.resEuint256());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint64, euint256) => ebool test 1 (18438772797611992027, 115792089237316195423570985008687907853269984665640564039457581774195679922181)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18438772797611992027n);
    input.add256(115792089237316195423570985008687907853269984665640564039457581774195679922181n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint256) => ebool test 2 (18438772797611992023, 18438772797611992027)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18438772797611992023n);
    input.add256(18438772797611992027n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint256) => ebool test 3 (18438772797611992027, 18438772797611992027)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18438772797611992027n);
    input.add256(18438772797611992027n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, euint256) => ebool test 4 (18438772797611992027, 18438772797611992023)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18438772797611992027n);
    input.add256(18438772797611992023n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint256) => ebool test 1 (18438062540253773603, 115792089237316195423570985008687907853269984665640564039457575749023389447273)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18438062540253773603n);
    input.add256(115792089237316195423570985008687907853269984665640564039457575749023389447273n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint256) => ebool test 2 (18438062540253773599, 18438062540253773603)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18438062540253773599n);
    input.add256(18438062540253773603n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint256) => ebool test 3 (18438062540253773603, 18438062540253773603)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18438062540253773603n);
    input.add256(18438062540253773603n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint256) => ebool test 4 (18438062540253773603, 18438062540253773599)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add64(18438062540253773603n);
    input.add256(18438062540253773599n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint64_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "add" overload (euint128, euint8) => euint128 test 1 (129, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(129n);
    input.add8(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(131n);
  });

  it('test operator "add" overload (euint128, euint8) => euint128 test 2 (115, 117)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(115n);
    input.add8(117n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(232n);
  });

  it('test operator "add" overload (euint128, euint8) => euint128 test 3 (117, 117)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(117n);
    input.add8(117n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(234n);
  });

  it('test operator "add" overload (euint128, euint8) => euint128 test 4 (117, 115)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(117n);
    input.add8(115n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(232n);
  });

  it('test operator "sub" overload (euint128, euint8) => euint128 test 1 (220, 220)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(220n);
    input.add8(220n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint128, euint8) => euint128 test 2 (220, 216)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(220n);
    input.add8(216n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint128, euint8) => euint128 test 1 (65, 2)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(65n);
    input.add8(2n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(130n);
  });

  it('test operator "mul" overload (euint128, euint8) => euint128 test 2 (12, 16)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(12n);
    input.add8(16n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(192n);
  });

  it('test operator "mul" overload (euint128, euint8) => euint128 test 3 (9, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9n);
    input.add8(9n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(81n);
  });

  it('test operator "mul" overload (euint128, euint8) => euint128 test 4 (16, 12)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(16n);
    input.add8(12n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(192n);
  });

  it('test operator "and" overload (euint128, euint8) => euint128 test 1 (340282366920938463463370774384454376253, 145)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370774384454376253n);
    input.add8(145n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(17n);
  });

  it('test operator "and" overload (euint128, euint8) => euint128 test 2 (141, 145)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(141n);
    input.add8(145n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(129n);
  });

  it('test operator "and" overload (euint128, euint8) => euint128 test 3 (145, 145)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(145n);
    input.add8(145n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(145n);
  });

  it('test operator "and" overload (euint128, euint8) => euint128 test 4 (145, 141)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(145n);
    input.add8(141n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(129n);
  });

  it('test operator "or" overload (euint128, euint8) => euint128 test 1 (340282366920938463463373366873599892509, 14)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373366873599892509n);
    input.add8(14n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463373366873599892511n);
  });

  it('test operator "or" overload (euint128, euint8) => euint128 test 2 (10, 14)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(10n);
    input.add8(14n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(14n);
  });

  it('test operator "or" overload (euint128, euint8) => euint128 test 3 (14, 14)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(14n);
    input.add8(14n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(14n);
  });

  it('test operator "or" overload (euint128, euint8) => euint128 test 4 (14, 10)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(14n);
    input.add8(10n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(14n);
  });

  it('test operator "xor" overload (euint128, euint8) => euint128 test 1 (340282366920938463463372222395749258723, 126)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463372222395749258723n);
    input.add8(126n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463372222395749258653n);
  });

  it('test operator "xor" overload (euint128, euint8) => euint128 test 2 (122, 126)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(122n);
    input.add8(126n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint128, euint8) => euint128 test 3 (126, 126)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(126n);
    input.add8(126n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint128, euint8) => euint128 test 4 (126, 122)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(126n);
    input.add8(122n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint128, euint8) => ebool test 1 (340282366920938463463373541801242725295, 153)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373541801242725295n);
    input.add8(153n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint8) => ebool test 2 (149, 153)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(149n);
    input.add8(153n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint8) => ebool test 3 (153, 153)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(153n);
    input.add8(153n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint128, euint8) => ebool test 4 (153, 149)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(153n);
    input.add8(149n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint8) => ebool test 1 (340282366920938463463372969248351412699, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463372969248351412699n);
    input.add8(11n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint8) => ebool test 2 (7, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(7n);
    input.add8(11n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint8) => ebool test 3 (11, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(11n);
    input.add8(11n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint8) => ebool test 4 (11, 7)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(11n);
    input.add8(7n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint8) => ebool test 1 (340282366920938463463373438517891657659, 154)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373438517891657659n);
    input.add8(154n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint8) => ebool test 2 (150, 154)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(150n);
    input.add8(154n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint128, euint8) => ebool test 3 (154, 154)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(154n);
    input.add8(154n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint8) => ebool test 4 (154, 150)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(154n);
    input.add8(150n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint8) => ebool test 1 (340282366920938463463373843733686527357, 205)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373843733686527357n);
    input.add8(205n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint8) => ebool test 2 (201, 205)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(201n);
    input.add8(205n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint8) => ebool test 3 (205, 205)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(205n);
    input.add8(205n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint8) => ebool test 4 (205, 201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(205n);
    input.add8(201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint8) => ebool test 1 (340282366920938463463368570766807961861, 154)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368570766807961861n);
    input.add8(154n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint128, euint8) => ebool test 2 (150, 154)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(150n);
    input.add8(154n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint8) => ebool test 3 (154, 154)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(154n);
    input.add8(154n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint8) => ebool test 4 (154, 150)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(154n);
    input.add8(150n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint8) => ebool test 1 (340282366920938463463370716854791093879, 201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370716854791093879n);
    input.add8(201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint8) => ebool test 2 (197, 201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(197n);
    input.add8(201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint128, euint8) => ebool test 3 (201, 201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(201n);
    input.add8(201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint8) => ebool test 4 (201, 197)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(201n);
    input.add8(197n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });
});

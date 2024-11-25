/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Drips,
  Drips_AccountMetadataEmitted,
  Drips_AdminChanged,
  Drips_BeaconUpgraded,
  Drips_Collectable,
  Drips_Collected,
  Drips_DriverAddressUpdated,
  Drips_DriverRegistered,
  Drips_Given,
  Drips_NewAdminProposed,
  Drips_Paused,
  Drips_PauserGranted,
  Drips_PauserRevoked,
  Drips_ReceivedStreams,
  Drips_Split,
  Drips_SplitsReceiverSeen,
  Drips_SplitsSet,
  Drips_SqueezedStreams,
  Drips_StreamReceiverSeen,
  Drips_StreamsSet,
  Drips_Unpaused,
  Drips_Upgraded,
  Drips_Withdrawn,
} from "generated";

Drips.AccountMetadataEmitted.handler(async ({ event, context }) => {
  const entity: Drips_AccountMetadataEmitted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    key: event.params.key,
    value: event.params.value,
  };

  context.Drips_AccountMetadataEmitted.set(entity);
});

Drips.AdminChanged.handler(async ({ event, context }) => {
  const entity: Drips_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.Drips_AdminChanged.set(entity);
});

Drips.BeaconUpgraded.handler(async ({ event, context }) => {
  const entity: Drips_BeaconUpgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    beacon: event.params.beacon,
  };

  context.Drips_BeaconUpgraded.set(entity);
});

Drips.Collectable.handler(async ({ event, context }) => {
  const entity: Drips_Collectable = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    erc20: event.params.erc20,
    amt: event.params.amt,
  };

  context.Drips_Collectable.set(entity);
});

Drips.Collected.handler(async ({ event, context }) => {
  const entity: Drips_Collected = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    erc20: event.params.erc20,
    collected: event.params.collected,
  };

  context.Drips_Collected.set(entity);
});

Drips.DriverAddressUpdated.handler(async ({ event, context }) => {
  const entity: Drips_DriverAddressUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    driverId: event.params.driverId,
    oldDriverAddr: event.params.oldDriverAddr,
    newDriverAddr: event.params.newDriverAddr,
  };

  context.Drips_DriverAddressUpdated.set(entity);
});

Drips.DriverRegistered.handler(async ({ event, context }) => {
  const entity: Drips_DriverRegistered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    driverId: event.params.driverId,
    driverAddr: event.params.driverAddr,
  };

  context.Drips_DriverRegistered.set(entity);
});

Drips.Given.handler(async ({ event, context }) => {
  const entity: Drips_Given = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    receiver: event.params.receiver,
    erc20: event.params.erc20,
    amt: event.params.amt,
  };

  context.Drips_Given.set(entity);
});

Drips.NewAdminProposed.handler(async ({ event, context }) => {
  const entity: Drips_NewAdminProposed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    currentAdmin: event.params.currentAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.Drips_NewAdminProposed.set(entity);
});

Drips.Paused.handler(async ({ event, context }) => {
  const entity: Drips_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pauser: event.params.pauser,
  };

  context.Drips_Paused.set(entity);
});

Drips.PauserGranted.handler(async ({ event, context }) => {
  const entity: Drips_PauserGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pauser: event.params.pauser,
    admin: event.params.admin,
  };

  context.Drips_PauserGranted.set(entity);
});

Drips.PauserRevoked.handler(async ({ event, context }) => {
  const entity: Drips_PauserRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pauser: event.params.pauser,
    admin: event.params.admin,
  };

  context.Drips_PauserRevoked.set(entity);
});

Drips.ReceivedStreams.handler(async ({ event, context }) => {
  const entity: Drips_ReceivedStreams = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    erc20: event.params.erc20,
    amt: event.params.amt,
    receivableCycles: event.params.receivableCycles,
  };

  context.Drips_ReceivedStreams.set(entity);
});

Drips.Split.handler(async ({ event, context }) => {
  const entity: Drips_Split = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    receiver: event.params.receiver,
    erc20: event.params.erc20,
    amt: event.params.amt,
  };

  context.Drips_Split.set(entity);
});

Drips.SplitsReceiverSeen.handler(async ({ event, context }) => {
  const entity: Drips_SplitsReceiverSeen = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    receiversHash: event.params.receiversHash,
    accountId: event.params.accountId,
    weight: event.params.weight,
  };

  context.Drips_SplitsReceiverSeen.set(entity);
});

Drips.SplitsSet.handler(async ({ event, context }) => {
  const entity: Drips_SplitsSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    receiversHash: event.params.receiversHash,
  };

  context.Drips_SplitsSet.set(entity);
});

Drips.SqueezedStreams.handler(async ({ event, context }) => {
  const entity: Drips_SqueezedStreams = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    erc20: event.params.erc20,
    senderId: event.params.senderId,
    amt: event.params.amt,
    streamsHistoryHashes: event.params.streamsHistoryHashes,
  };

  context.Drips_SqueezedStreams.set(entity);
});

Drips.StreamReceiverSeen.handler(async ({ event, context }) => {
  const entity: Drips_StreamReceiverSeen = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    receiversHash: event.params.receiversHash,
    accountId: event.params.accountId,
    config: event.params.config,
  };

  context.Drips_StreamReceiverSeen.set(entity);
});

Drips.StreamsSet.handler(async ({ event, context }) => {
  const entity: Drips_StreamsSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    erc20: event.params.erc20,
    receiversHash: event.params.receiversHash,
    streamsHistoryHash: event.params.streamsHistoryHash,
    balance: event.params.balance,
    maxEnd: event.params.maxEnd,
  };

  context.Drips_StreamsSet.set(entity);
});

Drips.Unpaused.handler(async ({ event, context }) => {
  const entity: Drips_Unpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pauser: event.params.pauser,
  };

  context.Drips_Unpaused.set(entity);
});

Drips.Upgraded.handler(async ({ event, context }) => {
  const entity: Drips_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.Drips_Upgraded.set(entity);
});

Drips.Withdrawn.handler(async ({ event, context }) => {
  const entity: Drips_Withdrawn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    erc20: event.params.erc20,
    receiver: event.params.receiver,
    amt: event.params.amt,
  };

  context.Drips_Withdrawn.set(entity);
});

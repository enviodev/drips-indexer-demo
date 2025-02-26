import assert from "assert";
import { 
  TestHelpers,
  Drips_AccountMetadataEmitted
} from "generated";
const { MockDb, Drips } = TestHelpers;

describe("Drips contract AccountMetadataEmitted event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Drips contract AccountMetadataEmitted event
  const event = Drips.AccountMetadataEmitted.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Drips_AccountMetadataEmitted is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Drips.AccountMetadataEmitted.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualDripsAccountMetadataEmitted = mockDbUpdated.entities.Drips_AccountMetadataEmitted.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedDripsAccountMetadataEmitted: Drips_AccountMetadataEmitted = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      accountId: event.params.accountId,
      key: event.params.key,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualDripsAccountMetadataEmitted, expectedDripsAccountMetadataEmitted, "Actual DripsAccountMetadataEmitted should be the same as the expectedDripsAccountMetadataEmitted");
  });
});

export enum SampleStatus {
  CREATED = "CREATED", // when a sample is created, and doesn't have any status yet, DB only value
  COMPLETED = "COMPLETED",
  FLAGGED_TO_ADMIN = "FLAGGED_TO_ADMIN",
  PENDING = "PENDING",
  ERRORS_FOUND = "ERRORS_FOUND",
  MISSING_SAMPLE = "MISSING_SAMPLE",
  REASON_REJECTED = "REASON_REJECTED",
}

export enum SampleFlagCategory {
  MISSING_SAMPLE = "MISSING_SAMPLE",
  REASON_REJECTED = "REASON_REJECTED",
  ERROR_IN_SAMPLE = "ERROR_IN_SAMPLE",
}

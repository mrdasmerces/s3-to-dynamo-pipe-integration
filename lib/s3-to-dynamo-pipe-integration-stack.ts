import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { Bucket, EventType } from "aws-cdk-lib/aws-s3";
import { SqsDestination } from "aws-cdk-lib/aws-s3-notifications";
import { Queue } from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";

export class S3ToDynamoPipeIntegrationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const queue = new Queue(this, "S3ToDynamoPipeSourceQueue", {
      receiveMessageWaitTime: Duration.seconds(20),
    });

    const ingestionBucket = new Bucket(this, "S3ToDynamoPipeIngestionBucket");

    ingestionBucket.addEventNotification(
      EventType.OBJECT_CREATED,
      new SqsDestination(queue)
    );
  }
}

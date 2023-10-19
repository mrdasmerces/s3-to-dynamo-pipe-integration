#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { S3ToDynamoPipeIntegrationStack } from '../lib/s3-to-dynamo-pipe-integration-stack';

const app = new cdk.App();
new S3ToDynamoPipeIntegrationStack(app, 'S3ToDynamoPipeIntegrationStack');

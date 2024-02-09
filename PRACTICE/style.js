// console.log('hello world')
// console.warn('error')

// const jsonStr = '{"name":"John", "age":30}';
// const obj = JSON.parse(jsonStr);
// console.log(obj); // Output: { name: 'John', age: 30 }





// const startTime = performance.now();

// // Code or operation you want to measure

// const endTime = performance.now();
// const elapsedTime = endTime - startTime;

// console.log("Elapsed time:", elapsedTime, "milliseconds");



const AWS = quire('aws-sdk');

// Configure AWS credentials and region
AWS.config.update({region: 'us-east-1'}); // Set your desired region
// AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'default'}); // Uncomment this line if using AWS CLI credentials

// Create a new CloudWatch object
const cloudwatch = new AWS.CloudWatch();

// Example: List CloudWatch metrics
const listMetricsParams = {
  Namespace: 'AWS/EC2', // Example namespace (AWS/EC2 for EC2 instances)
};

cloudwatch.listMetrics(listMetricsParams, (err, data) => {
  if (err) {
    console.error("Error listing CloudWatch metrics:", err);
  } else {
    console.log("CloudWatch metrics:", data);
  }
});

// Example: Get CloudWatch logs
const getLogEventsParams = {
  logGroupName: '/aws/lambda/my-lambda-function', // Example log group name
  startTime: new Date().getTime() - 3600000, // Example start time (1 hour ago)
  endTime: new Date().getTime(), // Example end time (now)
};

cloudwatchlogs.getLogEvents(getLogEventsParams, (err, data) => {
  if (err) {
    console.error("Error getting CloudWatch logs:", err);
  } else {
    console.log("CloudWatch logs:", data.events);
  }
});

// Example: Set CloudWatch alarm
const putMetricAlarmParams = {
  AlarmName: 'HighCPUAlarm', // Example alarm name
  ComparisonOperator: 'GreaterThanThreshold',
  EvaluationPeriods: 1,
  MetricName: 'CPUUtilization',
  Namespace: 'AWS/EC2',
  Period: 60,
  Statistic: 'Average',
  Threshold: 90,
  ActionsEnabled: true,
  AlarmDescription: 'Alarm when CPU exceeds 90%',
  Dimensions: [
    {
      Name: 'InstanceId',
      Value: 'i-1234567890abcdef0', // Example instance ID
    },
  ],
};

cloudwatch.putMetricAlarm(putMetricAlarmParams, (err, data) => {
  if (err) {
    console.error("Error putting CloudWatch alarm:", err);
  } else {
    console.log("CloudWatch alarm set successfully:", data);
  }
});

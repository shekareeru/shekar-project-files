import boto3

# Initialize the AWS clients
cloudwatch = boto3.client('cloudwatch')
logs = boto3.client('logs')

# Define the log group name and metric filter pattern
log_group_name = '/aws/lambda/my-lambda-function'
metric_filter_pattern = '[ERROR]'

# Create a metric filter for the log group
response = logs.put_metric_filter(
    logGroupName=log_group_name,
    filterName='ErrorCount',
    filterPattern=metric_filter_pattern,
    metricTransformations=[
        {
            'metricName': 'ErrorCount',
            'metricNamespace': 'CustomMetrics',
            'metricValue': '1'
        }
    ]
)

# Create a CloudWatch alarm based on the metric
response = cloudwatch.put_metric_alarm(
    AlarmName='LambdaErrorAlarm',
    AlarmActions=[
        'arn:aws:sns:us-east-1:123456789012:my-sns-topic'
    ],
    MetricName='ErrorCount',
    Namespace='CustomMetrics',
    Statistic='Sum',
    Period=300,
    EvaluationPeriods=1,
    Threshold=1,
    ComparisonOperator='GreaterThanOrEqualToThreshold'
)

print("CloudWatch alarm created successfully.")

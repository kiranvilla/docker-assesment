const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");

const client = new S3Client({ region: "REGION" });

const params = {

};
const command = new ListBucketsCommand(params);

try {
    const data = await client.send(command);
    console.log(JSON.stringify(data));
    // process data.
} catch (error) {
    // error handling.
}
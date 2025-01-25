import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

/**
 * Upload a file to S3.
 * @param folderName - The folder name where the file should be uploaded.
 * @param fileName - The name of the file to be uploaded.
 * @param fileContent - The content of the file (can be a Buffer, Readable stream, or string).
 */
async function uploadToS3(folderName, fileName, fileContent) {
  const objectKey = `${folderName}/${fileName}`;

  const content = (await fileContent.arrayBuffer());

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: objectKey,
    Body: content,
    ContentType: "application/octet-stream",
  });

  try {
    await s3Client.send(command);
    console.log(`File uploaded successfully: ${objectKey}`);
    return `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${objectKey}`;
  } catch (err) {
    console.error("Error uploading to S3:", err);
    throw err;
  }
}

export default uploadToS3;

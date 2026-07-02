import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { env } from '$env/dynamic/private';

const S3 = new S3Client({
	region: 'auto',
	endpoint: env.R2_ENDPOINT,
	credentials: {
		accessKeyId: env.R2_KEY_ID,
		secretAccessKey: env.R2_SECRET_KEY
	}
});

export async function GET({ params }) {
	const key = decodeURIComponent(params.key);

	const url = await getSignedUrl(
		S3,
		new GetObjectCommand({
			Bucket: 'nssnrdoc',
			Key: key,
			ResponseContentDisposition: `attachment; filename="${key.split('/').pop()}"`
		}),
		{ expiresIn: 60 } // URL valable 60 secondes
	);

	return new Response(JSON.stringify({ url }), {
		headers: { 'Content-Type': 'application/json' }
	});
}

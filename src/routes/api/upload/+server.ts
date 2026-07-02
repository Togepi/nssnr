import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { env } from '$env/dynamic/private';
import { db } from '$lib/server/db';
import { documents } from '$lib/server/db/schema';
import { nanoid } from 'nanoid';

const s3 = new S3Client({
	region: 'auto',
	endpoint: env.R2_ENDPOINT,
	credentials: {
		accessKeyId: env.R2_KEY_ID,
		secretAccessKey: env.R2_SECRET_KEY
	}
});

export async function POST({ request, locals }) {
	const form = await request.formData();
	const file = form.get('file') as File;

	const key = `${locals.user.id}/${crypto.randomUUID()}-${file.name}`;

	await s3.send(
		new PutObjectCommand({
			Bucket: 'nssnrdoc',
			Key: key,
			Body: new Uint8Array(await file.arrayBuffer()),
			ContentType: file.type
		})
	);
	const url = `https://nssnr/${key}`;

	await db.insert(documents).values({
		id: nanoid(),
		userId: locals.user.id,
		filename: file.name,
		mimeType: file.type,
		size: file.size,
		key: key
	});

	return new Response(JSON.stringify({ url }), { status: 200 });
}


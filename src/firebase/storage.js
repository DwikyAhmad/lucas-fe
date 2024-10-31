import { storage } from './config';
import { nanoid } from 'nanoid';

export const uploadFile = async (file, folder) => {
  try {
    const filename = nanoid();
    const fileExtension = file.name.split('.').pop();
    const filePath = `${folder}${filename}.${fileExtension}`;
    const fileRef = storage.file(filePath);
    
    const buffer = Buffer.from(await file.arrayBuffer());
    await fileRef.save(buffer, {
      metadata: {
        contentType: file.mimetype,
      },
    });

    const downloadURL = await fileRef.getSignedUrl({
      action: 'read',
      expires: '03-01-2500', // Set an appropriate expiration date
    });

    return downloadURL[0];
  } catch (error) {
    throw error;
  }
};
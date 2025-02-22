import { storage } from './config';
import { nanoid } from 'nanoid';

export const uploadFile = async (file, folder) => {
  try {
    const filename = nanoid();
    const fileExtension = file.name.split('.').pop();
    const filePath = `${folder}/${filename}.${fileExtension}`;
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

export const extractFilePathFromUrl = (url) => {
  const match = url.match(/\/([^\/?]+\/[^\/?]+)\?/);
  if (match && match[1]) {
    return decodeURIComponent(match[1]);
  }
  throw new Error('Invalid download URL');
};

export const deleteFile = async (downloadURL) => {
  try {
    const filePath = extractFilePathFromUrl(downloadURL);
    const fileRef = storage.file(filePath);
    await fileRef.delete();
    console.log(`File ${filePath} deleted successfully.`);
  } catch (error) {
    console.error(`Failed to delete file:`, error);
    throw error;
  }
};
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env';
import RNBlobUtil from 'react-native-blob-util';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const addUserDB = async (userId, userPw) => {
  userId = userId.trim();
  userPw = userPw.trim();
  const { data: existingUser, error: selectError } = await supabase
    .from('klpusers')
    .select('*')
    .eq('userid', userId)
    .eq('userpw', userPw)
    .limit(1);

  if (selectError && selectError.code !== 'PGRST116') {
    console.error('Error checking existing data: ', selectError);
    return 'exist';
  }

  if (existingUser.length > 0) {
    return 'exist';
  }
  const { data, error } = await supabase
    .from('klpusers')
    .insert([{ userid: userId, userpw: userPw }]);

  if (error) {
    console.error('Error inserting data: ', error);
  } else {
    console.log('Data inserted succesful', data);
  }
};

export const loginUserDB = async (userId, userPw) => {
  userId = userId.trim();
  userPw = userPw.trim();
  const { data: existingUser, error: selectError } = await supabase
    .from('klpusers')
    .select('*')
    .eq('userid', userId)
    .eq('userpw', userPw)
    .limit(1);

  if (selectError && selectError.code !== 'PGRST116') {
    console.error('Error checking existing data: ', selectError);
  }

  if (existingUser.length > 0) {
    return 'exist';
  } else {
    return 'fail';
  }
};

export const addCommunityImg = async (fileUri, fileName, fileType) => {
  try {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    const ext = fileName?.split('.').pop() || 'jpg';
    const finalFileName = `${timestamp}-${randomNum}.${ext}`;

    const base64Data = await RNBlobUtil.fs.readFile(fileUri, 'base64');

    const uint8ArrayData = base64ToUint8Array(base64Data);

    const { data, error } = await supabase.storage
      .from('klp-images')
      .upload(finalFileName, uint8ArrayData, {
        contentType: fileType || `image/${ext}`,
        upsert: false,
      });

    if (error) {
      console.error('Upload error:', error);
      return null;
    }

    const { data: publicData, error: publicUrlError } = supabase.storage
      .from('klp-images')
      .getPublicUrl(finalFileName);

    if (publicUrlError) {
      console.error('Public URL error:', publicUrlError);
      return null;
    }

    return publicData.publicURL;
  } catch (err) {
    console.error(err);
    return null;
  }
};

function base64ToUint8Array(base64) {
  const binaryString = global.atob
    ? atob(base64)
    : Buffer.from(base64, 'base64').toString('binary');
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export const addCommunity = async (
  title,
  main,
  userId,
  imgId = '',
  comment = 0,
) => {
  const { data, error } = await supabase.from('klpcommunity').insert([
    {
      title: title,
      main: main,
      userid: userId,
      imageid: imgId,
      comment: comment,
    },
  ]);

  if (error) {
    console.error('Error inserting data: ', error);
  } else {
    console.log('Data inserted succesful', data);
  }
};

export const getCommunity = async () => {
  const { data, error } = await supabase
    .from('klpcommunity')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    console.error('Error fetching data: ', error);
    return [];
  }

  return data;
};

export const addComment = async (communityId, userId, comment) => {
  const { data, error } = await supabase.from('klpcomment').insert([
    {
      communityid: communityId,
      userid: userId,
      comment: comment,
    },
  ]);
  if (error) {
    console.error('Error inserting data: ', error);
  } else {
    console.log('Data inserted succesful', data);
  }
};

export const getComment = async communityId => {
  const { data, error } = await supabase
    .from('klpcomment')
    .select('*')
    .eq('communityid', communityId)
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching comment: ', error);
    return [];
  }

  return data;
};

export const updateComment = async communityId => {
  const { data: currentData, error: fetchError } = await supabase
    .from('klpcommunity')
    .select('comment')
    .eq('id', communityId)
    .single();

  if (fetchError) {
    console.error('Error fetching comment count:', fetchError);
    return;
  }

  const { data, error } = await supabase
    .from('klpcommunity')
    .update({ comment: currentData.comment + 1 })
    .eq('id', communityId);

  if (error) {
    console.error('Error updating comment count:', error);
  } else {
    console.log('Comment count updated:', data);
  }
};

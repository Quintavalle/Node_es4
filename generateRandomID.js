import crypto from 'crypto';

const generateRandomID = () => crypto.randomBytes(16).toString('hex');

export default generateRandomID;


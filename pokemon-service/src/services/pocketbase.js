import PocketBase from 'pocketbase';
import dotenv from 'dotenv';

dotenv.config();

const authenticate = async () => {
    try {
        await pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL, process.env.POCKETBASE_PASSWORD);
        console.log('Authenticated with PocketBase');
    } catch (error) {
        console.error('Failed to authenticate with PocketBase:', error);
    }
};

const pb = new PocketBase(process.env.POCKETBASE_URL);
authenticate();

export default pb;
